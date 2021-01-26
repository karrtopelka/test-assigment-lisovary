import React from "react";

const TaskDescription = ({ name, description }) => {
  return (
    <div>
      <h2 style={{ paddingBottom: 10 }}>Завдання</h2>
      <p style={{ fontWeight: "bold" }}>{name}</p>
      <p style={{ paddingTop: 10 }}>{description}</p>
    </div>
  );
};

export default TaskDescription;
