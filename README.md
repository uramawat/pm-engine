# PM Engine 🧠⚡️

**A spec-driven, state-tracked AI coding framework for Gemini CLI.**

AI agents don't suffer from a lack of coding ability; they suffer from a lack of product management. `pm-engine` acts as a virtual product team inside your terminal. It forces the AI to challenge your assumptions, lock in a Product Requirements Document (PRD), and execute code against a rigid state machine. 

Whether you're scaffolding a fast Astro personal site or building a complex web app like a "Cursor for Product Managers", this framework prevents context rot and stops AI slop before it starts.

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

## 🛠️ The Workflow
Once initialized, start the Gemini CLI in your project directory.

### 1. `/discover` (The Lead PM)
Start by pitching your idea to the PM agent.

```
/discover I want to build a real-time collaborative to-do list app.
```
_The agent will NOT write code. It will ask you hard questions about your target audience, constraints, and MVP scope. Once agreed, it generates your `PRD.md`._

### 2. `/plan` (The Staff Engineer)
Turn the PRD into an architecture plan.

```
/plan
```
_The agent reads the PRD and generates a rigid, phase-by-phase execution plan in `STATE.md`._

### 3. `/execute phase-1` (The Worker)
Time to build.

```
/execute phase-1
```
_The agent reads the exact tasks for Phase 1 and writes the code. Because its context is constrained to the active phase, it doesn't hallucinate future features._

### 4. `/review` (The Gatekeeper)
Audit the work.

```
/review
```
_The QA agent checks the diff against the PRD. If it passes, Phase 1 is marked as "Done"._

### 5. `/status` (The Sync Agent)
Close your laptop for the weekend? When you come back, just type:

```
/status
```
_The agent reads the state files, remembers exactly where you left off, and tells you what to do next._

## 🧠 Architecture: The Dual-Brain System
PM Engine splits your AI's brain into two distinct halves:

- The Product Engine (`.pm-engine/product/PRD.md`): The persistent memory of what we are building and why. It acts as the ultimate boundary against scope creep.

- The Execution Engine (`.pm-engine/state/STATE.md`): The rigid state tracker that prevents context window degradation during long coding sessions.

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

All AI system prompts live in the root `core-prompts/` directory. Both the JS (npm) and Python (uv) CLI wrappers pull from this single source of truth during their respective build processes. If you want to improve how the PM agent behaves, edit the templates in `core-prompts/`!