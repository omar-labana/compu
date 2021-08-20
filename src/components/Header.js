import React from 'react';

const Header = () => (
  <nav className="flex justify-between text-3xl font-semibold mt-2 mb-20">
    <div>
      Math Magicians
    </div>
    <div className="flex gap-3 underline text-blue-700">
      <a href="/">Home</a>
      <a href="/calculator">Calculator</a>
      <a href="/quote">Quote</a>
    </div>
  </nav>
);

export default Header;
