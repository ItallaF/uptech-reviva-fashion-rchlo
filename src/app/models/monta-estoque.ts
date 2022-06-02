export interface product__tamanho {
        p: string;
        m: string;
        g: string;
    }
    
export interface product__image {
        url: string;
        descricao: string;   
      }
      
      
export interface product__stock {
    id: number;
    nome: string;
    url: string;
    preco: number;
    descricao: string;
    tamanhos_disponiveis: product__tamanho[];
    quantidade_disponiveis: number;
    secao: number;
    imagens: product__image[];
}