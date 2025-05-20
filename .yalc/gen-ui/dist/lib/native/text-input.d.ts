import { BindingBase } from "../basic/framework";
import { TextEditingConnection, TextInputClient, TextInputConfiguration, TextSelection } from "../services/text-editing";
type SetSelectionCallback = (newSelection: TextSelection) => void;
export declare class NativeTextInputHandler {
    private binding;
    updateEditingValue(text: string, start: number, end: number): void;
    selectionHandler(setSelection: SetSelectionCallback): void;
    focusHandler(focus: VoidFunction): void;
    blurHandler(blur: VoidFunction): void;
}
declare abstract class NativeTextInput extends BindingBase {
    focus(): void;
    blur(): void;
    selectionHandler(newSelection: TextSelection): void;
    updateEditingValue(text: string, selectionStart: number, selectionEnd: number): void;
}
export declare class TextInput extends NativeTextInput {
    private static _instance;
    private _currentConnection;
    private _currentConfig;
    get currentConfig(): TextInputConfiguration;
    get currentConnection(): TextEditingConnection;
    static get instance(): TextInput;
    static attach(client: TextInputClient, config: TextInputConfiguration): TextEditingConnection;
    _attach(connection: TextEditingConnection, config: TextInputConfiguration): void;
    static removeClient(): void;
    show(): void;
    close(): void;
    updateEditingValue(text: string, selectionStart: number, selectionEnd: number): void;
}
export declare class TextEditingValue {
    readonly selection: TextSelection;
    readonly value: string;
    constructor(value: string, selection: TextSelection);
}
export {};
