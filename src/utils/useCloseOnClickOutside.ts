import { useEffect } from "react";

export function useCloseOnClickOutside(
  ref: any,
  setClosed?: (isOpen: boolean) => any,
  setPlaceholder?: (text: string) => any,
  placeholderText?: string
) {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setClosed && setClosed(false);
        setPlaceholder && placeholderText && setPlaceholder(placeholderText);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setClosed, setPlaceholder, placeholderText]);
}
