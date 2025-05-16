interface ColourInfoProps {
  colours: string[];
}

const ColourInfo = (props: ColourInfoProps) => {
  const { colours } = props;

  return (
    <div>
      <h2>Colour Information</h2>
      <ul>
        {colours.map((colour, index) => (
          <li key={index} style={{ color: colour }}>
            {colour}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColourInfo;
