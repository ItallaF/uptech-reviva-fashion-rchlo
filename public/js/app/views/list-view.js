import { View } from "./view.js";
export class List__LaunchView extends View {
    template(model, isSecondarylist) {
        //const list = isSecondarylist?model.exibir().slice(4,8): model.exibir.slice(0,4)
        return `
            <div class="produto__lista__conteudo">
                <section class="produto__lista__imagem">
                ${model.list().map((product__stock) => {
            return `
                    <figure class="produto__lista__imagem__borda">
                        <img class="produto__lista__imagem__tamanhos" src=${product__stock.imagens[0].url} alt=${product__stock.imagens[0].descricao}>
                        <div class="produto__lista__imagem__botao">
                            <button type='radio' class="produto__lista__imagem__botao__tamanho">P</button>
                            <button type='radio' class="produto__lista__imagem__botao__tamanho">M</button>
                            <button type='radio' class="produto__lista__imagem__botao__tamanho">G</button>
                        </div>
                    </figure>
                    `;
        })}
                    <div class="produto__lista__texto">
                        <p>Camiseta Reviva, k22 - Preto</p>
                    </div> 
                    <div class="produto__lista__preco">
                        <P>R$ 39,99</p>
                    </div>
                    <div class="produto__lista__botao">
                        <button class="produto__lista__botao__sacola" id="botao__produto1" >Por na Sacola
                            <div class="produto__lista__botao__svg">
                                <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 5.98944C6 2.68134 8.68393 0 12 0C15.3161 0 18 2.68134 18 5.98944V8.55634H21.4286C22.8482 8.55634 24 9.7061 24 11.1232V22.2465C24 25.0808 21.6964 27.3803 18.8571 27.3803H5.14286C2.3025 27.3803 0 25.0808 0 22.2465V11.1232C0 9.7061 1.15125 8.55634 2.57143 8.55634H6V5.98944ZM8.57143 8.55634H15.4286V5.98944C15.4286 4.09902 13.8911 2.5669 12 2.5669C10.1089 2.5669 8.57143 4.09902 8.57143 5.98944V8.55634ZM7.28571 13.6901C7.99821 13.6901 8.57143 13.1179 8.57143 12.4067C8.57143 11.6954 7.99821 11.1232 7.28571 11.1232C6.57321 11.1232 6 11.6954 6 12.4067C6 13.1179 6.57321 13.6901 7.28571 13.6901ZM16.7143 11.1232C16.0018 11.1232 15.4286 11.6954 15.4286 12.4067C15.4286 13.1179 16.0018 13.6901 16.7143 13.6901C17.4268 13.6901 18 13.1179 18 12.4067C18 11.6954 17.4268 11.1232 16.7143 11.1232Z" fill="white"/>
                                </svg>                        
                            </div>
                        </button>               
                    </div>
                </section>
                <section class="produto__lista__imagem">
                    <figure class="produto__lista__imagem__borda">
                        <img class="produto__lista__imagem__tamanhos" src="https://static.riachuelo.com.br/RCHLO/14418436003/portrait/8d1a61026377358b3dda9f4f3bbbe0348fbdc2aa.jpg?imwidth=700'" alt="Short Feminino Clochard Amarração Abstrato Preto">
                        <div class="produto__lista__imagem__botao">
                            <button type="radio" name="P" class="produto__lista__imagem__botao__tamanho">P</button>
                            <button type="radio" name="M" class="produto__lista__imagem__botao__tamanho">M</button>
                            <button type="radio" name="G" class="produto__lista__imagem__botao__tamanho">G</button>
                        </div>
                    </figure>
                    <div class="produto__lista__texto">
                        <p>Short Feminino Clochard Amarração Abstrato Preto</p>
                    </div> 
                    <div class="produto__lista__preco">
                        <P>R$ 39,99</p>
                    </div>
                    <div class="produto__lista__botao">
                        <button class="produto__lista__botao__sacola" id="botao__produto2">Por na Sacola
                            <div class="produto__lista__botao__svg">
                                <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 5.98944C6 2.68134 8.68393 0 12 0C15.3161 0 18 2.68134 18 5.98944V8.55634H21.4286C22.8482 8.55634 24 9.7061 24 11.1232V22.2465C24 25.0808 21.6964 27.3803 18.8571 27.3803H5.14286C2.3025 27.3803 0 25.0808 0 22.2465V11.1232C0 9.7061 1.15125 8.55634 2.57143 8.55634H6V5.98944ZM8.57143 8.55634H15.4286V5.98944C15.4286 4.09902 13.8911 2.5669 12 2.5669C10.1089 2.5669 8.57143 4.09902 8.57143 5.98944V8.55634ZM7.28571 13.6901C7.99821 13.6901 8.57143 13.1179 8.57143 12.4067C8.57143 11.6954 7.99821 11.1232 7.28571 11.1232C6.57321 11.1232 6 11.6954 6 12.4067C6 13.1179 6.57321 13.6901 7.28571 13.6901ZM16.7143 11.1232C16.0018 11.1232 15.4286 11.6954 15.4286 12.4067C15.4286 13.1179 16.0018 13.6901 16.7143 13.6901C17.4268 13.6901 18 13.1179 18 12.4067C18 11.6954 17.4268 11.1232 16.7143 11.1232Z" fill="white"/>
                                </svg>                        
                            </div>
                        </button>               
                    </div>
                </section>
                <section class="produto__lista__imagem">
                    <figure class="produto__lista__imagem__borda">
                        <img class="produto__lista__imagem__tamanhos" src="https://static.riachuelo.com.br/RCHLO/14419580001/portrait/742714c9654a097c6da7a05512b66521dcad621a.jpg?imwidth=700" alt="Calça Feminina Pantalona Cintura Alta Amarração Linho Folhagem Branco">
                        <div class="produto__lista__imagem__botao">
                            <button type="radio" name="P" class="produto__lista__imagem__botao__tamanho">P</button>
                            <button type="radio" name="M" class="produto__lista__imagem__botao__tamanho">M</button>
                            <button type="radio" name="G" class="produto__lista__imagem__botao__tamanho">G</button>
                        </div>
                    </figure>
                    <div class="produto__lista__texto">
                        <p>Calça Feminina Pantalona Cintura Alta Amarração Linho</p>
                    </div> 
                    <div class="produto__lista__preco">
                        <P>R$ 39,99</p>
                    </div>
                    <div class="produto__lista__botao">
                        <button class="produto__lista__botao__sacola" id="botao__produto3">Por na Sacola
                            <div class="produto__lista__botao__svg">
                                <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 5.98944C6 2.68134 8.68393 0 12 0C15.3161 0 18 2.68134 18 5.98944V8.55634H21.4286C22.8482 8.55634 24 9.7061 24 11.1232V22.2465C24 25.0808 21.6964 27.3803 18.8571 27.3803H5.14286C2.3025 27.3803 0 25.0808 0 22.2465V11.1232C0 9.7061 1.15125 8.55634 2.57143 8.55634H6V5.98944ZM8.57143 8.55634H15.4286V5.98944C15.4286 4.09902 13.8911 2.5669 12 2.5669C10.1089 2.5669 8.57143 4.09902 8.57143 5.98944V8.55634ZM7.28571 13.6901C7.99821 13.6901 8.57143 13.1179 8.57143 12.4067C8.57143 11.6954 7.99821 11.1232 7.28571 11.1232C6.57321 11.1232 6 11.6954 6 12.4067C6 13.1179 6.57321 13.6901 7.28571 13.6901ZM16.7143 11.1232C16.0018 11.1232 15.4286 11.6954 15.4286 12.4067C15.4286 13.1179 16.0018 13.6901 16.7143 13.6901C17.4268 13.6901 18 13.1179 18 12.4067C18 11.6954 17.4268 11.1232 16.7143 11.1232Z" fill="white"/>
                                </svg>                        
                            </div>
                        </button>               
                    </div>
                </section>
                <section class="produto__lista__imagem">
                    <figure class="produto__lista__imagem__borda">
                        <img class="produto__lista__imagem__tamanhos" src="https://static.riachuelo.com.br/RCHLO/14387026002/portrait/56491dfb5db49bc817c150c3b8f742071de2549f.jpg?imwidth=700" alt="Sueter Masculina Manga Longa Tricot Azul Escuro Pool">
                        <div class="produto__lista__imagem__botao">
                            <button type="radio" name="P" class="produto__lista__imagem__botao__tamanho">P</button>
                            <button type="radio" name="M" class="produto__lista__imagem__botao__tamanho">M</button>
                            <button type="radio" name="G" class="produto__lista__imagem__botao__tamanho">G</button>
                        </div>
                    </figure>
                    <div class="produto__lista__texto">
                        <p>Suéter Masculina Manga Longa Tricot Azul Escuro</p>
                    </div> 
                    <div class="produto__lista__preco">
                        <P>R$ 89,90</p>
                    </div>
                    <div class="produto__lista__botao">
                        <button class="produto__lista__botao__sacola" id="botao__produto4">Por na Sacola
                            <div class="produto__lista__botao__svg">
                                <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 5.98944C6 2.68134 8.68393 0 12 0C15.3161 0 18 2.68134 18 5.98944V8.55634H21.4286C22.8482 8.55634 24 9.7061 24 11.1232V22.2465C24 25.0808 21.6964 27.3803 18.8571 27.3803H5.14286C2.3025 27.3803 0 25.0808 0 22.2465V11.1232C0 9.7061 1.15125 8.55634 2.57143 8.55634H6V5.98944ZM8.57143 8.55634H15.4286V5.98944C15.4286 4.09902 13.8911 2.5669 12 2.5669C10.1089 2.5669 8.57143 4.09902 8.57143 5.98944V8.55634ZM7.28571 13.6901C7.99821 13.6901 8.57143 13.1179 8.57143 12.4067C8.57143 11.6954 7.99821 11.1232 7.28571 11.1232C6.57321 11.1232 6 11.6954 6 12.4067C6 13.1179 6.57321 13.6901 7.28571 13.6901ZM16.7143 11.1232C16.0018 11.1232 15.4286 11.6954 15.4286 12.4067C15.4286 13.1179 16.0018 13.6901 16.7143 13.6901C17.4268 13.6901 18 13.1179 18 12.4067C18 11.6954 17.4268 11.1232 16.7143 11.1232Z" fill="white"/>
                                </svg>                        
                            </div>
                        </button>               
                    </div>
                </section>
        `;
    }
}
