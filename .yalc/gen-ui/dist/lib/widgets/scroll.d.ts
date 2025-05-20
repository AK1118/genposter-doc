import { BuildContext } from "../basic/elements";
import { SingleChildRenderObjectWidgetArguments, StatelessWidget, Widget } from "../basic/framework";
import Rect, { Size } from "../basic/rect";
import { Curve } from "../core/animation";
import { Axis, AxisDirection } from "../core/base-types";
import { ChangeNotifier } from "../core/change-notifier";
import { Duration } from "../core/duration";
import { ScrollPhysics } from "../core/scroll-physics";
import Vector from "../math/vector";
import { Painter } from "../painting/painter";
import { ScrollPosition, ScrollPositionWithSingleContext } from "../render-object/viewport";
import { CustomPainter } from "../rendering/custom";
export declare class ScrollController extends ChangeNotifier {
    private initialScrollOffset;
    private positions;
    get position(): ScrollPosition;
    animateTo(offset: number, duration?: Duration, curve?: Curve): Promise<void>;
    jumpTo(offset: number): void;
    attach(position: ScrollPosition): void;
    detach(position: ScrollPosition): void;
    createScrollPosition(physics: ScrollPhysics, axisDirection: AxisDirection, initPixels?: number): ScrollPositionWithSingleContext;
    get offset(): number;
}
declare class ScrollbarPainter extends CustomPainter {
    private key;
    private _scrollbarWidth;
    private _maxContentExtent;
    private _viewportDimension;
    private _thumbMainAxisPosition;
    private _thumbExtent;
    private _thumbOpacity;
    private _scrollAxis;
    private _thumbRect;
    private _trackRect;
    private _pixels;
    set maxContentExtent(value: number);
    get maxContentExtent(): number;
    set viewportDimension(value: number);
    set thumbOpacity(value: number);
    set scrollAxis(value: Axis);
    get thumbRect(): Rect;
    get trackRect(): Rect;
    set scrollbarWidth(value: number);
    get overflow(): boolean;
    get thumbMainAxisPosition(): number;
    render(painter: Painter, size: Size): void;
    private setThumbExtent;
    private paintScrollBar;
    protected paintThumb(painter: Painter, size: Size): void;
    protected paintTrack(painter: Painter, size: Size): void;
    update(position: ScrollPosition): void;
    hitTestThumb(position: Vector): boolean;
    getTractScroll(delta: number): number;
}
interface ScrollBarArguments {
    controller: ScrollController;
    scrollbarPainter: ScrollbarPainter;
    scrollbarWidth: number;
}
export declare class ScrollBar extends StatelessWidget {
    private controller;
    private child;
    scrollbarPainter: ScrollbarPainter;
    scrollbarWidth: number;
    constructor(args: Partial<ScrollBarArguments & SingleChildRenderObjectWidgetArguments>);
    build(context: BuildContext): Widget;
}
export {};
