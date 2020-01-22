import React, { useEffect, useState } from 'react';
import Logo from '../Logo/logo';
import Navigation from '../Navigation/navigation';
import classes from './header.module.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 100);
    });
  }, [setIsScrolled]);

  const headerClasses = isScrolled
    ? [classes.header, classes.header_scrolled].join(' ')
    : classes.header;

  return (
    <header className={headerClasses}>
      <div className={['container', classes.header__container].join(' ')}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
