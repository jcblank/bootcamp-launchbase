// Cálculo de aposentadoria
const nome = 'Silvana'
const sexo = 'F'
const idade = 48
const contribuicao = 30

// tempo de contribuição mínima
const contribuicaoMinM = 35
const contribuicaoMinF = 30

// regra 85-95
const somaIdadeContribuicao = idade + contribuicao
const regraM = somaIdadeContribuicao >= 95
const regraF = somaIdadeContribuicao >= 85

if (sexo === 'M' && contribuicao >= contribuicaoMinM) {
  if (regraM) {
    console.log(`${nome}, você pode se aposentar!`)
  } else {
    console.log(`${nome}, você ainda deve contribuir por mais ${95 - somaIdadeContribuicao} anos.`)
  }
} else if (sexo === 'F' && contribuicao >= contribuicaoMinF) {
  if (regraF) {
    console.log(`${nome}, você pode se aposentar!`)
  } else {
    console.log(`${nome}, você ainda deve contribuir por mais ${85 - somaIdadeContribuicao} anos.`)
  }
} else {
  console.log(`${nome}, você ainda não pode se aposentar`)
}
