import { BuildContext, Element } from "../basic/elements";
import { RenderObjectWidget, SingleChildRenderObjectWidgetArguments, Widget } from "../basic/framework";
import { RenderView } from "../render-object/render-object";
import { BoxConstraints } from "../rendering/constraints";
export type LayoutWidgetBuilder = (context: BuildContext, constrain: BoxConstraints) => Widget;
declare abstract class ConstrainedLayoutBuilder extends RenderObjectWidget {
    builder: LayoutWidgetBuilder;
    constructor({ builder, key }: {
        builder: LayoutWidgetBuilder;
    } & Partial<Omit<SingleChildRenderObjectWidgetArguments, "child">>);
    createRenderObject(context?: BuildContext): RenderView;
    createElement(): Element;
}
/**
 * # LayoutBuilder
 *   - LayoutBuilder 允许您在布局过程中构建子部件。 它接受一个回调，该回调接收当前的约束并返回一个 Widget。 这对于根据父级大小动态调整其大小的 Widgets 很有用。
 */
export declare class LayoutBuilder extends ConstrainedLayoutBuilder {
    constructor({ builder, key }: {
        builder: LayoutWidgetBuilder;
    } & Partial<Omit<SingleChildRenderObjectWidgetArguments, "child">>);
}
export {};
