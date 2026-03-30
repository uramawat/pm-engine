import os
import shutil
from pathlib import Path
from rich.console import Console

console = Console()

def init_project():
    target_dir = Path.cwd()
    pm_engine_dir = target_dir / ".pm-engine"
    gemini_skills_dir = target_dir / ".gemini" / "skills"
    
    # In the built package, templates are inside the pm_engine module
    source_prompts_dir = Path(__file__).parent.parent / "templates"

    console.print("[dim]📁 Creating directory infrastructure...[/dim]")
    (pm_engine_dir / "product").mkdir(parents=True, exist_ok=True)
    (pm_engine_dir / "research").mkdir(parents=True, exist_ok=True)
    (pm_engine_dir / "state" / "phases").mkdir(parents=True, exist_ok=True)
    gemini_skills_dir.mkdir(parents=True, exist_ok=True)

    def copy_template(src_rel, dest_rel):
        src_file = source_prompts_dir / src_rel
        dest_file = target_dir / dest_rel
        
        if src_file.exists():
            shutil.copy(src_file, dest_file)
        else:
            console.print(f"[bold yellow]⚠️ Missing template:[/bold yellow] {src_file}")

    console.print("[dim]📄 Injecting PM and State templates...[/dim]")
    copy_template("product/PRD.md.tmpl", ".pm-engine/product/PRD.md")
    copy_template("research/USER_INSIGHTS.md.tmpl", ".pm-engine/research/USER_INSIGHTS.md")
    copy_template("research/PERSONAS.md.tmpl", ".pm-engine/research/PERSONAS.md")
    copy_template("state/STATE.md.tmpl", ".pm-engine/state/STATE.md")

    console.print("[dim]🔌 Wiring up Gemini CLI personas...[/dim]")
    skills = ["discover", "plan", "execute", "review", "status", "research", "test-flight"]
    for skill in skills:
        copy_template(f"skills/{skill}.md.tmpl", f".gemini/skills/{skill}.md")

    console.print("[bold green]✓ Scaffolding complete.[/bold green]")