import Image from "next/image";
import { ClassificacaoIndicativa } from "../ClassificacaoIndicativa";
import { Star } from "lucide-react";

export function Item({ dado }: any) {

    const data = new Date()

    const dataAtual = data.toLocaleDateString()

    return (
        <div className="keen-slider__slide">
            <button className="w-full">
                <ClassificacaoIndicativa className="z-20 absolute top-2 left-2 w-1-25 h-1-25 text-0-5">
                    {dado.classificacaoIndicativa}
                </ClassificacaoIndicativa>
                
                {dado.preVenda === true ?
                    <div className="overflow-hidden rounded-lg border-t-4 border-t-blue-600 border-l-4 border-l-blue-600 border-r-4 border-r-blue-600">
                        <Image
                            className="zoom"
                            width={208}
                            height={309}
                            style={{maxWidth:'100%', height: 'auto'}}
                            src={dado.poster}
                            alt={`Poster ${dado.titulo}`}
                        />
                        <div className="bg-blue-600 font-semibold py2 z-50">PRÉ-VENDA</div>
                    </div>
                    :
                    <div className="overflow-hidden rounded-lg">
                        <Image
                            className="zoom"
                            width={226}
                            height={335}
                            style={{maxWidth:'100%', height: 'auto'}}
                            src={dado.poster}
                            alt={`Poster ${dado.titulo}`}
                        />
                    </div>
                }

                {dataAtual === dado.estreia ?
                 <h3 className="flex justify-center gap-1 bg-zinc-900 my-3 p-2 rounded-3xl text-sm text-amber-300">
                    <Star size={19} color="#FBC115" />
                    Estreia hoje
                </h3> 
                 : 
                 <h3 className="bg-zinc-900 my-3 p-2 rounded-3xl text-xs lg:text-sm">{`Estreia ${dado.estreia}`}</h3>
                }

                <h3 className="text-slate-300 text-left text-sm font-bold">{dado.titulo}</h3>
            </button>
        </div>
    )
}