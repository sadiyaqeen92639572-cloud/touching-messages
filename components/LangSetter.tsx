'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function LangSetter() {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname.startsWith('/es')) document.documentElement.lang = 'es';
    else if (pathname.startsWith('/pt')) document.documentElement.lang = 'pt';
    else document.documentElement.lang = 'en';
  }, [pathname]);
  return null;
}
