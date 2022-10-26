// let count = 0;

// const countInterval = setInterval(() => {
//     count++
//     if(count >= 3) {
//         clearInterval(countInterval)
//     }
//     console.log(count)
// }, 1000)


// let promise = new Promise((resolve, reject) => {

//     setTimeout(() => {
//       resolve("result");
//     }, 1000);
  
//   });

//   promise
//     .then(
//       result => {
//         alert("Fulfilled: " + result); // result - аргумент resolve
//       },
//       error => {
//         alert("Rejected: " + error); // error - аргумент reject
//       }
//     );



// const delay = (ms) => {
//   return new Promise(r => setTimeout(() => r(), ms))
// }
// const url = 'https://jsonplaceholder.typicode.com/todos';

// function fetchTodos() {
//   console.log('Fetch todo started...')
//   return delay(2000).then(() => {
//     return fetch(url)
//   }).then(r => r.json())
// }

// fetchTodos()
//   .then(data => {
//     console.log('Data:' , data)
//   })

// delay(2000).then(() => console.log('2 sec'));


// async function

// async function fetchAsyncTodos() {
//   try {
//     console.log('Fetch todo started...')
//     await delay(2000)
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log('Data:' , data)
//   } catch (e) {
//     console.error(e)
//   } finally {
//     console.log('ppp')
//   }
// }

// fetchAsyncTodos()

// console.log('Request data...')

// setTimeout(() => {
//   console.log('Preparing data...')

//   const backendData = {
//     name: 'ildar',
//     age: 17,
//     city: 'Bishkek',
//   }

//   setTimeout(() => {
//     backendData.national = 'Tatarin'
//     console.log('Data received', backendData)
//   }, 2000)

// }, 2000)

// const p = new Promise((resolve , reject) => {
//   setTimeout(() => {
//     console.log('Preparing data...')
//     const backendData = {
//       name: 'ildar',
//       age: 17,
//       city: 'Bishkek',
//     }
//     resolve(backendData)
//   }, 2000)
// })
//   p.then(data => {
//       return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//           data.national = 'Tatarin';
//           resolve(data)
//         }, 2000)
//       })
//     }).then(clientData => {
//       console.log('Data received', clientData)
//     })




// prototype

// const person = new Object({
//   name: 'Ilham',
//   age: 14,
//   greet: function() {
//     console.log('Greet !')
//   }
// })

// Object.prototype.sayHello = function() {
//   console.log('Hello')
// }

// const gena = Object.create(person)
// gena.name = 'Gena';

// const i = new String('abcdefg')



//

function hello() {
  console.log('Hello!' , this)
}
const person = {
  name: 'Ildar',
  age: 17,
  sayHello: hello,
  sayHelloWindow: hello.bind(this),
  logInfo: function(job, phone) {
    console.group(`${this.name} info:`)
    console.log(`Name is: ${this.name}`);
    console.log(`Age is: ${this.age}`);
    console.log(`Job is: ${job}`);
    console.log(`Phone is: ${phone}`);
    console.groupEnd()
  }
}

const gena = {
  name: 'Gena',
  age: 23
}

// person.logInfo.bind(gena, 'FrontEnd' , '+996 0553-88-75-95')()
// person.logInfo.call(gena, 'FrontEnd' , '+996 0553-88-75-95')
person.logInfo.apply(gena, ['FrontEnd' , '+996 0553-88-75-95']);


const array = [1, 2, 3, 4, 5,];

// function multBy(arr, n) {
//   return arr.map(function(i) {
//     return i * n
//   })
// }

Array.prototype.multBy = function(n) {
    return this.map(function(i) {
    return i * n
  })
}
console.log(array.multBy(2))