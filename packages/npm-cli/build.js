import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const sourcePromptsDir = path.resolve(__dirname, '../../core-prompts');
const destTemplatesDir = path.resolve(__dirname, 'templates');

async function bundle() {
    console.log(chalk.dim(' Bundling core-prompts for NPM publishing...'));

    // Clean the old templates folder if it exists
    await fs.remove(destTemplatesDir);

    // Copy everything from core-prompts into the local templates folder
    await fs.copy(sourcePromptsDir, destTemplatesDir);

    console.log(chalk.green('✓ Templates bundled successfully into ./templates'));
}

bundle();