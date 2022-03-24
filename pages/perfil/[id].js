import { useEffect, useState } from 'react';
import Feed from '../../componentes/feed';
import { useRouter } from 'next/router';
import comAutorizacao from '../../hoc/comAutorizacao';
import CabecalhoPerfil from '../../componentes/cabecalhoPerfil';
import UsuarioService from '../../services/UsuarioService';

const usuarioService = new UsuarioService();

function Perfil({ usuarioLogado }) {
    const [usuario, setUsuario] = useState({});
    const router = useRouter();

    const obterPerfil = async (idUsuario) => {
        try {
            const { data } = await usuarioService.obterPerfil(
                estaNoPerfilPessoal()
                    ? usuarioLogado.id
                    : idUsuario
            );
            return data;
        } catch (error) {
            alert(`Erro ao obter o perfil do usuário!`);
        }
    }

    const estaNoPerfilPessoal = () => {
        return router.query.id === 'eu';
    }

    useEffect(async () => {
        if (!router.query.id) {
            return;
        }

        const dadosPerfil = await obterPerfil(router.query.id);
        setUsuario(dadosPerfil);
    }, [router.query.id]);

    return (
        <div className='paginaPerfil'>
            <CabecalhoPerfil
                usuarioLogado={usuarioLogado}
                usuario={usuario}
                estaNoPerfilPessoal={estaNoPerfilPessoal()}
            />

            <Feed
                usuarioLogado={usuarioLogado}
                usuarioPerfil={usuario}
            />
        </div>
    );
}

export default comAutorizacao(Perfil);