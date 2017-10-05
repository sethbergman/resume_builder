import {
  UPDATE_BASIC_INFO,
  UPDATE_SECTION_INFO,
  SET_ALL_STATE,
  DELETE_SECTION_INFO,
  ADD_SECTION_INFO,
  UPDATE_SUMMARY
} from '../actions/index';

const INIT_STATE = {
  basicInfo: {},
  summary: '',
  experienceAr: [],
  educationAr: [],
  projectAr: []
};

export default function(state = INIT_STATE, action) {
  switch (action.type) {
    case SET_ALL_STATE:
      return action.payload;
    case UPDATE_BASIC_INFO:
      return {
        ...state,
        basicInfo: {
          ...state.basicInfo,
          [action.payload.name]: action.payload.value
        }
      };
    case UPDATE_SECTION_INFO:
      const { index, name, value, type } = action.payload;
      let newState = [...state[type]];
      newState[index][name] = value;
      return {
        ...state,
        [type]: newState
      };
    case ADD_SECTION_INFO:
      return {
        ...state,
        [action.payload.type]: [...state[action.payload.type], action.payload.info]
      };
    case DELETE_SECTION_INFO:
      return {
        ...state,
        [action.payload.type]: state[action.payload.type].filter((_, i) => i !== action.payload.index)
      };
    case UPDATE_SUMMARY:
      return {
        ...state,
        summary: action.payload
      };
    default:
      return state;
  }
}
