import { BuildContext } from "../basic/elements";
import { SingleChildRenderObjectWidget, State, StatefulWidget } from "../basic/framework";
import { Key } from "../basic/key";
import { Size } from "../basic/rect";
import { Offset } from "../math/vector";
import { Color } from "../painting/color";
import { Painter } from "../painting/painter";
import { TextPainter, TextSpan } from "../painting/text-painter";
import { RenderView } from "../render-object/render-object";
import { EditTextRenderView } from "../render-object/text";
import { CustomPainter } from "../rendering/custom";
import { TextEditingConnection } from "../services/text-editing";
interface EditableArguments {
    text: TextSpan;
    editingConnection: TextEditingConnection;
    key: Key;
    indicatorPainter: EditTextIndicatorPainter;
    textPainter: TextPainter;
}
export declare class Editable extends SingleChildRenderObjectWidget {
    private editingConnection;
    private indicatorPainter;
    private textPainter;
    constructor(args: Partial<EditableArguments>);
    createRenderObject(context?: BuildContext): RenderView;
    updateRenderObject(context: BuildContext, renderView: EditTextRenderView): void;
}
export declare class EditableText extends StatefulWidget {
    createState(): State;
}
export default EditableText;
export declare class EditTextIndicatorPainter extends CustomPainter {
    private _color;
    private _thickness;
    private _offset;
    private _height;
    private _parentOffset;
    private animationController;
    set parentOffset(value: Offset);
    set color(value: Color);
    set thickness(value: number);
    set offset(value: Offset);
    set height(value: number);
    constructor();
    show(): void;
    hide(): void;
    render(painter: Painter, size: Size): void;
}
