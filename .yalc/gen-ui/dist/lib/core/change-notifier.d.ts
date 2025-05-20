export declare abstract class Listenable {
    abstract addListener(listener: VoidFunction): void;
    abstract removeListener(listener: VoidFunction): void;
}
export declare abstract class ChangeNotifier extends Listenable {
    private listeners;
    private count;
    private notificationCallStackDepth;
    private needsRemoveListener;
    addListener(listener: VoidFunction): void;
    removeListener(listener: VoidFunction): void;
    notifyListeners(): void;
    private cleanupListeners;
    dispose(): void;
}
