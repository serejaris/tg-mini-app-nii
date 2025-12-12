import { useEffect, useState } from 'react';

/**
 * @return True, if component was mounted.
 */
export function useDidMount(): boolean {
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    // This is intentional: we need to trigger a re-render after mount
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDidMount(true);
  }, []);

  return didMount;
}