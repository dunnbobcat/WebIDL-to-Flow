type RemotePlaybackState = 'connecting' | 'connected' | 'disconnected';

type RemotePlaybackAvailabilityCallback = (available: boolean) => void;

/* partial */ declare class HTMLMediaElement {
  disableRemotePlayback: boolean;
  +remote: RemotePlayback;
}

declare class RemotePlayback extends EventTarget {
  onconnect: EventHandler;
  onconnecting: EventHandler;
  ondisconnect: EventHandler;
  +state: RemotePlaybackState;

  cancelWatchAvailability(id?: number): Promise<void>;
  prompt(): Promise<void>;
  watchAvailability(
    callback: RemotePlaybackAvailabilityCallback,
  ): Promise<number>;
}
