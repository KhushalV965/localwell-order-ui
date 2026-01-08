type PaymentInfoProps = {
  method?: string;
  source?: string;
  transactionId?: string;
  date?: string;
};

export default function PaymentInfo({
  method = "UPI",
  source = "Slice cc (XX9395)",
  transactionId = "123456789012345",
  date = "29 Dec ’25 8:10 PM",
}: PaymentInfoProps) {
  return (
    <div className="bg-white px-3 sm:px-6 py-4 my-10">
      <p className="mb-1 text-[16px] font-semibold">Paid via {method}</p>

      <p className="mt-2 text-[16px] font-normal">
        From : {source}
      </p>

      <p className="mt-2 text-[14px] text-[#666]">
        Txn ID : {transactionId}
      </p>

      <p className="mt-2 text-[14px] text-[#666]">
        Date : {date}
      </p>
    </div>
  );
}
