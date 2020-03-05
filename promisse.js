function enviarEmail(corpo, para){
    //o resolver ou o reject so pode ter um parametro, para pais deve se usado um json igual exemplo abaixo
    return new Promise((resolver, reject)=>{
        setTimeout(()=>{
            var deuerro = false; //<--- so mudar esse valor para verificar a promisse funcionando
            if(!deuerro){
                resolver({ nome: "gilmar", tempo: 6})
            }else{
                reject("nao foi possivel enviar :(")
            }   

        }, 3000)
    })
}

console.log("enviando email")

enviarEmail("corpo do email", "gilmar@gmail.com").then((dados)=>{
    console.log("email enviado com sucesso")
    console.log("usuario: " + dados.nome + " tempo:" + dados.tempo)
}).catch((erro)=>{
    console.log("erro ao enviar email " + erro)
})