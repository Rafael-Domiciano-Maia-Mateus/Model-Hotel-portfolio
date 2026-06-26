import './Hero.css';

export default function Hero() {
    const scrollTo = (href) => (e) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id='home' className='hero'>
            <div className='hero-bg'>
                <img
                    src='https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2000&auto=format&fit=crop'
                    alt='Piscina infinita do Hotel Portfólio com vista para o mar ao entardecer'
                    loading='eager'
                />
            </div>
            <div className='hero-overlay' />

            <div className='container hero-content'>
                <p className='hero-kicker'>Hotel Portfólio · Resort 5 estrelas</p>
                <h1 className='hero-title'>
                    Uma experiência inesquecível de <em>conforto</em> e sofisticação.
                </h1>
                <p className='hero-sub'>
                    Entre o mar e o horizonte, o Hotel Portfólio reúne hospitalidade refinada, gastronomia autoral e um silêncio que só o luxo
                    discreto sabe oferecer.
                </p>
                <div className='hero-actions'>
                    <a href='#contato' className='btn btn-primary' onClick={scrollTo('#contato')}>
                        Reservar Agora
                    </a>
                    <a href='#sobre' className='btn btn-ghost' onClick={scrollTo('#sobre')}>
                        Conheça o Hotel
                    </a>
                </div>
            </div>

            <a href='#sobre' className='hero-scroll' onClick={scrollTo('#sobre')} aria-label='Rolar para a próxima seção'>
                Role para explorar
                <span className='hero-scroll-line' />
            </a>
        </section>
    );
}
