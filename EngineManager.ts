import { EngineState } from "./EngineState";

export class EngineManager {
  private state: EngineState = EngineState.CREATED;

  async initialize() {
    this.transition(EngineState.INITIALIZING);
    this.transition(EngineState.INITIALIZED);
  }

  async start() {
    this.transition(EngineState.RUNNING);
  }

  async stop() {
    this.transition(EngineState.STOPPING);
    this.transition(EngineState.STOPPED);
  }

  getState() {
    return this.state;
  }

  private transition(next: EngineState) {
    this.state = next;
  }
}