import { BuildContext } from "../basic/elements";
import { SingleChildRenderObjectWidgetArguments, State, StatefulWidget, StatelessWidget, Widget } from "../basic/framework";
import { DownPointerEvent, MovePointerEvent, PanZoomEndPointerEvent, PanZoomStartPointerEvent, PanZoomUpdatePointerEvent, PointerEvent, UpPointerEvent } from "../gesture/events";
import { GestureRecognizer, GestureRecognizerFactory } from "../gesture/recognizers/gesture-recognizer";
import { EventCallback, TapGestureRecognizerArguments } from "../gesture/recognizers/tap";
import { DoubleTapGestureRecognizerArguments } from "../gesture/recognizers/double-tap";
import { LongPressGestureRecognizerArguments } from "../gesture/recognizers/long-press";
import { PanDragGestureRecognizerArguments } from "../gesture/recognizers/pan-drag";
import { PanZoomGestureRecognizerArguments } from "../gesture/recognizers/pan-zoom";
interface GestureDetectorArguments extends TapGestureRecognizerArguments, DoubleTapGestureRecognizerArguments, LongPressGestureRecognizerArguments, PanDragGestureRecognizerArguments, PanZoomGestureRecognizerArguments {
}
export declare class GestureDetector extends StatelessWidget implements GestureDetectorArguments {
    private gestureRecognizers;
    private child;
    onDoubleTap: VoidFunction;
    onLongPress: VoidFunction;
    onPanZoomStart: (event: PanZoomStartPointerEvent) => void;
    onPanZoomUpdate: (event: PanZoomUpdatePointerEvent) => void;
    onPanZoomEnd: (event: PanZoomEndPointerEvent) => void;
    onTap: EventCallback<PointerEvent>;
    onTapDown: EventCallback<DownPointerEvent>;
    onTapUp: EventCallback<UpPointerEvent>;
    onTapCancel: VoidFunction;
    onLongPressUpdate: (event: UpPointerEvent) => void;
    onLongPressStart: (event: UpPointerEvent) => void;
    onLongPressEnd: (event: UpPointerEvent) => void;
    constructor(option?: Partial<GestureDetectorArguments & SingleChildRenderObjectWidgetArguments>);
    onDragStart: (event: DownPointerEvent) => void;
    onDragUpdate: (event: MovePointerEvent) => void;
    onDragEnd: (event: UpPointerEvent) => void;
    build(context: BuildContext): Widget;
}
interface RawGestureDetectorArguments {
    gestures: Map<any, GestureRecognizerFactory<GestureRecognizer>>;
}
export declare class RawGestureDetector extends StatefulWidget {
    gestures: Map<any, GestureRecognizerFactory<GestureRecognizer>>;
    child: Widget;
    constructor(option: Partial<RawGestureDetectorArguments & SingleChildRenderObjectWidgetArguments>);
    createState(): State;
}
export {};
