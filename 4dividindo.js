const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

//Vamos selecionar os 10 primeiros alunos para colocá-los na sala 1, usando o método slice(). Em inglês, o termo slice significa "fatiar" ou "dividir":

//slice
// alunos.slice(onde iniciar a divisão, onde termina) 
let sala01 = alunos.slice(0,10);
let sala02 = alunos.slice(10,20)
console.log(sala01)
console.log(sala02)

//usando o alunos.length