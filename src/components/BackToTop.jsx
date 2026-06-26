import { useEffect, useState } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import './FloatingButtons.css';

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 600);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <button
            className={`fab fab-top ${visible ? 'is-visible' : ''}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label='Voltar ao topo da página'
        >
            <MdKeyboardArrowUp size={24} />
        </button>
    );
}
