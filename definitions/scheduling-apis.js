type TaskPriority = 'user-blocking' | 'user-visible' | 'background';

type SchedulerPostTaskOptions = {
  delay: number,
  priority: TaskPriority,
  signal: AbortSignal,
};

type TaskControllerInit = {
  priority: TaskPriority,
};

type TaskPriorityChangeEventInit = {
  previousPriority: TaskPriority,
};

type TaskSignalAnyInit = {
  priority: TaskPriority | TaskSignal,
};

type SchedulerPostTaskCallback = () => any;

declare class Scheduler {
  postTask(
    callback: SchedulerPostTaskCallback,
    options?: SchedulerPostTaskOptions,
  ): any;
  yield(): void;
}

declare class TaskController extends AbortController {
  constructor(init?: TaskControllerInit): void;

  setPriority(priority: TaskPriority): void;
}

declare class TaskPriorityChangeEvent extends Event {
  +previousPriority: TaskPriority;

  constructor(
    type: string,
    priorityChangeEventInitDict: TaskPriorityChangeEventInit,
  ): void;
}

declare class TaskSignal extends AbortSignal {
  onprioritychange: EventHandler;
  +priority: TaskPriority;

  static any(signals: Array<AbortSignal>, init?: TaskSignalAnyInit): TaskSignal;
}

/* partial */ declare class mixin$WindowOrWorkerGlobalScope {
  +scheduler: Scheduler;
}
