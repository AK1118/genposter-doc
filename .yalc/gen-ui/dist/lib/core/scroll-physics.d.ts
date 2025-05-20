import { ScrollPosition } from "../render-object/viewport";
import { Simulation } from "./animation";
export declare abstract class ScrollPhysics {
    /**
     * 返回每次滚动时的delta矫正值,如果返回0则不进行矫正
     */
    abstract applyBoundaryConditions(position: ScrollPosition, currentScrollOffset: number): number;
    /**
     * [position] 当前的位置, [offset] 用户拖拽距离
     * 将用户拖拽距离 offset 转为需要移动的 pixels
     */
    abstract applyPhysicsToUserOffset(position: ScrollPosition, delta: number): number;
    /**
     * 创建一个滚动的模拟器,一般在手指离开屏幕后调用
     */
    abstract createBallisticSimulation(position: ScrollPosition, velocity: number): Simulation;
}
export declare class SimpleScrollPhysics extends ScrollPhysics {
    applyPhysicsToUserOffset(position: ScrollPosition, delta: number): number;
    createBallisticSimulation(position: ScrollPosition, velocity: number): Simulation;
    applyBoundaryConditions(position: ScrollPosition, currentScrollOffset: number): number;
}
export declare class BouncingScrollPhysics extends ScrollPhysics {
    applyBoundaryConditions(position: ScrollPosition, currentScrollOffset: number): number;
    applyPhysicsToUserOffset(position: ScrollPosition, delta: number): number;
    createBallisticSimulation(position: ScrollPosition, velocity: number): Simulation;
}
