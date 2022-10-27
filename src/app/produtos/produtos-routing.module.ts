import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { ProdutosComponent } from './produtos.component';

const routes: Routes = [
  { path: '', component: ProdutosComponent },
  { path: ':id', component: DetalheProdutoComponent },
  { path: "**", redirectTo: "NaoEncontradaComponent"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
