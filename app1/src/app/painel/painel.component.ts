import { Frase } from './../shared/frase.model';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FRASES} from './frases-mock';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES

  public instrucao: string = 'Traduza a frase:'

  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaRodada()


  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('destroido');
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
   // console.log(this.resposta)
  }

  public verificaResposta(): void {

    if( this.rodadaFrase.frasePtbr == this.resposta) {
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'A tradução está correta.',
        showConfirmButton: false,
        timer: 1500
      })

      //troca pergunta
    this.rodada++

    //incrementa a barra de progresso
    this.progresso = this.progresso + (100 / this.frases.length)

    //verifica se as tentativas foram esgotadas
    if(this.rodada === 4 ) {
      this.encerrarJogo.emit('vitoria')
      // Swal.fire({
      //   position: 'top-end',
      //   type: 'success',
      //   title: 'Você concluiu as traduções com sucesso.',
      //   showConfirmButton: false,
      //   timer: 1500
      // })
    }

    //Atualiza frase para usuario.
    this.atualizaRodada()

    } else {
      Swal.fire({
        position: 'top-end',
        type: 'warning',
        title: 'A tradução está incorreta.',
        showConfirmButton: false,
        timer: 1500
      })

      this.tentativas--

      if (this.tentativas === -1) {
        this.encerrarJogo.emit('derrota')
        // Swal.fire({
        //   position: 'top-end',
        //   type: 'error',
        //   title: 'Você perdeu todas as suas tentativas!.',
        //   showConfirmButton: false,
        //   timer: 1500
        // })
      }
    }

  }

  public atualizaRodada(): void {
    //define frase da rodada
    this.rodadaFrase = this.frases[this.rodada]
     //limpar resposta
     this.resposta = ''
  }

}
