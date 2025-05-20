import { AsyncStream } from "../core/stream";
import { Size } from "../basic/rect";
import { ImageLoadPayload, ImageProviderLifecycle, ImageProviderLoadConfiguration, ImageStreamPayload } from "../core/base-types";
declare abstract class ImageProviderLifecycleMethods implements ImageProviderLifecycle {
    private lifecycle?;
    constructor(lifecycle?: ImageProviderLifecycle);
    onLoadStart(): void;
    onLoadEnd(imageLoadPayload: ImageLoadPayload): void;
    onError(error: any): void;
    onProgress(progress: number): void;
}
export declare abstract class ImageProvider extends ImageProviderLifecycleMethods {
    protected readonly configuration?: Partial<ImageProviderLoadConfiguration>;
    private _cachedImagePayload;
    private loadingPromise;
    constructor(configuration?: Partial<ImageProviderLoadConfiguration>);
    /**
     * # 获取网络图片加载策略
     */
    protected get loadStrategy(): import("../native").NativeNetWorkImageStrategy;
    /**
     * # 获取本地图片加载策略
     */
    protected get loadAssetsStrategy(): import("../native").NativeAssetsImageStrategy;
    createStream(): AsyncStream<ImageStreamPayload<Uint8Array>>;
    /**
     * # 执行加载图片操作
     *  - 该方法一般不会由开发者调用，框架会在合适的时候调用该方法进行图片加载操作。
     *  - 当一个 @type {ImageProvider} 实例被多次使用时，它始终返回同一个值。
     */
    load(): Promise<ImageLoadPayload>;
    abstract performLoad(): Promise<ImageLoadPayload>;
    loadBuffer(): AsyncStream<ImageStreamPayload>;
    getImageSize(arrayBuffer: Uint8Array): Promise<Size>;
}
export declare class NetWorkImageProvider extends ImageProvider {
    performLoad(): Promise<ImageLoadPayload>;
}
export type AssetsImageUrlBuilder = (() => Promise<string> | string) | string;
export type AssetsImageLifecycle = Omit<Partial<ImageProviderLifecycle>, "onProgress">;
export declare class AssetsImageProvider extends ImageProvider {
    private _assetsImageUrl;
    constructor({ assetsImageUrl, lifecycle, }: {
        assetsImageUrl: AssetsImageUrlBuilder;
        lifecycle?: AssetsImageLifecycle;
    });
    performLoad(): Promise<ImageLoadPayload>;
}
export {};
