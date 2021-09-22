// all invalid/incorrect arrow syntaxes, even with one param and one return value

{x} => x
x=1 => x
...x => x[0]

x => {x}
x => {x: x}
x => ...F(x)