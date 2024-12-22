#!/usr/bin/env node

import * as path from 'path';
import { bold, green } from 'colorette';
import { program } from 'commander';
import { DEFAULT_CONFIG } from './constants';
import { TreeGenerator } from './tree-generator';
import { Config } from './types';

program
    .version('1.0.0')
    .description('Enhanced CLI tool to display directory tree structure')
    .argument('[directory]', 'Starting directory', '.')
    .option('-d, --max-depth <number>', 'Maximum depth to traverse', 'Infinity')
    .option('-a, --all', 'Show hidden files', false)
    .option('-e, --exclude <items>', 'Comma-separated list of directories to exclude', '')
    .option('-s, --show-size', 'Show file sizes', false)
    .option('-m, --modified', 'Show last modified date', false)
    .option('-f, --pattern <pattern>', 'Filter items by regex pattern')
    .option('--ext <extensions>', 'Filter by file extensions (comma-separated)', '')
    .option('--sort <type>', 'Sort items by: name, size, or date', 'name')
    .option('-r, --reverse', 'Reverse sort order', false)
    .option('--dirs-only', 'Show only directories', false)
    .option('--files-only', 'Show only files', false)
    .option('-o, --output <file>', 'Save output to file');

program.parse();

const options = program.opts();

const config: Config = {
    ...DEFAULT_CONFIG,
    maxDepth: options.maxDepth === 'Infinity' ? Infinity : parseInt(options.maxDepth),
    exclude: options.exclude ? options.exclude.split(',') : DEFAULT_CONFIG.exclude,
    showHidden: options.all,
    showSize: options.showSize,
    showLastModified: options.modified,
    pattern: options.pattern || null,
    extensions: options.ext ? options.ext.split(',').map((ext: string) => ext.trim()) : null,
    sort: options.sort as 'name' | 'size' | 'date',
    reverse: options.reverse,
    onlyDirs: options.dirsOnly,
    onlyFiles: options.filesOnly,
};

const directory = program.args[0] || '.';
const startDir = path.resolve(directory);
const treeGenerator = new TreeGenerator(config);

const header = `\n${bold(startDir)}\n`;
const tree = treeGenerator.generateTree(startDir);
const output = header + tree;

if (options.output) {
    const fs = require('fs');
    // Strip ANSI codes when writing to file
    const cleanOutput = output.replace(/\x1b\[[0-9;]*m/g, '');
    fs.writeFileSync(options.output, cleanOutput);
    console.log(green(`Output saved to: ${options.output}`));
} else {
    console.log(output);
}
