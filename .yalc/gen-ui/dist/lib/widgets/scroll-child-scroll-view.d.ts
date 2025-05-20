import { BuildContext } from "../basic/elements";
import { SingleChildRenderObjectWidgetArguments, StatelessWidget, Widget } from "../basic/framework";
import { ScrollViewArguments } from "./scroll-view";
interface SingleChildScrollViewArguments extends ScrollViewArguments {
}
export declare class SingleChildScrollView extends StatelessWidget {
    private controller;
    private axisDirection;
    private physics;
    private child;
    constructor(args: Partial<SingleChildScrollViewArguments & SingleChildRenderObjectWidgetArguments>);
    private viewportBuilder;
    build(context: BuildContext): Widget;
}
export {};
