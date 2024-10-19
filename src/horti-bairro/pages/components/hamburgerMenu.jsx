import Hamburger from 'hamburger-react';

const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div className="mr-4 hover:bg-[#80a15c] duration-200 p-2 rounded-xl">
      <Hamburger
        toggled={isOpen}
        toggle={setIsOpen}
        color="#000"
        size={24}
      />
    </div>
  );
};

export default HamburgerMenu;
