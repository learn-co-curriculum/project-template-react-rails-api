import React from 'react';
import PropTypes from 'prop-types'
const Header = props => (
    <header className='top'>
        <div className='header-content'>
            <div className='header-content'>
                <div className='header-rating'>
                    <div className='header-rating_tag'>Rating:</div>
                    <div className='header-rating_icon'>★★★★★</div>
                </div>

                <div className='header-divider'></div>
                <h1 className='font-effect-fire-animation'>{props.title}</h1>
                <h3>
                    <span>
                        Fast delivery of hot
                        <span className='sub-header'> #Steaks</span>
                    </span>
                </h3>
            </div>
        </div>
    </header>
);

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header; 