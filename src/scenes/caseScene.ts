import { Actor, Color, Engine, FadeInOut, Keys, Resource, Scene, SceneActivationContext, Sprite, Transition, vec } from "excalibur";

export class caseScene extends Scene {
    private objetoInteracao: any
    private elementoTexto?: HTMLElement
    private actorEmpresa?: Actor
    private listaEmpresa?: Sprite()

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 500
        })
    }



    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray

        // criar elemento com a descrição do case
        this.elementoTexto = document.createElement("div") as HTMLElement
        this.elementoTexto.classList.add("texto-case")
        this.elementoTexto.innerHTML = ' <h2>level 1</h2><p>Dinamismo na Aprendizagem: A gamificação torna o processo de aprendizado menos monótono, incentivando o engajamento dos alunos por meio de elementos atrativos.Aumento do Interesse: Ao envolver os alunos, a gamificação gera mais interesse no conteúdo. Competições, conquistas e recompensas motivam os estudantes a se esforçarem mais.Efetividade e Durabilidade: Estudos mostram que alunos expostos à gamificação tiveram um aumento significativo no desempenho em comparação com palestras tradicionais</p>'

        // adicionr o elemento ao container game
        let containerGame = document.querySelector(".container-game")
        containerGame?.appendChild(this.elementoTexto)





        // ao precionar esc voltar para a exposição
        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Esc) {
                engine.goToScene("exposição")
            }
        })

        // criar actor para receber a imagem
        this.actorEmpresa = new Actor({
            pos: vec(engine.drawWidth - 300, engine.halfDrawHeight - 50)
        })

        // carregar imagens das empresas
        let imagemEmpresaCara = Resource.AmazingJPG.toSprite()
        let imagemEmpresaCapivara = Resource.CapivaraLogo.toSprite()
        let imagemEmpresaAguenta = Resource.NãoAguentaJPG.toSprite()

        this.listaImagem = [imagemEmpresaCara, imagemEmpresaCapivara, imagemEmpresaAguenta]


    }



    onActivate(context: SceneActivationContext<unknown>): void {
        // faz a caixa de texto desaparecer ao mudar de cena
        this.elementoTexto!.style.opacity = "1"


        // pegar dados vindos da cena anterior
        this.objetoInteracao = context.data

        console.log(this.objetoInteracao);






        // se for a msea A
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_a") {
            
            this.elementoTexto!.innerHTML = '<h2>level 1</h2><p>Dinamismo na Aprendizagem: A gamificação torna o processo de aprendizado menos monótono, incentivando o engajamento dos alunos por meio de elementos atrativos.Aumento do Interesse: Ao envolver os alunos, a gamificação gera mais interesse no conteúdo. Competições, conquistas e recompensas motivam os estudantes a se esforçarem mais.Efetividade e Durabilidade: Estudos mostram que alunos expostos à gamificação tiveram um aumento significativo no desempenho em comparação com palestras tradicionais</p>'
        
            // inserir o sprite no actor da mesa a
            this.actorEmpresa?.graphics.add(this.listaImagem![0])

            // mudar o zoom da imagem
            this.actorEmpresa!.graphics.current!.scale = vec(0.2, 0.2)
        }



        // se for a msea B
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_b") {
            
            this.elementoTexto!.innerHTML = 'CASE 2'

            
            // inserir o sprite no actor da mesa a
            this.actorEmpresa?.graphics.add(this.listaImagem![1])

            // mudar o zoom da imagem
            this.actorEmpresa!.graphics.current!.scale = vec(0.2, 0.2)
        }




        // se for a msea C
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_c") {
           
            this.elementoTexto!.innerHTML = 'CASE 3'

            
            // inserir o sprite no actor da mesa a
            this.actorEmpresa?.graphics.add(this.listaImagem![2])

            // mudar o zoom da imagem
            this.actorEmpresa!.graphics.current!.scale = vec(0.2, 0.2)
        }
        this.add(this.actorEmpresa!)
    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        // faz a caixa de texto desaparecer ao mudar de cena
        this.elementoTexto!.style.opacity = "0"
    }
}


