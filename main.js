function revealform1() {
	document.getElementById('form1').classList.toggle('hidden1');
	document.getElementById("one").classList.toggle('border');		
}

function revealform2() {
	document.getElementById('form2').classList.toggle('hidden2');
	document.getElementById("two").classList.toggle('border');		
}

function revealform3() {
	document.getElementById('form3').classList.toggle('hidden3');
	document.getElementById("three").classList.toggle('border');		
}

function changecolor1() {
	let color = document.getElementById("color1").value;
	document.getElementById("one").style.backgroundColor = color;
		
		
}

function changecolor2() {
	let color = document.getElementById("color2").value;
	document.getElementById("two").style.backgroundColor = color;
		
		
}

function changecolor3() {
	let color = document.getElementById("color3").value;
	document.getElementById("three").style.backgroundColor = color;
		
		
}