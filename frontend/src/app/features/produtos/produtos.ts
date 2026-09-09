import { Component } from '@angular/core';
import { Produto } from './produto';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-produtos',
  styleUrl: './produtos.css',
  templateUrl: './produtos.html',
})
export class Produtos {
  titulo = 'Produtos';

  produtos: Produto[] = [
    { id: 1, nome: "Filtro de Óleo", marca: 'Mann'},
    { id: 2, nome: "Bateria 12V", marca: 'Moura'},
    { id: 3, nome: "Óleo Hidráulico", marca: 'Shell'}
  ];

  produtoSelecionado: Produto | null = null;

  selecionarProduto(produto: Produto){
    this.produtoSelecionado = produto;
  }

  novoNome = '';
  novaMarca = '';

  adicionarProduto (){
    if(!this.novoNome || !this.novaMarca) {
      return;
    }

    this.produtos.push({
      id: this.produtos.length + 1,
      nome: this.novoNome,
      marca: this.novaMarca
    });

    this.novoNome = '';
    this.novaMarca = '';
  }

  removerProduto(id: number){
    this.produtos = this.produtos.filter(produto => produto.id !== id);
  }
}
