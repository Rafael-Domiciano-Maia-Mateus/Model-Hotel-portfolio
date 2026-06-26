import { useEffect, useState } from 'react';
import { nav } from '../data/content';
import './Navbar.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
    }, [open]);

    const handleNavClick = (href) => (e) => {
        e.preventDefault();
        setOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
                <div className='container navbar-inner'>
                    <a href='#home' className='navbar-logo' onClick={handleNavClick('#home')}>
                        Hotel <span>Portfólio</span>
                    </a>

                    <nav className='navbar-links' aria-label='Navegação principal'>
                        {nav.map((item) => (
                            <a key={item.href} href={item.href} onClick={handleNavClick(item.href)}>
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <a href='#contato' className='btn btn-primary navbar-cta' onClick={handleNavClick('#contato')}>
                        Reservar Agora
                    </a>

                    <button
                        className={`navbar-toggle ${open ? 'is-open' : ''}`}
                        onClick={() => setOpen((v) => !v)}
                        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
                        aria-expanded={open}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </header>

            <div className={`navbar-backdrop ${open ? 'is-open' : ''}`} onClick={() => setOpen(false)} />

            <nav className={`navbar-mobile ${open ? 'is-open' : ''}`} aria-label='Navegação mobile'>
                {nav.map((item, i) => (
                    <a key={item.href} href={item.href} style={{ transitionDelay: `${i * 60}ms` }} onClick={handleNavClick(item.href)}>
                        {item.label}
                    </a>
                ))}
            </nav>
        </>
    );
}
