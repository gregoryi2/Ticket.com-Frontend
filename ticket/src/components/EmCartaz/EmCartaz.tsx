import { useKeenSlider } from "keen-slider/react"
import { ChevronRight } from "lucide-react"
import "keen-slider/keen-slider.min.css"

import { dadosEmCartaz } from "../../api/DadosEmCartaz"
import { Item } from "./Item"

export function EmCartaz() {

    const [ref] = useKeenSlider<HTMLDivElement>({
        breakpoints: {
            "(min-width: 768px)": {
                slides: { perView: 3 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 6, spacing: 15 },
            },
        },
        slides: {
          perView: 3, spacing: 10
        },
      })

    return(
        
            <div className="w-full lg:w-9/12 mx-5 lg:mx-auto mb-20">
                <button className="flex items-center mb-7 text-blue-400 text-lg font-bold hover:opacity-90">
                    Em Cartaz
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