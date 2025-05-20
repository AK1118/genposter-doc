import { Element } from "./elements";
import { Widget } from "./framework";
export declare abstract class Key {
}
export declare class SimpleKey extends Key {
    private _value;
    get value(): string;
}
export declare class GlobalKey extends SimpleKey {
    get currentElement(): Element;
    get currentWidget(): Widget;
}
