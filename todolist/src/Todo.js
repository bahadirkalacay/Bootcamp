import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Todo() {
  const [newtask, setnewtask] = useState("");
  const [tasks, settasks] = useState([]);

  function addtask() {
    settasks([...tasks, newtask]);
  }

  function deletetask(index) {
    var duplicatearray = [...tasks];
    duplicatearray.splice(index, 1);
    settasks(duplicatearray);
  }

  const tasklist = tasks.map((object, index) => {
    return (
      <div className="row justify-content-center">
        <h1 className="col-md-6 text-left">
          {index + 1} {object}
        </h1>
        <button
          onClick={() => {
            deletetask(index);
          }}
          className="col-md-1 btn btn-danger m-1"
        >
          DELETE
        </button>
      </div>
    );
  });

  return (
    <div>
      <div className="row justify-content-center">
        <input
          type="text"
          placeholder="taskname"
          className="form-control col-md-4 m-1"
          value={newtask}
          onChange={(e) => {
            setnewtask(e.target.value);
          }}
        />
        <button onClick={addtask} className="btn btn-success col-md-1 m-1">
          Add Task
        </button>
      </div>

      {tasklist}
    </div>
  );
}

export default Todo;
