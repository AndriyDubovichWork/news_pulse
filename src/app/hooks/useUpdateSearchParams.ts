import Router from 'next/router';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function useUpdateSearchParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (name: string, value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

    current.set(name, value);

    const search = current.toString();
    const query = search ? `?${search}` : '';
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;

    router.push(`${pathname}${query}`);
  };
}
