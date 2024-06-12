import { Actor, CollisionType, Color, Engine, FadeInOut, Scene, Transition, vec } from "excalibur";
import { Resources } from "../resources";
import { Player } from "../actors/player";

export class expoScene extends Scene {
    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }
    onInitialize(engine: Engine<any>): void {
        // carregar o mapa
        let tiledMap = Resources.Mapa

        //definir offset para redefenir o mapa
        let offsetX = 138
        let offsetY = 100

        // adicionar o mapa na cena
        tiledMap.addToScene(this, {
            pos: vec(offsetX, offsetY,),
        })

        // definir zoom da camera para aumentar um pouco a visualização
        this.camera.zoom = 1.4

        // Criação e configuração do player
        let Jogador = new Player()

        // definir z-index do player, util se algum outro elemento ficar "por cima" do tapete
        Jogador.z = 1

        // Adicionar o player na cena
        this.add(Jogador)

        // adicionar a colisão com cada objetos
        // pegar a camada de objetos colisores
        let camadaObjetosColisores = tiledMap.getObjectLayers("objetosColisores")[0]
        console.log(camadaObjetosColisores)

        // Percorrer objetos com foreach e para cada objeto, renderizar um actor
        camadaObjetosColisores.objects.forEach(objeto => {
            // configuar com ator
            const objetoAtual = new Actor({
                name: objeto.name,
                x: objeto.x + offsetX + (objeto.tiledObject.width! / 2),
                y: objeto.y + offsetY + (objeto.tiledObject.height! / 2),
                width: objeto.tiledObject.width,
                height:objeto.tiledObject.height,
                collisionType: CollisionType.Fixed,
                // color: Color.Blue,
                // z:99
            })

            // adicionar o colisor do objeto na cena
            this.add(objetoAtual)
        })
    }
}