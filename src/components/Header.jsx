import { useState } from 'react';
import NavTabs from './NavTabs';

export default function Header({currentPage, handlePageChange}) {
 
  return (
    <header className="page-header">
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}
