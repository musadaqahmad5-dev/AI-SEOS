import { ProjectScanner } from './core/ProjectScanner';
import { DNAEngine } from './intelligence/DNAEngine';
import { InsightEngine } from './intelligence/InsightEngine';

export class EngineManager {
  private scanner = new ProjectScanner();
  private dna = new DNAEngine();
  private insight = new InsightEngine();

  async analyzeProject(path: string) {
    const structure = this.scanner.scan(path);
    const dna = this.dna.analyze(structure);
    const insights = this.insight.generate(structure, dna);

    return {
      structure,
      dna,
      insights,
      score: this.calculateScore(insights),
    };
  }

  calculateScore(insights: string[]) {
    return Math.min(100, 60 + insights.length * 5);
  }
}
