import typer
from rich.console import Console
from .commands.init import init_project

app = typer.Typer(help="A spec-driven AI coding framework for Gemini CLI")
console = Console()

@app.command()
def init():
    """Scaffold the .pm-engine directory and inject Gemini CLI skills"""
    console.print("\n[bold blue]🚀 Initializing PM Engine...[/bold blue]\n")
    try:
        init_project()
        console.print("\n[bold green]✨ PM Engine initialized successfully![/bold green]")
        console.print("[dim]Run[/dim] [cyan]/discover[/cyan] [dim]in Gemini CLI to start your first PM sync.[/dim]\n")
    except Exception as e:
        console.print(f"\n[bold red]❌ Initialization failed:[/bold red] {str(e)}")
        raise typer.Exit(code=1)

if __name__ == "__main__":
    app()