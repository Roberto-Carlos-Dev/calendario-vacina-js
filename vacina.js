let genero = prompt('Qual seu genero? (m para masculino ou f para feminino)')
let date_nasc = prompt('Qual sua data de nascimento? (dd/mm/aaaa)')
let ano_atual = new Date().getFullYear()
let ano_informado = date_nasc.split('/')[2]
let idade = ano_atual - ano_informado


calc()

function calc() {
    switch (genero) {
        case 'm':
        case 'homem':
            genMasc()
            break;
        case 'f':
        case 'mulher':
            genFem()
            break;
        default:
            window.alert('Genero invalido')
            break;
    }
    
}

function genMasc() {
    if (idade <= 2) {
        window.alert("Não precisa vacinar")
    } else if (idade <= 10) {
        window.alert('Sua idade é ' + idade + " anos e a vacinação no mês de Outubro")
    } else if (idade <= 20) {
        window.alert('Sua idade é ' + idade + " anos e a vacinação no mês de Novembro")
    } else if (idade <= 30) {
        window.alert('Sua idade é ' + idade + " anos e a vacinação no mês de Dezembro")
    } else if (idade <= 40) {
        window.alert('Sua idade é ' + idade + " anos e a vacinação no mês de Janeiro")
    } else if (idade <= 50) {
        window.alert('Sua idade é ' + idade + " anos e a vacinação no mês de Fevereiro")
    } else if (idade <= 60) {
        window.alert('Sua idade é ' + idade + " anos e a vacinação no mês de Março")
    } else if (idade <= 70) {
        window.alert('Sua idade é ' + idade + " anos e a vacinação no mês de Abril")
    } else if (idade <= 80) {
        window.alert('Sua idade é ' + idade + " anos e a vacinação no mês de Maio")
    } else if (idade <= 90) {
        window.alert('Sua idade é ' + idade + " anos e a vacinação no mês de Junho")
    } else if (idade <= 100) {
        window.alert('Sua idade é ' + idade + " anos e a vacinação no mês de Julho")
    }
}

function genFem() {
    if (idade <= 2) {
        window.alert("Não precisa vacinar")
    }else if (idade <= 10) {
        window.alert('Sua idade é ' + idade + " anos e a vacinação no mês de Setembro")
    } else if (idade <= 20) {
        window.alert('Sua idade é ' + idade + " anos e a vacinação no mês de Outubro")
    } else if (idade <= 30) {
        window.alert('Sua idade é ' + idade + " anos e a vacinação no mês de Novembro")
    } else if (idade <= 40) {
        window.alert('Sua idade é ' + idade + " anos e a vacinação no mês de Dezembro")
    } else if (idade <= 50) {
        window.alert('Sua idade é ' + idade + " anos e a vacinação no mês de Janeiro")
    } else if (idade <= 60) {
        window.alert('Sua idade é ' + idade + " anos e a vacinação no mês de Fevereiro")
    } else if (idade <= 70) {
        window.alert('Sua idade é ' + idade + " anos e a vacinação no mês de Março")
    } else if (idade <= 80) {
        window.alert('Sua idade é ' + idade + " anos e a vacinação no mês de Abril")
    } else if (idade <= 90) {
        window.alert('Sua idade é ' + idade + " anos e a vacinação no mês de Maio")
    } else if (idade <= 100) {
        window.alert('Sua idade é ' + idade + " anos e a vacinação no mês de Junho")
    }
}











