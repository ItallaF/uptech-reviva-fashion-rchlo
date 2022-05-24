/*
const produtos = Object.keys(localStorage);

for (let produto of produtos) {
    const produtos__armazenado = JSON.parse(localStorage.getItem(produto));
        
    const conteinner = document.createElement('section');
    document.querySelector('.produto__lista__conteudo').appendChild(conteinner);
    conteinner.classList.add('produto__lista__imagem', `produto__lista__imagem-${produtos__armazenado.id}`,);
    
    const conteinner__produto__descricao = document.createElement('div');
    document.querySelector('.produto__lista__imagem').appendChild(conteinner__produto__descricao);
    conteinner__produto__descricao.classList.add('produto__lista__imagem__borda', `produto__lista__imagem__borda-${produtos__armazenado.id}`);
    
    const conteinner__produto__imagem = document.createElement('img');
    document.querySelector('.produto__lista__imagem__borda').appendChild(conteinner__produto__imagem);
    conteinner__produto__imagem.classList.add('produto__lista__imagem__tamanhos', `produto__lista__imagem__tamanhos-${produtos__armazenado.id}`,)
    conteinner__produto__imagem.setAttribute('src', `${produtos__armazenado.imagens[0].url}`);
    console.log(conteinner__produto__imagem)
}
*/