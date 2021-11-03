import React from "react";
import PropTypes from 'prop-types';
import Typography from "../typography";
import SplightNameIcon from "../icons/splightName";
import Avatar from "../avatar";
import "./header.css";

const Header = ({ icon, pages, user, onClick, currentPage }) => {

    return (
        <nav className="navbar__container">
            <div className="navbar__icon">
                {icon}
            </div>
            <div className="navbar__pages">
                <ul className="navbar__pages__wrapper">
                    {
                        pages.map((page, index) =>
                            <li
                                className={`navbar__pages__item ${page.id === currentPage.id && 'navbar__pages__item--active'}`}
                                key={index}
                                onClick={()=> onClick(page)}
                            >
                                <Typography variant={`${page.id === currentPage.id ? 'bodyBold' : 'body'}`}>
                                    {page.name}
                                </Typography>
                            </li>
                        )
                    }
                </ul>

            </div>
            <div className="navbar__users">
                <Avatar
                    src={user.src}
                    name={user.name}
                />
            </div>
        </nav>
    );
};

Header.defaultProps = {
    icon: <SplightNameIcon />,
    pages: [],
    user: {},
    onClick: () => { },
    currentPage: {id:1}
};

Header.propTypes = {
    icon: PropTypes.string.isRequired,
    pages: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    currentPage: PropTypes.number.isRequired,
}



export default Header;