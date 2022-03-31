import DevagramApiService from "./DevagramApiService";

export default class UsuarioService extends DevagramApiService {
    async login(credenciais) {
        const { data } = await this.post('/login', credenciais);

        localStorage.setItem("nome", data.nome);
        localStorage.setItem("email", data.email);
        localStorage.setItem("token", data.token);

        const usuario = await this.get('/usuario');
        localStorage.setItem('id', usuario.data._id);

        if (usuario.data.avatar) {
            localStorage.setItem("avatar", usuario.data.avatar);
        }
    }

    async logout() {
        localStorage.removeItem("nome");
        localStorage.removeItem("email");
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        localStorage.removeItem("avatar");
    }

    async cadastro(dados) {
        return this.post('/cadastro', dados);
    }

    async atualizarPerfil(dados) {
        return this.put(`/usuario`, dados);
    }

    estaAutenticado() {
        return localStorage.getItem('token') !== null;
    }

    async pesquisar(termoDaPesquisa) {
        return this.get('/pesquisa?filter=' + termoDaPesquisa);
    }

    async obterPerfil(idUsuario) {
        return this.get(`/pesquisa?id=${idUsuario}`);
    }

    async alternarSeguir(idUsuario) {
        return this.put(`/seguir?id=${idUsuario}`);
    }

    obterInformacoesDoUsuarioLogado() {
        return {
            id: localStorage.getItem('id'),
            nome: localStorage.getItem('nome'),
            email: localStorage.getItem('email'),
            avatar: localStorage.getItem('avatar')
        }
    }
}