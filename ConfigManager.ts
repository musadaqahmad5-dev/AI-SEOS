export class ConfigManager{constructor(private c:Record<string,unknown>={}){} get(k:string){return this.c[k]}}
