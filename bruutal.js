//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)

walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:
		case 9:  //Text type node
		case 11:
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3:
			handleText(node);//Custom function
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;
	v = v.replace(/\bcu\b/g, "ku");
	v = v.replace(/\bblack\b/g, "blackest ov the black");
	v = v.replace(/\bJesus\b/g, "Satan");
	v = v.replace(/\bChrist\b/g, "Lucifer");
	v = v.replace(/\bGod\b/g, "Baphomet");
	v = v.replace(/\bbrutal\b/g, "BRUTAL");
	v = v.replace(/\bu\b/g, "ü");
	textNode.nodeValue = v;
}
