export interface GraphNode {
  id: string;
  type: string;
}

export class ProjectGraph {
  private nodes: GraphNode[] = [];
  private edges: [string, string][] = [];

  addNode(node: GraphNode) {
    this.nodes.push(node);
  }

  addEdge(from: string, to: string) {
    this.edges.push([from, to]);
  }

  getGraph() {
    return { nodes: this.nodes, edges: this.edges };
  }
}