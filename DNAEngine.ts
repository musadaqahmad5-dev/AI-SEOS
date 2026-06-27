import { ProjectDNA } from "./ProjectDNA";

export class DNAEngine {
  analyze(files: string[]): ProjectDNA {
    const modules = files.filter(f => f.includes('src'));
    return {
      name: 'AI-SEOS',
      structure: files,
      modules,
      dependencies: []
    };
  }
}