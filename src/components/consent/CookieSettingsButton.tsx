"use client";

import { buttonClasses } from "../ui/Button";
import { useConsent } from "./ConsentProvider";

const CookieSettingsButton = () => {
  const { openSettings, consent } = useConsent();
  return (
    <div className="flex flex-wrap items-center gap-4">
      <button type="button" onClick={openSettings} className={buttonClasses({ size: "lg" })}>
        Ändra cookieinställningar
      </button>
      <span className="text-sm text-muted">
        Ditt val:{" "}
        {consent === "granted" ? "godkänt" : consent === "denied" ? "endast nödvändiga" : "inget val gjort"}
      </span>
    </div>
  );
};

export default CookieSettingsButton;
