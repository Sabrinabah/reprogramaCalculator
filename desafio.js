var inputPrecoHora = document.querySelector("#valor-hora")
var inputProjeto = document.querySelector("#horas-projeto")
var inputPerdas = document.querySelector("#perdas")
var resultado = document.querySelector("span")

function calcular(){
    var preco = inputPrecoHora.value
    var projeto = inputProjeto.valueAsNumber
    var perdas = inputPerdas.valueAsNumber

    var valorEscopo = preco*projeto-perdas
    var valorDuasCasas = valorEscopo.toFixed(2)

    resultado.textContent = "R$ "+valorDuasCasas
}