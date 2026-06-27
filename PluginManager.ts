export class PluginManager {
  private plugins: any[] = [];

  register(plugin: any, container?: any) {
    this.plugins.push(plugin);
    plugin.install?.({ container });
  }

  list() {
    return this.plugins;
  }
}