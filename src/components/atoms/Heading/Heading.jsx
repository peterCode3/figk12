import PropTypes from 'prop-types'

const Heading = ({ level, children, fontsize }) => {

    const HeadingTag = `h${level}`

    const getHeadingStyles = (level) => {
        switch (level) {
          case '1':
            return 'text-secondary font-bold';
          case '2':
            return 'text-blue font-bold';
          case '3':
            return 'text-red';
          case '4':
            return 'text-pink';
          case '5':
            return 'text-secondary';
          case '6':
            return 'text-secondary';
          default:
            return 'text-lg';
        }
    }

    const headingStyles = getHeadingStyles(level)

  return (
    <HeadingTag className={`${fontsize} ${headingStyles}`}>{children}</HeadingTag>
  )
}

Heading.propTypes = {
    level: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']).isRequired,
}

export default Heading