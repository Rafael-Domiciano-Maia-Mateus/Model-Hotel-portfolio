import Reveal from './Reveal';
import { rooms } from '../data/content';
import { MdArrowForward } from 'react-icons/md';
import './Rooms.css';

const formatPrice = (n) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 });

export default function Rooms() {
    return (
        <section id='quartos' className='section'>
            <div className='container'>
                <div className='section-head'>
                    <Reveal>
                        <p className='eyebrow'>Acomodações</p>
                        <h2 className='section-title'>
                            Suítes desenhadas para <em>cada tipo</em> de viagem.
                        </h2>
                    </Reveal>
                    <Reveal delay={120}>
                        <p className='section-sub'>
                            Da estadia executiva à experiência mais exclusiva do resort, cada espaço foi criado com materiais nobres e vista
                            privilegiada.
                        </p>
                    </Reveal>
                </div>

                <div className='rooms-grid'>
                    {rooms.map((room, i) => (
                        <Reveal key={room.name} variant='up' delay={(i % 4) * 90} as='article' className='room-card cursor-grow'>
                            <div className='room-media'>
                                <img src={room.image} alt={`Foto da ${room.name} no Hotel Portfólio`} loading='lazy' />
                                <span className='room-price-tag'>
                                    <span>{formatPrice(room.price)}</span> / noite
                                </span>
                            </div>
                            <div className='room-body'>
                                <h3>{room.name}</h3>
                                <p>{room.desc}</p>
                                <div className='room-meta'>
                                    <span>{room.capacity}</span>
                                    <span>{room.size}</span>
                                </div>
                                <ul className='room-amenities'>
                                    {room.amenitiesList.map((a) => (
                                        <li key={a}>{a}</li>
                                    ))}
                                </ul>
                                <a href='#contato' className='btn btn-ghost room-cta'>
                                    Reservar suíte <MdArrowForward />
                                </a>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
