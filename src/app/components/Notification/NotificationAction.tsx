import { ButtonHTMLAttributes, ElementType } from "react"

interface NotificationActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: ElementType
}

export function NotificationAction({ Icon, ...rest }: NotificationActionProps): JSX.Element {
  return (
    <button
      {...rest}
      className="w-8 h-8 rounded flex items-center justify-center bg-zinc-700 hover:bg-zinc-500">
      <Icon className="w-3 h-3 text-zinc-50" />
    </button>
  )
}