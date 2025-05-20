import { BuildContext } from "../basic/elements";
import { StatelessWidget, Widget } from "../basic/framework";
import { Key } from "../basic/key";
import { Clip } from "../core/base-types";
import Alignment from "../painting/alignment";
import { BoxDecoration } from "../painting/decoration";
import { BoxConstraints } from "../rendering/constraints";
import { Color } from "../painting/color";
import { EdgeInsetsGeometry } from "../painting/edge-insets";
export interface ContainerArguments {
    width: number;
    height: number;
    color: Color;
    child: Widget;
    decoration: BoxDecoration;
    alignment: Alignment;
    constraints: BoxConstraints;
    key: Key;
    padding: EdgeInsetsGeometry;
    clipBehavior: Clip;
    margin: EdgeInsetsGeometry;
}
export declare class Container extends StatelessWidget implements ContainerArguments {
    width: number;
    height: number;
    constraints: BoxConstraints;
    color: Color;
    child: Widget;
    decoration: BoxDecoration;
    alignment: Alignment;
    key: Key;
    padding: EdgeInsetsGeometry;
    clipBehavior: Clip;
    margin: EdgeInsetsGeometry;
    constructor(args: Partial<ContainerArguments>);
    /**
     * 根据参数选择使用对应的组件包裹，包裹顺序由底至高。
     * 例如：@Padding 依赖 @ConstrainedBox 的约束，所以Padding必须是 @ConstrainedBox 的child。
     * 而 @DecoratedBox 的渲染需要覆盖整个 @ConstrainedBox ,所以需要在 @ConstrainedBox 之上。
     */
    build(context: BuildContext): Widget;
}
