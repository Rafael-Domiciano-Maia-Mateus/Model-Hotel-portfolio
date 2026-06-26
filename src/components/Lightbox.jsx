import { useEffect } from 'react';
import { MdClose, MdChevronLeft, MdChevronRight } from 'react-icons/md';

export default function Lightbox({ images, index, onClose, onNav }) {
    const open = index !== null;
    const current = open ? images[index] : null;

    useEffect(() => {
        if (!open) return;
        const onKey = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNav(1);
            if (e.key === 'ArrowLeft') onNav(-1);
        };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [open, onClose, onNav]);

    return (
        <div
            className={`lightbox-backdrop ${open ? 'is-open' : ''}`}
            onClick={onClose}
            role='dialog'
            aria-modal='true'
            aria-label='Galeria de imagens em destaque'
        >
            {current && (
                <figure className='lightbox-figure' onClick={(e) => e.stopPropagation()}>
                    <button className='lightbox-close' onClick={onClose} aria-label='Fechar galeria'>
                        <MdClose size={22} />
                    </button>
                    <button className='lightbox-nav prev' onClick={() => onNav(-1)} aria-label='Imagem anterior'>
                        <MdChevronLeft size={26} />
                    </button>
                    <img src={current.url} alt={current.alt} />
                    <button className='lightbox-nav next' onClick={() => onNav(1)} aria-label='Próxima imagem'>
                        <MdChevronRight size={26} />
                    </button>
                    <figcaption className='lightbox-caption'>{current.alt}</figcaption>
                </figure>
            )}
        </div>
    );
}
