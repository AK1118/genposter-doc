import { Shadow } from "../core/base-types";
import { Painter } from "./painter";
export declare class BoxShadow {
    shadow: Shadow;
    constructor(shadow: Shadow);
    paint(paint: Painter): void;
}
export default BoxShadow;
