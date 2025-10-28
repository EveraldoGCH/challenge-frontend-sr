import { ReactNode, useEffect, useState } from 'react'
import { NotificationsContext } from './useNotificationsContext'
import { useModal } from '@/hooks/utils/useModal'
import ModalNotification, {
  ModalNotificationProps,
} from '@/components/widgets/Modals/ModalNotification/ModalNotification'
import ModalFullScreenLoading from '@/components/widgets/Modals/ModalFullScreenLoading/ModalFullScreenLoading'

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

  const {
    open: openModalFullScreenLoading,
    onClose: onCloseModalFullScreenLoading,
  } = useModal(true)

  const modalNotify = (props: ModalNotificationProps['content']) => {
    onOpenModalNotify()
    setModalNotifyContent(props)
  }

  useEffect(() => {
    setTimeout(() => {
      onCloseModalFullScreenLoading()
    }, 700)
  }, [])

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
      <ModalFullScreenLoading open={openModalFullScreenLoading} />
      {children}
    </NotificationsContext.Provider>
  )
}
