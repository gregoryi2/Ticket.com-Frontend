"use client";

import { useState } from "react";
import { CircleUserRound, MapPin, Search } from "lucide-react";
import { Roboto } from 'next/font/google'
import { ModalLocalizacao } from "./Modais/ModalLocalizacao";
import { ModalBusca } from "./Modais/ModalBusca";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export function Navbar() {
    const [modaLocalizacaolIsOpen, setModaLocalizacaolIsOpen] = useState<boolean>(false)
    const [modaBuscaIsOpen, setModaBuscaIsOpen] = useState<boolean>(false)

    function abrirFecharModalLocalizacaol() {
        if(modaLocalizacaolIsOpen === false) {
            setModaLocalizacaolIsOpen(true)
        } else {
            setModaLocalizacaolIsOpen(false)
        }
    }

    function abrirFecharModalBusca() {
        if(modaBuscaIsOpen === false) {
            setModaBuscaIsOpen(true)
        } else {
            setModaBuscaIsOpen(false)
        }
    }

    function fecharModais() {
        setModaLocalizacaolIsOpen(false)
        setModaBuscaIsOpen(false)
    }

    return (
        <div className="fixed top-0 w-full z-10">
            <div className="flex justify-center py-4 bg-gradient-to-r from-blue-600 to-blue-950">
                <div className="flex justify-between w-9/12">
                    <div className="flex justify-between gap-20">
                        <a href="#" className="text-3xl">
                            <strong>Ticket.com</strong>
                        </a>

                        <button
                            onClick={() => abrirFecharModalLocalizacaol()} 
                            className="flex items-center gap-2 text-md hover:opacity-80"
                        >
                            <MapPin width={28} height={28} strokeWidth={1.5}/>
                            Ceará
                        </button>
                    </div>

                    <div className="flex justify-between gap-16">
                    <button
                        onClick={() => abrirFecharModalBusca()} 
                        className="hover:opacity-80"
                    >
                        <Search width={30} height={30} strokeWidth={1.5}/>
                    </button>

                    <div className="flex items-center gap-3 text-xs">
                        <CircleUserRound width={33} height={33} strokeWidth={1.5}/>
                        <a href="#" className={"hover:opacity-80 leading-4"}>
                        Entre ou <br/>
                        Cadastre-se
                        </a>
                    </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center py-4 font-semibold bg-blue-950 text-blue-100">
                <div className="w-9/12 flex gap-14 pl-7">
                    <a href="#" className="hover:opacity-80">FILMES</a>
                    <a href="#" className="hover:opacity-80">CINEMAS</a>
                </div>
            </div>

            {modaLocalizacaolIsOpen === true ? <ModalLocalizacao /> : ""}
            {modaBuscaIsOpen === true ? <ModalBusca /> : ""}
        </div>
    )
}

