#!/usr/bin/env node
// :arch: Pre-commit harness enforcer for dev domain
// :why: Prevents tasks flipped to "pass" without verify_cmd run + progress.md update
// :deps: reads dev/tasks.json from git index | called by .git/hooks/pre-commit
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
function getStagedContent(filePath) {
  try {
    return execSync(`git show :${filePath}`, { cwd: root, encoding: 'utf8' });
  } catch { return null; }
}
function getPreviousContent(filePath) {
  try {
    return execSync(`git show HEAD:${filePath}`, { cwd: root, encoding: 'utf8' });
  } catch { return null; }
}
function getStagedFiles() {
  try {
    return execSync('git diff --cached --name-only', { cwd: root, encoding: 'utf8' }).trim().split('\n').filter(Boolean);
  } catch { return []; }
}
// Main check
const stagedFiles = getStagedFiles();
const tasksPath = 'dev/tasks.json';
const progressPath = 'dev/progress.md';
const tasksStaged = stagedFiles.includes(tasksPath);
const progressStaged = stagedFiles.includes(progressPath);
// If tasks.json isn't staged, nothing to enforce
if (!tasksStaged) {
  process.exit(0);
}
// Get previous and current tasks.json
const prevRaw = getPreviousContent(tasksPath);
const currRaw = getStagedContent(tasksPath);
if (!currRaw) {
  console.error('ERROR: dev/tasks.json is staged but unreadable');
  process.exit(1);
}
let prevTasks = [];
let currTasks = [];
try {
  currTasks = JSON.parse(currRaw).tasks || [];
} catch (e) {
  console.error('ERROR: dev/tasks.json has invalid JSON');
  process.exit(1);
}
if (prevRaw) {
  try {
    prevTasks = JSON.parse(prevRaw).tasks || [];
  } catch { prevTasks = []; }
}
// Find tasks that flipped from "fail" to "pass"
const prevStatusMap = {};
prevTasks.forEach(t => { prevStatusMap[t.id] = t.status; });
const flippedTasks = currTasks.filter(t =>
  t.status === 'pass' && (prevStatusMap[t.id] === 'fail' || prevStatusMap[t.id] === undefined)
);
if (flippedTasks.length === 0) {
  process.exit(0);
}
// Check 1: Every flipped task must have a verify_cmd
const missingVerify = flippedTasks.filter(t => !t.verify_cmd || t.verify_cmd.trim() === '');
if (missingVerify.length > 0) {
  console.error('REJECTED: Tasks flipped to "pass" without verify_cmd:');
  missingVerify.forEach(t => console.error(`  - ${t.id}`));
  process.exit(1);
}
// Check 2: progress.md must also be staged
if (!progressStaged) {
  console.error('REJECTED: dev/tasks.json has tasks flipped to "pass" but dev/progress.md is not staged.');
  console.error('Flipped tasks:', flippedTasks.map(t => t.id).join(', '));
  console.error('You must update dev/progress.md with a log entry for each completed task.');
  process.exit(1);
}
// Check 3: progress.md must mention each flipped task ID
const progressContent = getStagedContent(progressPath) || '';
const missingEntries = flippedTasks.filter(t => !progressContent.includes(t.id));
if (missingEntries.length > 0) {
  console.error('REJECTED: dev/progress.md is staged but missing log entries for:');
  missingEntries.forEach(t => console.error(`  - ${t.id}`));
  console.error('Add a progress log row for each completed task before committing.');
  process.exit(1);
}
console.log(`Harness check passed: ${flippedTasks.length} task(s) verified (${flippedTasks.map(t => t.id).join(', ')})`);
process.exit(0);
