import { Offset } from "../math/vector";
import { TextEditingValue } from "../native/text-input";
/**
 * 文字范围
 */
export declare class TextRange {
    start: number;
    end: number;
    constructor(start: number, end: number);
    static get zero(): TextRange;
    static get empty(): TextRange;
    get single(): boolean;
}
/**
 * 选定文字范围，包含起始位置和结束位置
 * 例如文字:"h|ello world",其中|表示光标。字符串全场11，则表示|可以标识的位置会从0~(11+1)个，此处光标|位置出现在1
 * 如 @TextSelection 的start=0,end=5，则被选取的文字为"hello"
 */
export declare class TextSelection extends TextRange {
    readonly baseOffset: number;
    readonly extentOffset: number;
    constructor(baseOffset: number, extentOffset: number);
    static fromPosition(offset: Offset): TextSelection;
    static get empty(): TextSelection;
}
export declare class TextInputConfiguration {
}
export declare class TextEditingConnection {
    readonly client: TextInputClient;
    private _focused;
    constructor(client: TextInputClient);
    get focused(): boolean;
    get attached(): boolean;
    show(): void;
    close(): void;
    setSelection(newSelection: TextSelection): void;
}
export interface TextInputClient {
    updateEditingValue(value: TextEditingValue): void;
}
