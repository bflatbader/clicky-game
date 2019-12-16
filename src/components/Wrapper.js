import React from "react";

function Wrapper(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    {props.children}
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    );
}
  
export default Wrapper;