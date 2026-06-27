export interface IPlugin {
  name: string;
  install?(ctx: any): void;
  enable?(): void;
  disable?(): void;
  destroy?(): void;
}