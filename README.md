# PM Engine 🧠⚡️

**A spec-driven, state-tracked AI coding framework for Gemini CLI.**

AI agents don't suffer from a lack of coding ability; they suffer from a lack of product management and architectural discipline. `pm-engine` acts as a full, elite virtual product team inside your terminal. It forces the AI to challenge your assumptions, lock in a rigorous Product Requirements Document (PRD), and execute code against a rigidly tracked state machine. 

Whether you're scaffolding a fast Astro personal site or building a complex web app, this framework prevents context rot, stops AI hallucination (slop), and manages your project via strict Agile and System Design principles.

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
_The Execution bot reads the exact, granular tasks for Phase 1 and writes the code sequentially. It aggressively updates checkboxes in `STATE.md` as it works. Because its context is constrained to the active phase, it refuses to hallucinate future features or drift out-of-scope._

### 4. `/review` (The Principal QA Engineer)
Audit the work.

```
/review
```
_The Principal Engineer audits the code diffs against the `PRD.md` and `STATE.md`. It scans for security flaws, unhandled edge cases, and architectural regressions. If it passes, the Phase is marked as "Complete" in the state matrix._

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