import {
    GET_WORKER_ADMINISTER_DATA,
    SET_WORKER_ADMINISTER_DATA,
  } from './Constans';
  
  export function getWorkerAdministerData() {
    return {
      type: GET_WORKER_ADMINISTER_DATA,
    };
  }
  
  export function setWorkerAdministerData(data : any) {
    return {
      type: SET_WORKER_ADMINISTER_DATA,
      payload: data,
    };
  }