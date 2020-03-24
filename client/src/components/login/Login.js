import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import GoogleLogin from "react-google-login";
import googleIcon from "../img/google-icon.svg";

import cookies from "js-cookie";
import { post } from "../../utils/api";
export default function Login({ history }) {
  const { dispatch } = useContext(GlobalContext);
  const responseGoogle = async response => {
    dispatch({
      type: "OPEN",
      payload: { setOpen: false }
    });
    let user = {
      id: response.profileObj.googleId,
      firstname: response.profileObj.givenName,
      lastname: response.profileObj.familyName,
      email: response.profileObj.email,
      avatar: response.profileObj.imageUrl
    };

    post("/api/login", user)
      .then(res => {
        cookies.set("token", res.data);
        history.push("/");
      })
      .catch(error => console.log(error.response.data));
  };

  return (
    <GoogleLogin
      clientId="198077306857-mh720g4tvaihbq0s3u6agst82luj72vi.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={response => console.log(response)}
      cookiePolicy={"single_host_origin"}
      render={renderProps => (
        <button
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          style={{
            backgroundColor: "white",
            color: "#7048c6",
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 20,
            fontWeight: "bold",
            borderRadius: "24px",
            padding: "10px 16px",
            border: "none",
            display: "flex",
            alignItems: "center",
            cursor: `pointer`,
            boxShadow:
              "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)"
          }}
        >
          <img
            src={googleIcon}
            style={{
              width: "20px",
              height: "20px",
              marginRight: "10px"
            }}
            alt="google-logo"
          />
          GET STARTED
        </button>
      )}
    />
  );
}
