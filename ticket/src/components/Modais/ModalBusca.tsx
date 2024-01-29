import { Search } from "lucide-react";

export function ModalBusca() {
    return (
        <div className="absolute top-4-3 right-0 bg-black h-40 w-1/4 py-5 px-7 z-20">
            <div className="triangulo-sem-borda-busca"></div>
            <h2 className="text-lg font-bold mb-6">O que você procura?</h2>

            <input
                type="text"
                placeholder="O que você procura?"
                className="w-full rounded-sm border-l-4 border-l-zinc-400 py-3 px-3 mb-4 text-black text-sm outline-none"
            />

            <button className="absolute top-5-2 right-11">
                <Search width={20} height={20} color="#0099ff" strokeWidth={1}/>
            </button>
        </div>
    )
}