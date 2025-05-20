export declare enum GestureDisposition {
    accepted = "accepted",
    rejected = "rejected"
}
export declare abstract class GestureArenaMember {
    abstract acceptGesture(pointer: number): void;
    abstract rejectGesture(pointer: number): void;
}
export declare class GestureArenaEntry {
    constructor(arena: GestureArenaManager, pointer: number, member: GestureArenaMember);
    private _arena;
    private _pointer;
    private _member;
    resolve(disposition: GestureDisposition): void;
}
declare class GestureArenaManager {
    private arenas;
    add(pointer: number, member: GestureArenaMember): GestureArenaEntry;
    _resolve(pointer: number, member: GestureArenaMember, disposition: GestureDisposition): void;
    close(pointer: number): void;
    sweep(pointer: number): void;
    hold(pointer: number): void;
    release(pointer: number): void;
    private tryToResolveArena;
    private resolveInFavorOf;
}
export default GestureArenaManager;
