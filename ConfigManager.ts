export class ConfigManager {
  private config: Record<string, any> = {};

  load(config: Record<string, any>) {
    this.validate(config);
    this.config = config;
  }

  get<T>(key: string): T {
    return this.config[key];
  }

  set(key: string, value: any) {
    this.config[key] = value;
  }

  validate(config: Record<string, any>) {
    if (!config || typeof config !== "object") {
      throw new Error("Invalid config object");
    }
  }
}