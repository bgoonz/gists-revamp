function getElementsByClassName(classname,root,tagname) {
	root = root || document;
	tagname = tagname || "*";
	classname = classname.split(/\s+/);
	var els = root.getElementsByTagName(tagname),
		ret=[], i,j=0,k,len = els.length, m, cn, klen=classname.length, reEdgeSpaces = /[\t\n\r\f]/g
	;
	for (i=0; i<len; i++) {
		cn = ' '+els[i].className.replace(reEdgeSpaces,' ')+' ';
		m = true;
		for (k=0; k<klen; k++) {
			if (cn.indexOf(' '+classname[k]+' ')<0) {
				m = false;
				break;
			}
		}
		if (m) {
			ret[j++] = els[i];
		}
	}
	return ret;
}