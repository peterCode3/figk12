import Link from 'next/link';
import { useRouter } from 'next/router'; // Import the useRouter hook
import Logo from '../atoms/Logo/logo';



const Navbar = () => {
  // Define the inline styles
  const navItemStyle = 'text-black inline-block text-2xl p-4 md:font-bold no-underline';
  const navStyles = 'flex  justify-self-center	justify-between items-center';
  const router = useRouter();
  
  const defaultlogo = [
    { src: '/images/logo-colored.png', alt: 'Second Page Logo', href: '/' },
  ];
  const whitelogo = [
    { src: '/images/logo.png', alt: 'Ecommrce', href: '/' },
  ];
  const secondPageLogo = [
    { src: '/images/logo-colored.png', alt: 'Second Page Logo', href: '/' },
  ];
  


  const routeToLogo = {
    '/': whitelogo,      
    '/ceucourses': whitelogo,  
    '/figlifestyle': secondPageLogo,  
    '/coaches': whitelogo,  
    '/figlifestyle': whitelogo,  

  };

  const defaultLogo = defaultlogo;

  const logoData = routeToLogo[router.pathname] || defaultLogo;
  
  return (

    <nav className={navStyles}>
      <ul  style={{ listStyle: 'none', padding: 0 }}>
        <li className={navItemStyle}>
          <Link href='/ceucourses'>CEU COURSES</Link>
        </li>
        <li className={navItemStyle}>
          <Link href="/figlifestyle">FIG LIFESTYLE</Link>
        </li>
      </ul>

      <div className='brand-logo'>
      <Logo logoData={logoData} />
        {/* {router.pathname === '/' ? ( // Check if you are on the second page route
          <Logo logoData={mobilelogo} /> // Use the second-page logo
        ) : (
          <Logo logoData={secondPageLogo} /> // Use the default logo for other pages
        )} */}
      </div>


      <ul>
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

export default Navbar;
