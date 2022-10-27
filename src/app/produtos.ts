export interface IProduto {
  id: number;
  descricao: string;
  preco: number;
  descricaoPreco: string;
  quantidadeEstoque:number;
  imagem: string;
}

export interface IProdutoCarrinho extends IProduto{
  quantidade: number;
}

export const produtos: IProduto[] = [
  { id: 1, descricao: "Mouse gamer Logitech", preco: 439.00, descricaoPreco: "À vista no PIX", imagem: "/assets/mouse-3.jpg", quantidadeEstoque: 20 },
  { id: 2, descricao: "Monitor Apple", preco: 1200.50, descricaoPreco: "À vista no PIX", imagem: "/assets/monitor-1.jpg", quantidadeEstoque: 50 },
  { id: 3, descricao: "Teclado HyperX", preco: 749.99, descricaoPreco: "À vista no PIX", imagem: "/assets/teclado-1.jpg", quantidadeEstoque: 35 },
  { id: 4, descricao: "Fone HyperX", preco: 599.99, descricaoPreco: "À vista no PIX", imagem: "/assets/fone-de-ouvido-2.jpg", quantidadeEstoque: 100 },
  { id: 5, descricao: "Fone de ouvido JBL", preco: 299.99, descricaoPreco: "À vista no PIX", imagem: "/assets/fone-de-ouvido-1.jpg", quantidadeEstoque: 74 },
  { id: 6, descricao: "Fone de ouvido Kraken", preco: 399.99, descricaoPreco: "À vista no PIX", imagem: "/assets/fone-de-ouvido-3.jpg", quantidadeEstoque: 34 },
  { id: 7, descricao: "HD 1TB", preco: 499.99, descricaoPreco: "À vista no PIX", imagem: "/assets/hd.jpg", quantidadeEstoque: 30 },
  { id: 8, descricao: "Combo de placa de vídeos", preco: 18449.99, descricaoPreco: "À vista no PIX", imagem: "/assets/placa-video.jpg", quantidadeEstoque: 47 },
  { id: 9, descricao: "Processador Ryzen", preco: 1000, descricaoPreco: "À vista no PIX", imagem: "/assets/processador.jpg", quantidadeEstoque: 12 },
  { id: 10, descricao: "Notebook Dell", preco: 2500, descricaoPreco: "À vista no PIX", imagem: "/assets/laptop-1.jpg", quantidadeEstoque: 18 },
  { id: 11, descricao: "Notebook Asus", preco: 4500, descricaoPreco: "À vista no PIX", imagem: "/assets/laptop-2.jpg", quantidadeEstoque: 14 },
  { id: 12, descricao: "Mouse logitech", preco: 20, descricaoPreco: "À vista no PIX", imagem: "/assets/mouse-1.png", quantidadeEstoque: 30 },
  { id: 13, descricao: "Mouse Fortrek", preco: 200, descricaoPreco: "À vista no PIX", imagem: "/assets/mouse-2.jpg", quantidadeEstoque: 24 },
  { id: 14, descricao: "Mouse Redragon", preco: 50, descricaoPreco: "À vista no PIX", imagem: "/assets/mouse-4.jpg" , quantidadeEstoque: 42},
  { id: 15, descricao: "Teclado Razer", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "/assets/teclado-2.jpg", quantidadeEstoque: 34 },
]
