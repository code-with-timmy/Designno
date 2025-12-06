import { useState } from "react";
import { useLocation } from "react-router-dom";

export function useCurrentPath() {
  const location = useLocation();
  const path = location.pathname.split("/").filter(Boolean).pop();
  const [currentSelectedOption] = useState(path);

  return { currentSelectedOption };
}
