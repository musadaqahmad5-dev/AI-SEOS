export class EventBus {
  private events = new Map<string, Function[]>();

  subscribe(event: string, handler: Function) {
    if (!this.events.has(event)) this.events.set(event, []);
    this.events.get(event)!.push(handler);
  }

  publish(event: string, payload?: any) {
    this.events.get(event)?.forEach(fn => fn(payload));
  }
}