import Navbar from "@/components/layout/Navbar";
import OrderSuccess from "@/components/order/OrderSuccess";
import DeliveryDetails from "@/components/order/DeliveryDetails";
import PaymentInfo from "@/components/order/PaymentInfo";
import OrderActions from "@/components/order/OrderActions";
import OrderSummary from "@/components/order/OrderSummary";

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="mx-auto flex flex-col md:grid md:grid-cols-12">
        <section className="md:col-span-8 space-y-6">
          <OrderSuccess />
        </section>

        <aside className="md:col-span-4 flex flex-col md:h-[calc(100vh-64px)] md:overflow-hidden">
          <div className="flex-1 md:overflow-y-auto space-y-4 px-2">
            <DeliveryDetails />
            <OrderSummary />
            <PaymentInfo />
          </div>

          <OrderActions />
        </aside>
      </main>
    </>
  );
}
