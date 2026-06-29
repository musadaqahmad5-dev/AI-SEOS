
import { EngineManager } from "./EngineManager";

export class Bootstrap {
  public engine: EngineManager;

  constructor() {
    this.engine = new EngineManager();
  }

  start() {
    console.log("AI-SEOS Booting...");
    return this.engine;
  }
}
