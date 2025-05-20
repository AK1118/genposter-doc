import { BuildOwner } from "./elements";
import Vector from "../math/vector";
import { BindingBase, Widget } from "@/lib/basic/framework";
import { HitTestResult } from "../gesture/hit_test";
import { GestureBinding } from "../gesture/binding";
import { AbstractNode, RenderView } from "../render-object/render-object";
type FrameCallback = (timestamp: number) => void;
export declare class SchedulerFrameManager {
    private static instance;
    private frameCallbacks;
    private isRequestingFrame;
    private nextCallbackId;
    private frameUpdater;
    private requestAnimationFrame;
    private constructor();
    private initAnimationFrame;
    static getInstance(): SchedulerFrameManager;
    addFrameCallback(callback: FrameCallback): number;
    removeFrameCallback(callbackId: number): void;
    private requestFrameIfNeeded;
    private handleFrame;
}
declare class SchedulerBinding extends BindingBase {
    private frameCallbacks;
    private nextFrameCallbackId;
    static instance: SchedulerBinding;
    protected initInstance(): void;
    ensureVisualUpdate(): void;
    private scheduleFrame;
    handleDrawFrame(): void;
    scheduleFrameCallback(callback: FrameCallback): number;
    handleBeginCallbackFrame(timeStamp: number): void;
    requestVisualUpdate(): void;
    private handleCleanCanvas;
}
export declare class PipelineOwner {
    private rootNode;
    private needRepaintList;
    private needReLayoutList;
    get renderView(): RenderView;
    attachNode(rootNode: AbstractNode): void;
    flushPaint(): void;
    flushLayout(): void;
    pushNeedingPaint(node: RenderView): void;
    pushNeedingLayout(node: RenderView): void;
    requestVisualUpdate(): void;
}
export declare class RendererBinding extends GestureBinding {
    private _pipelineOwner;
    static instance: RendererBinding;
    debug: boolean;
    get renderView(): RenderView;
    constructor();
    protected initInstance(): void;
    get pipelineOwner(): PipelineOwner;
    drawFrame(): void;
    protected hitTest(result: HitTestResult, position: Vector): void;
}
declare class ElementBinding extends BindingBase {
    static instance: ElementBinding;
    buildOwner: BuildOwner;
    private rootElement;
    private static _elementCount;
    static get elementCount(): number;
    static incrementElementCount(): void;
    static decrementElementCount(): void;
    static subElementCount(count: number): void;
    protected initInstance(): void;
    drawFrame(): void;
    attachRootWidget(rootWidget: Widget): void;
}
declare class Binding extends BindingBase {
    private static _instance;
    schedulerBinding: SchedulerBinding;
    elementBinding: ElementBinding;
    rendererBinding: RendererBinding;
    static getInstance(): Binding;
    get instance(): Binding;
}
export { Binding, SchedulerBinding, ElementBinding };
