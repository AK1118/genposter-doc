/**
 * - 设计稿大小，默认 750*750
 */
export interface DesignSizeOption {
    /**
     * # 设计稿宽度
     */
    designWidth: number;
    /**
     * # 设计稿高度
     */
    designHeight: number;
}
/**
 * - 屏幕(画布大小)
 */
export interface CanvasSizeOption {
    /**
     * # 画布宽度
     */
    canvasWidth: number;
    /**
     * # 画布高度
     */
    canvasHeight: number;
}
export interface ScreenUtilOption extends Partial<DesignSizeOption>, Partial<CanvasSizeOption> {
    /**
     * # 设备像素比
  
     */
    devicePixelRatio?: number;
    /**
     * # 设备与画布比值
     */
    deviceCanvasRatio?: {
        widthRatio: number;
        heightRatio: number;
    };
    /**
     * # 是否使用宽高中的最小值计算文字大小，默认 true
     */
    minTextAdapt?: boolean;
}
/**
 * # 提供基本的屏幕适配工具类
 *  - 该类提供简单的屏幕适配能力
 *  -
 */
export declare class ScreenUtils {
    private readonly scaleWidth;
    private readonly scaleHeight;
    private readonly scaleText;
    private readonly designWidth;
    private readonly designHeight;
    private readonly _deviceCanvasRatio;
    private _devScale;
    private _devicePixelRatio;
    constructor(option?: ScreenUtilOption);
    /**
     * 计算缩放因子的倒数控制画布缩放
     */
    private computeDevicePixelRatio;
    get deviceCanvasRatio(): {
        widthRatio: number;
        heightRatio: number;
    };
    get devScale(): number;
    get devicePixelRatio(): number;
    setSp(fontSize: number): number;
    setWidth(width: number): number;
    setHeight(height: number): number;
    get fullWidth(): number;
    get fullHeight(): number;
    restoreFromFactorWidthWidth(width: number): number;
    restoreFromFactorWidthHeight(height: number): number;
    restoreFromFactorWidthText(fontSize: number): number;
    setDevicePixelRatio(devicePixelRatio: number): void;
}
export default ScreenUtils;
