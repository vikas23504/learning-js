// function pizza(){
//     return new Promise ((resolve , reject)=>{
//         setTimeout(()=>{
//             resolve("aoka pizza bn gya")
//         },3000)
//     })
// }
// async function orderPizza() {
//     console.log("async wala part suru ho gya");
//     const msg = await pizza();
//     console.log(msg);

//     console.log("main khatam hogya");
         
// }

// orderPizza();

// function order(){
//     return new Promise ((resolve , reject)=>{
//         setTimeout(()=>{
//             resolve("mai saman le aya");
            
//         },2000)
//     })
// }
//  async function call() {
//     console.log("ja saman le aa");

//     let odr = await order();
//     console.log(odr);

//     console.log("ok ab rest kr");
    
    
    
//  }

//  call();

function getData(){
    return new Promise ((resolve , reject)=>{
        let sucess = true;
        
        if(sucess){
            resolve("data mil gya")
        }else{
            reject("data nhi mila")
        }
    })
}

async function check() {
    try{
        let res = await getData();
        console.log(res);
        
    }catch(err){
        console.log(err);
    }

}
check();