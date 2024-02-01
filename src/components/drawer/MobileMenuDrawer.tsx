import { NavItem, navigation } from "@/data/navigation";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import Drawer from "./Drawer";

interface Props {
  showDrawer: boolean;
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MobileMenuItemProps {
  navItem: NavItem;
  showDrawer: boolean;
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenuItem = ({ navItem, showDrawer, setShowDrawer }: MobileMenuItemProps) => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="border-b py-2">
      {navItem.dropdownItems ? (
        <div className="flex items-center justify-between">
          <Link
            onClick={() => setShowDrawer(!showDrawer)}
            href={navItem.href}
            className="block w-full px-4 py-2 text-2xl font-semibold transition-all duration-200 hover:text-cyan-600"
          >
            {navItem.label}
          </Link>
          <div
            className="cursor-pointer px-4 py-2 transition-all duration-200 hover:text-cyan-500"
            onClick={() => setExpand(!expand)}
          >
            {expand ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />}
          </div>
        </div>
      ) : (
        <div>
          <Link
            onClick={() => setShowDrawer(!showDrawer)}
            href={navItem.href}
            className="block px-4 py-2 text-2xl font-semibold transition-all duration-200 hover:text-cyan-600"
          >
            {navItem.label}
          </Link>
        </div>
      )}
      <div
        className={`transform divide-y divide-gray-100 overflow-hidden transition-all duration-500 ease-in-out ${
          expand ? "h-auto max-h-[400px]" : "max-h-0"
        }`}
      >
        {navItem.dropdownItems &&
          navItem.dropdownItems.map((dropdownItem) => (
            <div key={dropdownItem.label}>
              <Link
                href={dropdownItem.href}
                className="flex w-full px-8 py-2 text-lg font-semibold transition-all duration-200 hover:text-cyan-500"
              >
                {dropdownItem.label}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

const MobileMenuDrawer = ({ showDrawer, setShowDrawer }: Props) => {
  return (
    <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer}>
      <nav className="border-t">
        {navigation.map((navItem) => (
          <MobileMenuItem
            showDrawer={showDrawer}
            setShowDrawer={setShowDrawer}
            key={navItem.label}
            navItem={navItem}
          />
        ))}
      </nav>
    </Drawer>
  );
};

export default MobileMenuDrawer;
