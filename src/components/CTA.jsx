import Reveal from './Reveal';
import './CTA.css';

export default function CTA() {
    const scrollTo = (e) => {
        e.preventDefault();
        document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className='section' style={{ paddingTop: 0 }}>
            <div className='container'>
                <Reveal variant='zoom' className='cta-banner'>
                    <div className='cta-banner-bg'>
                        <img
                            src='https://images.unsplash.com/photo-1601565415267-724dbc556b75?q=80&w=1600&auto=format&fit=crop'
                            alt='Suíte master do Hotel Portfólio ao entardecer'
                            loading='lazy'
                        />
                    </div>
                    <div className='cta-banner-overlay' />
                    <h2>Sua próxima lembrança favorita começa no Hotel Portfólio.</h2>
                    <p>Tarifas exclusivas para reservas antecipadas e benefícios especiais para estadias de mais de três noites.</p>
                    <a href='#contato' className='btn btn-primary' onClick={scrollTo}>
                        Reserve sua Experiência
                    </a>
                </Reveal>
            </div>
        </section>
    );
}
