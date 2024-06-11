import { Actor, Color, Engine, Keys, vec } from "excalibur";

export class Player extends Actor {
    // propriedade do player
    private velocidade: number = 180


    // Configuração do Player
    constructor() {
        super({
            pos: vec(600, 632),
            width: 32,
            height: 32,
            name: "Jogador",
            color: Color.Red,
        })
    }

    // case Keys.A: (usar para duas funções) 


    onInitialize(engine: Engine<any>): void {
        // configurar player para monitorar evento do teclado -> "hold" segurar tecla
        engine.input.keyboard.on("hold", (event) => {
            // detectar qual tecla esta pressionada
            switch (event.key) {

                // mover para esquerda
                // define  a velocidade x para negativa que significa movimentar o player para a esquerda
                case Keys.Left:
                case Keys.A:

                    this.vel.x = -this.velocidade
                    break;


                // mover para direita
                // define  a velocidade x para positiva que significa movimentar o player para a direita
                case Keys.Right:
                case Keys.D:

                    this.vel.x = this.velocidade
                    break;

                // mover para cima
                // define  a velocidade y para negativa que significa movimentar o player para a cima
                case Keys.Up:
                case Keys.W:

                    this.vel.y = -this.velocidade
                    break;

                // mover para baixo
                // define  a velocidade y para negativa que significa movimentar o player para a baixo
                case Keys.Down:
                case Keys.S:

                    this.vel.y = this.velocidade
                    break;

                default:
                    // serar a velocidade do player, PARA a movimentação
                    this.vel.x = 0
                    this.vel.y = 0
                    break;
            }
        })
        // configurar o player para monitorar o evento "release" -> soltar
        engine.input.keyboard.on("release", (event) => {
            // fazer o player parar ao soltar as teclas de movimentação
            // parar movimentação lateral ao soltar as teclas de movimentação lateral
            if (
                event.key == Keys.A ||
                event.key == Keys.Left ||
                event.key == Keys.D ||
                event.key == Keys.Right
            ) {
                // zerar velocidade horinzontal
                this.vel.x = 0
            }

            // parar movimentação vertical ao soltar as teclas de movimentação vertical
            if (
                event.key == Keys.W ||
                event.key == Keys.Up ||
                event.key == Keys.S ||
                event.key == Keys.Down
            )  {
                // zerar velocidade vertical
                this.vel.y = 0
            }
        })
    }
}