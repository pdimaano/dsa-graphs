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
    this._nodes = new Set();
  }

  /** add Node instance and add it to nodes property on graph. */
  addVertex(vertex) {
    this._nodes.add(vertex);
  }

  /** add array of new Node instances and adds to them to nodes property.
   */
  addVertices(vertexArray) {
    for (let node of vertexArray) {
      this.addVertex(node);
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
   * - remove it from nodes property of graph
   * - update any adjacency lists using that vertex
   */
  removeVertex(vertex) {
    for (let node of this._nodes) {
      if (node.adjacent.has(vertex)) {
        node.adjacent.delete(vertex);
      }
    }
    this._nodes.delete(vertex);
  }

  /** traverse graph with DFS and returns array of Node values */
  depthFirstSearch(start) {
    let visitedNodes = new Set();
    visitedNodes.add(start);
    let resultValues = [start.value];

    function _dfsrecursive(currentNode = start) {
      currentNode.adjacent.forEach((node) => {
        if (!visitedNodes.has(node)) {
          visitedNodes.add(node);
          resultValues.push(node.value);
          _dfsrecursive(node);
        }
      });
    }
    _dfsrecursive();
    return resultValues;
  }

  /** traverse graph with BDS and returns array of Node values */
  breadthFirstSearch(start) {
    let visitedNodes = new Set();
    visitedNodes.add(start);
    let resultValues = [start.value];
    let nextQueue = [start];

    while (nextQueue.length !== 0) {
      let currentNode = nextQueue.shift();

      currentNode.adjacent.forEach((node) => {
        if (!visitedNodes.has(node)) {
          visitedNodes.add(node);
          resultValues.push(node.value);
          nextQueue.push(node);
        }
      });
    }
    return resultValues;
  }

  /** find the distance of the shortest path from the start vertex to the end vertex */
  distanceOfShortestPath(start, end) {
    let visitedNodes = [];
    let queueWithLevel = [[start, 0]]; //[ R, 1 ]
    //How to keep track of level?

    while (queueWithLevel.length !== 0) {
      let [currentNode, level] = queueWithLevel.shift(); // [R, 1]
      console.log("CURRENT NODE------>", currentNode);
      if (currentNode === end) return level;

      currentNode.adjacent.forEach((node) => {
        if (!visitedNodes.includes(node)) {
          queueWithLevel.push([node, level + 1]);
          visitedNodes.push(node);
        }
      });
    }

    //count - initialized to 1

    //start --> each iteration ---> add+1 to count
    //iterate over all adjacent nodes
    // return count once found
  }
}

module.exports = { Graph, Node };
