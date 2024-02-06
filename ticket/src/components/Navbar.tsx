"use client";

import { useState } from "react";
import { CircleUserRound, MapPin, Search } from "lucide-react";
import { Roboto } from 'next/font/google'
import { ModalLocalizacao } from "./Modais/ModalLocalizacao";
import { ModalBusca } from "./Modais/ModalBusca";
import { ModalEntreCadastreSe } from "./Modais/ModalEntreCadastreSe";
import Image from "next/image";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export function Navbar() {

    let LarguraDaTela = window.innerWidth

    const [modalEntreCadastreSeIsOpen, setModalEntreCadastreSeIsOpen] = useState<boolean>(false)
    const [modalLocalizacaolIsOpen, setModalLocalizacaolIsOpen] = useState<boolean>(false)
    const [modalBuscaIsOpen, setModalBuscaIsOpen] = useState<boolean>(false)

    function abrirModalEntreCadastreSe() {
        modalEntreCadastreSeIsOpen === false ? setModalEntreCadastreSeIsOpen(true) : ""
    }
    function abrirModalLocalizacaol() {
        modalLocalizacaolIsOpen === false ? setModalLocalizacaolIsOpen(true): ""
    }
    function abrirModalBusca() {
        modalBuscaIsOpen === false ? setModalBuscaIsOpen(true) : ""
    }
    function fecharModais() {
        setModalEntreCadastreSeIsOpen(false)
        setModalLocalizacaolIsOpen(false)
        setModalBuscaIsOpen(false)
    }

    return (
        <div className={`${roboto.className} fixed top-0 w-full z-10`}>
            <div className="flex justify-center py-4 bg-gradient-to-r from-blue-600 to-blue-950">
                <div className="flex justify-between w-9/12">
                    <div className="flex justify-between gap-20">
                        {LarguraDaTela > 768 ?
                            <a href="#" className="text-3xl">
                                <strong>Ticket.com</strong>
                            </a>
                            :
                            <Image
                                src={"/logo.jpeg"}
                                width={50}
                                height={30}
                                alt="logo"
                                className="rounded-full"
                            />
                        }

                        <button
                            onClick={() => abrirModalLocalizacaol()} 
                            className="flex items-center gap-2 text-md hover:opacity-80"
                        >
                            <MapPin width={28} height={28} strokeWidth={1.5}/>
                            Ceará
                        </button>
                    </div>

                    <div className="flex justify-between gap-4 lg:gap-16">
                        <button
                            onClick={() => abrirModalBusca()} 
                            className="hover:opacity-80"
                        >
                            <Search width={30} height={30} strokeWidth={1.5}/>
                        </button>

                        <div className="flex items-center gap-3 text-xs">
                            <CircleUserRound width={33} height={33} strokeWidth={1.5}/>
                            {LarguraDaTela > 768 ?
                                <button onClick={() => abrirModalEntreCadastreSe()} className="text-left hover:opacity-80 leading-4">
                                    Entre ou <br/>
                                    Cadastre-se
                                </button>
                                :
                                ""
                            }
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

            {modalLocalizacaolIsOpen === true ? <ModalLocalizacao fecharModais={fecharModais} /> : ""}
            {modalBuscaIsOpen === true ? <ModalBusca fecharModais={fecharModais} /> : ""}
            {modalEntreCadastreSeIsOpen === true ? <ModalEntreCadastreSe fecharModais={fecharModais} /> : ""}
        </div>
    )
}

