import { useEffect } from "react";
import { BotaoModal } from "./components/BotaoModal";
import { ModalContainer } from "./components/ModalContainer";
import { SetaSemBorda } from "./components/SetaSemBorda";

export function ModalEntreCadastreSe({ fecharModais }: any) {

    function handleCliqueFora(event:MouseEvent) {
        const entreCadastreSe = document.getElementById('entreCadastreSe')

        if(entreCadastreSe !== null && !entreCadastreSe.contains(event.target as Node)) {
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
        <ModalContainer id="entreCadastreSe" className="absolute top-4-3 right-0">
            <SetaSemBorda className="right-80"/>
            <div className="flex">
                <div className="w-72 pr-16">
                    <h3 className="font-semibold text-lg mb-4">
                        Ainda não é cliente Ticket.com?
                    </h3>

                    <p className="text-sm mb-4">
                        Compre ingressos para ir ao cinema com segurança e mais comodidade!
                    </p>

                    <BotaoModal>
                        CRIAR UMA NOVA CONTA
                    </BotaoModal>
                </div>

                <div className="px-7 border-l border-l-zinc-500">
                    <h3 className="font-semibold text-lg mb-4">
                        Cliente Ticket.com
                    </h3>

                    <a href="#" className="text-sm text-blue-400 hover:opacity-90">
                        Entrar na minha Conta
                    </a>
                </div>
            </div>
        </ModalContainer>
    )
}