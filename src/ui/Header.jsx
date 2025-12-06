import HeaderNav from "./HeaderNav";
import Logo from "./Logo";

function Header() {
  return (
    <header className="flex  justify-between items-center py-10 max-sm:py-8  max-w-[80%] mx-auto">
      <Logo />
      <HeaderNav />
    </header>
  );
}

export default Header;
