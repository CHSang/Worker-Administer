export const sltCandidateAdministerData = (state: any) =>
  (state && state.candidateReducer && state.candidateReducer.candidateAdminister) ||
  null;
