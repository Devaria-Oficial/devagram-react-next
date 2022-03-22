import { useEffect, useState } from 'react';
import Feed from '../../../componentes/feed';
import { useRouter } from 'next/router';
import comAutorizacao from '../../../hoc/comAutorizacao';
import CabecalhoPerfil from '../../../componentes/cabecalhoPerfil';

function Perfil({ usuarioLogado }) {
    const [usuario, setUsuario] = useState({});
    const router = useRouter();

    useEffect(async () => {
        setUsuario({
            nome: 'Douglas Oliveira'
        });

        console.log('chegou aqui')
    }, [router.query.id]);

    return (
        <div className='paginaPerfil'>
            <CabecalhoPerfil
                usuarioLogado={usuarioLogado}
                usuario={usuario}
            />

            <Feed usuarioLogado={usuarioLogado} />
        </div>
    );
}

export default comAutorizacao(Perfil);