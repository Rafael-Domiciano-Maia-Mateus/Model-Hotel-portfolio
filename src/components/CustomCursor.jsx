import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

/**
 * Cursor customizado, ativo apenas em telas com ponteiro fino (desktop).
 * Cresce ao passar sobre elementos interativos.
 */
export default function CustomCursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const isFinePointer = window.matchMedia('(pointer: fine)').matches;
        setEnabled(isFinePointer);
        if (!isFinePointer) return;

        const dot = dotRef.current;
        const ring = ringRef.current;
        let ringX = 0,
            ringY = 0;

        const move = (e) => {
            dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            ringX = e.clientX;
            ringY = e.clientY;
        };

        let raf;
        const animateRing = () => {
            const current = ring.style.transform.match(/-?\d+\.?\d*/g);
            const cx = current ? parseFloat(current[0]) : ringX;
            const cy = current ? parseFloat(current[1]) : ringY;
            const nx = cx + (ringX - cx) * 0.18;
            const ny = cy + (ringY - cy) * 0.18;
            ring.style.transform = `translate(${nx}px, ${ny}px)`;
            raf = requestAnimationFrame(animateRing);
        };

        const onEnter = (e) => {
            if (e.target.closest('a, button, input, textarea, .cursor-grow')) {
                ring.classList.add('is-grown');
            }
        };
        const onLeave = (e) => {
            if (e.target.closest('a, button, input, textarea, .cursor-grow')) {
                ring.classList.remove('is-grown');
            }
        };

        window.addEventListener('mousemove', move);
        document.addEventListener('mouseover', onEnter);
        document.addEventListener('mouseout', onLeave);
        raf = requestAnimationFrame(animateRing);

        return () => {
            window.removeEventListener('mousemove', move);
            document.removeEventListener('mouseover', onEnter);
            document.removeEventListener('mouseout', onLeave);
            cancelAnimationFrame(raf);
        };
    }, []);

    if (!enabled) return null;

    return (
        <>
            <div className='cursor-dot' ref={dotRef} />
            <div className='cursor-ring' ref={ringRef} />
        </>
    );
}
