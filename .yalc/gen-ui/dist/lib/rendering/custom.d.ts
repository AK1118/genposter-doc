import { Size } from "../basic/rect";
import { ChangeNotifier, Listenable } from "../core/change-notifier";
import Vector from "../math/vector";
import { Painter } from "../painting/painter";
import { Path2D } from "./path-2D";
export declare abstract class CustomPainter extends ChangeNotifier {
    abstract render(painter: Painter, size: Size): void;
}
export declare abstract class CustomClipper implements Listenable {
    private reClip;
    constructor(reClip?: Listenable);
    addListener(listener: VoidFunction): void;
    removeListener(listener: VoidFunction): void;
    abstract getClip(offset: Vector, size: Size): Path2D;
}
