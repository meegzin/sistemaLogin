import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AdminPage from "../pages/AdminPage"
import LoginForm from "../pages/LoginForm"
import useAuthenticator from "../hooks/useAuthenticator"

const Private = ({ Item }) => {
    const { signed } = useAuthenticator()

    return signed > 0 ? <Item /> : <LoginForm />
}

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/AdminPage" element={<Private Item={AdminPage} />} />
                    <Route path="/" element={<LoginForm />} />
                    <Route path="*" element={<LoginForm />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default RoutesApp