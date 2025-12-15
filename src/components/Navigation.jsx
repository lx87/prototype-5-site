import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная" },
    { path: "/icons", label: "Иконки" },
    { path: "/loaders", label: "Лоадеры" },
    { path: "/interactive", label: "Интерактив" },
    { path: "/showcase", label: "Галерея" },
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <span>🎬</span>
          <span>Lottie Animations</span>
        </div>
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className={location.pathname === item.path ? "active" : ""}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
