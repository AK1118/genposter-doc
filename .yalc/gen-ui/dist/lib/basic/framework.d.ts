import { ParentDataRenderView } from "../render-object/basic";
import { ParentData, RenderView } from "../render-object/render-object";
import { BuildContext, BuildOwner, Element } from "./elements";
import { Key } from "./key";
export declare abstract class BindingBase {
    constructor();
    protected initInstance(): void;
}
export interface WidgetArguments {
    key: Key;
}
export interface SingleChildRenderObjectWidgetArguments extends WidgetArguments {
    child: Widget;
}
export interface MultiChildRenderObjectWidgetArguments extends WidgetArguments {
    children: Array<Widget>;
}
export declare abstract class Widget {
    key: Key;
    abstract createElement(): Element;
    get runtimeType(): unknown;
    constructor(key?: Key);
}
/**
 * abstract class ComponentElement
 * 属于组件节点类，其派生类有StatelessElement 和 State、StatefulElement等，它的widget主要通过ComponentWidget类的build函数来获得
 * 返回的Widget组件，且build函数需要派生类自己实现，见StatelessElement例如用户自己构建UI一般就需要用到该类
 */
export declare abstract class ComponentElement extends Element {
    mount(parent?: Element, newSlot?: Object): void;
    protected performRebuild(): void;
    private _performRebuild;
    abstract build(): Widget;
}
export declare abstract class ProxyElement extends ComponentElement {
    update(newWidget: Widget): void;
    updated(oldWidget: ProxyWidget): void;
    abstract notifyClients(oldWidget: ProxyWidget): any;
}
export declare abstract class ProxyWidget extends Widget {
    constructor(child?: Widget, key?: Key);
    child: Widget;
}
export declare abstract class StatelessWidget extends Widget {
    createElement(): Element;
    abstract build(context: BuildContext): Widget;
}
export declare abstract class StatefulWidget extends Widget {
    abstract createState(): State;
    createElement(): Element;
}
export declare abstract class State<T extends StatefulWidget = StatefulWidget> {
    private _element;
    get widget(): T;
    get element(): Element;
    set element(element: Element);
    get mounted(): boolean;
    initState(): void;
    protected setState(fn: VoidFunction): void;
    abstract build(context: BuildContext): Widget;
    unmount(): void;
    didUpdateWidget(oldWidget: Widget): void;
}
/**
 *  与ComponentElement不同，该类需要返回一个RenderView提供渲染，它是基础渲染单位类
 * 在构建时需要将Widget的build方法返回的RenderView赋值给child
 *
 */
export declare abstract class RenderObjectElement extends Element {
    private ancestorRenderObjectElement;
    set renderView(value: RenderView);
    get renderView(): RenderView;
    findRenderObject(): RenderView;
    /**
    * 挂载时将 @renderView 创建并保存，且 @renderView 只能被创建一次
      更新时只需要根据 @RenderObjectWidget 的派生类实现方法 @updateRenderObject 更新@renderView 属性
    * @param parent
    * @param newSlot
    */
    mount(parent?: Element, newSlot?: Object): void;
    update(newWidget: Widget): void;
    protected performRebuild(): void;
    private _performRebuild;
    /**
     * 查找祖先 @ParentDataElement 节点，且查找过程中不允许出现parent是 @RenderObjectElement
     * 如parent是 @RenderObjectElement 不做出操作，会导致深度子节点都会被执行 @updateParentData 方法
     */
    protected findAncestorParentDataElement(): ParentDataElement;
    protected findAncestorRenderObjectElement(): RenderObjectElement;
    abstract insertRenderObjectChild(child: RenderView, slot?: Object): void;
    /**
     * 查找祖最近的先的 @RenderObjectElement 并插入子节点 @renderView
     * 在 @Element 树中并不是全部都由 @RenderObjectElement 构成，所以需要查找最近的 @RenderObjectElement
     * 以便生成RenderView渲染树
     */
    protected attachRenderObject(newSlot?: Object): void;
    updateParentData(parentDataWidget: ParentDataWidget): void;
    visitChildren(visitor: (child: Element) => void): void;
    /**
     * 从祖先的 @RenderObjectElement 中移除子节点
     * 并将 @ancestorRenderObjectElement 置为null
     */
    protected detachRenderView(): void;
    protected removeRenderViewChild(child: RenderView, slot?: Object): void;
    /**
     * 这个方法 updateChildren 的目的是将一组旧的元素数组（oldChildren）与新的小部件数组（newWidgets）进行比较，
     * 并更新旧的元素以生成一个新的元素数组（newChildren），从而反映新小部件的变化。
     * 这个方法通过从底部到顶部和从顶部到底部的方式进行差异检测和更新。
     */
    updateChildren(oldChildren: Array<Element>, newWidgets: Array<Widget>): Array<Element>;
}
export declare class SingleChildRenderObjectElement extends RenderObjectElement {
    mount(parent?: Element, newSlot?: Object): void;
    protected performRebuild(): void;
    update(newWidget: Widget): void;
    insertRenderObjectChild(child: RenderView, slot?: Object): void;
    protected removeRenderViewChild(child: RenderView, slot?: Object): void;
}
export declare abstract class RenderObjectWidget extends Widget {
    child: Widget;
    constructor(child?: Widget, key?: Key);
    abstract createRenderObject(context?: BuildContext): RenderView;
    updateRenderObject(context: BuildContext, renderView: RenderView): void;
}
export declare abstract class SingleChildRenderObjectWidget extends RenderObjectWidget {
    createElement(): Element;
}
/**
 * SinleChildRenderObjectElement 的insert为undefined，为什么
 */
