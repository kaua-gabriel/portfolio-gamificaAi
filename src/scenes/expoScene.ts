import { Color, Engine, FadeInOut, Resources, Scene, Transition, vec } from "excalibur";
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
    }
}