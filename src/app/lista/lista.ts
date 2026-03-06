import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-lista',
  imports: [NgFor, NgIf],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {
  lista: string[] = ['Biscoito', 'Tomate', 'Arroz', 'Banana', 'Sabão'];
  lista2: string[] = ['Leite', 'Café', 'Pão', 'Manteiga', 'Queijo'];
}
