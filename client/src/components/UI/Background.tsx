const Background = ({ page }: { page: string }) => {
  return <div aria-hidden="true" className={`background ${page}`}></div>;
};

export default Background;
