import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Produto = {
  nome: string;
  quantidade: number;
};

@Component({
  selector: 'app-listav2',
  imports: [CommonModule],
  templateUrl: './listav2.html',
  styleUrl: './listav2.css',
})
export class Listav2 {
  produtos: Produto[] = [
    { nome: 'Notebook', quantidade: 7 },
    { nome: 'Monitor', quantidade: 3 },
    { nome: 'Teclado', quantidade: 15 },
    { nome: 'Mouse', quantidade: 22 },
    { nome: 'Headset', quantidade: 9 },
  ];
}
