type NotificationDirection = 'auto' | 'ltr' | 'rtl';

type NotificationPermission = 'default' | 'denied' | 'granted';

type GetNotificationOptions = {
  tag: string,
};

type NotificationAction = {
  action: string,
  title: string,
  icon: string,
};

type NotificationEventInit = {
  notification: Notification,
  action: string,
};

type NotificationOptions = {
  dir: NotificationDirection,
  lang: string,
  body: string,
  tag: string,
  image: string,
  icon: string,
  badge: string,
  vibrate: VibratePattern,
  timestamp: EpochTimeStamp,
  renotify: boolean,
  silent: boolean | null,
  requireInteraction: boolean,
  data: any,
  actions: Array<NotificationAction>,
};

type NotificationPermissionCallback = (
  permission: NotificationPermission,
) => void;

declare class Notification extends EventTarget {
  +actions: NotificationAction;
  +badge: string;
  +body: string;
  +data: any;
  +dir: NotificationDirection;
  +icon: string;
  +image: string;
  +lang: string;
  +maxActions: number;
  onclick: EventHandler;
  onclose: EventHandler;
  onerror: EventHandler;
  onshow: EventHandler;
  +permission: NotificationPermission;
  +renotify: boolean;
  +requireInteraction: boolean;
  +silent: boolean | null;
  +tag: string;
  +timestamp: EpochTimeStamp;
  +title: string;
  +vibrate: number;

  constructor(title: string, options?: NotificationOptions): void;

  static requestPermission(
    deprecatedCallback?: NotificationPermissionCallback,
  ): NotificationPermission;
  close(): void;
}

declare class NotificationEvent extends ExtendableEvent {
  +action: string;
  +notification: Notification;

  constructor(type: string, eventInitDict: NotificationEventInit): void;
}

/* partial */ interface ServiceWorkerGlobalScope {
  onnotificationclick: EventHandler;
  onnotificationclose: EventHandler;
}

/* partial */ interface ServiceWorkerRegistration {
  getNotifications(filter?: GetNotificationOptions): Array<Notification>;
  showNotification(title: string, options?: NotificationOptions): void;
}
