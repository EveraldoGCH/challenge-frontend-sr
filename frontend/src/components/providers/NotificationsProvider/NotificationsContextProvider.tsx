import { ReactNode, useState } from 'react'
import { NotificationsContext } from './useNotificationsContext'
import { useModal } from '@/hooks/utils/useModal'
import ModalNotification, {
  ModalNotificationProps,
} from '@/components/widgets/ModalNotification/ModalNotification'

export interface NotificationsContextType {
  modalNotify: (props: ModalNotificationProps['content']) => void
}

export const NotificationsContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [modalNotifyContent, setModalNotifyContent] = useState<
    ModalNotificationProps['content']
  >({
    title: '',
    message: '',
    variant: 'success',
  })

  const {
    open: openModalNotify,
    onOpen: onOpenModalNotify,
    onClose: onCloseModalNotify,
  } = useModal()

  const modalNotify = (props: ModalNotificationProps['content']) => {
    onOpenModalNotify()
    setModalNotifyContent(props)
  }

  return (
    <NotificationsContext.Provider
      value={{
        modalNotify,
      }}
    >
      <ModalNotification
        open={openModalNotify}
        onClose={onCloseModalNotify}
        content={modalNotifyContent}
      />
      {children}
    </NotificationsContext.Provider>
  )
}
