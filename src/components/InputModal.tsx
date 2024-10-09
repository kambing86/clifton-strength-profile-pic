import { useState } from 'react';
import ReactModal from 'react-modal';
import { strengthOptions } from '../constants';
import { eventBus, EventType, useEventBus } from '../eventBus';

const InputModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [_rank, setRank] = useState(0);
  const [_strength, setStrength] = useState('');
  const [_color, setColor] = useState('');
  const [_zIndex, setZIndex] = useState(0);
  useEventBus(EventType.CHANGE_STRENGTH, ({ rank, strength, zIndex }) => {
    setRank(rank);
    setStrength(strength);
    const color = strengthOptions.find((o) => o.strength === strength)?.color;
    if (color != null) {
      setColor(color);
    }
    setZIndex(zIndex);
    setModalOpen(true);
  });
  return (
    <ReactModal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      style={{
        overlay: { background: 'rgba(0, 0, 0, 0.5)' },
      }}
      className="modal-content"
    >
      <div>Rank {_rank}</div>
      <div>
        <select
          onChange={(event) => {
            const strength = event.target.value;
            setStrength(strength);
            const color = strengthOptions.find(
              (o) => o.strength === strength,
            )?.color;
            if (color != null) {
              setColor(color);
            }
          }}
        >
          {strengthOptions.map(({ strength }) => (
            <option
              key={strength}
              value={strength}
              selected={_strength === strength}
            >
              {strength}
            </option>
          ))}
        </select>
      </div>
      <div>
        zIndex:{' '}
        <input
          type="number"
          value={_zIndex}
          onChange={(event) => setZIndex(Number(event.target.value))}
        />
      </div>
      <button
        type="button"
        onClick={() => {
          eventBus.dispatch(EventType.SET_STRENGTH, {
            rank: _rank,
            strength: _strength,
            zIndex: _zIndex,
            color: _color,
          });
          setModalOpen(false);
        }}
      >
        Pick
      </button>
    </ReactModal>
  );
};

export default InputModal;
