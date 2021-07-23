import { WorkerAdministerAwareState } from "./Type";
import { SET_WORKER_ADMINISTER_DATA} from "./Constans";
import { Action } from "../../Share/Type";

const initialState = {
  workerAdminister: {
    list: []
  },
};

export const workerAdministerReducer = (
  state: WorkerAdministerAwareState = initialState,
  action: Action
) => {
  switch (action.type) {
    case SET_WORKER_ADMINISTER_DATA: {
      return { 
        workerAdminister : {
          list: action.payload
        }
      }
    }
    default:
      return state;
  }
};
