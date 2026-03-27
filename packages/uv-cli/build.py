import shutil
from pathlib import Path

def bundle():
    print("📦 Bundling core-prompts for Python packaging...")
    root_dir = Path(__file__).parent.parent.parent
    source_dir = root_dir / "core-prompts"
    dest_dir = Path(__file__).parent / "src" / "pm_engine" / "templates"

    if dest_dir.exists():
        shutil.rmtree(dest_dir)
    
    shutil.copytree(source_dir, dest_dir)
    print("✓ Templates bundled successfully into src/pm_engine/templates")
    
    # Copy README.md for packaging
    readme_src = root_dir / "README.md"
    readme_dest = Path(__file__).parent / "README.md"
    if readme_src.exists():
        shutil.copy(readme_src, readme_dest)
        print("✓ README.md copied for packaging")

if __name__ == "__main__":
    bundle()