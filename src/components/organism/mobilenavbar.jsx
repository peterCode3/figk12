import Link from 'next/link';

const MobileNavbar = () => {
  // Define the inline styles
  const navItemStyle = 'inline-block p-4 md:font-bold no-underline text-black';


  return (
    <nav>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li className={navItemStyle}>
          <Link href='/ceucourses'>CEU COURSES</Link>
        </li>
        <li className={navItemStyle}>
          <Link href="/figlifestyle">FIG LIFESTYLE</Link>
        </li>
        <li className={navItemStyle}>
          <Link href="/coaches">COACHES</Link>
        </li>
        <li className={navItemStyle}>
          <Link href="https://figk-12.com/">SIGN IN TO FIG</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
