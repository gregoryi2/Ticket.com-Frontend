import { X } from "lucide-react";
import { ModalTrailerIsOpenContext } from "@/contexts/ModalTrailerContext";
import { useContext } from "react";

export function ModalTrailer() {

    const { modalTrailerIsOpen, setModalTrailerIsOpen } = useContext<any>(ModalTrailerIsOpenContext)

    function handleAbrirModal() {
        modalTrailerIsOpen === true ? setModalTrailerIsOpen(false) : setModalTrailerIsOpen(true)
    }

    return(
        <div className="z-50 bg-zinc-800/50 h-screen w-screen fixed top-0">
            <div className="w-5/12 bg-zinc-800 px-10 pt-7 pb-9 rounded-3xl mt-20vh mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold">Nosso Lar 2: Os Mensageiros</h2>
                    <button onClick={() => handleAbrirModal()} className="hover:opacity-80">
                        <X color="#0099FF" />
                    </button>
                </div>
                <iframe className="w-full h-96 rounded-xl" src="https://www.youtube.com/embed/1JNxd_Pafx0?si=WIa2RmhMnSiC1w6h" title="YouTube video player"></iframe>
            </div>
        </div>
    )
}