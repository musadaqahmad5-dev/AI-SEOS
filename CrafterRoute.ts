export type CrafterPriority = "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";

export interface CrafterTask {
  id: string;
  title: string;
  description: string;
  priority: CrafterPriority;
  status: "PENDING" | "RUNNING" | "DONE" | "FAILED";
  checkpoint: number;
}

export interface CrafterCheckpoint {
  id: number;
  summary: string;
  tasks: CrafterTask[];
  timestamp: number;
}

export class CrafterRoute {
  private tasks: CrafterTask[] = [];
  private checkpoints: CrafterCheckpoint[] = [];
  private currentCheckpoint = 0;

  addTask(task: CrafterTask) {
    this.tasks.push(task);
  }

  startBatch(batchSize: number = 3): CrafterCheckpoint {
    const batch = this.tasks
      .filter(t => t.status === "PENDING")
      .slice(0, batchSize);

    batch.forEach(t => (t.status = "RUNNING"));

    const checkpoint: CrafterCheckpoint = {
      id: ++this.currentCheckpoint,
      summary: "Crafter batch executed",
      tasks: batch,
      timestamp: Date.now()
    };

    batch.forEach(t => (t.status = "DONE"));

    this.checkpoints.push(checkpoint);
    return checkpoint;
  }

  getHistory() {
    return this.checkpoints;
  }
}
