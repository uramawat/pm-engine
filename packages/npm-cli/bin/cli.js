#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { initProject } from '../src/commands/init.js';

const program = new Command();

program
    .name('pm-engine')
    .description('A spec-driven, state-tracked AI coding framework for Gemini CLI')
    .version('1.0.0');

program
    .command('init')
    .description('Scaffold the .pm-engine directory and inject Gemini CLI skills')
    .action(async () => {
        console.log(chalk.blueBright('\n Initializing PM Engine...\n'));
        try {
            await initProject();
            console.log(chalk.greenBright('\n PM Engine initialized successfully!'));
            console.log(chalk.gray('Run ') + chalk.cyan('/discover') + chalk.gray(' in Gemini CLI to start your first PM sync.\n'));
        } catch (error) {
            console.error(chalk.red('\n Initialization failed:'), error.message);
            process.exit(1);
        }
    });

program.parse(process.argv);