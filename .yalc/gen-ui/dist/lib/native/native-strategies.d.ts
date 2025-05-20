import { Offset, Size } from "../basic/rect";
import { AsyncStream } from "../core/stream";
import { NativeEventsBindingHandler } from "./events";
import { ImageProviderLoadConfiguration, ImageStreamPayload } from "../core/base-types";
import { Painter } from "../painting/painter";
export declare abstract class Strategy {
}
/**
 * # 获取网络图片策略
 *   - 各个平台获取网络图片的策略都不一样，将所有的平台相似处抽取出来，封装成策略类。
 *   - 不论使用什么方法，只返回一个Uint8Array即可渲染图片。
 */
export declare abstract class NativeNetWorkImageStrategy extends Strategy {
    abstract loadBuffer(configuration?: Partial<ImageProviderLoadConfiguration>): AsyncStream<ImageStreamPayload>;
    abstract getImageSize(arrayBuffer: Uint8Array, configuration?: Partial<ImageProviderLoadConfiguration>): Promise<Size>;
    abstract load(configuration: Partial<ImageProviderLoadConfiguration>, arrayBuffer: Uint8Array): Promise<any>;
}
/**
 * # 渐变策略
 */
export declare abstract class NativeGradientStrategy extends Strategy {
    protected get painterInstance(): Painter;
    abstract createLinearGradient(begin: Offset, end: Offset): CanvasGradient;
    abstract createRadialGradient(center: Offset, radius: number): CanvasGradient;
    abstract createConicGradient(center: Offset, startAngle: number): CanvasGradient;
}
export declare class DefaultNativeGradientStrategy extends NativeGradientStrategy {
    createLinearGradient(begin: Offset, end: Offset): CanvasGradient;
    createRadialGradient(center: Offset, radius: number): CanvasGradient;
    createConicGradient(center: Offset, startAngle: number): CanvasGradient;
}
/**
 * # 获取本地图片策略
 */
export declare abstract class NativeAssetsImageStrategy extends Strategy {
    abstract load(configuration: Partial<ImageProviderLoadConfiguration>): Promise<any>;
    abstract getImageSize(image: any, configuration?: ImageProviderLoadConfiguration): Promise<Size>;
}
/**
 * # 事件绑定策略
 */
export declare abstract class NativeEventsBindingStrategy extends Strategy {
    abstract createHandler(): NativeEventsBindingHandler;
}
/**
 * # 绘制画布策略
 */
export declare abstract class NativePainterStrategy extends Strategy {
    abstract getPainter(canvasContext2D: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | OffscreenRenderingContext): Painter;
}
/**
 * # 默认本地图片策略实现类
 */
export declare class DefaultNativeAssetsImageStrategy extends NativeAssetsImageStrategy {
    load(configuration: ImageProviderLoadConfiguration): Promise<any>;
    getImageSize(image: any, configuration?: ImageProviderLoadConfiguration): Promise<Size>;
}
/**
 * # 跨平台适配器
 *   - 将各个适配器模块封装到一起，便于管理。
 */
export declare abstract class NativeStrategies {
    constructor();
    initialization(): void;
    /**
     * # 获取网络图片策略
     */
    abstract getImageStrategy(): NativeNetWorkImageStrategy;
    /**
     * # 获取本地图片策略
     */
    abstract getAssetsImageStrategy(): NativeAssetsImageStrategy;
    /**
     * # 获取绘制画布策略
     */
    abstract getPainterStrategy(): NativePainterStrategy;
    /**
     * # 获取渐变策略
     */
    abstract getGradientStrategy(): NativeGradientStrategy;
    /**
     * # 绑定事件处理程序
     */
    abstract handleBindEventsHandler(): void;
}
export declare class DefaultNativeStrategies extends NativeStrategies {
    getGradientStrategy(): NativeGradientStrategy;
    getAssetsImageStrategy(): NativeAssetsImageStrategy;
    getImageStrategy(): NativeNetWorkImageStrategy;
    getPainterStrategy(): NativePainterStrategy;
    handleBindEventsHandler(): void;
}
