import { useInView } from '../../hooks/useInView';

export default function SectionCard({ children, className = '', delay = 0 }) {
  const [ref, inView] = useInView({ threshold: 0.08 });
  return (
    <div
      ref={ref}
      className={`glass-card rounded-xl p-7 transition-all duration-500 ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
