export interface IProduto {
  id: number;
  descricao: string;
  preco: number;
  descricaoPreco: string;
  imagem: string;
}

export const produtos = [
  { id: 1, descricao: "Mouse gamer Logitech", preco: 439.00, descricaoPreco: "À vista no PIX", imagem: "/assets/mouse-3.jpg" },
  { id: 2, descricao: "Monitor Apple", preco: 1200.50, descricaoPreco: "À vista no PIX", desconto: 2000.00, imagem: "/assets/monitor-1.jpg" },
  { id: 3, descricao: "Teclado HyperX", preco: 749.99, descricaoPreco: "À vista no PIX", imagem: "/assets/teclado-1.jpg" },
  { id: 4, descricao: "Fone HyperX", preco: 599.99, descricaoPreco: "À vista no PIX", imagem: "/assets/fone-de-ouvido-2.jpg" },
  { id: 5, descricao: "Fone de ouvido JBL", preco: 299.99, descricaoPreco: "À vista no PIX", imagem: "/assets/fone-de-ouvido-1.jpg" },
  { id: 6, descricao: "Fone de ouvido Kraken", preco: 399.99, descricaoPreco: "À vista no PIX", imagem: "/assets/fone-de-ouvido-3.jpg" },
  { id: 7, descricao: "HD 1TB", preco: 499.99, descricaoPreco: "À vista no PIX", imagem: "/assets/hd.jpg" },
  { id: 8, descricao: "Combo de placa de vídeos", preco: 18449.99, descricaoPreco: "À vista no PIX", imagem: "/assets/placa-video.jpg" },
  { id: 9, descricao: "Processador Ryzen", preco: 1000, descricaoPreco: "À vista no PIX", imagem: "/assets/processador.jpg" },
  { id: 10, descricao: "Notebook Dell", preco: 2500, descricaoPreco: "À vista no PIX", imagem: "/assets/laptop-1.jpg" },
  { id: 11, descricao: "Notebook Asus", preco: 4500, descricaoPreco: "À vista no PIX", imagem: "/assets/laptop-2.jpg" },
  { id: 12, descricao: "Mouse logitech", preco: 20, descricaoPreco: "À vista no PIX", imagem: "/assets/mouse-1.png" },
  { id: 13, descricao: "Mouse Fortrek", preco: 200, descricaoPreco: "À vista no PIX", imagem: "/assets/mouse-2.jpg" },
  { id: 14, descricao: "Mouse Redragon", preco: 50, descricaoPreco: "À vista no PIX", imagem: "/assets/mouse-4.jpg" },
  { id: 15, descricao: "Teclado Razer", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "/assets/teclado-2.jpg" },
]