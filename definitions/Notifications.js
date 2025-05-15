type NotificationDirection = 'auto' | 'ltr' | 'rtl';

type NotificationPermission = 'default' | 'denied' | 'granted';

type GetNotificationOptions = {
  tag: string,
};

type NotificationAction = {
  action: string,
  icon: string,
  title: string,
};

type NotificationEventInit = {
  action: string,
  notification: Notification,
};

type NotificationOptions = {
  actions: Array<NotificationAction>,
  badge: string,
  body: string,
  data: any,
  dir: NotificationDirection,
  icon: string,
  image: string,
  lang: string,
  renotify: boolean,
  requireInteraction: boolean,
  silent: boolean | null,
  tag: string,
  timestamp: EpochTimeStamp,
  vibrate: VibratePattern,
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
