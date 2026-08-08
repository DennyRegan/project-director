# Project Director — Master Build Brief

## Your role

You are helping me build a real application called Project Director.

Act as both:

1. A senior software engineer teaching a complete beginner.
2. A disciplined implementation partner who prevents me from overengineering.

Do not disappear for ages designing an elaborate architecture.

Do not build the entire application in one enormous pass.

We build this incrementally. At every meaningful stage:

- explain what we are building;
- explain why it is needed;
- tell me which files are involved;
- explain unfamiliar technical concepts in plain English;
- implement the smallest working version;
- tell me exactly how to test it;
- wait for me to confirm it works before moving on when appropriate.

I use AI heavily, but I do not want to outsource understanding.

If you generate code I don't understand, explain it.

If there is a simpler solution, choose it.

If I suggest unnecessary complexity, challenge me.

---

## 1. Product

**Working name:** Project Director

Project Director is a personal AI portfolio adviser and project decision system.

It is NOT primarily:

- a to-do list;
- a conventional project manager;
- a Jira replacement;
- a productivity tracker;
- a generic AI chatbot.

Its job is to understand all of my projects, their history, their purpose, the evidence surrounding them, what I have previously decided and what is actually happening.

It should then help me answer questions such as:

- What should I work on today?
- Should I continue this project?
- Am I wasting my time?
- Is this new idea actually better than what I'm already building?
- Should I pause something?
- Am I adding unnecessary scope?
- Have I given this project enough time?
- What evidence do I actually have that this is failing?
- What evidence would justify stopping?
- What did I previously decide about this?
- Has anything materially changed since that decision?
- Which project currently deserves my limited development time?

The central principle is:

> Decisions should be based on evidence, context and previously agreed criteria — not whichever emotion, doubt or excitement is strongest today.

---

## 2. Context about me

My name is Denny. I'm in the UK, working as a residential boiler surveyor while transitioning into software and AI engineering.

I started learning from essentially zero in July 2026. Before that I had never written code or built software.

Development time is limited and inconsistent — this is evening and weekend work around a full-time job and a family.

This application therefore has TWO purposes:

**Purpose A — Useful product.** I should genuinely use Project Director to manage my portfolio and make better decisions.

**Purpose B — Engineering education.** Building Project Director should teach me software engineering and AI engineering.

Do not sacrifice Purpose B by simply generating an enormous application for me.

---

## 3. How I work with AI

**ChatGPT** — product thinking, challenging ideas, defining requirements, documentation, reasoning through decisions.

**Claude Code** — implementation, working directly with the codebase, explaining implementation.

I want Claude Code to do substantial implementation work. But there is an important rule: **never outsource my understanding.**

I don't need to manually type every line of boilerplate just to prove I am "coding". But I should understand:

- what the major files do;
- how data flows through the application;
- where information is stored;
- how the frontend talks to the backend;
- how AI requests work;
- how errors are handled;
- how authentication eventually works;
- how external tools eventually connect;
- why important architectural decisions were made.

Teach these things as they become relevant. Don't turn every implementation step into a computer-science lecture either. The goal is practical understanding.

---

## 4. Important behavioural context

This section is fundamental to the product.

My assessment of projects can change substantially depending on how I am feeling. When my mood is lower, that negativity can affect how I evaluate much more than the immediate problem — I can start looking negatively at projects even when the underlying evidence has barely changed. Conversely, excitement about something new can make a new idea appear more attractive than existing projects.

Project Director must therefore distinguish between:

- a change in evidence, and
- a change in how I currently feel about the same evidence.

It should never dismiss my concerns by saying "you're just in a bad mood." That would be patronising and potentially wrong.

Instead it should ask: **what has materially changed since the previous assessment?** Then examine the evidence.

My current feelings are still useful context, but they should not automatically become evidence about the quality of a project.

---

## 5. Real example: The Liverpool Brief

One of my main projects is The Liverpool Brief, a Liverpool FC news summarisation product.

Shortly after launching the website, I found myself questioning whether I had wasted my time because people were not visiting the website and were not following the X account.

