async function lerArquivos(arquivo, id){
    let buscar = await fetch(arquivo)
    let convertido = await buscar.text() 

    document.getElementById(id).textContent = convertido
}

lerArquivos("livros.txt", "compras")
lerArquivos("lista.txt", "teste")