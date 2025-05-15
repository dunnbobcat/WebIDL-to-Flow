type AppBannerPromptOutcome = 'accepted' | 'dismissed';

type PromptResponseObject = {
  userChoice: AppBannerPromptOutcome,
};

declare class BeforeInstallPromptEvent extends Event {
  constructor(type: string, eventInitDict?: EventInit): void;

  prompt(): Promise<PromptResponseObject>;
}

/* partial */ declare class Window {
  onappinstalled: EventHandler;
  onbeforeinstallprompt: EventHandler;
}
