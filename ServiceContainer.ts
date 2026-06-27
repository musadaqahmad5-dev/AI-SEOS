export class ServiceContainer{private s=new Map(); register(k:string,v:any){this.s.set(k,v)} resolve<T>(k:string):T{return this.s.get(k)}}
