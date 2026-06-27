import { IPlugin } from "./IPlugin";

export class PluginManager {
  private plugins: IPlugin[] = [];

  constructor(
    private container: any,
    private events: any,
    private logger: any
  ) {}

  register(plugin: IPlugin) {
    this.plugins.push(plugin);
    this.logger.info(`Plugin registered: ${plugin.name}`);
    plugin.install?.({ container: this.container, events: this.events });
  }

  enableAll() {
    this.plugins.forEach(p => p.enable?.());
  }

  disableAll() {
    this.plugins.forEach(p => p.disable?.());
  }

  destroyAll() {
    this.plugins.forEach(p => p.destroy?.());
  }
}