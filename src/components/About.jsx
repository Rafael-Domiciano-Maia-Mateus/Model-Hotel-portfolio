import Reveal from './Reveal';
import './About.css';

const pillars = [
    {
        title: 'Nossa História',
        text: 'Nascemos da paixão de uma família por hospitalidade e pelo litoral que nos rodeia.',
    },
    {
        title: 'Nossa Missão',
        text: 'Transformar cada estadia em uma memória, com atenção genuína a cada detalhe.',
    },
    {
        title: 'Hospitalidade',
        text: 'Acreditamos em um serviço discreto, caloroso e verdadeiramente personalizado.',
    },
    {
        title: 'Sustentabilidade',
        text: 'Práticas conscientes que respeitam o mar, a mata e as comunidades vizinhas.',
    },
];

export default function About() {
    return (
        <section id='sobre' className='section'>
            <div className='container about-grid'>
                <Reveal variant='left' className='about-media'>
                    <div className='about-badge'>
                        <strong>25</strong>
                        <span>Anos de tradição</span>
                    </div>
                    <div className='about-media-main'>
                        <img
                            src='https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1200&auto=format&fit=crop'
                            alt='Fachada e jardins do Hotel Aurora'
                            loading='lazy'
                        />
                    </div>
                    <div className='about-media-float'>
                        <img
                            src='https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop'
                            alt='Lobby de recepção do Hotel Aurora'
                            loading='lazy'
                        />
                    </div>
                </Reveal>

                <Reveal variant='right' className='about-text'>
                    <p className='eyebrow'>Sobre o Hotel Aurora</p>
                    <h2 className='section-title'>
                        Onde o horizonte encontra a <em>sofisticação</em>.
                    </h2>
                    <p className='section-sub'>
                        Construído à beira-mar, o Hotel Aurora é mais do que um destino — é um convite para desacelerar. Unimos arquitetura
                        contemporânea, hospitalidade pessoal e uma paisagem que muda de cor a cada hora do dia.
                    </p>

                    <div className='about-pillars'>
                        {pillars.map((p, i) => (
                            <Reveal key={p.title} delay={i * 80} className='about-pillar'>
                                <span className='about-pillar-num'>0{i + 1}</span>
                                <div>
                                    <h4>{p.title}</h4>
                                    <p>{p.text}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
