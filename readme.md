<div align="center">
  <h2>File Tree CLI</h2>
    <!-- <img src="./public/logo.svg" alt="MoviesPrix" width="250" /> -->
  <p>A modern CLI tool for visualizing directory structures with advanced filtering and display options.</p>
</div>

## Features

- 🎨 Colorized output (directories in blue, files in cyan)
- 📏 Configurable directory traversal depth
- 🔍 Multiple filtering options:
  - File extensions
  - Regular expression patterns
  - Hidden files
  - Directories/files only
- 📊 File size display
- 📅 Last modified dates
- 🔄 Multiple sorting options
- 💾 Save output to file
- ⚡ Performance optimized

## Installation

```bash
npm install -g file-tree-cli
```

## Usage

```bash
tree [options] [directory]
```

If no directory is specified, the current directory will be used.

### Basic Examples

```bash
# Display tree of current directory
tree

# Display tree of specific directory
tree /path/to/directory

# Show tree with file sizes
tree -s

# Show only JavaScript and TypeScript files
tree --ext js,ts

# Show files modified dates and sizes
tree -s -m
```

### Advanced Examples

```bash
# Show only directories, sorted by name
tree --dirs-only --sort name

# Show only JavaScript files and their sizes
tree --ext js -s

# Show tree with custom depth and excluded directories
tree -d 3 -e "dist,coverage"

# Show all files (including hidden) sorted by size
tree -a --sort size

# Export tree to a file
tree -o output.txt
```

## Options

| Option                     | Description                                    |
| -------------------------- | ---------------------------------------------- |
| `-d, --max-depth <number>` | Maximum depth to traverse                      |
| `-a, --all`                | Show hidden files                              |
| `-e, --exclude <items>`    | Comma-separated list of directories to exclude |
| `-s, --show-size`          | Show file sizes                                |
| `-m, --modified`           | Show last modified date                        |
| `-f, --pattern <pattern>`  | Filter items by regex pattern                  |
| `--ext <extensions>`       | Filter by file extensions (comma-separated)    |
| `--sort <type>`            | Sort items by: name, size, or date             |
| `-r, --reverse`            | Reverse sort order                             |
| `--dirs-only`              | Show only directories                          |
| `--files-only`             | Show only files                                |
| `-o, --output <file>`      | Save output to file                            |

## Output Format

The tool provides a structured view of your directory:

```
Directory
├── src
│   ├── index.ts [2.5KB] 2024-01-15
│   └── utils.ts [1.2KB] 2024-01-14
└── package.json [0.8KB] 2024-01-10
```

## Development

1. Clone the repository:
```bash
git clone https://github.com/devxprite/file-tree-cli.git
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

4. Link for local development:
```bash
npm link
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT