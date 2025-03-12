import React from "react";
import Learner from "./common/Learner";

const Unseen = () => {
    const LearnerImage = "unseen.png"
  return (
    <Learner
      image={LearnerImage}
      head="The unseen of spending three years at Pixelgrade"
      pera="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
    />
  );
};

export default Unseen;
