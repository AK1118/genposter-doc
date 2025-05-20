export declare abstract class Matrix {
    constructor(rows: number, cols: number);
    protected _matrix: Array<number>;
    get matrix(): Array<number>;
    getMatrix(): Array<number>;
    setMatrix(matrix: Array<number>): Matrix;
    setValue(index: number, value: number): void;
    abstract translate(...args: Array<number>): void;
    abstract translateValues(): void;
    abstract identity(): Matrix;
    abstract scale(...args: Array<number>): void;
    abstract multiply(matrix: Matrix): void;
}
export declare class Matrix4 extends Matrix {
    constructor();
    /**
     * other * this
     */
    multiply(other: Matrix): this;
    identity(): Matrix4;
    static get zero(): Matrix4;
    scaleValues(sx?: number, sy?: number, sz?: number): void;
    scale(sx?: number, sy?: number, sz?: number): void;
    static skewX(alpha: number): Matrix4;
    skewX(alpha: number): Matrix4;
    static skewY(beta: number): Matrix4;
    skewY(beta: number): Matrix4;
    static skew(alpha: number, beta: number): Matrix4;
    skew(alpha: number, beta: number): Matrix4;
    translateValues(x?: number, y?: number, z?: number): void;
    translate(x?: number, y?: number, z?: number): Matrix4;
    /**
     * Rotate around the Z axis.
     *
     *  cos(θ), sin(θ), 0, 0,
        -sin(θ), cos(θ), 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1,
     */
    rotateZ(angle: number): void;
    rotateY(angle: number): void;
    /**
     * Rotate around the X axis.
     *
     *  1, 0, 0, 0,
        0, cos(θ), sin(θ), 0,
        0, -sin(θ), cos(θ), 0,
        0, 0, 0, 1,
     */
    rotateX(angle: number): void;
    /**
     * 这个求逆矩阵的算法是基于分块矩阵的方法，通过计算矩阵的子式（即矩阵的最小子矩阵的行列式）来求逆矩阵。
     * 这个方法和初级计算法（高斯消元法）以及伴随矩阵法（利用代数余子式的转置矩阵）不同。具体来说，这个方法利用了一些矩阵的性质，分解了矩阵并计算了一系列的子式和行列式来求得逆矩阵。
        以下是这个算法的基本步骤：
        计算子式：首先计算矩阵的2x2子式（b00到b11）。这些子式是通过原矩阵中4个元素的乘积与差计算得到的。
        计算行列式：使用计算得到的子式计算原矩阵的行列式（det）。如果行列式为0，则矩阵不可逆。
        求逆矩阵元素：根据计算得到的子式和行列式，逐个计算逆矩阵的元素。
        返回逆矩阵：将计算得到的逆矩阵结果存储在一个新矩阵中并返回。
        这个算法比直接计算伴随矩阵和行列式的传统方法更有效，因为它减少了重复计算，直接利用子式的计算结果来求逆矩阵。
     */
    inverted(): Matrix4;
}
