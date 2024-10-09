import { useState } from 'react';
import { eventBus, EventType, useEventBus } from '../eventBus';

interface Props {
  className?: string;
  color: string;
  rank: number;
  strength: string;
}

const StrengthWithRank = ({ className, color, rank, strength }: Props) => {
  const [_color, setColor] = useState(color);
  const [_strength, setStrength] = useState(strength);
  const [zIndex, setZIndex] = useState(0);
  useEventBus(EventType.SET_STRENGTH, (data) => {
    if (data.rank === rank) {
      setColor(data.color);
      setStrength(data.strength);
      setZIndex(data.zIndex);
    }
  });
  return (
    <div
      className={`strength ${className} ${_color}`}
      onMouseUp={() => {
        eventBus.dispatch(EventType.CHANGE_STRENGTH, {
          rank,
          strength: _strength,
          zIndex,
        });
      }}
      style={{ zIndex }}
    >
      {`${rank} ${_strength}`}
    </div>
  );
};

export default StrengthWithRank;
