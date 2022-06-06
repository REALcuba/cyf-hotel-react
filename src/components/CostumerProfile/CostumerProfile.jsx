import React, { useState } from "react";

function CostumerProfile(props) {
  const [profileState, setProfilestate] = useState("");
  setProfilestate(<h2>show {props.data.id} Profile</h2>);
  return <>console.log(Show 1 Profile);</>;
}

export default CostumerProfile;
