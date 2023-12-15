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
        <div className="flex items-center justify-between px-4 py-2">
          <Link
            onClick={() => setShowDrawer(!showDrawer)}
            href={navItem.href}
            className="text-2xl font-semibold transition-all duration-200 hover:text-cyan-600"
          >
            {navItem.label}
          </Link>
          <div
            className="text-cyan-500 hover:text-black cursor-pointer transition-all duration-200"
            onClick={() => setExpand(!expand)}
          >
            {expand ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />}
          </div>
        </div>
      ) : (
        <div className="px-4 py-2">
          <Link
            onClick={() => setShowDrawer(!showDrawer)}
            href={navItem.href}
            className="text-2xl font-semibold transition-all duration-200 hover:text-cyan-600"
          >
            {navItem.label}
          </Link>
        </div>
      )}
      <div
        className={`space-y-2 ml-6 transform ease-in-out transition-all overflow-hidden ${
          expand
            ? "transition-opacity opacity-100 duration-500 translate-y-0"
            : "transition-transform duration-500 opacity-0 translate-y-full max-h-0"
        }`}
      >
        {navItem.dropdownItems &&
          navItem.dropdownItems.map((dropdownItem) => (
            <div key={dropdownItem.label}>
              <Link
                href={dropdownItem.href}
                className="text-lg hover:text-cyan-500 flex font-semibold transition-all duration-200 w-fit"
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
