import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  produtos = [
    { nome: 'Produto 1', preco: 100, descricao: 'Descrição do Produto 1', emEstoque: false },
    { nome: 'Produto 2', preco: 200, descricao: 'Descrição do Produto 2', emEstoque: false },
    { nome: 'Produto 3', preco: 300, descricao: 'Descrição do Produto 3', emEstoque: false }
  ];

  todosForaDeEstoque(): boolean {
    return this.produtos.length > 0 && this.produtos.every(produto => !produto.emEstoque);
  }
}
