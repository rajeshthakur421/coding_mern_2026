import React from "react";

const CategoryForm = ({ handleSubmit, name,setName,nameError,setNameError,flag,setFlag }) => (
  
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label>Name</label>
      <input
        type="text"
        className="form-control"
        onChange={(e) => setName(e.target.value)}
        value={name}
        autoFocus
      />
      <div className="row">
      {flag==true && <p>{nameError}</p>}
      
    </div>

      <br />
      <button className="btn btn-outline-primary">Save</button>
    </div>
  </form> 
);

export default CategoryForm;
