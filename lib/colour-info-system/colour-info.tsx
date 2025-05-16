interface ColourInfoProps {
  colours: string[];
}

const ColourInfo = (props: ColourInfoProps) => {
  const { colours } = props;

  return (
    <div>
      <h2>Colour Information</h2>
      <ul className="flex gap-4">
        {colours.map((colour) => (
          <li key={colour}>
            <button>
            {colour}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColourInfo;
