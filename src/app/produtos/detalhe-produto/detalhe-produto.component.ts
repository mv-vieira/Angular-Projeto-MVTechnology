import { CarrinhoService } from './../../carrinho.service';
import { NotificacaoService } from './../../notificacao.service';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from './../../produtos.service';
import { Component, OnInit } from '@angular/core';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

  produto: IProduto | undefined

  quantidade = 1;


  constructor(
    private produtoService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.produtoService.getOne(produtoId);
  }

  adicionarAoCarrinho(){
    this.notificacaoService.notificarBottom("O produto foi adicionado ao carrinho!");
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    this.carrinhoService.adicionarAoCarrinho(produto);
  }

}
