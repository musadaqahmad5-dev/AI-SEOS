type Handler = (payload: any) => void;

export class EventBus {
  private events: Map<string, Handler[]> = new Map();

  subscribe(event: string, handler: Handler) {
    if (!this.events.has(event)) this.events.set(event, []);
    this.events.get(event)!.push(handler);
  }

  publish(event: string, payload: any) {
    const handlers = this.events.get(event);
    if (!handlers) return;
    handlers.forEach(h => h(payload));
  }
}