import { useRouter } from "next/router";
import Cabecalho from "../componentes/layout/Cabecalho";
import Rodape from "../componentes/layout/Rodape";
import Loading from "../componentes/loading";
import UsuarioService from "../services/UsuarioService"

const usuarioService = new UsuarioService();

export default function comAutorizacao(Componente) {
    return (props) => {
        const router = useRouter();

        if (typeof window !== 'undefined') {
            if (!usuarioService.estaAutenticado()) {
                router.replace('/');
                return null;
            }

            const usuarioLogado = usuarioService.obterInformacoesDoUsuarioLogado();

            return (
                <>
                    <Cabecalho usuarioLogado={usuarioLogado} />
                    <Loading />
                    <Componente usuarioLogado={usuarioLogado} {...props} />
                    <Rodape usuarioLogado={usuarioLogado} />
                </>
            );
        }

        return null;
    }
}