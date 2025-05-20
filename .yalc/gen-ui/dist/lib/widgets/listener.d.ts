import { BuildContext } from "../basic/elements";
import { SingleChildRenderObjectWidget } from "../basic/framework";
import { SingleChildRenderObjectWidgetArguments } from "../basic/framework";
import { DownPointerEvent, MovePointerEvent, PointerEvent, SignalPointerEvent, UpPointerEvent } from "../gesture/events";
import { HitTestEntry, HitTestResult } from "../gesture/hit_test";
import Vector from "../math/vector";
import { SingleChildRenderView, SingleChildRenderViewArguments } from "../render-object/basic";
import { RenderView } from "../render-object/render-object";
export type onPointerDownCallback = (event: DownPointerEvent) => void;
export type onPointerMoveCallback = (event: MovePointerEvent) => void;
export type onPointerUpCallback = (event: UpPointerEvent) => void;
export type onPointerCancelCallback = (event: UpPointerEvent) => void;
export type onSignalPointerCallback = (event: SignalPointerEvent) => void;
export interface RenderPointerListenerArguments {
    onPointerDown: onPointerDownCallback;
    onPointerMove: onPointerMoveCallback;
    onPointerUp: onPointerUpCallback;
    onPointerCancel: onPointerCancelCallback;
    onSignalPointer: onSignalPointerCallback;
}
export declare class Listener extends SingleChildRenderObjectWidget {
    private _onPointerDown;
    private _onPointerMove;
    private _onPointerUp;
    private _onPointerCancel;
    private _onSignalPointer;
    constructor(option: Partial<RenderPointerListenerArguments & SingleChildRenderObjectWidgetArguments>);
    createRenderObject(): RenderView;
    updateRenderObject(context: BuildContext, renderView: RenderPointerListener): void;
}
export declare class RenderPointerListener extends SingleChildRenderView {
    private _onPointerDown;
    private _onPointerMove;
    private _onPointerUp;
    private _onPointerCancel;
    private _onSignalPointer;
    set onSignalPointer(value: onSignalPointerCallback);
    set onPointerDown(value: onPointerDownCallback);
    set onPointerMove(value: onPointerMoveCallback);
    set onPointerUp(value: onPointerUpCallback);
    set onPointerCancel(value: onPointerCancelCallback);
    constructor(option: Partial<RenderPointerListenerArguments & SingleChildRenderViewArguments>);
    handleEvent(event: PointerEvent, entry: HitTestEntry): void;
    hitTestSelf(result: HitTestResult, position: Vector): boolean;
}
