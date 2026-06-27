export class EventRegistry {
  private events: Set<string> = new Set();

  register(event: string) {
    this.events.add(event);
  }

  list() {
    return Array.from(this.events);
  }
}