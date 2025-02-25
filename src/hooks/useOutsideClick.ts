import { useEffect, useRef } from "react";


const useOutsideClick = (callback:() => void) => {

  const refEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (refEl.current && !refEl.current.contains(event.target as Node)) {
        callback()
      }
    };

    document.addEventListener('mouseup', closeOnOutsideClick);

    return () => document.removeEventListener('mouseup', closeOnOutsideClick);
  }, [callback]);

  return refEl
}

export default useOutsideClick