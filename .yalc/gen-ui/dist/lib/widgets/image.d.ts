import { BuildContext, Element } from "../basic/elements";
import { SingleChildRenderObjectWidget, Widget } from "../basic/framework";
import { Key } from "../basic/key";
import Vector from "../math/vector";
import Alignment from "../painting/alignment";
import { BoxFit } from "../painting/box-fit";
import { ImageDecorationArguments, ImageDecorationPainter } from "../painting/image";
import { AssetsImageUrlBuilder, ImageProvider } from "../painting/image-provider";
import { PaintingContext, SingleChildRenderView } from "../render-object/basic";
import { RenderView } from "../render-object/render-object";
export type ImagePlaceholderBuilder = (context: BuildContext) => Widget;
export type ImageArguments = Partial<Omit<ImageDecorationArguments, "imageProvider"> & {
    key: Key;
    placeholderBuilder: ImagePlaceholderBuilder;
}> & Required<{
    imageProvider: ImageProvider;
}>;
export declare class Image extends SingleChildRenderObjectWidget implements ImageDecorationArguments {
    imageProvider: ImageProvider;
    fit: BoxFit;
    alignment: Alignment;
    width: number;
    height: number;
    placeholderBuilder: ImagePlaceholderBuilder;
    constructor(option: ImageArguments);
    createRenderObject(): RenderView;
    get imageDecorationArgs(): Partial<ImageDecorationArguments>;
    updateRenderObject(context: BuildContext, renderView: ImageRenderView): void;
    createElement(): Element;
    static netWork(netWorkImageUrl: string, option?: Partial<ImageArguments>): Image;
    static assets(assetsImageUrl: AssetsImageUrlBuilder, option?: Partial<ImageArguments>): Image;
}
export declare class ImageRenderView extends SingleChildRenderView {
    private _decorationPainter;
    private _width;
    private _height;
    constructor(args: Partial<ImageDecorationArguments>);
    set width(value: number);
    set height(value: number);
    set decorationPainter(value: ImageDecorationPainter);
    get decorationPainter(): ImageDecorationPainter;
    performLayout(): void;
    render(context: PaintingContext, offset?: Vector): void;
    debugRender(context: PaintingContext, offset?: Vector): void;
}
