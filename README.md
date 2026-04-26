# PM Engine 🧠⚡️

**A spec-driven, state-tracked AI coding framework for Gemini CLI.**

While the ecosystem is currently flooded with rich toolchains for Claude Code and OpenAI Codex, the Gemini CLI needed a native, highly structured workflow to handle complex apps. 

`pm-engine` was built to fill that gap. It is an architectural marriage of two brilliant open-source philosophies:
1. **Persona-driven friction** (inspired by Garry Tan's [gstack](https://github.com/garrytan/gstack/tree/main)): AI agents shouldn't just act as blind, compliant coders. They must emulate senior technical roles (Lead PM, Staff Engineer, UX Researcher) that actively push back, ask hard questions, and demand clear constraints before writing a single line of code.
2. **File-based memory** (inspired by [get-shit-done](https://github.com/gsd-build/get-shit-done)): To prevent the dreaded LLM context-window degradation on long projects, architectural context and phase logic must be explicitly tracked in rigid Markdown files (`PRD.md` and `STATE.md`), serving as the single source of truth.

I went ahead an added another layer I think is critical:

3. **UXR Synthesis Loop:** To avoid building products on assumptions, the framework introduces a dedicated Research engine. Raw user feedback (interviews, surveys) is synthesized into a rigid "Voice of the Customer" (`USER_INSIGHTS.md`) that serves as a non-negotiable constraint for both Discovery and Review agents.

**The Result:** A to-the-point and highly resilient virtual product team for Gemini CLI. Whether you're scaffolding a fast Astro site or building a complex production app, this framework prevents context rot, dramatically narrows the scope of AI hallucination, and locks in architectural discipline.

## 📋 Prerequisites

Before starting, ensure you have the following tools installed:

- **npm (Node.js)**: Required for the JS-based CLI. ([Installation link](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))
- **uv**: Required for the Python-based CLI. ([Installation link](https://docs.astral.sh/uv/getting-started/installation/))
- **Gemini CLI**: The engine that powers the AI personas. ([Installation link](https://geminicli.com/))

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

### 0. `/research` (The Senior UX Researcher)
Before deciding what to build, feed raw evidence into the Research agent.

```
/research [paste interview transcripts, survey results, or feedback here]
```
_The Researcher analyzes the evidence and updates `.pm-engine/research/USER_INSIGHTS.md` with critical pain points and success criteria. It also builds user profiles in `.pm-engine/research/PERSONAS.md` to ground the team in real-world needs._

### 1. `/discover` (The Elite Lead PM)
Start by pitching your idea to the PM agent.

```
/discover I want to build a real-time collaborative to-do list app.
```
_The Lead PM will NOT write code. It will cross-reference your pitch against `USER_INSIGHTS.md`, flagging features that don't solve known pain points. It interrogates your assumptions, demanding clear user pain points, KPIs, NFRs, and out-of-scope boundaries. Once agreed, it generates the `PRD.md`._

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
Audit the work against both the spec and the research.

```
/review
```
_The Principal Engineer audits the code diffs against the `PRD.md` and `STATE.md`. Crucially, it also performs a "User Acceptance" check against `USER_INSIGHTS.md` to ensure the implementation actually fixes the user's friction. If your code passes, the Phase is marked as "Complete" in the state matrix._

### 5. `/fix [issue]` (The Debugging Agent)
Hit a bug or a test failure? Don't run a full execution phase.

```
/fix authentication token expiring too early
```
_The Debugging Agent is completely constrained to fixing the isolated issue. It reads the architecture constraints and state, but refuses to invent new features, ensuring your fix doesn't cause architectural drift._

### 6. `/test-flight` (The Simulated User)
Simulate a usability test before pushing to production.

```
/test-flight [persona_name]
```
_The Test-Flight agent adopts a profile from `PERSONAS.md` and "uses" your product or plan. It provides a User Sentiment Score and highlights points of friction or delight, allowing for rapid iteration before real users ever see the code._

### 7. `/status` (The Scrum Master Sync)
Close your laptop for the weekend? When you come back, just type:

```
/status
```
_The Sync Agent reads the state files, remembers exactly where the team left off, briefs you on open blockers, and tells you the exact command to run next to resume velocity._

## 🧠 Architecture: The Triple-Brain System
PM Engine splits your AI's brain into three distinct, machine-readable parts:

- **The Research Engine (`.pm-engine/research/USER_INSIGHTS.md`)**: The "Voice of the Customer." It preserves the original pain points and success criteria that justify the product's existence.
- **The Product Engine (`.pm-engine/product/PRD.md`)**: The persistent memory of what we are building, who we are building it for, and what we are explicitly NOT building.
- **The Execution Engine (`.pm-engine/state/STATE.md` & `ARCHITECTURE.md`)**: The rigid state tracker and architecture blueprint. By splitting schemas into `ARCHITECTURE.md` and phase checklists into `STATE.md`, it preserves the LLM context window over long coding sessions without losing constraints.

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