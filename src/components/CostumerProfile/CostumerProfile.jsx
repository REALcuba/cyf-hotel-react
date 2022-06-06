import React, { useState } from "react";

function CostumerProfile(props) {
  const [profileState, setProfileState] = useState("");
  setProfileState(<h2>show {props.data.id} Profile</h2>);
  return <>console.log(Show 1 Profile);</>;
}

export default CostumerProfile;
