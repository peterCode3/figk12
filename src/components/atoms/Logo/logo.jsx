import PropTypes from 'prop-types';
import Link from 'next/link';

const Logo = ({ logoData }) => {
  return (
    <div>
      {logoData.map((item) => (
        <Link className='w-[100px] block' key={item.href} href={item.href}>
          <img src={item.src} alt={item.alt} />
        </Link>
      ))}
    </div>
  );
};

Logo.propTypes = {
  logoData: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Logo;
