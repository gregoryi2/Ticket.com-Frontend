import { useEffect } from "react";
import { BotaoModal } from "./components/BotaoModal";

export function ModalLocalizacao({ fecharModais }: any) {

    function handleCliqueFora(event:MouseEvent) {
        const modalLocalizacao = document.getElementById('modalLocalizacao')

        if(modalLocalizacao !== null && !modalLocalizacao.contains(event.target as Node)) {
            fecharModais()
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleCliqueFora)

        return () => {
            document.removeEventListener('click', handleCliqueFora);
          }
    }, [])

    return (
        <div id="modalLocalizacao" className="relative top-3-5 left-60 bg-black h-72 w-96 py-5 px-7 z-20">
            <div className="triangulo-sem-borda-localizacao"></div>
            <h2 className="text-lg font-bold mb-10">Você está em: Ceará</h2>

            <select name="Estado" className="w-full rounded-sm border-l-4 border-l-zinc-400 py-2 px-3 mb-4 text-black outline-none">
                <option value="">Estado</option>
                <option value="Ceará">Ceará</option>
                <option value="Pernambuco">Pernambuco</option>
                <option value="Bahia">Bahia</option>
            </select>

            <select name="Cidade" className="w-full rounded-sm border-l-4 border-l-zinc-400 py-2 px-3 mb-4 text-black outline-none">
                <option value="">Cidade</option>
                <option value="Ceará">Maracanaú</option>
                <option value="Pernambuco">Fortaleza</option>
                <option value="Bahia">Caucaia</option>
            </select>

            <BotaoModal>
                TROCAR CIDADE
            </BotaoModal>

        </div>
    )
}