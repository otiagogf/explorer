/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

let listPatients = [
    {
        name: "Luiz",
        age: 20,
        weight: 100,
        height: 190,
      },
      {
        name: "Alexandra",
        age: 27,
        weight: 70,
        height: 170,
      },
      {
        name: "Carlos",
        age: 42,
        weight: 90,
        height: 180,
      },
]

function imc(weight, height) {
    return (weight /((height / 100) ** 2).toFixed(2))
}

function printImc(patient) {
    return `O paciente ${patient.name} possui o IMC
    de ${imc(patient.weight, patient.height)}` 
}

for (let patient of listPatients) {
    let IMCmessage = printImc(patient)
    alert(IMCmessage)
  }