export declare class MultiChildRenderObjectElement extends RenderObjectElement {
    private children;
    mount(parent?: Element, newSlot?: Object): void;
    update(newWidget: Widget): void;
    visitChildren(visitor: (child: Element) => void): void;
    insertRenderObjectChild(child: RenderView, slot?: Object): void;
    protected removeRenderViewChild(child: RenderView, slot?: Object): void;
}
export declare abstract class MultiChildRenderObjectWidget extends RenderObjectWidget {
    children: Array<Widget>;
    constructor(children: Array<Widget>, key?: Key);
    createElement(): Element;
}
export declare class RootRenderObjectElement extends SingleChildRenderObjectElement {
    assignOwner(owner: BuildOwner): void;
    mount(parent?: Element, newSlot?: Object): void;
    attachToRenderTree(owner: BuildOwner): void;
}
/**
 * 带有数据(ParentData)的节点基类，例如 @Expanded 、 @Positioned 等。
 * 该节点不会在树中生成一个元素，而是将数据传递给子节点，且它派生自 @ComponentElement
 * 故不会生成 @RenderView 对象，反而是将子节点的 @RenderView 加入节点的ParentData数据。
 *
 * @parentData 是每一个 @RenderView 都有的一个属性,在一般情况下初始化为 @ParentData 实例，
 * 如父节点重写了 @setupParentData 方法，则子节点的 @parentData 属性会被创建为父节点指定的 @ParentData 的派生类 @ContainerRenderViewParentData ，详见
 * /render-object/basic.ts RenderView.setupParentData。
 *
 * @parentData 的初始化数据赋值一般发生在 @ParentDataWidget 类的 @applyParentData 方法中，该方法是初始化 @parentData 的方法，也是更新 @parentData 的方法,
 * 初始化调用时机参见 @RenderObjectElement @attachRenderObject 。
 * 更新调用时机参见 @ProxyElement @update 。
 *
 */
export declare class ParentDataElement<T extends ParentData = ParentData> extends ProxyElement {
    build(): Widget;
    /**
     * 使用子节点的 @updateParentData 方法通过 @widget 更新 @parentData 属性,
     * 此处的 @widget 属性是 @ParentDataWidget 的子类，例如 @Positioned 、 @Expanded 等。
     *
     * @updateParentData 方法是 @RenderObjectElement 独有的方法，所以需要判断类型满足时才能直接调用，
     * 如条件不满足时，即 child 为其他类型，则需要调用超类 @Element 的 @visitChildren 方法，通过向下查找子节点
     * 遍历叶子节点，调用 @updateParentData 方法。
     *
     */
    applyParentData(widget: ParentDataWidget<T>): void;
    notifyClients(oldWidget: ProxyWidget): void;
}
export declare abstract class ParentDataWidget<T extends ParentData = ParentData> extends ProxyWidget {
    createElement(): Element;
    /**
     * 更新 @parentData 属性，由于需要更新的是 @parentData 属性，传入 @child 是一个普通的 @RenderView 对象，
     * 即所有 @RenderView 的派生类都有可能被传入，且它们都已经实现了 @createRenderView 方法。
     * 详见 @RenderView 的 @parentData 属性
     */
    abstract applyParentData(child: ParentDataRenderView<T>): void;
}
