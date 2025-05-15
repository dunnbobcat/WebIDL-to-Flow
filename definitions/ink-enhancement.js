type InkPresenterParam = {
  presentationArea: Element | null,
};

type InkTrailStyle = {
  color: string,
  diameter: number,
};

declare class DelegatedInkTrailPresenter {
  +presentationArea: Element | null;

  updateInkTrailStartPoint(event: PointerEvent, style: InkTrailStyle): void;
}

declare class Ink {
  requestPresenter(param?: InkPresenterParam): DelegatedInkTrailPresenter;
}

/* partial */ declare class Navigator {
  +ink: Ink;
}