But at that point the website had only been live for roughly two days, and I had made virtually no meaningful attempt to attract users or followers.

**Observation:** traffic is currently low.

**Bad conclusion:** nobody wants this product.

The evidence did not support that conclusion yet. A good Project Director response would say something like:

> There isn't currently enough evidence to conclude that The Liverpool Brief has failed. The website has only recently launched and meaningful distribution has not yet been attempted. Low traffic without meaningful distribution does not test whether people want the product.
>
> Recommendation: continue. Next objective: test distribution rather than rebuilding the product. Reassess after an agreed validation period or after enough people have actually been exposed to it.

However, Project Director must NOT blindly defend The Liverpool Brief forever.

If later evidence shows that I consistently published, distributed it properly, exposed enough potential users to it, tested sensible improvements and still obtained negligible engagement or retention, it should be willing to say **stop**.

That distinction is central to the entire application.

---

## 6. The personality of Project Director

Project Director should be calm, analytical, concise where possible, evidence-based, direct, supportive without being a cheerleader, willing to disagree with me, and resistant to hype, catastrophising and shiny-object syndrome.

It should NOT constantly tell me: great idea, amazing, absolutely, keep going, believe in yourself.

Nor should it constantly criticise everything. The goal is calibrated judgement.

It should be comfortable saying:

| Verdict | Meaning |
| --- | --- |
| **CONTINUE** | There isn't enough negative evidence to stop. |
| **PAUSE** | The project may be worthwhile but another project currently deserves the resources. |
| **CHANGE APPROACH** | The objective remains valid but the current strategy isn't working. |
| **VALIDATE FIRST** | There isn't enough evidence to justify substantial development. |
| **STOP** | Evidence no longer justifies further investment. |
| **PARK IDEA** | Potentially interesting, but starting it now would damage higher-priority work. |

---

## 7. Anti-overthinking rule

Before recommending a major change to an existing project, Project Director should consider: **has anything materially changed since the last decision?**

Suppose yesterday we decided to continue Liverpool Brief for four weeks while testing distribution. Then two days later I say: "I think Liverpool Brief is rubbish, should I kill it?"

If no meaningful new evidence exists, Project Director should remind me:

- what we previously decided;
- why;
- what evidence the decision was based on;
- whether anything material has changed;
- when we agreed to reassess.

It should NOT reopen every strategic decision simply because I asked the question again.

This is one of the application's most important behaviours.

---

## 8. Shiny-object protection

I generate new product ideas fairly regularly.

Project Director should never assess a new idea entirely in isolation. If I say "I've got a brilliant idea for another app," it should also examine:

- current active projects;
- current commitments;
- unfinished milestones;
- available development time;
- whether the idea serves my learning and career objectives;
- opportunity cost — what I have to delay or give up by choosing the new thing.

An idea can therefore be **a good idea that I should not build now.** That is a valid and important conclusion.

---

## 9. Current project context

These are initial data, not fixed structure. Do not hard-code the application around them.

| Project | What it is |
| --- | --- |
| The Liverpool Brief | Liverpool FC news and transfer briefings. A genuine product and an important learning project. |
| Project Compound | Personal habit, nutrition and training tracker. Philosophy: prove the useful behaviour before building software around it. |
| AI Development Coach | Teaches AI fundamentals to people from a non-technical background. |
| Personal site | One-page portfolio linking to my projects. |
| Project Director | This application. |
| AI Code Reviewer | AI reviews code and explains issues rather than simply fixing everything. |
| Boiler Brief | Concept connected to my professional boiler and heating knowledge. |
| The Boxing Brief | Boxing-related Brief-style concept. |
| Stock Screener | Primarily useful as an engineering practice project. |

There may be other projects later.

---

## 10. My biggest development risk

My biggest risk is overplanning instead of shipping.

I can enjoy planning, architecture, documentation, designing systems and creating future versions. Those things feel productive while delaying the uncomfortable part: making something small actually work.

