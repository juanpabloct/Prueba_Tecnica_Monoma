const Subtitle = ({ color, title }: { color: string; title: string }) => {
  return <h2 className={`font-bold ${color}`}>{title}</h2>;
};

export default Subtitle;
