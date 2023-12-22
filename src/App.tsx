import { useState } from 'react';
import ModeButton from './components/modebutton/ModeButton';
import PracticeMode from './components/practicemode/PracticeMode';

const App: React.FC = () => {
  const [mode, setMode] = useState<'welcome' | 'practice'>('welcome');

  const enterPracticeMode = () => setMode('practice');
  const goToMainMenu = () => setMode('welcome'); //TODO: Pass to practice mode to return to main menu?

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      {mode === 'welcome' ? (
        <>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-8 text-black">
            Mental Math Practice
          </h1>
          <div className="flex flex-wrap justify-around w-full max-w-2xl space-y-4 md:space-y-0">
            <ModeButton
              message="Competition Mode (Coming Soon!)"
              onClick={() => {}}
              disabled={true}
            />
            <ModeButton message="Endless Practice Mode" onClick={enterPracticeMode} />
          </div>
        </>
      ) : (
        <PracticeMode />
      )}
    </div>
  );
};

export default App;
