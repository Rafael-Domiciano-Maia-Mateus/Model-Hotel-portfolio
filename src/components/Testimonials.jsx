import { useEffect, useState } from 'react';
import Reveal from './Reveal';
import { testimonials } from '../data/content';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import './Testimonials.css';

export default function Testimonials() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
        return () => clearInterval(timer);
    }, []);

    const go = (dir) => setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

    return (
        <section id='avaliacoes' className='section'>
            <div className='container'>
                <Reveal className='section-head' style={{ justifyContent: 'center', textAlign: 'center' }}>
                    <div style={{ margin: '0 auto' }}>
                        <p className='eyebrow' style={{ justifyContent: 'center' }}>
                            Avaliações
                        </p>
                        <h2 className='section-title' style={{ margin: '0 auto' }}>
                            Histórias de quem já viveu o <em>Hotel Portfólio</em>.
                        </h2>
                    </div>
                </Reveal>

                <Reveal variant='zoom' className='testimonials-track-wrap'>
                    <div className='testimonials-track' style={{ transform: `translateX(-${index * 100}%)` }} aria-live='polite'>
                        {testimonials.map((t) => (
                            <div className='testimonial-slide' key={t.name}>
                                <div className='testimonial-card'>
                                    <p className='testimonial-stars' aria-label={`${t.rating} de 5 estrelas`}>
                                        {'★'.repeat(t.rating)}
                                    </p>
                                    <p className='testimonial-text'>“{t.text}”</p>
                                    <div className='testimonial-person'>
                                        <img src={t.photo} alt={`Foto de ${t.name}`} loading='lazy' />
                                        <div style={{ textAlign: 'left' }}>
                                            <p className='testimonial-person-name'>{t.name}</p>
                                            <p className='testimonial-person-country'>{t.country}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>

                <div className='testimonials-controls'>
                    <button className='testimonials-arrow' onClick={() => go(-1)} aria-label='Avaliação anterior'>
                        <MdChevronLeft size={22} />
                    </button>
                    <div className='testimonials-dots'>
                        {testimonials.map((t, i) => (
                            <button
                                key={t.name}
                                className={`testimonials-dot ${i === index ? 'is-active' : ''}`}
                                onClick={() => setIndex(i)}
                                aria-label={`Ir para avaliação ${i + 1}`}
                            />
                        ))}
                    </div>
                    <button className='testimonials-arrow' onClick={() => go(1)} aria-label='Próxima avaliação'>
                        <MdChevronRight size={22} />
                    </button>
                </div>
            </div>
        </section>
    );
}
