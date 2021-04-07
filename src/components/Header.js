import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            
        </header>
    );
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.prototype = {
    title: PropTypes.string.isRequired,
}

export default Header;