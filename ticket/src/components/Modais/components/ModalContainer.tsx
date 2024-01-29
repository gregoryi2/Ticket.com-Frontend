import { ComponentProps } from "react"

export type ContainerProps = ComponentProps<'div'> 

export function ModalContainer({ className, ...props }: ContainerProps) {
    return (
        <div className={`bg-black py-5 pb-14 px-7 z-20 ${className}`}
            { ...props} 
        />
    )
}