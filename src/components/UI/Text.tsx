import { useInView } from 'react-intersection-observer';

const Text = ({ variant, children }: { variant?: string; children: React.ReactNode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  return (
    <p ref={ref} className={`text ${variant || ''} ${inView ? 'opacity-1' : 'opacity-0'}`}>
      {children}
    </p>
  );
};

export default Text;
