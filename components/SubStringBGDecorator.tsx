interface SubStringModifierProps {
  str: string;
  start: number;
  end: number;
  className?: string;
}

const SubStringBGDecorator: React.FC<SubStringModifierProps> = ({
  str,
  start,
  end,
  className,
}) => {
  const firstPart = str.substring(0, start);
  const foundPart = str.substring(start, end);
  const SecondPart = str.substring(end, str.length - 1);
  return (
    <div>
      <span>{firstPart}</span>
      <span className={className}>{foundPart}</span>
      <span>{SecondPart}</span>
    </div>
  );
};

export default SubStringBGDecorator;
