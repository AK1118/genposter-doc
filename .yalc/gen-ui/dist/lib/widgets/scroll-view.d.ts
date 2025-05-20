import { BuildContext } from "../basic/elements";
import { MultiChildRenderObjectWidgetArguments, StatelessWidget, Widget } from "../basic/framework";
import { AxisDirection } from "../core/base-types";
import { ScrollPhysics } from "../core/scroll-physics";
import { ViewPortOffset } from "../render-object/viewport";
import { ScrollController } from "./scroll";
import { ViewPort } from "./view-port";
export interface ScrollViewArguments {
    controller: ScrollController;
    axisDirection: AxisDirection;
    physics: ScrollPhysics;
}
export declare abstract class ScrollView extends StatelessWidget {
    private controller;
    private axisDirection;
    private physics;
    private children;
    constructor(args: Partial<ScrollViewArguments & MultiChildRenderObjectWidgetArguments>);
    abstract buildSlivers(context: BuildContext): Array<Widget>;
    protected viewportBuilder(context: BuildContext, offset: ViewPortOffset, axisDirection: AxisDirection, slivers: Array<Widget>): ViewPort;
    build(context: BuildContext): Widget;
}
