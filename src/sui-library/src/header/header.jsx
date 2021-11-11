import React from "react";
import Typography from "../typography/typography.jsx";
import SplightNameIcon from "../icons/splightName.jsx";
import "./header.css";

const Header = ({ className, icon, pages, user, onClick, currentPage }) => {

    return (
        <nav className={`navbar__container ${className}`}>
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
                                onClick={() => onClick(page)}
                            >
                                <Typography variant={`${page.id === currentPage.id ? 'bodyBold' : 'body'}`}>
                                    {page.name}
                                </Typography>
                            </li>
                        )
                    }
                </ul>

            </div>
            <div className="navbar__user">
                {user}
            </div>
        </nav>
    );
};

Header.defaultProps = {
    icon: <SplightNameIcon />,
    pages: [],
    user: <></>,
    onClick: () => { },
    currentPage: { id: 1 },
    className: "",
};

export default Header;