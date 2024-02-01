import { useKeenSlider } from "keen-slider/react"
import { ChevronRight } from "lucide-react"
import "keen-slider/keen-slider.min.css"

import { dadosEmCartaz } from "../../api/DadosEmCartaz"
import { Item } from "./Item"

export function EmBreve() {

    const [ref] = useKeenSlider<HTMLDivElement>({
        slides: {
          perView: 6,
          spacing: 15,
        },
      })

    return(
        
            <div className="w-9/12 mx-auto">
                <button className="flex items-center mb-7 text-blue-400 text-lg font-bold hover:opacity-90">
                    Em Breve
                    <ChevronRight color="#0099FF" />
                </button>

                <div ref={ref} className="keen-slider">
                    {dadosEmCartaz.map((dado) => {
                        return (
                            <Item 
                                key={dado.id}
                                dado={dado}
                            />
                        )
                    })}
                </div>
            </div>
        
    )
}