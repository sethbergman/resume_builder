export const SET_ALL_STATE = 'set_all_state';
export const UPDATE_BASIC_INFO = 'update_basic_info';
export const UPDATE_SECTION_INFO = 'update_section_info';
export const ADD_SECTION_INFO = 'add_section_info';
export const DELETE_SECTION_INFO = 'delete_section_info';
export const UPDATE_SUMMARY = 'update_summary';

export function setAllState(allState) {
  return {
    type: SET_ALL_STATE,
    payload: allState
  };
}

export function updateBasicInfo(payload) {
  return {
    type: UPDATE_BASIC_INFO,
    payload: payload
  };
}

export function updateSectionInfo(payload) {
  return {
    type: UPDATE_SECTION_INFO,
    payload: payload
  };
}

export function addSectionInfo(payload) {
  return {
    type: ADD_SECTION_INFO,
    payload: payload
  }
}

export function deleteSectionInfo(index) {
  return {
    type: DELETE_SECTION_INFO,
    payload: index
  };
}

export function updateSummary(payload) {
  return {
    type: UPDATE_SUMMARY,
    payload: payload
  };
}