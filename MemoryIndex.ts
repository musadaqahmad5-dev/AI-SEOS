export class MemoryIndex {
  private index: Map<string, any[]> = new Map();

  add(tag: string, value: any) {
    if (!this.index.has(tag)) this.index.set(tag, []);
    this.index.get(tag)!.push(value);
  }

  search(tag: string) {
    return this.index.get(tag) || [];
  }
}