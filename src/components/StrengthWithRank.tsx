import { useState } from 'react';

interface Props {
  className?: string;
  color: string;
  rank: number;
  strength: string;
}

const colorOptions = ['blue', 'purple', 'green', 'orange'];

const StrengthWithRank = ({ className, color, rank, strength }: Props) => {
  const [_color, setColor] = useState(color);
  const [_rank, setRank] = useState(rank);
  const [_strength, setStrength] = useState(strength);
  const [edit, setEdit] = useState(false);
  const [zIndex, setZIndex] = useState(0);
  return (
    <div
      className={`strength ${className} ${_color}`}
      onMouseUp={() => {
        setEdit(true);
      }}
      style={{ zIndex }}
    >
      {edit ? (
        <div>
          <div>
            <div>
              <input
                type="number"
                value={_rank}
                onChange={(event) => setRank(Number(event.target.value))}
              />
            </div>
            <div>
              <input
                value={_strength}
                onChange={(event) => setStrength(event.target.value)}
              />
            </div>
            <div>
              <select
                onChange={(event) => {
                  setColor(event.target.value);
                }}
              >
                {colorOptions.map((color) => (
                  <option key={color} selected={_color === color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
            <div>
              zIndex:{' '}
              <input
                type="number"
                value={zIndex}
                onChange={(event) => setZIndex(Number(event.target.value))}
              />
            </div>
          </div>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setEdit(false);
            }}
          >
            Done
          </button>
        </div>
      ) : (
        `${_rank} ${_strength}`
      )}
    </div>
  );
};

export default StrengthWithRank;
