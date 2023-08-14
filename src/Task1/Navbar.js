// Navbar.js
import React, { useState } from 'react';
import Dialog from './Dialog';

const Navbar = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  return (
    <nav>
      <button onClick={openDialog}>Buy Now</button>
      <Dialog isOpen={dialogOpen} onClose={() => setDialogOpen(false)} />
    </nav>
  );
};

export default Navbar;
