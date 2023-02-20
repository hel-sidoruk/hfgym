const Section = ({ sectionName, children }) => {
  return (
    <section className={`section-offset ${sectionName || ''}`}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
