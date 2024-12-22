export interface Config {
    maxDepth: number;
    exclude: string[];
    showHidden: boolean;
    showSize: boolean;
    showLastModified: boolean;
    pattern: string | null;
    extensions: string[] | null;
    sort: 'name' | 'size' | 'date';
    reverse: boolean;
    onlyDirs: boolean;
    onlyFiles: boolean;
}
