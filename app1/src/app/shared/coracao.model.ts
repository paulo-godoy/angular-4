export class Coracao {
  constructor(
    public cheio: boolean,
    public urlCoracaoCheio: string =  '../../assets/imagens/coracao_cheio.png',
    public urlCaracaoVazio: string = '../../assets/imagens/coracao_vazio.png'
  ) { }

  public exibeCoracao(): string {
    if(this.cheio) {
      return this.urlCoracaoCheio
    } else {
      return this.urlCaracaoVazio
    }
  }
}
