import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';

// Workaround for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function initProject() {
    const targetDir = process.cwd();
    const pmEngineDir = path.join(targetDir, '.pm-engine');
    const geminiSkillsDir = path.join(targetDir, '.gemini', 'skills');

    const sourcePromptsDir = path.resolve(__dirname, '../../templates');
    console.log(chalk.dim('📁 Creating directory infrastructure...'));

    // 1. Create the directories safely
    await fs.ensureDir(path.join(pmEngineDir, 'product'));
    await fs.ensureDir(path.join(pmEngineDir, 'state', 'phases'));
    await fs.ensureDir(geminiSkillsDir);

    // 2. Helper function to copy files and strip the .tmpl extension
    const copyTemplate = async (srcRelPath, destRelPath) => {
        const srcFile = path.join(sourcePromptsDir, srcRelPath);
        const destFile = path.join(targetDir, destRelPath);

        if (await fs.pathExists(srcFile)) {
            const content = await fs.readFile(srcFile, 'utf-8');
            await fs.writeFile(destFile, content);
        } else {
            console.log(chalk.yellow(`⚠️ Warning: Template missing at ${srcFile}`));
        }
    };

    console.log(chalk.dim('📄 Injecting PM and State templates...'));

    // 3. Inject the Passive Memory (PRD and STATE)
    await copyTemplate('product/PRD.md.tmpl', '.pm-engine/product/PRD.md');
    await copyTemplate('state/STATE.md.tmpl', '.pm-engine/state/STATE.md');

    console.log(chalk.dim('🔌 Wiring up Gemini CLI personas...'));

    // 4. Inject the Active Personas directly into Gemini's skill folder
    const skills = ['discover', 'plan', 'execute', 'review', 'status'];
    for (const skill of skills) {
        await copyTemplate(`skills/${skill}.md.tmpl`, `.gemini/skills/${skill}.md`);
    }

    console.log(chalk.green('✓ Scaffolding complete.'));
}