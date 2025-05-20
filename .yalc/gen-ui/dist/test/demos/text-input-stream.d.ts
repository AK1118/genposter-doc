/**
 *
 * 聚焦事件，失焦事件，输入事件，设置空值
 * 此处UI表示GenUI框架，并不代表渲染层
 * 聚焦事件单向，UI调用API触发Native
 * 失焦事件双向，UI触发Native，Native 失焦回调UI
 * 输入时间单向，Native传入UI
 * 设置空值单向，UI触发Native
 *
 *
 * 1.何时聚焦。根据UI调用聚焦API而定
 * 2.何时失焦。UI主动触发失焦API使Native失焦。Native各种原因失焦后回调UI
 * 3.何时输入。聚焦后即可通过键盘输入，UI只需要监听Native输入回调即可。
 * 4.何时设置空值。问题由来：Input输入会累计历史输入文本，且UI的text值与Input值不能绑定必须分离。
 *    不能绑定原因:1.UI会选择Selection新增|删除|替换文本，如果绑定，Input则也需要设置Selection,但是各个平台这个API没有，为了兼容更多平台，选择更少的API，尽可能的在UI层做处理。
 *
 * 针对第4点做出方案，在每次输入后必须清空Input的text值，保证Input只作为一个输入流工具，文字拼接处理全权由UI层处理。
 * 清空时机:1.失焦后。2.改变光标位置后。
 *
 * 删除呢？
 *
 */
import { Offset } from "@/lib/basic/rect";
import { ChangeNotifier } from "@/lib/core/change-notifier";
import Stream from "@/lib/core/stream";
export declare function NativeInputStream(): AsyncGenerator<string>;
export declare class TextSelection {
    readonly baseOffset: number;
    readonly extentOffset: number;
    constructor(baseOffset: number, extentOffset: number);
    static fromPosition(offset: Offset): TextSelection;
    static get empty(): TextSelection;
    get lastOffset(): number;
    get single(): boolean;
}
export interface TextNativeInputStreamPayload {
    value: string;
    selectionStart: number;
    selectionEnd: number;
}
export declare class TextNativeInputAdapter extends ChangeNotifier {
    private stream;
    private value;
    private selection;
    constructor(stream: Stream<string>, defaultValue: string);
    handleListenInput(): Promise<void>;
    private handleDiffText;
    private handleWhenValueIsEmpty;
    private performDeleteTextSingle;
    private performDeleteText;
    private handleSetSelection;
    private performInsertText;
    private handleUpdateElementTextValue;
    get payload(): TextNativeInputStreamPayload;
    updateSelection(selectionStart: number, selectionEnd: number): void;
}
export declare const TextInputStreamDemo: () => void;
/**
 * 方案1，input 与 UI 同步
 *
 *

 */
