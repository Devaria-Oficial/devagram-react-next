export class LoadingHelper {
    static exibir() {
        document
            .querySelector('.loadingContainer')
            ?.classList.remove('oculto');
    }

    static ocultar() {
        setTimeout(() => {
            document
                .querySelector('.loadingContainer')
                ?.classList.add('oculto');
        }, 500);
    }
}