import { FaWhatsapp } from 'react-icons/fa';
import './FloatingButtons.css';

export default function WhatsAppButton() {
    return (
        <a
            className='fab fab-whatsapp is-visible'
            href='https://wa.me/5512999990000'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Falar com o Hotel Portfólio pelo WhatsApp'
        >
            <FaWhatsapp size={26} />
        </a>
    );
}
