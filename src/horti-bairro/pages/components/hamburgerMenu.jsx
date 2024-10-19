import Hamburger from 'hamburger-react';

const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div className="mr-4">
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
