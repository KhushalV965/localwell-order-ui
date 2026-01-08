export default function PriceBreakdown() {
    return (
      <div className="bg-white p-4 rounded-xl shadow border space-y-2 text-sm">
        <div className="flex justify-between">
          <span>MRP</span>
          <span>₹4,274.43</span>
        </div>
        <div className="flex justify-between">
          <span>Handling</span>
          <span>₹45</span>
        </div>
        <div className="flex justify-between text-green-600">
          <span>Discount</span>
          <span>-₹120</span>
        </div>
        <hr />
        <div className="flex justify-between font-bold">
          <span>Total Paid</span>
          <span>₹1,999</span>
        </div>
      </div>
    );
  }
  