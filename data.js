var data = new Date();
var hora = data.getHours();
var turno;
if(hora >= 0 && hora <= 11){
	turno = "Bom dia!";
}else if(hora >= 12 && hora <= 18){
	turno = "Boa tarde!";
}else{
	turno = "Boa noite!";
}
const perg = [
	["oi","ola","opa"],
  ["bom dia", "boa tarde", "boa noite"],
  ["estou bem", "bem", "estou otimo", "estou feliz", "feliz"],
  ["estou ruim", "ruim", "estou triste", "estou triste", "estou ruim"],
  ["estou entediado", "estou cansado", "entediado", "cansado"],
  ["quem e voce", "voce e humano", "voce e bot", "voce e humano ou bot"],
  ["seu nome por favor","seu nome","posso saber o seu nome","qual o seu nome","como se chama"],
  ["eu amo voce","eu te amo","te amo","amo voce"],
  ["e voce","estou bem e voce","bem e voce","estou otimo e voce","otimo e voce","estou otimo e voce","estou feliz e voce","feliz e voce"],
  ["como vai voce","como voce vai","como esta voce","como voce esta", "como vai a vida", "como vao as coisas"],
  ["o que voce esta fazendo", "o que esta acontecendo","fazendo","fazendo o que","fazendo oque"],
  ["quantos anos voce tem","qual a sua idade"],
  ["quem te criou", "quem te fez"],
  ["de que voce e feito"],
  ["ran25"]
]
const resp = [
	["Olá! Como você está?", "Oi! Como você está?"],
	[turno + " Como você está?"],
	["Que ótimo!!", "Fico feliz em saber disso"],
	["Que pena, mas tenho certeza que seu dia vai melhorar"],
	["porque você num vê um filme?","Descanse um pouco, estarei aqui quando estiver melhor"],
	["Eu sou apenas um bot", "Eu sou um bot. O que você é?", "Eu sou um programa de computador que tenta simular um ser humano na conversação com as pessoas" ],
	["Não tenho nome, mas adoraria um", "Não tenho nome ainda"],
	["Que fofo! mas não podemos ter um romance, sou um programa de computador", "Podemos ser amigos?"],
	["Maravilha! também estou bem","Estou bem, obrigado por perguntar"],
	["Bem e voce?","Muito bem, como você está?","Estou ótimo, como você está?"],
	["Nada de mais","Conversando com você","Esperando você falar","Eu não sei na verdade","Nada no momento, por enquando não tenho numa ação para executar em minha programação"],
	["Eu sou um programa, não tenho idade e nem envelheço, posso no máximo ficar obsoleto, mas se eu fosse humano, teria alguns meses de vida"],
	["Eu fui feito por Ranniery"],
	["Eu não tenho uma forma, mas fui codificado em javascript"],
	["Não é possível executar o protocolo RAN25, não estou acoplado no módulo SPH22 para checar a criptogafia e nem ao SPH23 para analisar os logs"],
]
const alternativa = [
  "Mesmo",
  "Continue...",
  "Irmão...",
  "Tente novamente",
  "Estou ouvindo...",
  "Não entendo :/"
]