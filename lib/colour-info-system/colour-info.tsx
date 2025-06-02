interface ColourInfoProps {
  colours: string[];
  selectedColour: string;
  onSelect: (colour: string) => void;
}

const ColourInfo = (props: ColourInfoProps) => {
  const { colours } = props;

  return (
    <div>
      <h2>Colour Information</h2>
      <ul className="flex gap-4">
        {colours.map((colour) => {
          let className = "p-2 border rounded hover:bg-gray-200";
          if (colour === props.selectedColour) {
            className += " bg-blue-100 border-blue-500";
          }

          return (
          <li key={colour}>
            <button onClick={() => props.onSelect(colour)} className={className}>
            {colour}
            </button>
          </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ColourInfo;
