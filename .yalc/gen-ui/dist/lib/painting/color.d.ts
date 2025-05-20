export declare class Color {
    private value;
    constructor(value?: number);
    /**
     * 红色取值 0~255
     */
    get red(): number;
    /**
     * 绿色取值 0~255
     */
    get green(): number;
    /**
     * 蓝色取值 0~255
     */
    get blue(): number;
    /**
     * alpha取值 0~255
     */
    get alpha(): number;
    /**
     * 通过指定 alpha 来创建一个新的颜色实例
     * @param alpha - 新的 alpha 值 (0~255)
     */
    withAlpha(alpha: number): Color;
    /**
     * 通过指定 opacity 来创建一个新的颜色实例
     * @param opacity - 新的 opacity 值 [0~1]
     */
    withOpacity(opacity: number): Color;
    /**
     * 通过指定 red 来创建一个新的颜色实例，值范围[0~255]
     */
    withRed(red: number): Color;
    /**
     * 通过指定 green 来创建一个新的颜色实例,值范围[0~255]
     * */
    withGreen(green: number): Color;
    /**
     * 通过指定 blue 来创建一个新的颜色实例，值范围[0~255]
     */
    withBlue(blue: number): Color;
    lerp(other: Color, t: number): Color;
    /**
     * 不透明度取值 0~1
     */
    get opacity(): number;
    get rgba(): string;
    get rgb(): string;
    get color(): number;
    equals(value: Color): boolean;
    /**
     * 从start颜色插值到end, 返回一个颜色实例
     * 例如从黑色到白色取之间1/2时间的颜色:
     * ``` typescript
     * Color.lerp(Colors.black, Colors.white, 0.5);
     * ```
     */
    static lerp(start: Color, end: Color, t: number): Color;
    /**
     * 通过指定 r,g,b,a 来创建一个新的颜色实例
     * 例如创建红色颜色:
     * ``` typescript
     * Color.fromRGBA(255, 0, 0, 1)
     * ```
     */
    static fromRGBA(r: number, g: number, b: number, a: number): Color;
}
export declare abstract class Colors {
    static get black(): Color;
    static get white(): Color;
    static get red(): Color;
    static get green(): Color;
    static get blue(): Color;
    static get yellow(): Color;
    static get cyan(): Color;
    static get magenta(): Color;
    static get transparent(): Color;
    static get gray(): Color;
    static get darkGray(): Color;
    static get orange(): Color;
    static get pink(): Color;
}
