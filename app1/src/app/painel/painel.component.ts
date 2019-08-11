import { Frase } from './../shared/frase.model';
import { Component, OnInit, ɵConsole } from '@angular/core';
import { FRASES} from './frases-mock';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Array<Frase> = FRASES;

  public instrucao: string = 'Traduza a frase:';

  public resposta: string;

  public rodada: number = 0;
  public rodadaFrase: Frase;

  constructor() { 
    this.rodadaFrase = this.frases[this.rodada]; 
  
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
   // console.log(this.resposta)
  }

  public verificaResposta(): void {
    console.log('Verificar resposta:', this.resposta)
  }

}
