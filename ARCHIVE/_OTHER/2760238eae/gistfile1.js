function visitNode(node) {
	console.log("visited:",node.type);
}

var acorn = require("acorn"),
    walk = require("acorn/dist/walk"),
    
    parse_options = {
        ecmaVersion: 6
    },
    walk_options = {},
    
    ast = acorn.parse("{ let x = 2; }",parse_options);

// set up AST walk handlers
Object.keys(walk.base).forEach(function eacher(type){
    walk_options[type] = visitNode;
});

walk.simple(ast,walk_options);
// visited: Literal
// visited: Literal
// visited: VariableDeclaration
// visited: VariableDeclaration
// visited: BlockStatement
// visited: BlockStatement
// visited: Program
