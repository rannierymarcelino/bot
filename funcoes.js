function talk() {
    var user = document.getElementById("userBox").value;
	let product;
	document.getElementById("userBox").value = "";
	pergunta(user);
	user = user.toLowerCase().normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');
    if (compara(perg, resp, user)) { 
		product = compara(perg, resp, user);
		animProcessa();
		setTimeout(resposta, 1300,product);
	} else if (user.match(/obrigad/gi)) {
		product = "De nada! Fico feliz em ajudar!"
		animProcessa();
		setTimeout(resposta, 1300,product);
	} else {
		product = alternativa[Math.floor(Math.random() * alternativa.length)];
		animProcessa();
		setTimeout(resposta, 1300,product);
	}
}
function compara(perguntasArray, respostasArray, testo) {
	let resposta;
	let respostaFlag = false;
	for (let x = 0; x < perguntasArray.length; x++) {
		for (let y = 0; y < perguntasArray[x].length; y++) {
			if (perguntasArray[x][y] === testo) {
				let respostas = respostasArray[x];
				resposta = respostas[Math.floor(Math.random() * respostas.length)];
				respostaFlag = true;
				break;
			}
		}
		if (respostaFlag) {
			break;
		}
	}
	return resposta;
}
function pergunta(texto){
	var html = '<div class="linha"><p class="pergunta">'+texto+'</p></div>';
	document.querySelector(".bloco-chat").innerHTML += html;
	updateScroll();
}
function resposta(texto){
	var html = '<div class="linha"><p class="resposta">'+texto+'</p></div>';
	document.querySelector(".bloco-chat").innerHTML += html;
	updateScroll();
	document.getElementById("userBox").focus();
	voz(texto);
}
function updateScroll(){
	var element = document.querySelector(".bloco-chat");
	element.scrollTop = element.scrollHeight;
}
function animProcessa(){
	var circulo = document.getElementById("c2");
	circulo.classList.remove("anin2");
	circulo.classList.add("aninProcessa");
	setTimeout(animFimProcessa, 1200);
}
function animFimProcessa(){
	var circulo = document.getElementById("c2");
	circulo.classList.remove("aninProcessa");
	circulo.classList.add("anin2");
}
function voz(texto){
	var msg = new SpeechSynthesisUtterance();
	var voices = window.speechSynthesis.getVoices();
	msg.voice = voices[10]; 
	msg.volume = 1; // From 0 to 1
	msg.rate = 1; // From 0.1 to 10
	msg.pitch = 2; // From 0 to 2
	msg.text = texto;
	msg.lang = 'pt-br';
	speechSynthesis.speak(msg);
}