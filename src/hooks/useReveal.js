import { useEffect, useRef, useState } from 'react';

/**
 * useReveal — observa quando um elemento entra na viewport
 * para disparar animações de entrada (fade/slide/zoom),
 * tanto ao rolar para baixo quanto para cima.
 */
export function useReveal(options = {}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.18, rootMargin: '0px 0px -40px 0px', ...options },
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return [ref, isVisible];
}

export default useReveal;
