# PM Engine 🧠⚡️

**A spec-driven, state-tracked AI coding framework for Gemini CLI.**

While the ecosystem is currently flooded with rich toolchains for Claude Code and OpenAI Codex, the Gemini CLI needed a native, highly structured workflow to handle complex apps. 

`pm-engine` was built to fill that gap. It is an architectural marriage of two brilliant open-source philosophies:
1. **Persona-driven friction** (inspired by Garry Tan's [gstack](https://github.com/garrytan/gstack/tree/main)): AI agents shouldn't just act as blind, compliant coders. They must emulate senior technical roles (Lead PM, Staff Engineer) that actively push back, ask hard questions, and demand clear constraints before writing a single line of code.
2. **File-based memory** (inspired by [get-shit-done](https://github.com/gsd-build/get-shit-done)): To prevent the dreaded LLM context-window degradation on long projects, architectural context and phase logic must be explicitly tracked in rigid Markdown files (`PRD.md` and `STATE.md`), serving as the single source of truth.

**The Result:** A to-the-point and highly resilient virtual product team for Gemini CLI. Whether you're scaffolding a fast Astro site or building a complex production app, this framework prevents context rot, dramatically narrows the scope of AI hallucination, and locks in architectural discipline.

---

## 🚀 Quick Start

You can run PM Engine instantly without installing anything globally. Navigate to your project folder and run:

**Using Node (`npm`):**
```bash
npx pm-engine init
```
**Using Python (uv):**
```bash
uvx pm-engine init
```
_This will instantly scaffold a `.pm-engine/` directory and inject custom PM personas into your local `.gemini/skills/` folder_.

## 🛠️ The Workflow (Meet the Team)
Once initialized, start the Gemini CLI in your project directory.

### 1. `/discover` (The Elite Lead PM)
Start by pitching your idea to the PM agent.

```
/discover I want to build a real-time collaborative to-do list app.
```
_The Lead PM will NOT write code. It will brutally interrogate your assumptions, demanding clear user pain points, KPIs, non-functional requirements (NFRs), and out-of-scope boundaries. Once agreed, it generates a comprehensive `PRD.md`._

### 2. `/plan` (The Staff Engineer)
Turn the PRD into an architecture blueprint.

```
/plan
```
_The Staff Engineer reads the PRD and defines your database schemas, internal APIs, and architectural decisions (ADRs). It generates a rigid, phase-by-phase execution checklist in `STATE.md`._

### 3. `/execute phase-x` (The Execution Agent)
Time to build.

```
/execute phase-1
```
_The Execution bot reads the exact, granular tasks for Phase 1 and writes the code sequentially. It uses "Read Before Write" protocols and aggressively updates checkboxes in `STATE.md` as it works. Because its context is constrained to the active phase, it refuses to hallucinate future features or drift out-of-scope._

### 4. `/review` (The Principal QA Engineer)
Audit the work.

```
/review
```
_The Principal Engineer audits the code diffs against the `PRD.md` and `STATE.md`. Acting as a Devil's Advocate, it actively hunts for edge cases, race conditions, and architectural regressions. If your code passes, the Phase is marked as "Complete" in the state matrix._

### 5. `/status` (The Scrum Master Sync)
Close your laptop for the weekend? When you come back, just type:

```
/status
```
_The Sync Agent reads the state files, remembers exactly where the team left off, briefs you on open blockers, and tells you the exact command to run next to resume velocity._

## 🧠 Architecture: The Dual-Brain System
PM Engine splits your AI's brain into two distinct, machine-readable halves:

- **The Product Engine (`.pm-engine/product/PRD.md`)**: The persistent memory of what we are building, who we are building it for, and what we are explicitly NOT building. It acts as the ultimate boundary against scope creep.
- **The Execution Engine (`.pm-engine/state/STATE.md`)**: The rigid state tracker and architecture blueprint. It preserves the context window over long coding sessions by tracking checklists, active files, and blocked dependencies.

## 📦 Manual Installation & Updates
If you prefer to install the CLI globally instead of using npx/uvx:

### NPM:

```bash
npm install -g pm-engine
# To update:
npm update -g pm-engine
```
### UV:

```bash
uv tool install pm-engine
# To update:
uv tool upgrade pm-engine
```

## 🤝 Contributing
PM Engine is built as a monorepo to support both Node and Python ecosystems efficiently.

All AI system prompts live in the root `core-prompts/` directory. Both the JS (npm) and Python (uv) CLI wrappers pull from this single source of truth during their respective build processes. If you want to improve how the PM team behaves, tweak the persona templates in `core-prompts/`!

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.