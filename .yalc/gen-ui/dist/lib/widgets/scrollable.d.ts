import { BuildContext } from "../basic/elements";
import { State, StatefulWidget, Widget } from "../basic/framework";
import { AxisDirection } from "../core/base-types";
import { ScrollPhysics } from "../core/scroll-physics";
import { ScrollPosition } from "../render-object/viewport";
import { ScrollController } from "./scroll";
type ViewportBuilder = (context: BuildContext, position: ScrollPosition) => Widget;
interface ScrollableArguments {
    physics: ScrollPhysics;
    viewportBuilder: ViewportBuilder;
    axisDirection: AxisDirection;
    controller: ScrollController;
}
export declare class Scrollable extends StatefulWidget {
    viewportBuilder: ViewportBuilder;
    axisDirection: AxisDirection;
    physics: ScrollPhysics;
    constructor(args: Partial<ScrollableArguments>);
    controller: ScrollController;
    createState(): State<Scrollable>;
}
export {};
