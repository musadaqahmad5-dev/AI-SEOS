import { ServiceContainer } from "../di/ServiceContainer";
import { PluginManager } from "../plugins/PluginManager";
import { EventBus } from "../events/EventBus";
import { Logger } from "../logging/Logger";
import { ConfigManager } from "../config/ConfigManager";

export function bootstrap() {
  const config = new ConfigManager();
  const logger = new Logger();
  const events = new EventBus();
  const container = new ServiceContainer();
  const plugins = new PluginManager(container, events, logger);

  container.register("config", config);
  container.register("logger", logger);
  container.register("events", events);
  container.register("plugins", plugins);

  logger.info("AI-SEOS Kernel Bootstrapped");

  return { config, logger, events, container, plugins };
}