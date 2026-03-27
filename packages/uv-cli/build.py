import shutil
from pathlib import Path

def bundle():
    print("📦 Bundling core-prompts for Python packaging...")
    source_dir = Path(__file__).parent.parent.parent / "core-prompts"
    dest_dir = Path(__file__).parent / "src" / "pm_engine" / "templates"

    if dest_dir.exists():
        shutil.rmtree(dest_dir)
    
    shutil.copytree(source_dir, dest_dir)
    print("✓ Templates bundled successfully into src/pm_engine/templates")

if __name__ == "__main__":
    bundle()