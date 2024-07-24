const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "perguntas 1",
        Alternativas: [
            {
                texto: "alternativa A",
                afirmacão: "afirmacao Alternativa A."
            },
            {
                texto: "alternativa B",
                afirmacão: "afirmacao Alternativa B."
            }
        ]
    }
[
    {
        enunciado: "perguntas 2",
        Alternativas: [
            {
                texto: "alternativa A",
                afirmacão: "afirmacao Alternativa A."
            },
            {
                texto: "alternativa B",
                afirmacão: "afirmacao Alternativa B."
            }
        ]
    }
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}