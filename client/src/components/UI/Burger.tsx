const Burger = ({ active, openMenu }) => {
  return (
    <div className="burger" onClick={openMenu}>
      <span className={`burger__line ${active ? 'burger__lineActive' : ''}`}></span>
      <span className={`burger__line ${active ? 'burger__lineActive' : ''}`}></span>
      <span className={`burger__line ${active ? 'burger__lineActive' : ''}`}></span>
    </div>
  );
};

export default Burger;
