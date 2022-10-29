import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from './../carrinho.service';
import { ProdutosService } from './../produtos.service';
import { IProduto } from './../produtos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: IProduto[] | undefined;

  constructor(
    private produtosService: ProdutosService,

    private carrinhoService: CarrinhoService,

    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const produtos = this.produtosService.getAll();
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLocaleLowerCase();

      if(descricao){
        this.produtos = produtos.filter(produto => produto.descricao.toLocaleLowerCase().includes(descricao));
        return;
      }else{
        this.produtos = produtos;
      }
    })
  }



}
