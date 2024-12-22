import * as fs from 'fs';
import * as path from 'path';
import { blue, cyan, yellow, green, red, bold } from 'colorette';
import { Config } from './types';
import { formatSize, getFileStats } from './utils';

export class TreeGenerator {
    constructor(private config: Config) {}

    generateTree(dir: string, prefix: string = '', depth: number = 0): string {
        if (depth >= this.config.maxDepth) return '';

        let output = '';
        let items: string[];

        try {
            items = fs.readdirSync(dir);
        } catch (err) {
            console.error(red(`Error reading directory ${dir}: ${(err as Error).message}`));
            return '';
        }

        items = this._filterAndSortItems(dir, items);

        items.forEach((item, index) => {
            const fullPath = path.join(dir, item);
            const stats = getFileStats(fullPath);
            if (!stats) return;

            const isLast = index === items.length - 1;
            const isDirectory = stats.isDirectory();

            if ((this.config.onlyDirs && !isDirectory) || (this.config.onlyFiles && isDirectory)) {
                return;
            }

            const itemDetails = this._formatItemDetails(item, stats, isDirectory);
            const connector = isLast ? '└── ' : '├── ';
            const newPrefix = prefix + (isLast ? '    ' : '│   ');

            output += `${prefix}${connector}${itemDetails}\n`;

            if (isDirectory) {
                output += this.generateTree(fullPath, newPrefix, depth + 1);
            }
        });

        return output;
    }

    private _filterAndSortItems(dir: string, items: string[]): string[] {
        items = items.filter(item => {
            const fullPath = path.join(dir, item);
            const isHidden = item.startsWith('.');
            const matchesPattern = this.config.pattern ? new RegExp(this.config.pattern).test(item) : true;

            // Check file extension if specified
            const hasMatchingExtension =
                this.config.extensions ?
                    this.config.extensions.some(ext => item.endsWith(`.${ext}`)) || fs.statSync(fullPath).isDirectory()
                :   true;

            return (
                !this.config.exclude.includes(item) &&
                (this.config.showHidden || !isHidden) &&
                fs.existsSync(fullPath) &&
                matchesPattern &&
                hasMatchingExtension
            );
        });

        return items;
    }

    private _formatItemDetails(item: string, stats: fs.Stats, isDirectory: boolean): string {
        const details: string[] = [];

        // Base name with color
        const itemName = isDirectory ? bold(blue(item)) : cyan(item);
        details.push(itemName);

        // Only show size for files, not directories
        if (this.config.showSize && !isDirectory) {
            const size = formatSize(stats.size);
            details.push(yellow(`[${size}]`));
        }

        if (this.config.showLastModified) {
            const date = stats.mtime.toLocaleDateString();
            details.push(green(date));
        }

        return details.join(' ');
    }
}
