import type { ChangeEvent } from 'react';
import { useCallback, useState } from 'react';

interface Props {
  setImage: (value: string) => void;
}

const ImageInput = ({ setImage }: Props) => {
  const [type, setType] = useState('');
  const radioChecked = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setType(event.target.value);
    }
  }, []);
  return (
    <div style={{ minWidth: 480 }}>
      <div>Get Image from </div>
      <input
        type="radio"
        name="type"
        id="url"
        value="url"
        onChange={radioChecked}
      />
      <label htmlFor="url">URL</label>
      <input
        type="radio"
        name="type"
        id="file"
        value="file"
        onChange={radioChecked}
      />
      <label htmlFor="file">File</label>
      <div>
        {type === 'url' && (
          <>
            <div>
              <input type="text" id="url-string" style={{ width: '100%' }} />
            </div>
            <button
              type="button"
              onClick={() => {
                const inputElem = document.getElementById(
                  'url-string',
                ) as HTMLInputElement;
                setImage(inputElem.value);
              }}
            >
              Confirm
            </button>
          </>
        )}
        {type === 'file' && (
          <input
            type="file"
            accept="image/*"
            style={{ border: '1px solid white' }}
            onChange={async (event) => {
              const file = event.target.files?.item(0);
              if (file != null) {
                const arrayBuffer = await file.arrayBuffer();
                const blob = new Blob([arrayBuffer]);
                const imageUrl = URL.createObjectURL(blob);
                setImage(imageUrl);
              }
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ImageInput;
