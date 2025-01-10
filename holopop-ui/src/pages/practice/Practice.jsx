import React, { useState } from "react";

const Practice = () => {
  const [Status, Setstaus] = useState(false);

  return (
    <div>
      {Status ? <h1>Hi</h1> : null}
      <div>
        <button onClick={() => Setstaus(!Status)}>{Status ? "hide" : "show"}</button>
      </div>
    </div>
  );
};

export default Practice;
