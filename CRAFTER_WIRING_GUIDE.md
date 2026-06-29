
# AI-SEOS v2 Integration Guide (Crafter Full Wiring)

## What is included
- Core Engine System (Kernel, EventBus, EngineManager)
- Intelligence Layer (DNA, Insight, Risk, Forensic)
- Memory System
- Plugin System
- Crafter Route (NEW)

## Crafter Wiring

EngineManager now includes:

```ts
engineManager.crafter.addTask(...)
engineManager.crafter.startBatch()
engineManager.crafter.getHistory()
```

## Execution Flow

Kernel → EngineManager → CrafterRoute → Batch Execution → Checkpoints

## How to use

1. Initialize EngineManager
2. Add tasks to Crafter
3. Run batch
4. Read checkpoint history

## Upgrade Path

v2 → Bootstrap layer → Auto-wiring EventBus → Full AI orchestration
