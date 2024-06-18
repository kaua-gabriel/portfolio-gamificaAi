import { Color, Engine, FadeInOut, Scene, SceneActivationContext, Transition } from "excalibur";

export class caseScene extends Scene {
    private objetoInteracao: any

    private textoDaCena: string = ""

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 500
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray
    }

    onActivate(context: SceneActivationContext<unknown>): void {
        // pegar dados vindos da cena passads
        this.objetoInteracao = context.data

        console.log(this.objetoInteracao);






        // se for a msea A
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_a") {
            this.textoDaCena = "Essa é a descriçaõ do case A"

            this.backgroundColor = Color.fromHex("#403f4c")

            // Criar elemento com a descrição da empresa
            this.elementoTexto = document.createElement("div") as HTMLElement

            // Definir opacidade do elemento para 1 = visível
            this.elementoTexto.style.opacity = "1"

            // Inserir elementoTexto no container-game
            let containerGame = document.querySelector(".container-game") as HTMLElement
            containerGame.appendChild(this.elementoTexto)

            // Adicionar classe na div criada (elementoTexto)
            this.elementoTexto.classList.add("sobre-gamifica")

            // Adicionar titulo e paragrafo dentro do conteudo da div
            this.elementoTexto.innerHTML = `<h2>Level 1</h2>
                <p>Agora, um jovem aprendiz de mago, que acaba de se formar na escola, precisa sair em uma longa jornada para ajudar seu mestre mago, que está com uma doença tão antiga que nem a magia nova pode ajudá-lo. Para isso, ele terá que resgatar uma planta antiga capaz de curar todos os ferimentos, aprendendo novos feitiços e habilidades, conseguindo amigos pelo caminho e itens melhores.</p>`
        }




        // se for a msea B
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_b") {
            this.textoDaCena = "Essa é a descriçaõ do case B"

            this.backgroundColor = Color.fromHex("#403f4c")

            // Criar elemento com a descrição da empresa
            this.elementoTexto = document.createElement("div") as HTMLElement

            // Definir opacidade do elemento para 1 = visível
            this.elementoTexto.style.opacity = "1"

            // Inserir elementoTexto no container-game
            let containerGame = document.querySelector(".container-game") as HTMLElement
            containerGame.appendChild(this.elementoTexto)

            // Adicionar classe na div criada (elementoTexto)
            this.elementoTexto.classList.add("sobre-gamifica")

            // Adicionar titulo e paragrafo dentro do conteudo da div
            this.elementoTexto.innerHTML = `<h2>Level 2</h2>
                <p>Amber, que morava em um convento de paz e harmonia, após completar 20 anos, descobre que é filha da deusa dos monstros, uma divindade ancestral que criou todos os monstros da Terra, do bicho-papão embaixo da cama até os lobisomens que aparecem na lua cheia. Agora, a deusa está retornando à Terra em busca de sua maior criação, mas Amber se mostra diferente, indo contra todos os monstros de sua criadora.</p>`
        }




        // se for a msea C
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_c") {
            this.textoDaCena = "Essa é a descriçaõ do case C"

            this.backgroundColor = Color.fromHex("#403f4c")

            // Criar elemento com a descrição da empresa
            this.elementoTexto = document.createElement("div") as HTMLElement

            // Definir opacidade do elemento para 1 = visível
            this.elementoTexto.style.opacity = "1"

            // Inserir elementoTexto no container-game
            let containerGame = document.querySelector(".container-game") as HTMLElement
            containerGame.appendChild(this.elementoTexto)

            // Adicionar classe na div criada (elementoTexto)
            this.elementoTexto.classList.add("sobre-gamifica")

            // Adicionar titulo e paragrafo dentro do conteudo da div
            this.elementoTexto.innerHTML = `<h2>Level 3</h2>
                <p>Petty e Louis, dois amigos que estavam no mar, observam um avião caindo do céu em uma floresta. Eles resolvem ver de perto. O piloto, que se revela ser um alienígena, usa sua arma para encolher os dois. Agora, ambos têm que descobrir como sair dessa situação e voltar ao normal.</p>`
        }


    }

}


