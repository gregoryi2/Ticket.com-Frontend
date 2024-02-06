import { Bomb, Popcorn } from "lucide-react";
import Image from "next/image";
import { ClassificacaoIndicativa } from "../ClassificacaoIndicativa";

export function Item({ dado }: any) {
    return (
        <div className="keen-slider__slide">
            <button className="w-full">
                <ClassificacaoIndicativa className="z-20 absolute top-2 left-2 w-1-25 h-1-25 text-0-5">
                    {dado.classificacaoIndicativa}
                </ClassificacaoIndicativa>

                <div className="overflow-hidden rounded-lg">
                    <Image
                        className="zoom"
                        src={dado.poster}
                        width={226}
                        height={335}
                        style={{maxWidth:'100%', height: 'auto'}}
                        alt={`Poster ${dado.titulo}`} />
                </div>

                <div className="flex items-center my-3">
                    <Bomb size={19} color="#F97316" />
                    <p className="text-xs ml-1 mr-3">{`${dado.notaTomatometro}%`}</p>
                    
                    <Popcorn size={19} color="#F97316" />
                    <p className="text-xs ml-1">{`${dado.notaPontuacaoPublica}%`}</p>
                </div>

                <h3 className="text-slate-300 text-left text-sm font-bold">{dado.titulo}</h3>
            </button>
        </div>
    )
}