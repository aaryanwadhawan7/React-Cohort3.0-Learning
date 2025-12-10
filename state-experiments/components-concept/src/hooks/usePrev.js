// useRef -> hooks that persists/store a value but it doesn't change during re-rendering
import { useRef, useEffect } from 'react';

export function usePrev (value) {
    const ref = useRef (); // yaha pr naaya value aaya -> (1)

    useEffect (() => {
        ref.current = value; // curr ref change hoke naaya wala a jayega -> (3)
    }, [value])
    return ref.current; // yaha pr purana wala return hoyega -> (2)
}
// it returns first and effects get called later.
// Phle return hoga and baad me useEffect logic run krega