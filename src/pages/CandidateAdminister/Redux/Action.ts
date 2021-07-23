import {
    GET_CANDIDATE_ADMINISTER_DATA,
    SET_CANDIDATE_ADMINISTER_DATA,
    ADD_CANDIDATE_ADMINISTER_DATA
  } from './Constans';
  
  export function getCandidateAdministerData() {
    return {
      type: GET_CANDIDATE_ADMINISTER_DATA,
    };
  }
  
  export function setCandidateAdministerData(data : any) {
    return {
      type: SET_CANDIDATE_ADMINISTER_DATA,
      payload: data,
    };
  }

  export function createCandidateAdministerData(data : {}) {
    return {
      type: ADD_CANDIDATE_ADMINISTER_DATA,
      payload: data,
    };
  }