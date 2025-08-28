// src/hooks/useIsMobile.ts

'use client'; // Menandakan ini adalah Client Component

import { useState, useEffect } from 'react';

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Cek hanya dilakukan di sisi client
    const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
    const mobile = Boolean(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
    setIsMobile(mobile || (typeof window !== 'undefined' && navigator.maxTouchPoints > 0));
  }, []);

  return isMobile;
};
