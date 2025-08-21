import './App.css';
import './index.css';

import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { useState } from 'react';

function App() {
  // โหลดเสร็จแล้ว
  const [isLoaded, setIsLoaded] = useState(false);
  // เปิดเมนู Navbar
  const [menuOpen, setMenuOpen] = useState(false);

  return <>
    {/* ถ้าโหลดเสร็จแล้วให้ onComplete เป็น true */}
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{""}

    {/* ถ้าโหลดเสร็จแล้วให้แสดงรายละเอียดใน div นี้ : ถ้ายังให้ซ่อนไว้ opacity-0 */}
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    </div>
  </>;
}

export default App
