/**
 * calculates a set of specificity scores for a CSS selector
 * based on (but extending) the CSS3 specificity algorithm:
 * http://reference.sitepoint.com/css/specificity
 *
 * @param {string} selector
 */
function specificity(selector) {
	var specificity = [0,0,0,0,0], idx, matches, tmp = 0,
		selectors = selector.split(/\s*,\s*/)
	;

	for (idx in selectors) {
		// id selectors
		matches = selectors[idx].match(/#/g);
		if (matches) specificity[1] += matches.length;
		// class selectors
		matches = selectors[idx].match(/\./g);
		if (matches) specificity[2] += matches.length;
		// attribute selectors
		matches = selectors[idx].match(/\[.+\]/g);
		if (matches) specificity[2] += matches.length;
		// pseudo-element selectors
		matches = selectors[idx].match(/:(?:first-letter|first-line|before|after|:selection)/g);
		if (matches) {
			tmp = matches.length;
			specificity[3] += tmp;
		}
		// pseudo-(element and class) selectors
		matches = selectors[idx].match(/:/g);
		if (matches) specificity[2] += (matches.length - tmp); // filter out the count of lower-precedence matches of pseudo-elements
		tmp = 0;
		// child, adjacent-sibling, and general-sibling combinators (Note: extension to CSS3 algorithm)
		matches = selectors[idx].match(/[+>~]/g);
		if (matches) specificity[4] += matches.length;
		// element type selectors (note: must remove everything else to find this count)
		selectors[idx] = selectors[idx]
		.replace(/\(.*?\)/g,"")
		.replace(/\[.*?\]/g,"")
		.replace(/[.#:][^ +>~]*/ig,"");
		matches = selectors[idx].match(/[^ +>~]+/g);
		if (matches) specificity[3] += matches.length;
	}

	return specificity;
};
