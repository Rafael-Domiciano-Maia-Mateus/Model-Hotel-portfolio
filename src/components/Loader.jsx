import { useEffect, useState } from 'react';
import './Loader.css';

export default function Loader() {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setHidden(true), 1300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`loader ${hidden ? 'is-hidden' : ''}`} role='status' aria-live='polite'>
            <p className='loader-mark'>
                Hotel <span>Portfólio</span>
            </p>
            <div className='loader-line' />
            <p className='loader-caption'>Preparando sua experiência</p>
        </div>
    );
}
