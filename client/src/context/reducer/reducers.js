export const initialState = {
  text: "",
  setOpen: false,
  allPost: []
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN": {
      return {
        ...state,
        setOpen: action.payload.setOpen
      };
    }
    case "FIELD": {
      return {
        ...state,
        [action.fieldName]: action.payload
      };
    }
    case "SUBMIT": {
      return {
        ...state,
        [action.fieldName]: action.payload.text,
        setOpen: action.payload.setOpen
      };
    }
    case "POST": {
      return {
        ...state,
        allPost: action.payload.allPost
      };
    }
    default:
      return state;
  }
};
