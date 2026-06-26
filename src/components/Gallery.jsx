import { useMemo, useState } from 'react';
import Reveal from './Reveal';
import Lightbox from './Lightbox';
import { galleryCategories, galleryImages } from '../data/content';
import './Gallery.css';

export default function Gallery() {
    const [filter, setFilter] = useState('Todos');
    const [activeIndex, setActiveIndex] = useState(null);

    const filtered = useMemo(() => (filter === 'Todos' ? galleryImages : galleryImages.filter((img) => img.category === filter)), [filter]);

    const handleNav = (dir) => {
        setActiveIndex((prev) => {
            if (prev === null) return prev;
            const len = filtered.length;
            return (prev + dir + len) % len;
        });
    };

    return (
        <section id='galeria' className='section'>
            <div className='container'>
                <div className='section-head'>
                    <Reveal>
                        <p className='eyebrow'>Galeria</p>
                        <h2 className='section-title'>
                            Um passeio visual pelo <em>Hotel Portfólio</em>.
                        </h2>
                    </Reveal>
                </div>

                <Reveal className='gallery-filters' role='tablist' aria-label='Filtrar galeria por categoria'>
                    {galleryCategories.map((cat) => (
                        <button
                            key={cat}
                            role='tab'
                            aria-selected={filter === cat}
                            className={`gallery-filter ${filter === cat ? 'is-active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </Reveal>

                <div className='gallery-grid'>
                    {filtered.map((img, i) => (
                        <Reveal
                            key={img.url}
                            variant='zoom'
                            delay={(i % 6) * 70}
                            as='button'
                            className='gallery-item cursor-grow'
                            onClick={() => setActiveIndex(i)}
                            aria-label={`Ver imagem ampliada: ${img.alt}`}
                        >
                            <img src={img.url} alt={img.alt} loading='lazy' />
                            <span className='gallery-item-overlay'>
                                <span>{img.category}</span>
                            </span>
                        </Reveal>
                    ))}
                </div>
            </div>

            <Lightbox images={filtered} index={activeIndex} onClose={() => setActiveIndex(null)} onNav={handleNav} />
        </section>
    );
}
