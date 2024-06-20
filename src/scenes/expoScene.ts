import { Actor, CollisionType, Color, Engine, FadeInOut, Scene, Transition, vec } from "excalibur";
import { Resources } from "../resources";
import { Player } from "../actors/player";
import { Npc } from "../actors/npc";

export class expoScene extends Scene {
    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }
    onInitialize(engine: Engine<any>): void {

        // carregar musica de fundo (BGM) - Background Music
        let musicaFundo = Resources.RitmadaBGM
    
        // configurar a musica e executar
        musicaFundo.loop = true
        musicaFundo.play(0.5)


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

        // carregar spawn point do player
        let spawnPoint = tiledMap.getObjectsByName("player_spawn")[0]

        // Criação e configuração do player
        let Jogador = new Player(vec(spawnPoint.x + offsetX, spawnPoint.y + offsetY))

        // definir z-index do player, util se algum outro elemento ficar "por cima" do tapete
        Jogador.z = 1

        // Adicionar o player na cena
        this.add(Jogador)

        // fazendo NPCs
        let npcSpawnPointA = tiledMap.getObjectsByName("npc_a")[0]
        let npcSpawnPointB = tiledMap.getObjectsByName("npc_b")[0]
        let npcSpawnPointC = tiledMap.getObjectsByName("npc_c")[0]

        // configurar NPCs
        let npcA = new Npc(
            vec(npcSpawnPointA.x + offsetX, npcSpawnPointA.y + offsetY),
            npcSpawnPointA.tiledObject.name!
           
        )

        let npcB = new Npc(
            vec(npcSpawnPointB.x + offsetX, npcSpawnPointB.y + offsetY),
            npcSpawnPointB.tiledObject.name!
           
        )
        
        let npcC = new Npc(
            vec(npcSpawnPointC.x + offsetX, npcSpawnPointC.y + offsetY),
            npcSpawnPointC.tiledObject.name!
           
        )

        // adicionar os NPCs
        this.add(npcA)
        this.add(npcB)
        this.add(npcC)

        // focar a camera no player
        this.camera.strategy.lockToActor(Jogador)
        // this.camera.zoom = 2

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
                height: objeto.tiledObject.height,
                collisionType: CollisionType.Fixed,
                // color: Color.Blue,
                // z:99
            })

            // adicionar o colisor do objeto na cena
            this.add(objetoAtual)
        })
    }
}