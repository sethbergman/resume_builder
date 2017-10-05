import { combineReducers } from 'redux';
import ResumeData from './reducer_resumedata';

const rootReducer = combineReducers({
  resumeData: ResumeData,
});

export default rootReducer;
