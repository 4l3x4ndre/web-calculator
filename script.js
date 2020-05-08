var n1 = ''
var n2 = ''
var op
function choix(a,x){
	if (a == 1 && typeof op === "undefined"){
		n1 += x;
	}
	else{
		n2 += x;
	}
	return n1, n2
}

function calc(ch){
	op = ch;
}


function res(){
	if (n1 === '') {
		n1 = '1'
	}
	if (typeof op === "undefined" || n2 ==='') {
		return
	}

	let monDiv = document.getElementById('resultat')
	let nodeParent = document.createElement('p')
	let node = document.createTextNode(n1 + " " + op + " " + n2 + " = " + eval(n1 + op +  n2))
	nodeParent.appendChild(node)
	monDiv.appendChild(nodeParent)


	n1 = ''
	n2 = ''
	op = undefined
}	

