
function pegarUsuarios() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { nome: "gilmar", idade: 40 },
                { nome: "aldinaura", idade: 40 },
                { nome: "alef", idade: "8" }
            ])
        }, 3000)
    })
}

pegarUsuarios().then((retorno) => {
    console.log(retorno)
})

//pegarUsuarios().then((retorno) => {
//})
// ou assim
//var usuarios = await pegarUsuarios();


//espere a promisse ser concluida e me retorne o resultado
async function principal(){
    var usuarios = await pegarUsuarios();
    console.log(usuarios)
}

principal()