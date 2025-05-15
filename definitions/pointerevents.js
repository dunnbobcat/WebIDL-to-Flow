type PointerEventInit = {
  altitudeAngle: number,
  azimuthAngle: number,
  coalescedEvents: Array<PointerEvent>,
  height: number,
  isPrimary: boolean,
  persistentDeviceId: number,
  pointerId: number,
  pointerType: string,
  predictedEvents: Array<PointerEvent>,
  pressure: number,
  tangentialPressure: number,
  tiltX: number,
  tiltY: number,
  twist: number,
  width: number,
};

/* partial */ declare class Element {
  hasPointerCapture(pointerId: number): boolean;
  releasePointerCapture(pointerId: number): void;
  setPointerCapture(pointerId: number): void;
}

/* partial */ declare class Navigator {
  +maxTouchPoints: number;
}

declare class PointerEvent extends MouseEvent {
  +altitudeAngle: number;
  +azimuthAngle: number;
  +height: number;
  +isPrimary: boolean;
  +persistentDeviceId: number;
  +pointerId: number;
  +pointerType: string;
  +pressure: number;
  +tangentialPressure: number;
  +tiltX: number;
  +tiltY: number;
  +twist: number;
  +width: number;

  constructor(type: string, eventInitDict?: PointerEventInit): void;

  getCoalescedEvents(): Array<PointerEvent>;
  getPredictedEvents(): Array<PointerEvent>;
}

/* partial */ declare class mixin$GlobalEventHandlers {
  ongotpointercapture: EventHandler;
  onlostpointercapture: EventHandler;
  onpointercancel: EventHandler;
  onpointerdown: EventHandler;
  onpointerenter: EventHandler;
  onpointerleave: EventHandler;
  onpointermove: EventHandler;
  onpointerout: EventHandler;
  onpointerover: EventHandler;
  onpointerrawupdate: EventHandler;
  onpointerup: EventHandler;
}
