import { EngineState } from "./EngineState";
import { ServiceRegistry } from "../registry/ServiceRegistry";
import { EventBus } from "../events/EventBus";
import { Logger } from "../logging/Logger";

export class EngineManager {
  private state: EngineState = EngineState.CREATED;

  constructor(
    private services = new ServiceRegistry(),
    private events = new EventBus(),
    private logger = new Logger()
  ) {}

  async initialize() {
    this.state = EngineState.INITIALIZING;
    this.logger.info("Initializing engine");
    this.events.publish("engine:init", {});
    this.state = EngineState.STOPPED;
  }

  async start() {
    this.state = EngineState.RUNNING;
    this.logger.info("Engine started");
    this.events.publish("engine:start", {});
  }

  async stop() {
    this.state = EngineState.STOPPED;
    this.logger.warn("Engine stopped");
    this.events.publish("engine:stop", {});
  }

  getState() {
    return this.state;
  }
}