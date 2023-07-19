import { ElementType } from "react"

interface NotificationIconProps {
  Icon: ElementType
}

export function NotificationIcon({ Icon }: NotificationIconProps): JSX.Element {
  return (
    <Icon className="w-6 h-6 text-violet-500 nt-3" />
  )
}