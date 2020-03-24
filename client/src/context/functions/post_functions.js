import { post } from "../../utils/api";

export const handleInput = (e, dispatch) => {
  const { name, value } = e.target;
  dispatch({ type: "FIELD", fieldName: name, payload: value });
};

export const handleSubmit = (e, dispatch, userId) => {
  e.preventDefault();
  const new_date = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(new Date());
  let details = {
    text: e.target.text.value,
    date_created: new_date,
    user_id: userId
  };
  post("/api/posts", details)
    .then(res => {
      // console.log(res);
    })
    .catch(error => console.log(error.response.data));
  dispatch({
    type: "SUBMIT",
    fieldName: e.target.text.name,
    payload: { text: "", setOpen: false }
  });
};
