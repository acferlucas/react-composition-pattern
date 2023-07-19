import { ArrowBigDownDash, ArrowDown, ArrowUp, Check, Rocket, X } from 'lucide-react'
import { Notification } from './Notification'

export function Widget(): JSX.Element {
  return (
    <div className='w-[448px] rounded overflow-hidden'>
      <div className='bg-zinc-800 py-4 px-6 flex items-center justify-between'>
        <span className='font-bold'>Notificações</span>

        <button className='text-violet-500 font-bold text-xs hover:text-violet-400'>
          MARCAR TODAS COMO VISTAS

        </button>
      </div>

      <div>
        <div>
          <div className='bg-zinc-950 font-medium px-5 py-2 text-sm text-zinc-400 '>
            Recentes
          </div>
        </div>

        <div className='divide-y-2 divide-zinc-950'>
          <Notification.Layout>
            <Notification.Icon Icon={Rocket} />
            <Notification.Content text='Você recebeu um convite para fazer parte da empresa Rocketseat' />
            <Notification.Actions >
              <Notification.Action Icon={ArrowDown} />
              <Notification.Action Icon={ArrowUp} />
            </Notification.Actions>
          </Notification.Layout>

          <Notification.Layout>
            <Notification.Icon Icon={Rocket} />
            <Notification.Content text='Você recebeu um convite para fazer parte da empresa Rocketseat' />
            <Notification.Actions >
              <Notification.Action Icon={Check} />
              <Notification.Action Icon={X} />
            </Notification.Actions>
          </Notification.Layout>

        </div>
      </div>

      <div>
        <div>
          <div className='bg-zinc-950 font-medium px-5 py-2 text-sm text-zinc-400 '>
            Antigas
          </div>
        </div>

        <div className='divide-y-2 divide-zinc-950'>
          <Notification.Layout>
            <Notification.Content text='Você recebeu um convite para fazer parte da empresa Rocketseat' />
          </Notification.Layout>

          <Notification.Layout>
            <Notification.Content text='Você recebeu um convite para fazer parte da empresa Rocketseat' />
          </Notification.Layout>

        </div>
      </div>
    </div>
  )
}