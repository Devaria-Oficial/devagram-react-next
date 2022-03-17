import { useState, useEffect } from "react";
import Postagem from "./Postagem";

export function Feed({ usuarioLogado }) {
    const [listaDePostagens, setListaDePostagens] = useState([]);

    useEffect(() => {
        console.log('carregar o feed');
        setListaDePostagens([
            {
                id: '1',
                usuario: {
                    id: '1',
                    nome: 'Douglas Oliveira',
                    avatar: null
                },
                fotoDoPost: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg',
                descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to m',
                curtidas: [],
                comentarios: [
                    {
                        nome: 'Fulano',
                        mensagem: 'Muito legal'
                    },
                    {
                        nome: 'Fulano de tal',
                        mensagem: 'Imagem muito bacana!'
                    },
                    {
                        nome: 'Fulano da esquina',
                        mensagem: 'Isso ai! continue assim'
                    }
                ]
            },
            {
                id: '2',
                usuario: {
                    id: '2',
                    nome: 'Daniel Castello',
                    avatar: null
                },
                fotoDoPost: 'https://cdn.pixabay.com/photo/2012/11/21/17/02/lion-66898_960_720.jpg',
                descricao: 'Neque porro quisquam est qui dolorem ipsum olor sit amet, consectetur, adipisci velit',
                curtidas: [],
                comentarios: [
                    {
                        nome: 'Ciclano',
                        mensagem: 'Muito bom'
                    }
                ]
            },
        ])
    }, [usuarioLogado]);

    return (
        <div className="feedContainer largura30pctDesktop">
            {listaDePostagens.map(dadosPostagem => (
                <Postagem
                    key={dadosPostagem.id}
                    {...dadosPostagem}
                    usuarioLogado={usuarioLogado}
                />
            ))}
        </div>
    )
}