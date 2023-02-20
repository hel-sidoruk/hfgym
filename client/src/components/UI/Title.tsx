import { useInView } from 'react-intersection-observer';

const Title = ({ children, variant }: { children: string; variant?: string }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  return (
    <h2 ref={ref} className={`title ${variant || ''} ${inView ? 'opacity-1' : 'opacity-0'}`}>
      {children}
    </h2>
  );
};

export default Title;
