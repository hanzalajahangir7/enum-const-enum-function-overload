// enum Days{
//     // we assume the value 1 to monday
//     monday = 1,
//     tuesday,
//     wednesday
// }

// console.log(Days)
// console.log(Days.tuesday)
// console.log(Days[3]) 


// ANY DATA TYPE

// let val1 :any
// val1 = "hanzala"
// val1 = 32
// val1 = null
// val1 = undefined

// console.log(val1)

// UNKNOWN DATA TYPE

// let val1 :unknown
// val1 = "hanzala"
// val1 = 32
// val1 = undefined
// val1 = null
// console.log(val1)

// let val4:unknown = 2
// console.log(val4)


// NEVER DATA TYPE 
// function abc():never{
//     while(true)
// }
// console.log(abc)

// TYPE CASTING
// let name1  : unknown = 4 as unknown as string
// console.log(name1)

// function default parameter
// function abc(name:string="user"){
//     console.log(`hello ${name}`)
// }
// console.log(abc())
// console.log("hanzala")

// Function Rest parameter

// function abc(name:string,...teacherName:string[]){
//     console.log(`hello ${name},${teacherName}`)
// }


// console.log(abc("hanzala","mohteshim","ahmed"))

// optional parameter of function
 
// function greet(name?:string){
//     console.log(`hello how are you ${name}`)
// }

// console.log(greet("ahmed"))


// rest and optional function are pretty bit the same


// function greet(name:string,greeting?:string[]){
//     if(greeting)
//         console.log(`${greeting},${name}`)
//     else
//     console.log(`hello ${name}`)
// }

// console.log(greet("hanzala"))

// function overload

// function goods(age:string):string
// function goods(age:number):number
// function goods(age:boolean):boolean
// function goods(age:any){
//     console.log(`these are the goods ${age}`)
//     return age
// }

// goods(true)
// goods(56)
// goods("hanzala")

