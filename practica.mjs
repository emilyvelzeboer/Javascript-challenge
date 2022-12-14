const students = [{
  age: 32,
  examScores: [1],
  gender: 'male',
  name: 'edu'
},
{
  age: 29,
  examScores: [5],
  gender: 'female',
  name: 'silvia'
},
{
  age: 18,
  examScores: [6],
  gender: 'female',
  name: 'emily'
},
{
  age: 21,
  examScores: [8],
  gender: 'female',
  name: 'anna'
},
{
  age: 19,
  examScores: [7],
  gender: 'female',
  name: 'paloma'
}]

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];


//1- Mostrar en formato de tabla todos los alumnos.
console.table(students);

//2- Mostrar por consola la cantidad de alumnos que hay en clase.
console.log('number of students: ', students.length);

//3- Mostrar por consola todos los nombres de los alumnos.
function getName(object) {
  console.log(object.name);
}

students.forEach(getName);

//4- Eliminar el último alumno de la clase.
students.pop();

//5- Eliminar un alumno aleatoriamente de la clase.
students.splice(Math.floor(Math.random() * students.length), 1);

//6- Mostrar por consola todos los datos de los alumnos que son chicas.
const girls = students.filter(student => student.gender === 'female');
console.table(girls);

// 7- Mostrar por consola el número de chicos y chicas que hay en la clase.
const numOfFemaleStudents = students.filter(student => student.gender === 'female').length;
const numOfMaleStudents = students.filter(student => student.gender === 'male').length;
console.log('number of female students: ', numOfFemaleStudents);
console.log('number of male students: ', numOfMaleStudents);

// 8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.
const AreOnlyGirls = students.every(student => student.gender === 'female');
console.log(AreOnlyGirls);

// 9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
const studentsFrom20To25 = students.filter(student => student.age >= 20 && student.age <= 25);
studentsFrom20To25.forEach(getName);

// 10- Añadir un alumno nuevo con los siguientes datos:
// nombre aleatorio.
// edad aleatoria entre 20 y 50 años.
// género aleatorio.
// listado de calificaciones vacío.
// ¡OJO!, el nombre y el género tienen que ir acordes.

let randomGender = availableGenders[Math.floor(Math.random() * availableGenders.length)];

let randomName;

if (randomGender === 'female') {
  randomName = availableFemaleNames[Math.floor(Math.random() * availableFemaleNames.length)];
} else {
  randomName = availableMaleNames[Math.floor(Math.random() * availableMaleNames.length)];
}

function calculateRandomNumber (min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) +min;
    return randomNumber
}

let randomAge = calculateRandomNumber (20, 50);

students.push({
    age: randomAge,
    examScores: [],
    gender: randomGender,
    name: randomName
})

console.table(students)

// 11- Mostrar por consola el nombre de la persona más joven de la clase.
// ¡OJO!, si varias personas de la clase comparten la edad más baja, cualquiera de ellos es una respuesta válida.

students.sort(function(a, b) { 
  return b.age - a.age 
}) 

let youngestStudent = students.filter(student => student.age == students.at(-1).age);

youngestStudent.forEach(getName);


// 12- Mostrar por consola la edad media de todos los alumnos de la clase.

const averageAge = students.reduce((a, b) => a + b.age, 0) / students.length;
console.log('The average age is: ', averageAge);

// 13- Mostrar por consola la edad media de las chicas de la clase.
const girlsAverageAge = girls.reduce((a, b) => a + b.age, 0) / girls.length;
console.log('The average age of girls is: ', girlsAverageAge);


// 14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.

students.forEach(function(student) {
  student.examScores.push(calculateRandomNumber(0,10));
})


// 15- Ordenar el array de alumnos alfabéticamente según su nombre.
console.log(students.sort((a, b) => a.name.localeCompare(b.name)));

// 16- Mostrar por consola el alumno de la clase con las mejores notas.
// El alumno con mejores notas es aquel cuyo sumatorio de todas sus notas es el valor más alto de todos.

let lista_student_note = [];

students.forEach(function(student) {
    let total = student.examScores.reduce((a,b) => a + b, 0);
    lista_student_note.push([student.name, total])
})

lista_student_note.sort(function(a, b){return b[1]-a[1]});

let highestNote = lista_student_note.filter(mark => mark[1] == lista_student_note.at(0)[1])

console.log(highestNote);


// 17- Mostrar por consola la nota media más alta de la clase y el nombre del alumno al que pertenece.
let lista_student_average = [];

students.forEach(function(student) {
    let total2 = student.examScores.reduce((a,b) => a + b, 0) / student.examScores.length;
    lista_student_average.push([student.name, total2])
})

lista_student_average.sort(function(a, b){return b[1]-a[1]});

let highestAverage = lista_student_average.filter(mark => mark[1] == lista_student_average.at(0)[1]);

console.log(highestAverage);


// 18- Añadir un punto extra a cada nota existente de todos los alumnos. Recordad que la nota máxima posible es 10. Si los alumnos aún no tienen registrada ninguna nota, les pondremos un 10.
students.forEach(function(student) {
  if (student.examScores.length > 0) {
      student.examScores = student.examScores.map(function(note) {
          if (note < 10) {
              return note += 1
              }
          else {
              return note
          }
           });
  } else if (student.examScores.length === 0){
      student.examScores.push(10)
  };
});

