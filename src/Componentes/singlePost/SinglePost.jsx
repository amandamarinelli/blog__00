import React from 'react'
import './singlePost.css'

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className='singlePostWrapper'>
                <img src='https://images.unsplash.com/photo-1632594737623-bea601083890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                    alt="capa do post" className="singlePostImg" />
            </div>

            <h1 className='singlePostTitle'>
                Recalculando a rota: por que mudei de área?
                <div className='singlePostEdit'>
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Autor: <b>Amanda</b></span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>

            <p className='singlePostDesc'>
                Desde que entrei na engenharia não tive dificuldades com a faculdade,
                nem para conseguir um estágio ( ingressei já no terceiro semestre) ou qualquer outro problema desse tipo que acabe te obrigando a recalcular a rota.
                O que me fez decidir mudar de área mesmo tendo um emprego bom, estável e com visão de crescimento foram três questionamentos bem particulares, que sempre que eu parava para refletir ocupavam meus pensamentos:
                Como eu posso usar as minhas habilidades naturais, as coisas em que eu sou naturalmente boa aqui?
                O que eu preciso fazer para passar mais credibilidade?
                O que posso estudar agora, como melhorar meus projetos, aumentar o nível?
                Sim. Essas foram as questões que me levaram à área de tecnologia.</p>

            <p className='singlePostDesc'>  (1) Eu sou naturalmente uma pessoa que pensa de uma forma muito sistemática, sou organizada, criativa, gosto de design, marketing, prefiro trabalhar em equipe do que sozinha e aprendo com muita facilidade, fou muito dedicada e focada no que eu quero. Gosto de ler, escrever (por isso o blog), de tirar fotos e de moda. Como usar isso na minha área?</p>

            <p className='singlePostDesc'>(2) Ser mulher, jovem e engenheira, é um desafio enorme e desgastante de ter que se reafirmar o tempo inteiro. Não importa que você seja muito boa no que você faz, é preciso que você pareça assim pois as pessoas as pessoas vão tirar conclusões de você antes mesmo de te ouvir e é isso. Então comprei roupas sociais de tons neutros, brincos e colares dourados, sapatos sociais, botina para quando precisar ir em obra. Enfim, assim o trabalho de se reafirmar diminuiu -um pouco. Só que nada disso tinha muito a ver comigo.</p>

            <p className='singlePostDesc'>(3) Quero aprender mais, quem sabe fazer uma pós, talvez um curso ou será que aprendo um software... Aí foi o ponto de virada. Comecei a procurar materiais para estudar - o investimento era muito alto. São anos de estudos, mensalidades de mil reais, para não ter garantia nenhuma se ia aplicar aqueles conhecimentos, com mais um monte de possíveis áreas, carregando os outros dois questionamentos anteriores ainda nas costas. </p>

            <p className='singlePostDesc'>Até que eu casei - um divisor de águas na minha vida.</p>

            <p className='singlePostDesc'>Casei e fui morar com meu marido, que trabalha como SRE, ele estudava todos os dias. Estudava porque tem muito conteúdo disponível, canais no Youtube, comunidades, github, cursos de ótima qualidade com preço super acessível. E foi isso, eu despertei para um outro universo e me encantei com ele. </p>

            <p className='singlePostDesc'>Mas o começo dessa jornada de formação, eu conto no próximo post!</p>

            <p className='singlePostDesc'><em>See you there.</em></p>


        </div>
    )
}
