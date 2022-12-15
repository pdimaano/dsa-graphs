/** Node class for graph. */

class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

/** Graph class. */

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  /** add Node instance and add it to nodes property on graph. */
  addVertex(vertex) {
    return this.nodes.add(vertex);
  }

  /** add array of new Node instances and adds to them to nodes property. */
  addVertices(vertexArray) {
    for (let node of vertexArray) {
      this.nodes.add(node);
    }
  }

  /** add edge between vertices v1,v2 */
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  /** remove edge between vertices v1,v2 */
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  /** remove vertex from graph:
   *
   * - remove it from nodes property of graph
   * - update any adjacency lists using that vertex
   */
  removeVertex(vertex) {
    for (let node of this.nodes) {
      if (node === vertex) {
        this.nodes.delete(node);
        node.adjacent.delete(vertex);
      }
    }
  }

  /** traverse graph with DFS and returns array of Node values */
  depthFirstSearch(start) {
    // Need to iterate over all adjacent nodes of target node
    // Possibly use recursive helper function
    // Keep array of everything we visited, outside of helper function
    // Within for loop, can inspect child node that isn't in visited array
    // If not in visited array, add to visited array
    // Pass in function again so target array is adjacent array
    // Visited array must live outside of helper function (returned at end)

    let visitedNodes = [];

    function _dfsrecursive(visitedNodes, currentNode = start) {
      console.log(currentNode.nodes, currentNode.nodes.adjacent);
      for (let node of currentNode.nodes) {
        if (!visitedNodes.includes(node)) {
          visitedNodes.push(node);
        }
      }
    }
    _dfsrecursive(visitedNodes);
  }

  /** traverse graph with BDS and returns array of Node values */
  breadthFirstSearch(start) {}

  /** find the distance of the shortest path from the start vertex to the end vertex */
  distanceOfShortestPath(start, end) {}
}

module.exports = { Graph, Node };
