import { nav, socialLinks } from '../data/content';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const socialIcons = {
    instagram: FaInstagram,
    facebook: FaFacebookF,
    whatsapp: FaWhatsapp,
    linkedin: FaLinkedinIn,
};

export default function Footer() {
    const year = new Date().getFullYear();

    const handleNavClick = (href) => (e) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer-grid'>
                    <div>
                        <a href='#home' className='footer-logo' onClick={handleNavClick('#home')}>
                            Hotel <span>Portfólio</span>
                        </a>
                        <p className='footer-about'>
                            Um resort cinco estrelas onde hospitalidade, design e paisagem se encontram para criar memórias duradouras.
                        </p>
                        <div className='footer-socials'>
                            {socialLinks.map((s) => {
                                const Icon = socialIcons[s.icon];
                                return (
                                    <a
                                        key={s.name}
                                        href={s.href}
                                        className='footer-social-link'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        aria-label={`Hotel Portfólio no ${s.name}`}
                                    >
                                        <Icon size={16} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <p className='footer-heading'>Navegação</p>
                        <ul className='footer-links'>
                            {nav.map((item) => (
                                <li key={item.href}>
                                    <a href={item.href} onClick={handleNavClick(item.href)}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className='footer-heading'>Contato</p>
                        <ul className='footer-links'>
                            <li>Avenida do xxxx, 1000</li>
                            <li>Ubatuba, SP — Brasil</li>
                            <li>+55 (12) 99999-0000</li>
                            <li>reservas@hotelportfolio.com.br</li>
                        </ul>
                    </div>

                    <div>
                        <p className='footer-heading'>Horários</p>
                        <ul className='footer-links'>
                            <li>Recepção: 24 horas</li>
                            <li>Check-in: a partir das 14h</li>
                            <li>Check-out: até às 12h</li>
                        </ul>
                    </div>
                </div>

                <div className='footer-bottom'>
                    <p>© {year} Hotel Portfólio. Todos os direitos reservados. Projeto de portfólio fictício.</p>
                    <div className='footer-bottom-links'>
                        <a href='#'>Política de Privacidade</a>
                        <a href='#'>Termos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
