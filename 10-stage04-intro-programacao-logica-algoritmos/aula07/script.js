/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/

let resultado = prompt('Adivinhe o número que pensei entre 0 e 10')
let numeroPensado = Math.round(Math.random() * 10)
let tentativas = 0


while(Number(resultado) != numeroPensado) {
    resultado = prompt('Errou, tenta novamente!')
    tentativas ++
}

alert(`Parabéns, eu pensei no número ${numeroPensado} você acertou na ${tentativas}º tentativa`)


