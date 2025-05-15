/* partial */ interface Document {
  onprerenderingchange: EventHandler;
  +prerendering: boolean;
}

/* partial */ interface PerformanceNavigationTiming {
  +activationStart: number;
}
