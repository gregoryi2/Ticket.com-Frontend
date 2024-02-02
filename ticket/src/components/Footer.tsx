import { Linkedin } from "lucide-react";
import Image from "next/image";

export function Footer() {
    return (
        <div className="bg-zinc-900 py-12">
            <div className="2xl:w-9/12 xl:w-9/12 lg:w-9/12 mx-auto flex justify-between">
                <div>
                    <h3 className="font-semibold mb-4">Menu</h3>
                    <div className="grid">
                        <a href="#" className="text-blue-500 text-sm mb-1 hover:opacity-90">Filmes</a>
                        <a href="#" className="text-blue-500 text-sm hover:opacity-90">Cinemas</a>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Institucional</h3>
                    <div className="grid">
                        <a href="#" className="text-blue-500 text-sm mb-1 hover:opacity-90">Quem somos</a>
                        <a href="#" className="text-blue-500 text-sm hover:opacity-90">Fale conosco</a>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Redes Sociais</h3>

                    <div className="flex gap-3 mb-2">
                        <Linkedin size={15}/>
                        <a href="#" className="text-blue-500 text-sm hover:opacity-90">Linkedin Gregory (Front-end)</a>
                    </div>

                    <div className="flex gap-3 mb-2">
                        <Linkedin size={15}/>
                        <a href="#" className="text-blue-500 text-sm hover:opacity-90">Linkedin Rennan (Back-end)</a>
                    </div>

                    <div className="flex gap-3 mb-2">
                        <Linkedin size={15}/>
                        <a href="#" className="text-blue-500 text-sm hover:opacity-90">Linkedin Jhon (Banco de dados)</a>
                    </div>

                    <div className="flex gap-3">
                        <Linkedin size={15}/>
                        <a href="#" className="text-blue-500 text-sm hover:opacity-90">Linkedin Stefano (Gerente de projeto)</a>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Formas de pagamento</h3>

                    <div className="flex gap-2">
                        <Image width={50} height={30} src={"/visa.svg"} alt="logo visa" />
                        <Image width={48} height={28} src={"/mastercard.svg"} alt="logo visa" />
                        <Image width={50} height={30} src={"/americanexpress.svg"} alt="logo visa" />
                        <Image width={50} height={30} src={"/elo.svg"} alt="logo visa" />
                        <Image width={48} height={28} src={"/hipercard.svg"} alt="logo visa" />
                        <Image width={48} height={28} src={"/discover.svg"} alt="logo visa" />
                    </div>
                </div>
            </div>

            <div className="w-9/12 mx-auto mt-12 text-center pt-10 border border-t-gray-500/20 border-l-0 border-r-0 border-b-0">
                <small className="font-semibold text-0-6 text-zinc-500 text-center">
                    ticket.com Ltda / CNPJ: 0000000000000-00 Endereço: Rua Fictícia, 25 - 9º andar - Maracanaú - CE - 00000-000<br/>
                    <span className="text-blue-500">Atendimento ao cliente</span> © 2024 - Copyright Ticket.com - todos os direitos reservados
                </small>
            </div>
        </div>
    )
}