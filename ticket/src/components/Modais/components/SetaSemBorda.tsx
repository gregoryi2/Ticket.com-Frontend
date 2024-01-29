import { ComponentProps } from "react"

export type IconProps = ComponentProps<"div">

export function SetaSemBorda({className, ...props}: IconProps) {
    return (
        <div className={`triangulo-sem-borda ${className}`}
            {...props}
        />
    )
}