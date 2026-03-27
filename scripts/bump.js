import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newVersion = process.argv[2];

if (!newVersion) {
    console.error('❌ Error: Please provide a version number.');
    console.log('💡 Usage: node scripts/bump.js 1.0.1');
    process.exit(1);
}

if (!/^\d+\.\d+\.\d+$/.test(newVersion)) {
    console.error('❌ Error: Version must be in semantic format (e.g., 1.0.0)');
    process.exit(1);
}

const rootDir = path.resolve(__dirname, '..');
const pkgPath = path.join(rootDir, 'packages', 'npm-cli', 'package.json');
const tomlPath = path.join(rootDir, 'packages', 'uv-cli', 'pyproject.toml');

try {
    // 1. Check for uncommitted work first to prevent messy releases
    const gitStatus = execSync('git status --porcelain').toString();
    if (gitStatus.length > 0) {
        console.error('❌ Error: You have uncommitted changes. Please commit or stash them before bumping the version.');
        process.exit(1);
    }

    // 2. Update the NPM package.json
    const pkgData = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    pkgData.version = newVersion;
    fs.writeFileSync(pkgPath, JSON.stringify(pkgData, null, 2) + '\n');
    console.log(`✅ Updated npm-cli/package.json to v${newVersion}`);

    // 3. Update the Python pyproject.toml
    let tomlData = fs.readFileSync(tomlPath, 'utf8');
    tomlData = tomlData.replace(/(version\s*=\s*")([^"]+)(")/, `$1${newVersion}$3`);
    fs.writeFileSync(tomlPath, tomlData);
    console.log(`✅ Updated uv-cli/pyproject.toml to v${newVersion}`);

    console.log('\n🚀 Committing and pushing to GitHub...');

    // 4. Execute the Git release flow
    execSync(`git add ${pkgPath} ${tomlPath}`, { stdio: 'inherit' });
    execSync(`git commit -m "chore: release v${newVersion}"`, { stdio: 'inherit' });
    execSync(`git tag v${newVersion}`, { stdio: 'inherit' });

    // Push the commit, then push the tag
    execSync('git push origin main', { stdio: 'inherit' });
    execSync('git push origin --tags', { stdio: 'inherit' });

    console.log(`\n🎉 Successfully pushed v${newVersion} to GitHub!`);
    console.log('The GitHub Action will now pick up the tag and publish to NPM and PyPI.');

} catch (error) {
    console.error('\n❌ Release failed:', error.message);
    process.exit(1);
}