import './registration.scss'
import '../../assets/fontawesome-free-6.1.1-web/css/all.css'
import React from "react";
import {Link} from "react-router-dom";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

export const Registration: React.FC = () => {
    return (
        <div className="registration">
            <div className="registration__header">
                <div className="registration__header_logo">
                    LOGO
                </div>

                <nav className="registration__header__nav">
                    <Link to={"/"} className="registration__header__nav-image" title="menu">
                        <i className="fa fa-bars"/>
                    </Link>

                    <Link to={"/"} className="registration__header__nav-link" title="sign in">
                        <i className="registration__header__nav-image fa fa-sign-in"/> Sign In
                    </Link>
                </nav>
            </div>

            <div className="registration__body">
                <RegistrationForm />
            </div>
        </div>
    )
}
