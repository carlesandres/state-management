interface ColourInfoProps {
  colours: string[];
  onSelect: (colour: string) => void;
}

const ColourInfo = (props: ColourInfoProps) => {
  const { colours } = props;

  return (
    <div>
      <h2>Colour Information</h2>
      <ul className="flex gap-4">
        {colours.map((colour) => (
          <li key={colour}>
            <button onClick={() => props.onSelect(colour)} className="p-2 border rounded hover:bg-gray-200">
            {colour}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColourInfo;
