import { Outfit, Inter, Gloria_Hallelujah } from 'next/font/google';

// Fallback to Google Fonts for demonstration since local font files are not present in the environment yet.
// Outfit works well as a substitute for Clash Display, and Inter for General Sans.
export const clashDisplay = Outfit({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-clash',
  display: 'swap',
});

export const generalSans = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-general',
  display: 'swap',
});

export const gloriaHallelujah = Gloria_Hallelujah({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-gloria',
  display: 'swap',
});
