import { useInView } from 'react-intersection-observer';

const Subtitle = ({ children, variant }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  return (
    <h3
      ref={ref}
      className={`subtitle ${variant || ''} ${
        inView ? 'opacity-1' : 'opacity-0'
      }`}
    >
      {children}
    </h3>
  );
};

export default Subtitle;
