/* 
    Solicitar o nome do aluno e as 3 notas 
    do bimestre, calcular a média do aluno.

    Se o aluno passou no bimestre, dar os
    parabéns.

    Se o aluno não passou no bimestre,
    motivar o aluno a dar seu melhor na prova
    de reucperação.

    Em ambos os casos, mostre uma mensagem com o nome
    do aluno e a nota.
*/

let nomeAluno = prompt('Digite o nome do aluno: ')
let primeiraNota = prompt('Digite a primeira nota')
let segundaNota = prompt('Digite a segunda nota')
let terceiraNota = prompt('Digite a terceira nota')

let mediaAluno = ((Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota))/3 )

if(mediaAluno > 7.5) {
    alert(`O aluno ${nomeAluno} passou de ano com a nota ${mediaAluno}, parabéns você foi aprovado!`)
} else if(mediaAluno >= 6) {
    alert(`O aluno ${nomeAluno} está em recuperação com a nota ${mediaAluno}, falta pouco pra passar de ano, se esforçe!!!`)
} else {
    alert(`O aluno ${nomeAluno} não passou de ano com a nota ${mediaAluno}, você foi reprovado!`)
}