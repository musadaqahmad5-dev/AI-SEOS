export class ConfigManager {
  private config: Record<string, any> = {};

  load(cfg: Record<string, any>) {
    this.config = cfg;
  }

  get(key: string) {
    return this.config[key];
  }

  set(key: string, value: any) {
    this.config[key] = value;
  }
}