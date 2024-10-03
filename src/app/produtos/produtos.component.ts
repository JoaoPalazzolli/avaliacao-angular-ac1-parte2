import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  produtos = [
    { nome: 'Playstation 5', preco: 5000, descricao: 'Videogame super potente', emEstoque: true },
    { nome: 'Geladeira', preco: 2500, descricao: 'Geladeira super econômica', emEstoque: false },
    { nome: 'Notebook', preco: 1500, descricao: 'Notebook gamer ultima geração', emEstoque: false }
  ];

  itensForaEstoque(): boolean {
    return this.produtos.length > 0 && this.produtos.every(produto => !produto.emEstoque);
  }
}
