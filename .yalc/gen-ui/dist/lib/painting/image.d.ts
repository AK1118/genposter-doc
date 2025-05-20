import { Size } from "../basic/rect";
import Vector from "../math/vector";
import Alignment from "./alignment";
import { BoxFit } from "./box-fit";
import { BoxPainter, Decoration } from "./decoration";
import { ImageProvider } from "./image-provider";
import { Painter } from "./painter";
export interface ImageDecorationArguments {
    imageProvider: ImageProvider;
    fit: BoxFit;
    alignment: Alignment;
    width: number;
    height: number;
}
export declare class ImageDecoration extends Decoration implements ImageDecorationArguments {
    imageProvider: ImageProvider;
    width: number;
    height: number;
    fit: BoxFit;
    alignment: Alignment;
    constructor(args: Partial<ImageDecorationArguments>);
    createBoxPainter(onChanged: VoidFunction): ImageDecorationPainter;
}
export declare class ImageDecorationPainter extends BoxPainter {
    private decoration;
    private sourceRect;
    private destinationRect;
    private _image;
    private sourceImageSize;
    constructor(decoration: ImageDecoration, onChanged: VoidFunction);
    loadImage(): Promise<void>;
    get width(): number;
    get height(): number;
    layout(size: Size): Size;
    paint(paint: Painter, offset: Vector, size: Size): void;
    debugPaint(paint: Painter, offset: Vector, size: Size): void;
}
