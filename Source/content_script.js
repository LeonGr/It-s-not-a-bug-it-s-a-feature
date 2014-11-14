readDoc(document.body);

function readDoc(node) {
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType ) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) {
				next = child.nextSibling;
				readDoc(child);
				child = next;
			}
			break;

		case 3: // Text node
			changeWord(node);
			break;
	}
}

function changeWord(textNode) {
	var v = textNode.nodeValue;

	v = v.replace(/\bBug\b/g, "Feature");
	v = v.replace(/\bbug\b/g, "feature");
	
	textNode.nodeValue = v;
}
