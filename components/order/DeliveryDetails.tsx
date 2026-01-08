type DeliveryDetailsProps = {
  label?: string;
  addressTitle?: string;
  addressLines?: string[];
  deliveryRange?: string;
};

export default function DeliveryDetails({
  label = "Delivering to",
  addressTitle = "Home",
  addressLines = [
    "Singhal General store, Varun Path, Varun",
    "Nagar, Jaipur, Rajasthan, 302020, India",
  ],
  deliveryRange = "25 Dec '25 - 27 Dec '25",
}: DeliveryDetailsProps) {
  return (
    <div className="bg-white px-3 sm:px-6 py-4 mt-6">
      <h3 className="mb-2 font-semibold">{label}</h3>

      <p className="font-normal">{addressTitle}</p>

      <div className="mt-2 space-y-1 text-[14px] leading-5 text-gray-600">
        {addressLines.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>

      <p className="mt-4 text-[14px] font-semibold text-[#FF6D00]">
        Expected delivery date : {deliveryRange}
      </p>

      <div className="mt-4 h-px w-full bg-[#E3E3E3]" />
    </div>
  );
}
