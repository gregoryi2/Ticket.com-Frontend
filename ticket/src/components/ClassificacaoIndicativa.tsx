import { ComponentProps } from "react"

export type TextProps = ComponentProps<'p'> 

export function ClassificacaoIndicativa({ ...props }: TextProps) {
    const classificacao = props.children

    if (classificacao === "10") {
        return <p className="flex justify-center items-center bg-blue-500 w-7 h-6 rounded-sm text-xs font-bold shadow-lg"
                {...props}
            />
    } else if (classificacao === "12") {
        return <p className="flex justify-center items-center bg-yellow-400 w-7 h-6 rounded-sm text-xs font-bold shadow-lg"
                {...props}
            />
    } else if (classificacao === "14") {
        return <p className="flex justify-center items-center bg-orange-400 w-7 h-6 rounded-sm text-xs font-bold shadow-lg"
                {...props}
            />
    } else if (classificacao === "16") {
        return <p className="flex justify-center items-center bg-red-500 w-7 h-6 rounded-sm text-xs font-bold shadow-lg"
                {...props}
            />
    } else if (classificacao === "18") {
        return <p className="flex justify-center items-center bg-black w-7 h-6 rounded-sm text-xs font-bold shadow-lg"
                {...props}
            />
    } else if (classificacao === "L") {
        return <p className="flex justify-center items-center bg-lime-500 w-7 h-6 rounded-sm text-xs font-bold shadow-lg"
                {...props}
            />
    }
}