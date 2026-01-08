type OrderActionsProps = {
  onExplore?: () => void;
  onTrack?: () => void;
};

export default function OrderActions({
  onExplore,
  onTrack,
}: OrderActionsProps) {
  return (
    <div className="sticky bottom-0 bg-white px-3 py-4 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] sm:py-6">
      <div className="flex gap-3 text-[14px] font-semibold">
        <button
          type="button"
          onClick={onExplore}
          className="w-1/2 rounded-lg border border-[#60096A] py-3 text-[#60096A] hover:bg-purple-50 transition"
        >
          Explore more
        </button>

        <button
          type="button"
          onClick={onTrack}
          className="w-1/2 rounded-lg bg-gradient-to-r from-[#6E0B78] to-[#B311C5] py-3 text-white hover:from-[#6A16B5] hover:to-[#4C0FB0] transition"
        >
          Track Order
        </button>
      </div>
    </div>
  );
}
