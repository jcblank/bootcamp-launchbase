// Cálculo de aposentadoria
const nome = 'Silvana'
const sexo = 'F'
const idade = 48
const contribuicao = 23

// tempo de contribuição mínima
const contribuicaoMinM = 35
const contribuicaoMinF = 30

// regra 85-95
const condM = idade + contribuicao >= 95
const condF = idade + contribuicao >= 85

if (sexo === 'M' && contribuicao >= contribuicaoMinM || sexo === 'F' && contribuicao >= contribuicaoMinF) {
  if (sexo === 'M' && condM || sexo === 'F' && condF) {
    console.log(`${nome}, você pode se aposentar!`)
  } else {
    if (sexo === 'M') {
      console.log(`${nome}, você ainda deve contribuir por mais ${95 - (idade + contribuicao)} anos.`)
    } else if (sexo === 'F') {
      console.log(`${nome}, você ainda deve contribuir por mais ${85 - (idade + contribuicao)} anos.`)
    }
  }
} else {
  console.log(`${nome}, você ainda não pode se aposentar`)
}
