import { useEffect, useState } from 'react';

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            const max = scrollHeight - clientHeight;
            setProgress(max > 0 ? (scrollTop / max) * 100 : 0);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                height: '3px',
                width: `${progress}%`,
                background: 'linear-gradient(90deg, var(--gold-500), var(--gold-300))',
                zIndex: 1100,
                transition: 'width 0.1s linear',
            }}
            role='presentation'
        />
    );
}
