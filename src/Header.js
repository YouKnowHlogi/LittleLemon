import React from 'react';

function Header() {
    return (
      <header>
<img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="Little Lemon Logo" />
{/* You can replace "logo.png" with the actual path to your logo */}
      </header>
    );
  }
  
  export default Header;
  