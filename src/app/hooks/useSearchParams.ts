import Router from 'next/router';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function useSearchParamsHook() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setParam = (name: string, value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

    current.set(name, value);

    const search = current.toString();
    const query = search ? `?${search}` : '';
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;

    router.push(`${pathname}${query}`);
  };
  const getParam = (name: string) => {
    const param = searchParams.get(name);
    return param;
  };
  return { setParam, getParam };
}
