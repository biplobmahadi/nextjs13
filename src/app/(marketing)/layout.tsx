import Footer from '@/ui/Footer';
import Topbar from '@/ui/Topbar';

export default function RootLayoutMarketing({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <p>I am Marketing layout</p>
      {children}
      <Footer />
    </>
  );
}
