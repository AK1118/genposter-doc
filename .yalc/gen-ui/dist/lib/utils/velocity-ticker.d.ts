import { Offset } from "../basic/rect";
import { Duration } from "../core/duration";
declare class VelocityTracker {
    private positions;
    private deadDuration;
    private deadTimer;
    private historySize;
    constructor(deadDuration?: Duration);
    addPosition(position: Offset): void;
    private deadLine;
    private handleDisposePositions;
    private cancelDeadTimer;
    getVelocity(): Offset;
    reset(): void;
}
export default VelocityTracker;
