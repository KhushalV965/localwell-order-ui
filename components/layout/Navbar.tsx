import {
  Search,
  ShoppingCart,
  User,
  MoreVertical,
  Plus,
  ChevronDown,
} from "lucide-react";

type NavbarProps = {
  city?: string;
  pincode?: string;
};
type LocationProps = {
  city: string;
  pincode: string;
};
type ActionProps = {
  icon: React.ReactNode;
  label: string;
  hiddenOnMobile?: boolean;
  className?: string;
};

function Location({ city, pincode }: LocationProps) {
  return (
    <div className="cursor-pointer">
      <p className="text-[12px] leading-[16px] text-[#666]">Delivery to</p>

      <div className="flex items-center gap-2 text-[14px] leading-[21px] font-medium text-black">
        <span>
          {city}, {pincode}
        </span>
        <ChevronDown size={14} />
      </div>
    </div>
  );
}
function SearchBar() {
  return (
    <div className="relative hidden flex-1 md:block">
      <input
        type="text"
        placeholder="Search for Medicines or Health Products"
        className="w-full rounded-md border border-[#E3E3E3] py-2 pl-4 pr-10 text-sm placeholder:text-[#666] focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <Search size={18} className="absolute right-3 top-2.5 text-gray-500" />
    </div>
  );
}

function Action({ icon, label, hiddenOnMobile, className = "" }: ActionProps) {
  return (
    <div
      className={`flex cursor-pointer items-center gap-1 ${
        hiddenOnMobile ? "hidden md:flex" : "flex"
      } ${className}`}
    >
      <span className="text-[#60096A]">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function NavActions() {
  return (
    <div className="flex items-center gap-8 text-[14px] text-gray-700">
      <Action icon={<User size={18} />} label="Login" hiddenOnMobile />

      <Action icon={<ShoppingCart size={18} />} label="Cart" />

      <Action
        icon={<Plus size={18} strokeWidth={2.5} />}
        label="Become a seller"
        className="text-[#60096A] font-medium"
        hiddenOnMobile
      />

      <MoreVertical className="cursor-pointer" />
    </div>
  );
}

export default function Navbar({
  city = "Bengaluru",
  pincode = "560102",
}: NavbarProps) {
  return (
    <header className="hidden md:block w-full bg-white">
      <div className="mx-auto flex items-center justify-between gap-8 px-10 py-3">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <img src="/Logo.png" alt="MedCart" className="h-5" />

          <div className="h-8 w-px bg-gray-300" />

          <Location city={city} pincode={pincode} />
        </div>

        {/* Search */}
        <SearchBar />

        {/* Right Actions */}
        <NavActions />
      </div>
    </header>
  );
}
