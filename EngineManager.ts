import { CrafterRoute } from './CrafterRoute';
export class EngineManager{
  public crafter = new CrafterRoute(); private engines=[]; register(e:any){this.engines.push(e)} list(){return this.engines}}
