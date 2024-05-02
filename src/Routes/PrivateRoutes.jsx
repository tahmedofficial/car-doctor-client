import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <h3>Loading...</h3>
    }

    if (user) {
        return children;
    }

    return (<Navigate to="/login"></Navigate>);
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node
}