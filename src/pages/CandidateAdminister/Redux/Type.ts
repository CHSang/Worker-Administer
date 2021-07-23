export interface CandidateState {
  name: string;
  age: string;
  role: string;
}

export interface CandidateAdministerState {
  list: CandidateState[];
}

export interface CandidateAdministerAwareState {
  candidateAdminister : CandidateAdministerState;
}
