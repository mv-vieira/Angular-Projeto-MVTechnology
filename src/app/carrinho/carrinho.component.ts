import { NotificacaoService } from './../notificacao.service';
import { Router } from '@angular/router';
import { IProdutoCarrinho } from 'src/app/produtos';
import { CarrinhoService } from './../carrinho.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itensCarrinho: IProdutoCarrinho[] = [];

  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private route: Router,
    private notificacaoService: NotificacaoService
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal();
  }

  calcularTotal(){
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade),0);
  }

  removerProdutoCarrinho(produtoId: number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calcularTotal();
  }

  comprar(){
    this.notificacaoService.notificarTop("Parabéns a sua compra foi realizada com sucesso!")
    this.carrinhoService.limparCarrinho();
    this.route.navigate(["produtos"]);

  }


}
