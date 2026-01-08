type OrderItem = {
  name: string;
  subtitle: string;
  image: string;
  extraCount: number;
};

type PriceLine = {
  label: string;
  value: string;
  highlight?: boolean;
};

type OrderSummaryProps = {
  item?: OrderItem;
  prices?: PriceLine[];
  total?: string;
};

export default function OrderSummary({
  item = {
    name: "Dolo 500 Tablet",
    subtitle: "Pain killer",
    image: "/image.png",
    extraCount: 4,
  },
  prices = [
    { label: "Item total (MRP)", value: "₹4274.43" },
    { label: "Handling charges", value: "₹45" },
    { label: "Total Discount", value: "-₹50", highlight: true },
    { label: "Coupon Code", value: "-₹70", highlight: true },
    { label: "Medcart Credits", value: "-₹70", highlight: true },
    { label: "Shipping fee", value: "₹12" },
  ],
  total = "₹1,999.00",
}: OrderSummaryProps) {
  return (
    <div className="bg-white px-3 sm:px-6 py-4">
      <h3 className="mb-2 font-semibold">Order Summary</h3>

      <p className="font-normal">Items</p>

      {/* Product */}
      <div className="mt-4 flex items-start gap-6 px-2">
        <img
          src={item.image}
          alt={item.name}
          className="h-10 w-10 rounded object-cover"
        />

        <div className="flex-1">
          <p className="text-[14px] font-semibold text-black">{item.name}</p>
          <p className="text-[14px] font-semibold text-black">
            {item.subtitle}
          </p>
        </div>
      </div>

      <p className="mt-1 text-[14px] text-[#666]">
        +{item.extraCount} More items
      </p>

      <Divider />

      {/* Prices */}
      <div className="space-y-2 px-2 text-[14px] text-[#666]">
        {prices.map((row) => (
          <div
            key={row.label}
            className={`flex justify-between ${
              row.highlight ? "text-[#106536]" : ""
            }`}
          >
            <span>{row.label}</span>
            <span className={row.highlight ? "" : "text-black"}>
              {row.value}
            </span>
          </div>
        ))}

        <Divider />

        <div className="flex justify-between text-[16px] font-semibold text-black">
          <span>Amount paid</span>
          <span>{total}</span>
        </div>

        {/* Savings */}
        <div className="mt-5">
          <img src="/Frame.png" alt="Savings" className="w-full" />
        </div>

        <p className="mt-4 text-[14px] text-[#666]">
          *Prices shown on the page are indicative, inclusive of all taxes and may
          slightly vary once the final bill. See more
        </p>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="my-4 h-px w-full bg-[#E3E3E3]" />;
}
