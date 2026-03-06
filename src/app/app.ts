import { Component, signal } from '@angular/core';
import { Perfil } from './perfil/perfil';
import { Incrementar } from './incrementar/incrementar';
import { NomeTela } from './nome-tela/nome-tela';
import { Lista } from './lista/lista';
import { Listav2 } from './listav2/listav2';

@Component({
  selector: 'app-root',
  imports: [Perfil, Incrementar, NomeTela, Lista, Listav2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aula1');
}
