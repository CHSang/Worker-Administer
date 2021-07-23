import { CandidateAdministerAwareState } from "./Type";
import { SET_CANDIDATE_ADMINISTER_DATA, ADD_CANDIDATE_ADMINISTER_DATA} from "./Constans";
import { Action } from "../../Share/Type";
import { DATA } from "./Data";

const initialState = {
  candidateAdminister: {
    list: []
  },
};

export const CandidateAdministerReducer = (
  state: CandidateAdministerAwareState = initialState,
  action: Action
) => {
  switch (action.type) {
    case SET_CANDIDATE_ADMINISTER_DATA: {
      return {
        candidateAdminister : {
          list: action.payload
        }
      }
    }
    case ADD_CANDIDATE_ADMINISTER_DATA: {
      return { 
        candidateAdminister : {
          list :  [...state.candidateAdminister.list, action.payload]
        }
      }
    }
    default:
      return state;
  }
};
