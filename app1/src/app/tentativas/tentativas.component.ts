import { Coracao } from './../shared/coracao.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracaoVazio: string = '../../assets/imagens/coracao_vazio.png';

  public coracaoCheio: string = '../../assets/imagens/coracao_cheio.png';

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  constructor() {
    console.log(this.coracoes)
  }

  ngOnInit() {
  }

}
