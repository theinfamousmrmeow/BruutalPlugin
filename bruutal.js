//Forked from https://github.com/laurenorsini/caaaaarbs, which is in turned based on:
//bulk of credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)

walk(document.body);

function walk(node)
{

	var child, next;
	
		
	if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
	    || node.classList.indexOf('ace_editor') > -1) {
		return;
	}

	switch ( node.nodeType )
	{
		case 1: //Element
		case 9: //Whole document
		case 11: //Document fragment
			child = node.firstChild;
			while ( child )//Traverse list of nodes
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
	//TODO:  Handle this more efficiently...
	var v = textNode.nodeValue;
	v = v.replace(/\bcu\b/g, "ku");
	v = v.replace(/\bblack\b/g, "blackest ov the black");
	v = v.replace(/\bJesus\b/g, "Lucifer");
	v = v.replace(/\bChrist\b/g, "Antichrist");
	v = v.replace(/\bGod\b/g, "Baphomet");
	v = v.replace(/\bbrutal\b/g, "brütal");
	v = v.replace(/\bu\b/g, "ü");
	textNode.nodeValue = v;
}
