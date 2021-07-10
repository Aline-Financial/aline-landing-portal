import React from "react";
import {Link} from "react-router-dom";

/**
 * <strong>Page - Not Found</strong>
 * <p>Page to display a not found message.</p>
 * <p><em>This component uses a {@link Link}. Refer to it's documentation.</em></p>
 */
const NotFound = () => {
    return (
        <div className="container">
            <div className="bg-light m-5 p-5 rounded">
                <h3 className="h3">404 Page Not Found</h3>
                <p className="my-5 lead">The page you are trying to access does not exist.</p>
                <Link to="/">
                    <button type="button" className="btn btn-primary">Go Back Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
