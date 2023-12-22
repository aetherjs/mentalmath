type AppProps = {
  message: string;
  onClick: () => void; // Function type for onClick event
  disabled?: boolean; // Optional boolean for disabled state
  icon: JSX.Element;
};

export default function ModeButton({ message, onClick, disabled = false, icon }: AppProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <button
        className="size-32 lg:size-56 p-2 border-2 lg:border-4 border-black text-black font-bold rounded-lg focus:outline-none disabled:opacity-50"
        onClick={onClick}
        disabled={disabled}>
        <div className="mb-2 flex items-center justify-center">{icon}</div> {/* Icon container */}
      </button>
      <div className="lg:text-lg text-center mt-2"> {message}</div>
    </div>
  );
}
