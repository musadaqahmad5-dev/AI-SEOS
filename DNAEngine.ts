export class DNAEngine {
  analyze(structure: any) {
    const files = structure.files;

    const isReact = files.some((f: string) => f.includes('react'));
    const isNode = files.some((f: string) => f.includes('package.json'));

    return {
      type: isReact ? 'React App' : isNode ? 'Node App' : 'Unknown',
      complexity: files.length > 50 ? 'High' : 'Medium',
    };
  }
}
