<div align="center">
  <h2>File Tree CLI</h2>
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

## Usage

You can run the CLI tool directly using npx without installation:

```bash
npx file-tree-cli 
```

If you prefer to install it globally (optional):

```bash
npm install -g file-tree-cli
file-tree [options] [directory]
```

If no directory is specified, the current directory will be used.

### Basic Examples

```bash
# Display tree of current directory
npx file-tree-cli

# Display tree of specific directory
npx file-tree-cli /path/to/directory

# Show tree with file sizes
npx file-tree-cli -s

# Show only JavaScript and TypeScript files
npx file-tree-cli --ext js,ts

# Show files modified dates and sizes
npx file-tree-cli -s -m
```

### Advanced Examples

```bash
# Show only directories, sorted by name
npx file-tree-cli --dirs-only --sort name

# Show only JavaScript files and their sizes
npx file-tree-cli --ext js -s

# Show tree with custom depth and excluded directories
npx file-tree-cli -d 3 -e "dist,coverage"

# Show all files (including hidden) sorted by size
npx file-tree-cli -a --sort size

# Export tree to a file
npx file-tree-cli -o output.txt
```

## Options

| Option                     | Description                                    | Default |
| -------------------------- | ---------------------------------------------- | ------- |
| `-d, --max-depth <number>` | Maximum depth to traverse                      | ∞       |
| `-a, --all`                | Show hidden files                              | false   |
| `-e, --exclude <items>`    | Comma-separated list of directories to exclude | []      |
| `-s, --show-size`          | Show file sizes                                | false   |
| `-m, --modified`           | Show last modified date                        | false   |
| `-f, --pattern <pattern>`  | Filter items by regex pattern                  | null    |
| `--ext <extensions>`       | Filter by file extensions (comma-separated)    | []      |
| `--sort <type>`            | Sort items by: name, size, or date             | name    |
| `-r, --reverse`            | Reverse sort order                             | false   |
| `--dirs-only`              | Show only directories                          | false   |
| `--files-only`             | Show only files                                | false   |
| `-o, --output <file>`      | Save output to file                            | null    |

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
cd file-tree-cli
npm install
```

3. Build the project:
```bash
npm run build
```

4. Test locally:
```bash
# Run directly from the project directory
npm start

# Or use npm link for global testing
npm link
tree [options] [directory]
```

## Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.