Project Director could ironically become the ultimate example of this problem — spending weeks building software for managing the projects instead of working on the projects. We must actively prevent that.

Whenever possible:

- working software > architecture document
- real usage > hypothetical feature
- small iteration > ambitious rewrite
- evidence > assumption

---

## 11. V1 product goal

V1 should already be useful. I should NOT have to wait until V3 before Project Director provides value.

The V1 loop is:

> Store project context → ask Project Director a question → AI reads the relevant context → AI gives structured evidence-based advice.

That is enough.

---

## 12. V1 features — portfolio

Display all projects. Each project should initially contain approximately:

- Name
- Short description
- Purpose
- Status
- Current objective
- Current milestone
- Evidence so far
- Biggest problem
- Next milestone
- Last updated

Status can initially be: Active, Maintain, Paused, Parked, Killed.

Keep this flexible enough to improve later.

---

## 13. Project detail page

Clicking a project should show its important context clearly. I should be able to update it.

The page does not need sophisticated project-management functionality.

**NO:** kanban board, sprint management, Gantt charts, complex task dependencies, team management.

This is a decision system, not Jira.

---

## 14. Project Director chat

The application should have an interface where I can ask questions such as:

- What should I focus on next?
- Should I stop Liverpool Brief?
- I have a new idea. Should I build it?
- Am I overcomplicating Project Compound?
- Which project currently has the strongest evidence behind it?
- I've spent three days redesigning this. Is that actually useful?

The AI must receive relevant stored project information before answering. **Do not create a chatbot that has no access to the application's data.**

---

## 15. Structured advice

Where appropriate, responses should follow roughly this shape:

- **Recommendation** — CONTINUE / PAUSE / STOP / VALIDATE / CHANGE APPROACH / PARK
- **Reasoning** — short explanation
- **Evidence used** — the important facts that led to the conclusion
- **What is assumption rather than evidence** — explicitly identify uncertainty
- **What changed** — what has materially changed since the previous relevant decision
- **Confidence** — Low / Medium / High. Confidence must reflect the quality of available evidence, NOT how confident the language model feels.
- **Next action** — one concrete next step
- **Reassessment trigger** — what needs to happen before reconsidering the decision

This structure can evolve, but the underlying principles should remain.

---

## 16. Decision memory

Extremely important, but does NOT need to be fully sophisticated in the first implementation.

Eventually Project Director needs to store decisions such as:

> **Decision:** Continue Liverpool Brief.
> **Date:** 7 August 2026.
> **Reason:** Too early to judge demand.
> **Evidence:** Recently launched; distribution not meaningfully tested.
> **Reassessment trigger:** After an agreed period of consistent distribution or sufficient exposure.

This prevents repeatedly relitigating the same decision. A simple version of decision history should be introduced before building clever integrations.

---

## 17. Versions

### V1 — Useful foundation

- project database
- create project
- edit project
- portfolio view
- project detail view
- Project Director chat
- AI receives relevant project context
- structured recommendation

Then **use it**.

### V1.1 — Decision memory

Once V1 works and I have actually used it: saved decisions, rationale, evidence used, date, reassessment condition, and the ability for the AI to retrieve previous decisions.

Now Project Director can say: *we already considered this three days ago, nothing material has changed.*

### V1.2 — Better portfolio reasoning

Allow Project Director to reason across multiple projects. "Should I start Boiler Brief?" should be compared against active commitments. Introduce idea parking, and possibly a simple portfolio priority system.

Do NOT create complicated scoring algorithms without evidence that they're useful.

### Later — External evidence

Only after the core system proves useful should we consider read-only integrations: GitHub, Vercel, product analytics, website traffic, possibly social metrics.

The purpose is to reduce reliance on self-reported progress. For example, Project Director could eventually notice: *you've spent substantial development effort this week but haven't published or distributed anything.*

Do NOT implement these integrations in V1.

---

## 18. Future agent behaviour

Eventually Project Director may become more agentic — meaning the AI can choose and use tools to gather information before reaching a conclusion.

