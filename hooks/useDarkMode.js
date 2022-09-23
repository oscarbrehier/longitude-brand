import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useLocalStorage = () => {

    const router = useRouter();
    const [storedValue, setStoredValue] = useState(() => {

        return router.pathname != '/' ? false : true;

    });

    const setValue = (value) => {

        return true;

    }

    return [storedValue, setValue];

};

const useDarkMode = () => {
  const [enabled, setEnabled] = useLocalStorage();
  const isEnabled = typeof enabledState === 'undefined' && enabled;

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;

    isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
  }, [enabled, isEnabled]);

  return [enabled, setEnabled];
};

export default useDarkMode;