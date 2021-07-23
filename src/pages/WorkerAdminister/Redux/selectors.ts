export const sltWorkerAdministerData = (state: any) =>
  (state && state.workerReducer && state.workerReducer.workerAdminister) ||
  null;
