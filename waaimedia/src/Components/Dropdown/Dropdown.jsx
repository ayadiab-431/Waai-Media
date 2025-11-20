import { useRef, useEffect, useState } from 'react';
import './Dropdown.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';

export default function Dropdown({ mobile = false, title, id, activeId, onClick, navLinks }) {
  const [open, setOpen] = useState(false);
  const [subOpenId, setSubOpenId] = useState(null); // 👈 نضيف حالة لمتابعة أي sublist مفتوحة
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
        setSubOpenId(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <li
      ref={dropdownRef}
      className={`dropdown ${mobile ? 'w-100' : ''} ${activeId === id ? 'active' : ''}`}
      onClick={() => {
          onClick();
        if (mobile) {
          setOpen((prev) => !prev);
        }
      }}
      onMouseEnter={() => !mobile && setOpen(true)}
    //   onMouseLeave={() => !mobile && setOpen(false)}
    >
      <div className="d-flex align-items-center justify-content-between">
        <span>{title}</span>
        <KeyboardArrowDownIcon
          className="dropdown-arrow"
          style={{
            fontSize: '1.25rem',
            transform: open ? 'rotate(180deg)' : '',
            transition: '0.5s',
          }}
        />
      </div>

      <div
        className={`droplist-container ${mobile ? 'w-100' : 'position-absolute'} ${
          open ? 'open' : ''
        }`}
        style={{ backgroundColor: !mobile ? 'var(--white)' : '' }}
      >
        <ul className="dropdown-list d-flex flex-column">
          {navLinks.map((newLink) => (
            <li key={newLink.id} className="dropdown-item">
              {newLink.subLinks ? (
                <>
                  {/* لو فيه subLinks */}
                  <div
                    className="d-flex align-items-center justify-content-between"
                    onClick={(e) => {
                      e.stopPropagation(); // يمنع غلق الليست الأصلية
                      setSubOpenId((prev) => (prev === newLink.id ? null : newLink.id));
                    }}
                  >
                    <span>{newLink.name}</span>
                    <KeyboardArrowDownIcon
                      style={{
                        fontSize: '1rem',
                        transform: subOpenId === newLink.id ? 'rotate(180deg)' : '',
                        transition: '0.3s',
                      }}
                    />
                  </div>

                  {/* الليست الفرعية */}
                  <ul
                    className={`sub-dropdown-list ${subOpenId === newLink.id ? 'open' : ''}`}
                  >
                    {newLink.subLinks.map((sub) => (
                      <li key={sub.id}>
                        <Link to={sub.path}>{sub.name}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link to={newLink.path}>{newLink.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
