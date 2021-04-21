import React from "react";

const Form = ( props ) => (
    <form className="form" onSubmit={props.handleAdd}>
        <div className="form-group">
            <input type="text" name="title" id="title" className="form-control" placeholder="sample" />
            <label form="title">form here</label>
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    </form>

);

export default Form