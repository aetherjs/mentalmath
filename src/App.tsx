import { useState } from 'react';
import ModeButton from './components/modebutton/ModeButton';
import PracticeMode from './components/practicemode/PracticeMode';
import { ClockIcon } from '@heroicons/react/24/solid';
import { ArrowTrendingUpIcon } from '@heroicons/react/24/solid';

const App: React.FC = () => {
  const [mode, setMode] = useState<'welcome' | 'practice'>('welcome');

  const enterPracticeMode = () => setMode('practice');
  //const goToMainMenu = () => setMode('welcome'); //TODO: Pass to practice mode to return to main menu?

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      {mode === 'welcome' ? (
        <>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-8 text-black">
            Mental Math Practice
          </h1>
          <div className="flex flex-wrap justify-around w-full max-w-2xl gap-4 md:space-y-0">
            <ModeButton
              message="Competition Mode (Coming Soon!)"
              onClick={() => {}}
              disabled={true}
              icon={<ClockIcon className="size-20 lg:size-44 text-black"></ClockIcon>}
            />
            <ModeButton
              message="Endless Practice Mode"
              onClick={enterPracticeMode}
              icon={
                <ArrowTrendingUpIcon className="size-20 lg:size-44 text-black"></ArrowTrendingUpIcon>
              }
            />
          </div>
        </>
      ) : (
        <PracticeMode />
      )}
    </div>
  );
};

export default App;
