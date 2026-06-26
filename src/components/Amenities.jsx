import Reveal from './Reveal';
import AmenityIcon from './AmenityIcon';
import { amenities } from '../data/content';
import './Amenities.css';

export default function Amenities() {
    return (
        <section className='section amenities-section'>
            <div className='aurora-sweep' />
            <div className='container' style={{ position: 'relative', zIndex: 1 }}>
                <div className='section-head'>
                    <Reveal>
                        <p className='eyebrow'>Comodidades</p>
                        <h2 className='section-title'>
                            Tudo o que define uma <em>estadia perfeita</em>.
                        </h2>
                    </Reveal>
                </div>

                <div className='amenities-grid'>
                    {amenities.map((item, i) => (
                        <Reveal key={item.title} variant='zoom' delay={(i % 4) * 90} className='amenity-card cursor-grow'>
                            <div className='amenity-icon'>
                                <AmenityIcon name={item.icon} />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
