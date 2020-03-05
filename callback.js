function enviarEmail(para, corpo, callback) {
    setTimeout(() => {
        console.log('Para: ' + para + "mensagem: " + corpo)

        var deuErro = false // <---- so mudar esse parametro para testar o callback

        if (deuErro) {
            callback(12, "envio falhou")

        } else {
            callback(12)
        }
    }, 2000)
}

enviarEmail("alef@gmail.com", "oi filho tudo bem", (tempo, error) => {
    if (error == undefined) {
        console.log('Tudo ok, tempo de envio: ' + tempo)
    } else {
        console.log("ocorreu um erro: " + error)
    }

})

console.log("iniciando envio de email")
