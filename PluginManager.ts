export interface Plugin{name:string;install():void} export class PluginManager{private p:Plugin[]=[]; use(x:Plugin){x.install();this.p.push(x)}}
