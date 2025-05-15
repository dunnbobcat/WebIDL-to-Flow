type RemotePlaybackState = 'connecting' | 'connected' | 'disconnected';

type RemotePlaybackAvailabilityCallback = (available: boolean) => void;

/* partial */ interface HTMLMediaElement {
  disableRemotePlayback: boolean;
  +remote: RemotePlayback;
}

declare class RemotePlayback extends EventTarget {
  onconnect: EventHandler;
  onconnecting: EventHandler;
  ondisconnect: EventHandler;
  +state: RemotePlaybackState;

  cancelWatchAvailability(id?: number): void;
  prompt(): void;
  watchAvailability(callback: RemotePlaybackAvailabilityCallback): number;
}
