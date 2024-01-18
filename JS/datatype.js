// var a=5
// var a=6
// console.log(a)
//  let b= true
//  console.log(b)






// //  operatoe
// console.log(5==5)
// console.log(5=='5')
// console.log
//////













////////function
// function fn(a,b){
//     console.log(a,b)
// }
// fn(5,6)
// second way
// const fun=(a,b)=>{
//     console.log(a+b)
//     // return a+b
// }
// fun(5,5)
////object
// let obj={
//     name:'Aman',
//     age:50,
//     gender:'m',
//     isPass:false
// }

// console.log(obj.age)
//////add two string
// console.log('aman'+ " "+ 'sagar')

// let fname='aman'
// let lastname='sager'
// console.log(`${fname}   ${lastname}`)


// function   fullname(anything){
//     console.log(`${anything.name1} ${anything.lastname}`)
// }
// let obj={
//     name1:'aman',
//     lastname:'sagar',
// }

// fullname(obj)
///////////////////////// arryas in javas?\//////////////////////////////////////////
// let arr=['yogi', 'jogi', 'shgar',230]
// console.log(arr[0])
////////////////////////////call by funcation///////////////////////////////



// let obj={
//     name1:'hello',
//     name2:'hii',
//     fullname: function(){
//         console.log(this.name1+this.name2)
//     }
// }
// obj.fullname()
////////////////////////////////************arrya  looops//////////////////////
 //let arr=[1,2,4,6,5,7]
// let newb=arr.map((ele,id,arr)=>{
//     // console.log(ele,id,arr)
//     return ele

// })
// console.log(newb)






// for(let i in arr){
//     console.log(i)
// }

// for(let i of arr){
//     console.log(i)
// }


//  let newa=arr.forEach((ele,index,a)=> {
//    // console.log(ele,index,a)
//     ////////////////never return ///////////return undefined///////////
//     return ele
//  })
//  console.log(newa)
// var add=0
// for(let i of arr){
//     add=add+i;

// }
// console.log(add)


////////////////////////////////reduce/////////////////////////////
//    let n= arr.reduce((a,b,index,arr)=>{
//     return a+b

//    })
  // console.log(n)
////////////////filter/////////////////////////////////////
// let filter= arr.filter((ele)=>{
//     return ele>5

// })
// console.log(filter)
/////////////////////question///////////////////
// let arr=[1,2,3,4,5,6,7,8]
// let filter= arr.filter((ele)=>{
//     return ele>3
// })
// console.log(filter)
// let n= arr.reduce((a,b,index,arr)=>{
//     return a+b

// })
// console.log(n)


// let arr=[{
//     name:'hello',
//     id:1

// },{
//     name:'hii',
//     id:2
// }
// ]
// arr.map((ele)=>{
//     console.log(ele.id)
// })

// let user='hello'
// function add(){
//     return 5
//     let num=5
//     console.log(num)
// }
// console.log(user)
// let a=add()
// console.log(a)
// function outer(){
//   inner()
//   var num=5
//   function inner(){
//     console.log(num)
//   }
// }
// outer()

/////////////////////////////hoisting/////////////////////////
// let a
// console.log(a)
//  a=5


/////////////////////////////////////////////////////////////////////////////
// {
// var a=5
// console.log(a)
// }
// console.log(a)
/////////////////////////////higher order 
// function outer(a){
//   console.log('outer')
//   a()
// }
// function inner(){
//   console.log('inner')
// }
// outer(inner)
// function outer(){
//   console.log('outer')
//   function inner(){
//     console.log('inner')
//   }
//   return inner
// }
// let inner=outer()
// inner()
//let arr=[1,2,3,4 ,'hello','hii',true,false]

function outer(){
  let user="hello"
  function inner(){
    console.log(user)
    
  }
  inner()
 // return inner
}
let a=outer()
a()