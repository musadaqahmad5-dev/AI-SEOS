export class ConfigManager {
  private config: Record<string, any> = {};

  load(cfg: Record<string, any>) {
    this.config = cfg;
  }

  get(key: string) {
    return this.config[key];
  }
}