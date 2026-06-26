import { useState } from 'react';
import Reveal from './Reveal';
import { MdPlayArrow } from 'react-icons/md';
import './VideoSection.css';

export default function VideoSection() {
    const [playing, setPlaying] = useState(false);

    return (
        <section className='section video-section'>
            <div className='container'>
                <Reveal className='section-head' style={{ marginBottom: 44 }}>
                    <div>
                        <p className='eyebrow'>Conheça o resort</p>
                        <h2 className='section-title'>
                            Sinta o Hotel Portfólio antes de <em>chegar</em>.
                        </h2>
                    </div>
                </Reveal>

                <Reveal variant='zoom'>
                    <div
                        className='video-frame cursor-grow'
                        onClick={() => setPlaying(true)}
                        role='button'
                        tabIndex={0}
                        aria-label='Reproduzir vídeo institucional do Hotel Portfólio'
                        onKeyDown={(e) => e.key === 'Enter' && setPlaying(true)}
                    >
                        {!playing ? (
                            <>
                                <img
                                    src='https://images.unsplash.com/photo-1582610116397-edb318620f90?q=80&w=1600&auto=format&fit=crop'
                                    alt='Vista aérea do Hotel Portfólio e sua piscina infinita'
                                    loading='lazy'
                                />
                                <div className='video-frame-overlay'>
                                    <span className='video-play'>
                                        <MdPlayArrow size={36} />
                                    </span>
                                </div>
                            </>
                        ) : (
                            <iframe
                                className='video-embed'
                                src='https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1'
                                title='Vídeo institucional do Hotel Portfólio (placeholder — substitua pela URL real)'
                                allow='autoplay; encrypted-media; fullscreen'
                                allowFullScreen
                            />
                        )}
                    </div>
                </Reveal>
                <p className='video-caption'>Um minuto para sentir o que dias inteiros de hospitalidade significam.</p>
            </div>
        </section>
    );
}
