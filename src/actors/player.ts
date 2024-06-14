import { Actor, Animation, Collider, CollisionContact, CollisionType, Color, Engine, Keys, Side, SpriteSheet, Vector, vec } from "excalibur";
import { Resources } from "../resources";

export class Player extends Actor {
    // propriedade do player
    private velocidade: number = 180
    private ultimaDirecao: string = "down"

    private temObjetoProximo: boolean = false
    private ultimoColisor?: Collider


    // Configuração do Player
    constructor(posicao: Vector) {
        super({
            pos: posicao,
            width: 35,
            height: 50,
            name: "Jogador",
            color: Color.Red,
            collisionType: CollisionType.Active
        })
    }

    // case Keys.A: (usar para duas funções) 


    onInitialize(engine: Engine<any>): void {
        // ativar o modo de Debug
        engine.toggleDebug()

        // configurar sprite do player
        const PlayerSpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.PlayerSpriteSheet,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            },
            spacing: {
                originOffset: {
                    y: 0
                }
            }
        })

        let imagemPlayer = PlayerSpriteSheet.getSprite(3, 0)
        imagemPlayer.scale = vec(1, 1)
        this.graphics.add(imagemPlayer)
        // this.graphics.current!.scale = vec(1.6, 1.6)

        // configurar player para monitorar evento do teclado -> "hold" segurar tecla
        engine.input.keyboard.on("hold", (event) => {
            // detectar qual tecla esta pressionada
            switch (event.key) {

        // mover para esquerda
                // define  a velocidade x para negativa que significa movimentar o player para a esquerda
                case Keys.Left:
                case Keys.A:

                    this.vel.x = -this.velocidade

                    // definir animação
                    this.graphics.use("left-walk")

                    // guardar ultima direção
                    this.ultimaDirecao = "left"
                    break;

         // mover para direita
                // define  a velocidade x para positiva que significa movimentar o player para a direita
                case Keys.Right:
                case Keys.D:

                    this.vel.x = this.velocidade

                    this.graphics.use("right-walk")
                    // guardar ultima direção
                    this.ultimaDirecao = "right"
                    break;

        // mover para cima
                // define  a velocidade y para negativa que significa movimentar o player para a cima
                case Keys.Up:
                case Keys.W:

                    this.vel.y = -this.velocidade

                    this.graphics.use("up-walk")
                    // guardar ultima direção
                    this.ultimaDirecao = "up"
                    break;

        // mover para baixo
                // define  a velocidade y para negativa que significa movimentar o player para a baixo
                case Keys.Down:
                case Keys.S:

                    this.vel.y = this.velocidade

                    this.graphics.use("down-walk")
                    // guardar ultima direção
                    this.ultimaDirecao = "down"
                    break;

                default:
                    // serar a velocidade do player, PARA a movimentação
                    this.vel.x = 0
                    this.vel.y = 0
                    break;
            }
        })

        // Criar animações
        const duracaoFrameAnimacao = 70

        // Idle direita
        const rightIdle = new Animation({
            frames: [
                { graphic: PlayerSpriteSheet.getSprite(0, 1) },
                { graphic: PlayerSpriteSheet.getSprite(1, 1) },
                { graphic: PlayerSpriteSheet.getSprite(2, 1) },
                { graphic: PlayerSpriteSheet.getSprite(3, 1) },
                { graphic: PlayerSpriteSheet.getSprite(4, 1) },
                { graphic: PlayerSpriteSheet.getSprite(5, 1) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("right-idle", rightIdle)
        // this.graphics.use("right-idle")




        // Idle cima 
        const upIdle = new Animation({
            frames: [
                { graphic: PlayerSpriteSheet.getSprite(6, 1) },
                { graphic: PlayerSpriteSheet.getSprite(7, 1) },
                { graphic: PlayerSpriteSheet.getSprite(8, 1) },
                { graphic: PlayerSpriteSheet.getSprite(9, 1) },
                { graphic: PlayerSpriteSheet.getSprite(10, 1) },
                { graphic: PlayerSpriteSheet.getSprite(11, 1) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("up-idle", upIdle)
        // this.graphics.use("up-idle")



        // Idle esquerda
        const leftIdle = new Animation({
            frames: [
                { graphic: PlayerSpriteSheet.getSprite(12, 1) },
                { graphic: PlayerSpriteSheet.getSprite(13, 1) },
                { graphic: PlayerSpriteSheet.getSprite(14, 1) },
                { graphic: PlayerSpriteSheet.getSprite(15, 1) },
                { graphic: PlayerSpriteSheet.getSprite(16, 1) },
                { graphic: PlayerSpriteSheet.getSprite(17, 1) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("left-idle", leftIdle)
        // this.graphics.use("left-idle")




        // Idle baixo
        const downIdle = new Animation({
            frames: [
                { graphic: PlayerSpriteSheet.getSprite(18, 1) },
                { graphic: PlayerSpriteSheet.getSprite(19, 1) },
                { graphic: PlayerSpriteSheet.getSprite(20, 1) },
                { graphic: PlayerSpriteSheet.getSprite(21, 1) },
                { graphic: PlayerSpriteSheet.getSprite(22, 1) },
                { graphic: PlayerSpriteSheet.getSprite(23, 1) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("down-idle", downIdle)
        // this.graphics.use("down-idle")


        // definir animação inicila do player
        this.graphics.use("down-idle")


        // definir zoom
        // this.graphics.current!.scale = vec(1.6, 1.6)

        // Animação walk
        // walk direita
        const rigtWalk = new Animation({
            frames: [
                { graphic: PlayerSpriteSheet.getSprite(0, 2) },
                { graphic: PlayerSpriteSheet.getSprite(1, 2) },
                { graphic: PlayerSpriteSheet.getSprite(2, 2) },
                { graphic: PlayerSpriteSheet.getSprite(3, 2) },
                { graphic: PlayerSpriteSheet.getSprite(4, 2) },
                { graphic: PlayerSpriteSheet.getSprite(5, 2) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("right-walk", rigtWalk)
        // this.graphics.use("right-walk")




        // walk cima 
        const upWalk = new Animation({
            frames: [
                { graphic: PlayerSpriteSheet.getSprite(6, 2) },
                { graphic: PlayerSpriteSheet.getSprite(7, 2) },
                { graphic: PlayerSpriteSheet.getSprite(8, 2) },
                { graphic: PlayerSpriteSheet.getSprite(9, 2) },
                { graphic: PlayerSpriteSheet.getSprite(10, 2) },
                { graphic: PlayerSpriteSheet.getSprite(11, 2) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("up-walk", upWalk)
        // this.graphics.use("up-walk")




        // walk esquerda
        const leftWalk = new Animation({
            frames: [
                { graphic: PlayerSpriteSheet.getSprite(12, 2) },
                { graphic: PlayerSpriteSheet.getSprite(13, 2) },
                { graphic: PlayerSpriteSheet.getSprite(14, 2) },
                { graphic: PlayerSpriteSheet.getSprite(15, 2) },
                { graphic: PlayerSpriteSheet.getSprite(16, 2) },
                { graphic: PlayerSpriteSheet.getSprite(17, 2) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("left-walk", leftWalk)
        // this.graphics.use("left-walk")




        // walk baixo
        const downWalk = new Animation({
            frames: [
                { graphic: PlayerSpriteSheet.getSprite(18, 2) },
                { graphic: PlayerSpriteSheet.getSprite(19, 2) },
                { graphic: PlayerSpriteSheet.getSprite(20, 2) },
                { graphic: PlayerSpriteSheet.getSprite(21, 2) },
                { graphic: PlayerSpriteSheet.getSprite(22, 2) },
                { graphic: PlayerSpriteSheet.getSprite(23, 2) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("down-walk", downWalk)
        // this.graphics.use("down-walk")




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
            ) {
                // zerar velocidade vertical
                this.vel.y = 0
            }

            // ao parar o player, definir animação idle da ultima direção
            if (this.vel.x == 0 && this.vel.y == 0) {
                // ultima direção - left - right - up - down
                // colar a ultima direção = "-idle" -> left-idle - right-idle - up-idle - down-idle 
                this.graphics.use(this.ultimaDirecao + "-idle")
            }
        })
    }

    onPostCollisionResolve(self: Collider, other: Collider, side: Side, contact: CollisionContact): void {
        // indicar que tem um objeto proximo   
        this.temObjetoProximo = true

        // registrar o ultimo objeto colidido
        this.ultimoColisor = other
    }

    onPreUpdate(engine: Engine<any>, delta: number): void {
        // detectar se o player esta distante do ultimo objeto
        if(this.ultimoColisor && this.pos.distance(this.ultimoColisor.worldPos) > 45) {
            // marcar que o objeto não esta proximo
            this.temObjetoProximo = false

            console.log ("esta longe");
        }

    }

}