import { useInView } from '../../hooks/useInView';

export default function SectionCard({ children, className = '', delay = 0 }) {
  const [ref, inView] = useInView({ threshold: 0.08 });
  return (
    <div ref={ref} className={`p-7 transition-all duration-500 ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}ms`,
        border: '1px solid rgba(0,180,255,0.1)',
        background: 'rgba(4,16,32,0.8)',
      }}>
      {children}
    </div>
  );
}