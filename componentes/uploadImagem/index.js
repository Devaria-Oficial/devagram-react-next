import { useRef, useEffect } from "react";

export default function UploadImagem({
    className = '',
    setImagem,
    imagemPreview,
    imagemPreviewClassName = '',
    aoSetarAReferencia
}) {
    const referenciaInput = useRef(null);

    useEffect(() => {
        if (!aoSetarAReferencia) {
            return;
        }

        aoSetarAReferencia(referenciaInput?.current);
    }, [referenciaInput?.current]);

    const abrirSeletorArquivos = () => {
        referenciaInput?.current?.click();
    }

    const aoAleterarImagem = () => {
        if (!referenciaInput?.current?.files?.length) {
            return;
        }

        const arquivo = referenciaInput?.current?.files[0];
        obterUrlDaImagemEAtualizarEstado(arquivo);
    }

    const obterUrlDaImagemEAtualizarEstado = (arquivo) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(arquivo);
        fileReader.onloadend = () => {
            setImagem({
                preview: fileReader.result,
                arquivo
            });
        }
    }

    const aoSoltarAImagem = (e) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const arquivo = e.dataTransfer.files[0];
            obterUrlDaImagemEAtualizarEstado(arquivo);
        }
    }

    return (
        <div className={`uploadImagemContainer ${className}`}
            onClick={abrirSeletorArquivos}
            onDragOver={e => e.preventDefault()}
            onDrop={aoSoltarAImagem}
        >
            {imagemPreview && (
                <div className="imagemPreviewContainer">
                    <img 
                        src={imagemPreview}
                        alt='imagem preview'
                        className={imagemPreviewClassName}
                    />
                </div>
            )}

            <input
                type='file'
                className='oculto'
                accept="image/*"
                ref={referenciaInput}
                onChange={aoAleterarImagem}
            />
        </div>
    );
}