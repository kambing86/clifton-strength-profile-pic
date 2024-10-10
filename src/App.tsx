import { toJpeg } from 'html-to-image';
import { useRef, useState } from 'react';
import InputModal from './components/InputModal';
import StrengthWithRank from './components/StrengthWithRank';

import './App.css';
import ImageInput from './components/ImageInput';

function App() {
  const [image, setImage] = useState<string>();
  const canvasRef = useRef<HTMLDivElement>(null);
  return (
    <>
      {image == null && <ImageInput setImage={setImage} />}
      {image && (
        <>
          <div>Click on the strength to change it</div>
          <button
            type="button"
            onClick={() => {
              setImage(undefined);
            }}
          >
            Pick another image
          </button>
          <button
            type="button"
            onClick={async () => {
              if (canvasRef.current) {
                const dataUrl = await toJpeg(canvasRef.current, {
                  quality: 0.8,
                  width: 512,
                  height: 512,
                  pixelRatio: 1,
                });
                const link = document.createElement('a');
                link.download = 'profile.jpg';
                link.href = dataUrl;
                link.click();
              }
            }}
          >
            Save
          </button>
          <div className="canvas" ref={canvasRef}>
            <div className="image">
              <img src={image} alt="profile-pic" />
            </div>
            <StrengthWithRank
              className="top left"
              color="blue"
              rank={1}
              strength="Relator"
            />
            <StrengthWithRank
              className="top right"
              color="purple"
              rank={2}
              strength="Belief"
            />
            <StrengthWithRank
              className="vertical top right"
              color="blue"
              rank={3}
              strength="Adaptability"
            />
            <StrengthWithRank
              className="vertical bottom right"
              color="orange"
              rank={4}
              strength="Command"
            />
            <StrengthWithRank
              className="bottom right"
              color="blue"
              rank={5}
              strength="Empathy"
            />
            <StrengthWithRank
              className="bottom left"
              color="blue"
              rank={6}
              strength="Individualization"
            />
            <StrengthWithRank
              className="vertical bottom left"
              color="green"
              rank={7}
              strength="Input"
            />
            <StrengthWithRank
              className="vertical top left"
              color="purple"
              rank={8}
              strength="Responsibility"
            />
          </div>
          <InputModal />
        </>
      )}
    </>
  );
}

export default App;
