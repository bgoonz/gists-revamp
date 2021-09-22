// graph nodes
var a = { label: "a" },
  b = { label: "b" },
  c = { label: "c" },
  d = { label: "d" },
  e = { label: "e" },
  f = { label: "f" },
  g = { label: "g" },
  h = { label: "h" },
  i = { label: "i" };

// setup dependency hierarchy (directed graph node edges)
a.children = [b, c, d, e];
c.children = [e, f];
d.children = [e, c];
h.children = [a, i, g];
i.children = [a];

// a -> b
// a -> c
// a -> d
// a -> e
// c -> e
// c -> f
// d -> e
// d -> c
// h -> a
// h -> i
// h -> g
// i -> a

// *************************************************

var nodes = [];

// depth-first graph nodes traversal
[a, b, c, d, e, f, g, h, i].forEach(function visit(node) {
  // adapted from: http://en.wikipedia.org/wiki/Topological_sorting#Algorithms
  if (node.marked) throw "Cycle!";
  if (!node.visited) {
    node.marked = true;
    if (node.children) {
      node.children.forEach(function eacher(n) {
        n.parents = n.parents || [];
        n.parents.push(node);
        visit(n);
      });
    }
    node.visited = true;
    delete node.marked;
    delete node.children;
    nodes.unshift(node); // unshift reverses ordering
  }
});

// calculate depths
nodes.forEach(function eacher(node) {
  node.depth = 0;
  delete node.visited;
  if (node.parents) {
    node.parents.forEach(function eacher(n) {
      node.depth = Math.max(n.depth + 1, node.depth);
    });
    delete node.parents;
  }
});

// sort by depth
nodes.sort(function sorter(a, b) {
  return b.depth - a.depth;
});

console.log(nodes);
// [ { label: 'f', depth: 5 },
//   { label: 'e', depth: 5 },
//   { label: 'c', depth: 4 },
//   { label: 'd', depth: 3 },
//   { label: 'b', depth: 3 },
//   { label: 'a', depth: 2 },
//   { label: 'i', depth: 1 },
//   { label: 'g', depth: 1 },
//   { label: 'h', depth: 0 } ]

// *************************************************

// group by depth
nodes = nodes.slice(1).reduce(
  function reducer(nodes, node) {
    var prev = nodes[nodes.length - 1];
    if (Array.isArray(prev) && prev[0].depth === node.depth) {
      prev.push(node);
    } else if (prev.depth === node.depth) {
      nodes[nodes.length - 1] = [prev, node];
    } else {
      nodes.push(node);
    }

    return nodes;
  },
  [nodes[0]]
);

console.log(nodes);
// [ [ { label: 'f', depth: 5 }, { label: 'e', depth: 5 } ],
//   { label: 'c', depth: 4 },
//   [ { label: 'd', depth: 3 }, { label: 'b', depth: 3 } ],
//   { label: 'a', depth: 2 },
//   [ { label: 'i', depth: 1 }, { label: 'g', depth: 1 } ],
//   { label: 'h', depth: 0 } ]
