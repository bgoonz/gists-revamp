// Note #1: the fifth score in the matrix is for the > ~ and + combinators, one of my extensions to the CSS3 specificity algorithm

// Note #2: I made multiple rules (separated by ,) additive, as I think that also makes for a more specific rule, as opposed to two separate rules). See the first and second examples below.

specificity("div"); // [0, 0, 0, 1, 0]
specificity("div, span"); // [0, 0, 0, 2, 0]
specificity("div#foo"); // [0, 1, 0, 1, 0]
specificity("div#foo .blah"); // [0, 1, 1, 1, 0]
specificity("div#foo > .blah"); // [0, 1, 1, 1, 1]
specificity("div#foo > .blah table"); // [0, 1, 1, 2, 1]
specificity("div#foo > .blah ~ table"); // [0, 1, 1, 2, 2]
specificity("div#foo > .blah ~ table.blah.blah2"); // [0, 1, 3, 2, 2]
