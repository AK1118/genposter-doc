import { Size } from "../basic/rect";
export declare enum BoxFit {
    fill = "fill",
    contain = "contain",
    cover = "cover",
    fitWidth = "fitWidth",
    fitHeight = "fitHeight",
    none = "none",
    scaleDown = "scaleDown"
}
declare class FittedSizes {
    source: Size;
    destination: Size;
    constructor(source: Size, destination: Size);
}
export declare const applyBoxFit: (fit: BoxFit, inputSize: Size, outputSize: Size) => FittedSizes;
export {};
