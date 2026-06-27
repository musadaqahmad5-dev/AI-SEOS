export type MemoryScope = 'SESSION' | 'PROJECT';

export class MemoryEngine {
  private store: Map<string, any> = new Map();

  set(scope: MemoryScope, key: string, value: any) {
    this.store.set(`${scope}:${key}`, value);
  }

  get(scope: MemoryScope, key: string) {
    return this.store.get(`${scope}:${key}`);
  }

  has(scope: MemoryScope, key: string) {
    return this.store.has(`${scope}:${key}`);
  }
}