import { Mulish } from '@next/font/google';

const mulish = Mulish({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main className={mulish.className}>
      <h1>Hello World!</h1>
      <p>NFT marketplace</p>
    </main>
  );
}
