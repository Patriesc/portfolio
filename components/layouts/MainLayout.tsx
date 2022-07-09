import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui/Navbar';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const MainLayout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <nav className="navbar">
        <Navbar />
      </nav>
      <main style={{ margin: '100px auto', maxWidth: '1600px' }}>
        {children}
      </main>
    </>
  );
};
