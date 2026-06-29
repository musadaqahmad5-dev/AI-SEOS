export class InsightEngine {
  generate(structure: any, dna: any) {
    const insights: string[] = [];

    if (structure.totalFiles > 100) {
      insights.push('Project is large and may need modularization');
    }

    if (dna.complexity === 'High') {
      insights.push('High complexity detected - refactoring recommended');
    }

    if (dna.type === 'Unknown') {
      insights.push('Project type unclear - improve detection logic');
    }

    return insights;
  }
}
