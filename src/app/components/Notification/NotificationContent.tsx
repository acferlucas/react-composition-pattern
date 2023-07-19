interface NotificationContentProps {
  text: string;
}
export default function NotificationContent({ text }: NotificationContentProps): JSX.Element {
  //Você recebeu um convite para fazer parte da empresa Rocketseat
  return (
    <div className="flex-1 flex flex-col gap-2">
      <p className="text-sm leading-relaxed text-zinc-400 flex items-center gap-1">
        {text}
      </p>
      <div className="text-xxs text-zinc-400 flex items-center gap-1">
        <span>Convite</span>
        <span>Há 3 min</span>
      </div>
    </div>
  )
}