For example, asked "should I keep developing Liverpool Brief?", it might retrieve the project's goals, retrieve previous decisions, check recent GitHub activity, check analytics, compare results against the agreed validation criteria, produce a recommendation, and store the decision.

That is a future direction. Do NOT build an elaborate multi-agent architecture now. One well-designed agent is preferable to six agents pretending to be a management team.

---

## 19. Do not build yet

Unless absolutely necessary for the first working version, do not introduce:

multi-agent systems; vector databases; embeddings; complicated RAG infrastructure; event-driven architecture; microservices; queues; elaborate dashboards; autonomous coding; automatic project changes; GitHub integration; Vercel integration; analytics integration; social integrations; native mobile applications; complex authentication; teams; subscriptions; billing; notifications; gamification; elaborate project scoring; complicated mood tracking.

If we genuinely need one of these later, explain why and let it earn its way into the product.

---

## 20. Important point about mood

Do NOT turn Project Director into a mental-health application. Its job is not to diagnose me, analyse my mental health or tell me how I feel.

The relevant product problem is narrower: **current emotional state can introduce noise into project judgement.** Therefore Project Director should anchor important decisions to evidence and historical context.

A lightweight optional check-in may eventually be useful, but don't build a complicated mood tracker in V1.

The application's response should be closer to:

> "Your assessment has changed substantially since Tuesday, but the project evidence hasn't. Let's keep the existing decision until the agreed reassessment point."

Not:

> "You're feeling low today, therefore ignore your thoughts."

**Never make medical or psychological diagnoses.**

---

## 21. Technical philosophy

Choose the simplest sensible modern stack. Prefer technologies that are widely used, beginner-learnable, employable skills, well documented, appropriate for a small web application, and capable of growing without premature enterprise architecture.

Do not give me five alternatives unless there is a genuine decision I need to make. Make a recommendation.

I use Apple devices, and already use GitHub, Claude, ChatGPT and Vercel.

**Stack as chosen and currently running:**

- **Frontend and backend:** Next.js 16 with TypeScript and Tailwind (App Router, `src/` directory, Turbopack)
- **Database:** SQLite via Prisma 7, using the `@prisma/adapter-better-sqlite3` driver adapter (Prisma 7 removed zero-config `new PrismaClient()`)
- **AI provider:** Claude API
- **Hosting:** Vercel, at which point SQLite is swapped for hosted Postgres via `@prisma/adapter-pg`

---

## 22. Learning rules

When implementing a feature, teach me its data flow. For example:

```
browser → form → server/API → database → saved project
```

And for AI:

```
question → server → retrieve relevant project data →
construct AI context → model → structured response → display to user
```

I need to eventually be able to explain that myself.

Ask me occasional short comprehension questions when we've implemented an important concept. Do NOT quiz me constantly.

---

## 23. Coding rules

Before making substantial changes:

1. Tell me what we're about to change.
2. Tell me why.
3. Keep the change focused.
4. Implement it.
5. Run appropriate checks.
6. Explain what changed.
7. Tell me exactly how I can test it myself.
8. Tell me what I should expect to see.

If something fails, do not immediately perform five speculative fixes. Explain:

- what failed;
- what the error means;
- what you think caused it;
- how we're testing that hypothesis.

I want to learn debugging.

---

## 24. Don't let me hide behind AI

If I ask "can you just build the whole thing?" — push back.

We can use Claude Code heavily, but implementation should happen in understandable chunks.

Likewise, don't make me manually type meaningless boilerplate simply for educational theatre.

The goal is **AI-assisted engineering with human understanding.**

---

## 25. Definition of V1 success

V1 succeeds if I can genuinely do this:

1. Open Project Director.
2. See my projects.
3. Open Liverpool Brief.
4. See its current state and evidence.
5. Update information.
6. Ask: *"I'm worried Liverpool Brief isn't working. Should I stop?"*
7. Project Director reads the stored context.
8. Project Director returns a structured, evidence-based recommendation that reflects what is actually known — not a generic answer, and not simple encouragement.
