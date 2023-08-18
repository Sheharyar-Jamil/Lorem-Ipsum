import React from "react";

const Text = (props) => {
    return(
        <div>
            <article>
                <p>{props.text}</p>
            </article>
        </div>
    );
};

export default Text;