export class List__SummerView {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    template__summer() {
        return `
        <section class="produto__lista__imagem">
                    <figure class="produto__lista__imagem__borda">
                        <img class="produto__lista__imagem__tamanhos" src="https://static.riachuelo.com.br/RCHLO/11970979001/portrait/89022cd68aabf6e07193164b7a3af66763346c52.jpg?imwidth=700" alt="Camiseta Listras - Preto">
                        <div class="produto__lista__imagem__botao">
                            <button type='radio' class="produto__lista__imagem__botao__tamanho">P</button>
                            <button type='radio' class="produto__lista__imagem__botao__tamanho">M</button>
                            <button type='radio' class="produto__lista__imagem__botao__tamanho">G</button>
                        </div>
                    </figure>
                    <div class="produto__lista__texto">
                        <p>Camiseta Listras - Preto</p>
                    </div> 
                    <div class="produto__lista__preco">
                        <P>R$ 39,99</p>
                    </div>
                    <div class="produto__lista__botao">
                        <button class="produto__lista__botao__sacola" id="botao__produto5">Por na Sacola
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
                        <img class="produto__lista__imagem__tamanhos" src="https://static.riachuelo.com.br/RCHLO/14518708001/portrait/cbd4163100bd3b8a210f475be7553581db402ac7.jpg?imwidth=700'" alt="Blusa Feminina Manga Curta Onça Preto">
                        <div class="produto__lista__imagem__botao">
                            <button type="radio" name="P" class="produto__lista__imagem__botao__tamanho">P</button>
                            <button type="radio" name="M" class="produto__lista__imagem__botao__tamanho">M</button>
                            <button type="radio" name="G" class="produto__lista__imagem__botao__tamanho">G</button>
                        </div>
                    </figure>
                    <div class="produto__lista__texto">
                        <p>Blusa Feminina Manga Curta Onça Preto</p>
                    </div> 
                    <div class="produto__lista__preco">
                        <P>R$ 159,90</p>
                    </div>
                    <div class="produto__lista__botao">
                        <button class="produto__lista__botao__sacola" id="botao__produto6">Por na Sacola
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
                        <img class="produto__lista__imagem__tamanhos" src="https://static.riachuelo.com.br/RCHLO/14517736001/portrait/2008decddf20a922e8d12ad95aa1c37c6eced639.jpg?imwidth=700" alt="Blusa de Moletom Feminina Animal Print Zebra Branco">
                        <div class="produto__lista__imagem__botao">
                            <button type="radio" name="P" class="produto__lista__imagem__botao__tamanho">P</button>
                            <button type="radio" name="M" class="produto__lista__imagem__botao__tamanho">M</button>
                            <button type="radio" name="G" class="produto__lista__imagem__botao__tamanho">G</button>
                        </div>
                    </figure>
                    <div class="produto__lista__texto">
                        <p>Blusa de Moletom Feminina Animal Print Zebra Branco</p>
                    </div> 
                    <div class="produto__lista__preco">
                        <P>R$ 79,90</p>
                    </div>
                    <div class="produto__lista__botao">
                        <button class="produto__lista__botao__sacola" id="botao__produto7">Por na Sacola
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
                        <img class="produto__lista__imagem__tamanhos" src="https://static.riachuelo.com.br/RCHLO/14517582002/portrait/cac5d2b3ea922d94ca17bdb6813a3129b1bdbfea.jpg?imwidth=700" alt="Blusa Feminina Ampla Listrada Preto">
                        <div class="produto__lista__imagem__botao">
                            <button type="radio" name="P" class="produto__lista__imagem__botao__tamanho">P</button>
                            <button type="radio" name="M" class="produto__lista__imagem__botao__tamanho">M</button>
                            <button type="radio" name="G" class="produto__lista__imagem__botao__tamanho">G</button>
                        </div>
                    </figure>
                    <div class="produto__lista__texto">
                        <p>Blusa Feminina Listrada Preto</p>
                    </div> 
                    <div class="produto__lista__preco">
                        <P>R$ 89,90</p>
                    </div>
                    <div class="produto__lista__botao">
                        <button class="produto__lista__botao__sacola" id="botao__produto8">Por na Sacola
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
    update() {
        this.element.innerHTML = this.template__summer();
    }
}
