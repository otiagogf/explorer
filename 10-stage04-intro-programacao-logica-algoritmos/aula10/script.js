const patients = [
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
  
  let patientsNames = []
  let patientsAge = []
  let patientsWeight = []
  let patientsHeight = []
  
  for(let patient of patients) {
    patientsNames.push(patient.name)
    patientsAge.push(patient.age)
    patientsWeight.push(patient.weight)
    patientsHeight.push(patient.height)
  }

  for(let patient of patients) {
    console.log(`Os pacientes ${patientsNames.name} possuem ${patientsAge} de idade,
    pesam ${patientsWeight}kg e medem ${patientsHeight}`)
  }