import Image from "next/image";

export default function InputPublico({
    imagem,
    tipo,
    texto,
    valor = "",
    exibirMensagemValidacao = false,
    mensagemValidacao = "",
    aoAlterarValor
}) {
    return (
        <div className="inputPublicoContainer">
            <div className="inputPublico">
                <Image
                    src={imagem}
                    alt="imagem do campo"
                    className="iconeInputPublico"
                    width={20}
                    height={20}
                />
                
                <input
                    type={tipo}
                    placeholder={texto}
                    value={valor}
                    onChange={aoAlterarValor}
                />
            </div>

            {exibirMensagemValidacao && <p className="mensagemValidacao">{mensagemValidacao}</p>}
        </div>
    );
}