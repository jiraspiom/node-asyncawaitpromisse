
//promessa
function pegarId(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(5)
        }, 1500)
    })
}

//promessa
function buscaEmailNobanco(email){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("gilmar@gmail.com")
        },2000)
    })
}

//promessa
function enviarEmail(mensague, email){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            var deuErro = true;
            if(!deuErro){
                resolve({tempo: 3, para:"gilmar@gmail.com"})
            }else{
                reject("fila cheia")
            }
        }, 3000)
    })
}



// console.log("inicio")

// pegaID().then((id)=>{
//     buscaEmailNobanco(id).then((email)=>{
//         enviarEmail("ola como vai", email).then(()=>{
//             console.log("email enviado, para o usuario id: " + id)
//         }).catch((erro)=>{
//             console.log("erro " + erro)
//         })
//     })
// })

// console.log("fim")

//resposta
async function principal(){
    var id = await pegarId();
    var email = await buscaEmailNobanco(id)

    enviarEmail("mensaguem", email).then(()=>{
        console.log("email enviado")
    }).catch((erro)=>{
        console.log("erro ai envar " + erro)
    })

}

principal()


async function principal2(){
    var id = await pegarId();
    var email = await buscaEmailNobanco(id)

    enviarEmail("mensaguem", email)

}

async function principal3(){
    var id = await pegarId();
    var email = await buscaEmailNobanco(id)
    try {
        enviarEmail("mensaguem", email)
        console.log("email enviado")
    } catch (error) {
        console.log(error)
    }
}
