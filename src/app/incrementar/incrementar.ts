import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-incrementar',
  imports: [NgStyle],
  templateUrl: './incrementar.html',
  styleUrl: './incrementar.css',
})
export class Incrementar {
  contador : number = 0;

  get progressValue(): number {
    if (this.contador < 0) return 0;
    if (this.contador > 100) return 100;
    return this.contador;
  }

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }
}
