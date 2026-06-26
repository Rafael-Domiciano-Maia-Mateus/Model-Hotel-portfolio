import { useReveal } from '../hooks/useReveal';

/**
 * <Reveal> — encapsula o hook useReveal para animar filhos
 * ao entrar na viewport. variant: "up" | "left" | "right" | "zoom"
 */
export default function Reveal({ as: Tag = 'div', variant = 'up', delay = 0, className = '', children, ...rest }) {
    const [ref, visible] = useReveal();
    const variantClass = variant === 'up' ? '' : `reveal-${variant}`;

    return (
        <Tag
            ref={ref}
            className={`reveal ${variantClass} ${visible ? 'is-visible' : ''} ${className}`.trim()}
            style={{ transitionDelay: `${delay}ms` }}
            {...rest}
        >
            {children}
        </Tag>
    );
}
