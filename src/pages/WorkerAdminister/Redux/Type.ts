export interface Function {}

export interface WorkerState {
  name: string;
  age: string;
  role: string;
}

export interface WorkerAdministerState {
  list: WorkerState[];
}

export interface WorkerAdministerAwareState {
  workerAdminister : WorkerAdministerState;
}
