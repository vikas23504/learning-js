// let promise = new Promise((resolve , reject)=>{
//     let sucess = false;
    
//     if(sucess){
//        resolve("kaam ho gya");
       
//     }else{
//        reject("kaam nhi hua");
       
//     }
// });


// promise
// .then(res => console.log(res))
// .catch(err => console.log(err))


// function makrBurgur(){
//     return new Promise((resolve , reject) =>{
//         setTimeout(()=>{
//             let burgurReady = 0;

//             if(burgurReady){
//                 resolve("apka burgur ready hai");
//             }else{
//                 reject("apka burgur ready nhi hai");
//             }
//         },3000)
//     })
// }

// makrBurgur()
// .then((message)=>{
//     console.log(message);
    
// })
// .catch((err)=>{
//     console.log(err);
    
// })
// .finally(()=>{
//     console.log("work done");
    
// })


// let promise = new Promise((resolve , reject)=>{
//     let value = true;
//     if(value){
//     setTimeout(()=>{
//     resolve("promises resloved")
//     },2000)
        
//     }else{
//         reject("promise not resolve")
//     }
// })

// promise
// .then((res)=>{
//     console.log(res);
    
// })
// .catch((err)=>{
//     console.log(err);
// })
// .finally(()=>{
//     console.log("Task complete");
    
// }

// function delayHello(){
//     return new Promise((resolve , reject)=>{

    
//      let msg = setTimeout(()=>{
//         resolve("hello world")
//      },2000)

//     })  

// }

// delayHello()
// .then((msg)=>{
//     console.log(msg);
    
// })


// let promise = new Promise((resolve , reject)=>{
//     let output = setTimeout(() => {
//         reject("reject")
//     },1.500);
// })
// promise.catch((err)=>{
//     console.log(err);
    
// })


// promise chaining

new Promise((resolve , reject)=>{
    resolve(5)
})
.then((num)=>{
    console.log(num*2);
    return num*2;
})
.then((num)=>{
    console.log(num+10);
    return num+10
})
.then((num)=>{
    console.log(num*3);
    return num*3;
})
.catch((err)=>{
    console.log("error" , err);
    
})

// promise all 

const promise1 = new Promise((resolve ,reject)=>{
    setTimeout(()=>{
        resolve("1sr is resolve")
    },1000)
})
const promise2 = new Promise((resolve ,reject)=>{
    setTimeout(()=>{
        resolve(" 2nd is resolve")
    },1500)
})

const promise3 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve("3rd is resolve")
    },2000)
})

Promise.all([promise1,promise2,promise3])
.then((result)=>{
    console.log(result);
    
})
.catch((error)=>{
    console.log("kisi ek mai error aa gya " , error);
    
})