let urlProduto = "https://raw.githubusercontent.com/Daiane489/Meu-Curso-Fullstack/master/M%C3%B3dulo%2002/07%20-%20Intera%C3%A7%C3%A3o%20com%20API/Aula%2004/Atividade/produto.json"

async function procurar(){
    let resposta = await fetch(urlProduto)
    let produto = await resposta.json()
    console.log(produto) 

    for (let produto in produto){

        document.body.innerHTML += `
            <div class= "card"> 
                <img 
                src="${produto[produto].img}" 
                alt= "Não renderizou" 
                width= "auto" 
                height= "150"
            >
            
            </div>
            `
    }
}
