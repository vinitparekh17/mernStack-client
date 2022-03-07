import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <>
            <div id="err">
                <h1>404</h1>
                <h4>You've found a page that doesn't exist</h4>
                <Link className="btn btn-dark bt" to="/">Go back to home</Link>
            </div>
        </>
    );
}

export default ErrorPage;
