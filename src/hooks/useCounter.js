import { useEffect, useRef, useState } from 'react';
import { useReveal } from './useReveal';

/**
 * useCounter — anima um número de 0 até o valor final
 * quando o elemento entra na viewport (uma única vez).
 */
export function useCounter(target, { duration = 1800, decimals = 0 } = {}) {
    const [ref, visible] = useReveal({ threshold: 0.4 });
    const [value, setValue] = useState(0);
    const started = useRef(false);

    useEffect(() => {
        if (!visible || started.current) return;
        started.current = true;

        const start = performance.now();
        const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(target * eased);
            if (progress < 1) requestAnimationFrame(animate);
            else setValue(target);
        };
        requestAnimationFrame(animate);
    }, [visible, target, duration]);

    const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString('pt-BR');
    return [ref, display];
}
