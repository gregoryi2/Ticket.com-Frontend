export function ModalLocalizacao() {
    return (
        <div className="relative top-3-5 left-60 bg-black h-72 w-96 py-5 px-7 z-20">
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

            <button className="w-full bg-blue-500 text-black text-sm font-bold py-2 rounded-sm hover:opacity-90">
                TROCAR CIDADE
            </button>

        </div>
    )
}