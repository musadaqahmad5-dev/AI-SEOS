export class ServiceRegistry {
  private services = new Map<string, any>();

  register(name: string, instance: any) {
    this.services.set(name, instance);
  }

  resolve<T>(name: string): T {
    return this.services.get(name);
  }

  list(): string[] {
    return [...this.services.keys()];
  }
}