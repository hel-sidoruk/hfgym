interface Props {
  children: React.ReactNode;
  sectionName?: string;
}
const Section = ({ sectionName, children }: Props) => {
  return (
    <section className={`section-offset ${sectionName || ''}`}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
