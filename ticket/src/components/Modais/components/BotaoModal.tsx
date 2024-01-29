import { ComponentProps } from "react";

export type ButtonProps = ComponentProps<'button'>

export function BotaoModal({ className, ...props }: ButtonProps) {
    return (
        <button className={`w-full bg-blue-500 text-black text-sm font-bold py-2 rounded-sm hover:opacity-90 ${className}`}
            {...props}
        />
    )
}