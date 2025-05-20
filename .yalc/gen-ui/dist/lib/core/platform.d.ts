import { NativeStrategies } from "../native/native-strategies";
import { Painter } from "../painting/painter";
interface BaseConfig {
    screenWidth: number;
    screenHeight: number;
    devicePixelRatio: number;
    debug?: boolean;
    canvas?: HTMLCanvasElement;
    renderContext?: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D;
    strategies: NativeStrategies;
    showBanner?: boolean;
}
export declare class GenPlatformConfig {
    private static _instance;
    private key;
    private baseConfig;
    constructor(args: BaseConfig);
    static InitInstance(args: BaseConfig): GenPlatformConfig;
    static get instance(): GenPlatformConfig;
    get config(): BaseConfig;
    get rawScreenWidth(): number;
    get rawScreenHeight(): number;
    get screenWidth(): number;
    get screenHeight(): number;
    get devicePixelRatio(): number;
    get isDebug(): boolean;
    get showBanner(): boolean;
    get strategies(): NativeStrategies;
    get painter(): Painter;
    get canvas(): HTMLCanvasElement;
}
export {};
