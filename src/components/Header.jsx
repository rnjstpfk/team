import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

import { FaSearch } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { IoMdClose } from "react-icons/io"; // X 아이콘

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMenuOpen(false);
    }, 200);
  };



  // 클릭 시 메뉴 토글
const handleSubmenuToggle = (e) => {
  e.stopPropagation();
  const item = e.currentTarget;
  item.classList.toggle('open');
};


  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
    setSearchText(''); // 검색창 열릴 때 자동 초기화 (원하면 제거해도 돼)
  };

  // 스크롤 잠금
  useEffect(() => {
    const shouldLock = menuOpen || searchOpen;
    document.body.style.overflow = shouldLock ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen, searchOpen]);

  return (
    <>
      <header className="header">
        <div
          className="logo-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/">
            <img src="/img/logo1.png" alt="로고" />
          </Link>

          {menuOpen && (
            <div
              className="logo-menu"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ul>
                <li onClick={handleSubmenuToggle}>
                  <Link to="">Museums</Link>
                  <ul className="submenu">
                    <li><Link to="/main">루브르</Link></li>
                    <li><Link to="/museums/british-museum">대영</Link></li>
                    <li><Link to="/museums/ermitage">에르미타주</Link></li>
                    <li><Link to="/museums/metropolitan">메트로폴리탄</Link></li>
                    <li><Link to="/museums/vatican">바티칸</Link></li>
                  </ul>
                </li>
                <li><Link to="/categories">Categories</Link></li>
                <li><Link to="/artifacts">Artifacts</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>

            </div>
          )}
        </div>

        <Link to="/main" className="site-title">
          Archive Musée
        </Link>

        <Link to="/login">
          <IoMdPerson className="login" />
        </Link>

        <FaSearch className="search" onClick={toggleSearch} />
      </header>

      {searchOpen && (
        <div className="search-box">
          <div className="search-input-wrapper">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            {searchText && (
              <button
                className="search-clear"
                onClick={() => setSearchText('')}
              >
                <IoMdClose />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
