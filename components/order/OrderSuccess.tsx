type OrderSuccessProps = {
  orderId?: string;
};
function SuccessIcon() {
  return (
    <div className="relative mb-10 flex justify-center">
      <img
        src="/abstract.png"
        alt=""
        className="absolute -top-10 h-40 w-40 object-contain"
      />

      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#05CD7C"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </div>
  );
}

function PrescriptionCard() {
  return (
    <div className="mx-auto mt-6 max-w-[90vw] rounded-xl bg-white p-6 text-black shadow-xl">
      <div className="flex flex-col items-center gap-4">
        <img src="/card.png" alt="Prescription" className="w-24" />

        <p className="text-[14px] font-normal text-gray-600">
          We’re now scheduling a free doctor consultation to confirm this order.
        </p>
      </div>
    </div>
  );
}

export default function OrderSuccess({
  orderId = "122334455",
}: OrderSuccessProps) {
  return (
    <section
      className="flex min-h-[calc(100vh-64px)] items-center justify-center px-6"
      style={{
        background: "linear-gradient(180deg, #037253 0%, #05CD7C 100%)",
      }}
    >
      <div className="w-full max-w-3xl space-y-4 text-center text-white">
        <SuccessIcon />

        <p className="text-[16px] opacity-90">Great Job</p>

        <h1 className="text-[20px] font-semibold md:text-3xl">
          Your Order No. <span className="font-bold">{orderId}</span> is Placed
        </h1>

        <p className="text-[14px] font-normal opacity-90 md:text-base">
          We will notify you once this order gets confirmed and send your
          updates thereafter.
        </p>

        <PrescriptionCard />
      </div>
    </section>
  );
}
