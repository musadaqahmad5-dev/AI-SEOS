export type EventMap = Record<string, any>;

type Handler<T> = (payload: T) => void;

export class EventBus<TEvents extends EventMap = any> {
  private events: Map<string, Handler<any>[]> = new Map();

  subscribe<K extends keyof TEvents>(event: K, handler: Handler<TEvents[K]>) {
    if (!this.events.has(event as string)) {
      this.events.set(event as string, []);
    }
    this.events.get(event as string)!.push(handler);
  }

  publish<K extends keyof TEvents>(event: K, payload: TEvents[K]) {
    const handlers = this.events.get(event as string);
    if (!handlers) return;
    handlers.forEach(h => h(payload));
  }

  unsubscribe<K extends keyof TEvents>(event: K, handler: Handler<TEvents[K]>) {
    const handlers = this.events.get(event as string);
    if (!handlers) return;
    this.events.set(event as string, handlers.filter(h => h !== handler));
  }
}