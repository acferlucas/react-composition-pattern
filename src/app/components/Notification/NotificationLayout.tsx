import { ReactNode } from "react"

interface NotificationLayoutProps {
  children: ReactNode
}

export default function NotificationLayout({ children }: NotificationLayoutProps): JSX.Element {
  return (
    <div className="bg-zinc-900 px-8 py-4 flex items-start gap-6">
      {children}
    </div>
  )
}