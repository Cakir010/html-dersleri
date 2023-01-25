// const doSomething = callback => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       callback(false, skills)
//     }, 2000)
//   }

//   doSomething((err, result) => {
//     if (err) {
//       return console.log(err)
//     }
//     return console.log(result)
//   })

//   // Promise
// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       if (skills.length > 0) {
//         resolve(skills)
//       } else {
//         reject('Something wrong has happened')
//       }
//     }, 2000)
//   })

//   doPromise
//     .then(result => {
//       console.log(result)
//     })
//     .catch(error => console.log(error))

// // Promise
// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       if (skills.includes('Node')) {
//         resolve('fullstack developer')
//       } else {
//         reject('Something wrong has happened')
//       }
//     }, 2000)
//   })

//   doPromise
//     .then(result => {
//       console.log(result)
//     })
//     .catch(error => console.error(error))

// const url = 'https://restcountries.com/v2/all' // countries api
// fetch(url)
//   .then(response => response.json()) // accessing the API data as JSON
//   .then(data => {
//     // getting the data
//     console.log(data)
//   })
//   .catch(error => console.error(error)) // handling error if something wrong happens

const url = 'https://restcountries.com/v2/all'
let formation = [];
fetch(url)
  .then(response => response.json())
    .then(data => {
      
        data.forEach(({ name, languages, population, area }) => {
        console.log([name, languages, population, area] );  
      });
        
  })
  .catch(error => console.error(error))


//   const fetchData = async () => {
//     try {
//       const response = await fetch(url)
//       const countries = await response.json()
//       console.log(countries)
//     } catch (err) {
//       console.error(err)
//     }
//   }
//   console.log('===== async and await')
//   fetchData()












