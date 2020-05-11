var n1 = ''
var n2 = ''
var op
function choix(x){
	if (typeof op === "undefined"){
		n1 += x;
	}
	else{
		n2 += x;
	}
	return n1, n2
}

function calc(ch){
	if (n1 === '') {
		alert("Veuillez saisir un calcul entier")
		return
	}
	op = ch;
}


function res(){
	if (typeof op === "undefined" || n2 ==='') {
		n1 = ''
		n2 = ''
		op = undefined
		alert("Veuillez saisir un calcul entier")
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

