import { Shadow } from "../core/base-types";
export declare enum PaintingStyle {
    fill = "fill",
    stroke = "stroke"
}
export interface Painter {
    style: PaintingStyle;
    canvas: HTMLCanvasElement | OffscreenCanvas | undefined;
    setShadow(option?: Shadow): void;
    restoreShadow(): void;
    draw(): Promise<void>;
    drawSync(): void;
    fillRect(x: number, y: number, w: number, h: number): void;
    strokeRect(x: number, y: number, w: number, h: number): void;
    clearRect(x: number, y: number, w: number, h: number): void;
    save(): void;
    restore(): void;
    beginPath(): void;
    closePath(): void;
    stroke(): void;
    fill(): void;
    clip(fillRule?: "nonzero" | "evenodd"): void;
    rect(x: number, y: number, w: number, h: number): void;
    moveTo(x: number, y: number): void;
    lineTo(x: number, y: number): void;
    arc(x: number, y: number, radius: number, start: number, end: number, counterclockwise?: boolean): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    ellipse(x: number, y: number, a: number, b: number): void;
    roundRect(x: number, y: number, width: number, height: number, radii?: number | Iterable<number>): void;
    drawImage(image: CanvasImageSource, x: number, y: number, width: number, height: number, dx?: number, dy?: number, dw?: number, dh?: number): void;
    rotate(angle: number): void;
    translate(x: number, y: number): void;
    scale(x: number, y: number): void;
    transform(matrix: number[]): void;
    set lineWidth(width: number);
    set fillStyle(style: string | CanvasGradient);
    set strokeStyle(style: string | CanvasGradient);
    set shadowColor(shadowColor: string);
    set shadowBlur(shadowBlur: number);
    set shadowOffsetX(shadowOffsetX: number);
    set shadowOffsetY(shadowOffsetY: number);
    set globalAlpha(alpha: number);
    set font(font: string);
    set lineCap(lineCap: CanvasLineCap);
    set lineJoin(lineJoin: CanvasLineJoin);
    set textBaseLine(baseLine: CanvasTextBaseline);
    fillText(text: string, x: number, y: number): void;
    strokeText(text: string, x: number, y: number, maxWidth?: number): void;
    measureText(text: string): TextMetrics;
    setLineDash(segments: Iterable<number>): void;
    getImageData(x: number, y: number, w: number, h: number): ImageData;
    putImageData(imagedata: ImageData, dx: number, dy: number): void;
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
    createConicGradient(startAngle: number, x: number, y: number): CanvasGradient;
}
type PaintType = CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | any;
export declare class GenPainter implements Painter {
    private static _paint;
    paint: PaintType;
    style: PaintingStyle;
    constructor(paint?: PaintType);
    static setPaint(paint?: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D): void;
    private setPaintQuality;
    get canvas(): any;
    set lineWidth(width: number);
    set fillStyle(style: string | CanvasGradient);
    set strokeStyle(style: string | CanvasGradient);
    set shadowColor(shadowColor: string);
    set shadowBlur(shadowBlur: number);
    setShadow(option?: Shadow): void;
    set shadowOffsetX(shadowOffsetX: number);
    set shadowOffsetY(shadowOffsetY: number);
    set textBaseLine(baseLine: "top" | "hanging" | "middle" | "alphabetic" | "ideographic" | "bottom");
    drawSync(): void;
    private _hasDrawFunction;
    get hasDrawFunction(): boolean;
    draw(): Promise<void>;
    strokeRect(x: number, y: number, w: number, h: number): void;
    fillRect(x: number, y: number, w: number, h: number): void;
    stroke(): void;
    clearRect(x: number, y: number, w: number, h: number): void;
    save(): void;
    rotate(angle: number): void;
    beginPath(): void;
    closePath(): void;
    restore(): void;
    restoreShadow(): void;
    translate(x: number, y: number): void;
    fill(): void;
    rect(x: number, y: number, w: number, h: number): void;
    clip(fillRule?: "nonzero" | "evenodd"): void;
    arc(x: number, y: number, radius: number, start: number, end: number, counterclockwise?: boolean): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    /**
     *
     * @param x 圆心点x
     * @param y 圆心点y
     * @param a width
     * @param b height
     */
    ellipse(x: number, y: number, a: number, b: number): void;
    drawImage(image: HTMLImageElement | SVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | OffscreenCanvas, x: number, y: number, width: number, height: number, dx?: number, dy?: number, dw?: number, dh?: number): void;
    scale(a: number, b: number): void;
    moveTo(x: number, y: number): void;
    lineTo(x: number, y: number): void;
    getImageData(x: number, y: number, w: number, h: number): ImageData;
    fillText(text: string, x: number, y: number): void;
    strokeText(text: string, x: number, y: number, maxWidth?: number): void;
    set font(font: string);
    setFont(font: string): void;
    getFont(): any;
    set globalAlpha(alpha: number);
    measureText(text: string): TextMetrics;
    set lineCap(lineCap: any);
    set lineJoin(lineJoin: any);
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    setLineDash(segments: Iterable<number>): void;
    putImageData(imagedata: ImageData, dx: number, dy: number): void;
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
    /**
     * 水平缩放。 垂直倾斜。水平倾斜。垂直缩放。水平移动。垂直移动。
     * 如果一个点原始坐标为 (x, y)，经过变换后，其坐标将变为 (ax + cy + e, bx + dy + f)
  
  e 和 f 控制上下文的水平和垂直平移。
  当 b 和 c 为 0 时，a 和 d 控制上下文的水平和垂直缩放。
  当 a 和 d 为 1 时，b 和 c 控制上下文的水平和垂直倾斜。
     */
    transform(matrix: Array<number>): void;
    createConicGradient(startAngle: number, x: number, y: number): CanvasGradient;
    roundRect(x: number, y: number, width: number, height: number, radii?: number | Iterable<number>): void;
    update(): void;
}
export {};
