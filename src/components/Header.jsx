import { ReactComponent as Logo } from './logo.svg';

const Header = () => {
  return (
    <header className="header">
      <Logo className="logo" />
      <h1 className="site-title">Archive Musée</h1>
    </header>
  );
};

export default Header;
