import { Size } from "./rect";
import { Widget } from "./framework";
import { GlobalKey, Key } from "./key";
import { RenderView } from "../render-object/render-object";
export declare class InactiveElement {
    private _elements;
    get elements(): Set<Element>;
    count(): number;
    /**
     * 在帧构建完成后，清空所有未被重复使用的节点，该方法只能在 @ElementBinding.drawFrame 调用。
     */
    clear(): void;
    remove(child: Element): void;
    private performDeactivate;
    add(child: Element): void;
    including(child: Element): boolean;
    private unmount;
}
export declare class BuildOwner {
    private dirtyElementList;
    readonly inactiveElements: InactiveElement;
    scheduleBuildFor(dirtyElement: Element): void;
    buildScope(context: BuildContext): void;
    private globalKeys;
    registerGlobalKey(key: GlobalKey, element: Element): void;
    getElementByGlobalKey(key: GlobalKey): Element;
}
export declare abstract class BuildContext {
    abstract get mounted(): boolean;
    get size(): Size;
    findRenderView(): RenderView;
}
declare enum ElementLifecycle {
    initial = "initial",
    active = "active",
    inactive = "inactive",
    defunct = "defunct"
}
type ChildVisitorCallback = (child: Element) => void;
export declare abstract class Element extends BuildContext {
    key: Key;
    lifecycleState: ElementLifecycle;
    dirty: boolean;
    parent: Element;
    protected child: Element;
    private _widget;
    owner: BuildOwner;
    protected depth: number;
    private _slot;
    _renderView: RenderView;
    set renderView(value: RenderView);
    findRenderView(): RenderView;
    /**
     * 当组件生成 @RenderView 时,可能会出现子级为@ComponentElement ,此时需要
     * 向下查找将最近的 @RenderViewElement 作为@renderView
     */
    get renderView(): RenderView;
    constructor(widget?: Widget);
    set slot(value: Object);
    get slot(): Object;
    get widget(): Widget;
    set widget(value: Widget);
    get runtimeType(): unknown;
    get mounted(): boolean;
    mount(parent?: Element, newSlot?: Object): void;
    /**
     * @MustCallSuper
     */
    unmount(): void;
    static sort(a: Element, b: Element): number;
    protected canUpdate(oldWidget: Widget, newWidget: Widget): boolean;
    protected detachRenderView(): void;
    deactivate(): void;
    protected deactivateChild(child: Element): void;
    /**
     * 如果新child不为空，老child为空，直接赋值新child
     * 如果新child和老child的类型相同，不赋值新的child，改参数重新传递
     * 判断新来的child和本次的是不是同类型
     * 如果已经有了，old child是 ColoredBox->ConstrainedBox，而new child也是ColoredBox->ConstrainedBox ,就将new child的参数传递给 old child 的数据，
     * 那子呢？继续调用oldChild.updateChild,并将newChild传递下去
     *
     */
    protected updateChild(child?: Element, newWidget?: Widget, newSlot?: Object): Element;
    /**
     * 通过 @newWidget 获取最新的 @Element 并返回, @newSlot 对于 @SingleChildObjectElement 永远为null,
     * 它不需要像 @MultiChildObjectElement 一样通过 @newSlot 传递给子节点并插入 children list。
     *
     * 在获取最新的 @Element 之前，还需要判断 @newWidget 的key 是否为空，如果为空，则直接创建新的 @Element
     * 如果不为空，且类型为 @GlobalKey 类型，则通过 @GlobalKey 获取旧的 @Element 并重复使用，当然这个旧的 @Element
     * 的状态必须是 @ElementLifecycle.inactive 。
     */
    protected inflateWidget(newWidget: Widget, newSlot?: Object): Element;
    private retakeInactiveElement;
    private activeWithParent;
    protected activeRecursively(element: Element): void;
    protected activate(): void;
    protected updateDepth(parentDepth: number): void;
    markNeedsBuild(): void;
    /**
     * 根据dirty状态，决定是否需要重新构建
     * 也可通过force参数强制重新构建，默认情况下force为false
     * @param force
     * @returns
     */
    rebuild(force?: boolean): void;
    protected performRebuild(): void;
    protected firstBuild(): void;
    setTestWidget(newWidget: Widget): void;
    update(newWidget: Widget): void;
    reassemble(): void;
    protected attachRenderObject(newSlot?: Object): void;
    visitChildren(visitor: ChildVisitorCallback): void;
}
export declare abstract class RootElement extends Element {
    private root;
    assignOwner(owner: BuildOwner): void;
    mount(parent?: Element, newSlot?: Object): void;
    update(newWidget: Widget): void;
    private _performBuild;
    protected performRebuild(): void;
    attachToRenderTree(owner: BuildOwner): void;
}
export {};
