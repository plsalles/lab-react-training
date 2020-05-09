import React from 'react';
import './Greeting.css';

const Greeting = ({lang, children}) => {
        switch (lang) {
            case 'es':
                return <h3 className='greeting'>Hola {children}</h3>;
            case 'en':
                return <h3 className='greeting'>Hello {children}</h3>;
            case 'de':
                return <h3 className='greeting'>Halo {children}</h3>;
            case 'fr':
                return <h3 className='greeting'>Bonjour {children}</h3>;
            default:
                return <h3 className='greeting'>Olá {children}</h3>;
        }
};

export default Greeting;