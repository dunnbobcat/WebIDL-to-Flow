type PaintRenderingContext2DSettings = {
alpha: boolean};

/* partial */ declare namespace CSS {declare +paintWorklet: Worklet;
}

declare class PaintRenderingContext2D mixins mixin$CanvasState, mixin$CanvasTransform, mixin$CanvasCompositing, mixin$CanvasImageSmoothing, mixin$CanvasFillStrokeStyles, mixin$CanvasShadowStyles, mixin$CanvasRect, mixin$CanvasDrawPath, mixin$CanvasDrawImage, mixin$CanvasPathDrawingStyles, mixin$CanvasPath {}

declare class PaintSize {+height: number;
+width: number;
}

declare class PaintWorkletGlobalScope extends WorkletGlobalScope {+devicePixelRatio: number;

registerPaint(name: string, paintCtor: VoidFunction): void;
}











