import { RectTLRB } from "../render-object/basic";
export declare abstract class EdgeInsetsGeometry {
    readonly left: number;
    readonly right: number;
    readonly top: number;
    readonly bottom: number;
    private readonly start;
    private readonly end;
    constructor(option?: Partial<RectTLRB<number>>);
    get isZero(): boolean;
}
export declare class EdgeInsets extends EdgeInsetsGeometry {
    static get zero(): EdgeInsets;
    /**
     * # 根据左上右下创建EdgeInsets对象
     * @param tlrb
     * @returns
     */
    static fromLTRB(tlrb: RectTLRB<number>): EdgeInsets;
    /**
     * # 只设置部分值创建EdgeInsets对象
     * @param tlrb
     * @returns
     */
    static only(tlrb: Partial<RectTLRB<number>>): EdgeInsets;
    /**
     * # 设置所有值创建EdgeInsets对象
     * @param value
     * @returns
     */
    static all(value: number): EdgeInsets;
    /**
     * # 设置对称值创建EdgeInsets对象
     * @param symmetric
     * @returns
     */
    static symmetric(symmetric: Partial<{
        vertical: number;
        horizontal: number;
    }>): EdgeInsets;
}
