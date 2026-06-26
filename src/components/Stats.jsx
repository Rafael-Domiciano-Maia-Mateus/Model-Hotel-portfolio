import { useCounter } from '../hooks/useCounter';
import { stats } from '../data/content';
import './Stats.css';

function StatItem({ stat }) {
    const [ref, display] = useCounter(stat.value, { decimals: stat.decimals || 0 });
    return (
        <div ref={ref}>
            <p className='stat-value'>
                {display}
                {stat.suffix}
            </p>
            <p className='stat-label'>{stat.label}</p>
        </div>
    );
}

export default function Stats() {
    return (
        <section className='section stats-section'>
            <div className='aurora-sweep' />
            <div className='container stats-grid'>
                {stats.map((stat) => (
                    <StatItem key={stat.label} stat={stat} />
                ))}
            </div>
        </section>
    );
}
