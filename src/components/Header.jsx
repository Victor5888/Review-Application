function Header({
  text = 'Your feedback, My Cure',
  bgColor = 'rgba(0,0,0,0.4)',
  textColor = '#ff6a95 ',
}) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

export default Header;

/// this is the part if the code that is responsible for the header part of the application so if you have anything like the nav bar that is where it will be going to
