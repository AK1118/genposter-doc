import { Matrix4 } from "../math/matrix";
import Vector from "../math/vector";
declare class MatrixUtils {
    /**
     * 获取平移矩阵，如果矩阵不是平移矩阵则返回null
     * 且矩阵为初始变换矩阵，只有平移数据
     * @param transform
     * @returns
     */
    static getAsTranslation(transform: Matrix4): Vector;
    static getAsScale(transform: Matrix4): number;
    static transformPoint(transform: Matrix4, point: Vector): Vector;
}
export default MatrixUtils;
