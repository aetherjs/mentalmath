type AppProps = {
  message: string;
  onClick: () => void; // Function type for onClick event
  disabled?: boolean; // Optional boolean for disabled state
};

export default function ModeButton({ message, onClick, disabled = false }: AppProps) {
  return (
    <div>
      <button
        className="flex items-center justify-center size-32 lg:size-56 p-2 border-4 border-black text-black font-bold rounded-lg focus:outline-none disabled:opacity-50"
        onClick={onClick}
        disabled={disabled}>
        {message}
      </button>
    </div>
  );
}
