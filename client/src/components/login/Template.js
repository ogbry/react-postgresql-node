import React from "react";
import Login from "./Login";

export default function Template() {
  return (
    <div className="root">
      <div className="paper">
        <form className="form" noValidate>
          <Login />
        </form>
      </div>
    </div>
  );
}
