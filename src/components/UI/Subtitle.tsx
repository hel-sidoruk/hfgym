import { useInView } from 'react-intersection-observer';

interface Props {
  children: React.ReactNode;
  variant?: string;
}

const Subtitle = ({ children, variant }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  return (
    <h3 ref={ref} className={`subtitle ${variant || ''} ${inView ? 'opacity-1' : 'opacity-0'}`}>
      {children}
    </h3>
  );
};

export default Subtitle;
