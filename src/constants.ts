import { Config } from './types';

export const DEFAULT_CONFIG: Config = {
    maxDepth: Infinity,
    exclude: ['.git', 'node_modules'],
    showHidden: false,
    showSize: false,
    showLastModified: false,
    pattern: null,
    extensions: null,
    sort: 'name',
    reverse: false,
    onlyDirs: false,
    onlyFiles: false,
};
