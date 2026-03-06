import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-nome-tela',
  imports: [FormsModule, NgIf],
  templateUrl: './nome-tela.html',
  styleUrl: './nome-tela.css',
})
export class NomeTela {
  nome: string = '';
  url: string = '';

  get fullUrl(): string {
    if (!this.url) return '';
    return this.url.startsWith('http://') || this.url.startsWith('https://')
      ? this.url
      : 'https://' + this.url;
  }
}
