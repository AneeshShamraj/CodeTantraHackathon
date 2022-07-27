import React from "react";

const Form = () => {
  return (
    <div className="form-box">
      <form className="form-1">
        <label>Enter Name:</label>
        <div className="item">
          <input type="text" placeholder="Name of the student"></input>
        </div>
        <label>Enter committee:</label>
        <div className="item">
          <input type="text" placeholder="Name of the Committee"></input>
        </div>
        <label>Enter Event:</label>
        <div className="item">
          <input type="text" placeholder="Name of the Event"></input>
        </div>
        <label >Enter date:</label>
        <div className="item">
            <div className="item">
                <input type="date" name="cal" id="cal" />
            </div>
        </div>
        <label>Enter Description:</label>
        <div className="item">
          <input type="textarea" placeholder="Description"></input>
        </div>
        <button type="submit" className="req">
          Request
        </button>
      </form>
    </div>
  );
};

export default Form;
