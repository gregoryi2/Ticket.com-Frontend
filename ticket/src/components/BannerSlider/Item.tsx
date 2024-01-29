import { ClassificacaoIndicativa } from "../ClassificacaoIndicativa";

interface ItemProps {
    classificacaoIndicativa: string
}

export function Item({ classificacaoIndicativa }: ItemProps) {
    return (
        <div className="keen-slider__slide background-image h-96">
            <div className="flex justify-center bg-gradient-to-r from-zinc-800 from-20% via-transparent via-50% to-zinc-800 to-85%">
                <div className="flex flex-col justify-center h-96 w-9/12 pl-7 ">
                    <div className="flex gap-6 mb-7">
                        <ClassificacaoIndicativa>{classificacaoIndicativa}</ClassificacaoIndicativa>
                        <span className="font-thin text-sm">Drama</span>
                    </div>

                    <h1 className="text-4xl font-bold">Nosso Lar 2: Os Mensageiros</h1>

                    <p className="mt-5 w-96 mb-5">
                        Cinco espíritos de Nosso Lar vêm à Terra em missão de resgate de projetos
                        de vidas que correm perigo. Médico cuja história foi base do primeiro filme, André Luiz junta...
                    </p>
                    
                    <div className="flex gap-5">
                        <button className="bg-orange-500 text-slate-900 shadow-lg font-semibold py-2 px-12 rounded-xl hover:opacity-90">INGRESSOS</button>
                        <button className="border-2 border-sky-500 text-sky-500 shadow-lg font-bold py-2 px-6 rounded-xl hover:opacity-80">ASSISTIR TRAILER</button>
                    </div>
                </div>
            </div>
        </div>
    )
}