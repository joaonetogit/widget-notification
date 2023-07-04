import Notification from './Notification';
import WidgetHeader from './WidgetHeader';

const Widget = () => {
  const listNotificationsRecents = [
    {
      title: 'Você recebeu um convite para fazer parte da empresa Rocketseat',
      category: 'Convite',
      time: '3min',
      hasButtons: true,
    },
    {
      title: 'Você recebeu um convite para fazer parte da empresa Rocketseat',
      category: 'Festa',
      time: '10min',
      hasButtons: false,
    },
  ];
  const listNotificationsOlds = [
    {
      title: 'Você recebeu um convite para fazer parte da empresa Rocketseat',
      category: 'Viagem',
      time: '15min',
      hasButtons: true,
    },
    {
      title: 'Você recebeu um convite para fazer parte da empresa Rocketseat',
      category: 'Aniversário',
      time: '30min',
      hasButtons: false,
    },
  ];

  return (
    <div className="w-[448px] rounded overflow-hidden">
      <WidgetHeader title={'Notificação'} />

      <Notification
        title={'Recentes'}
        listNotification={listNotificationsRecents}
      />

      <Notification
        title={'Antigas'}
        listNotification={listNotificationsOlds}
      />
    </div>
  );
};

export default Widget;
