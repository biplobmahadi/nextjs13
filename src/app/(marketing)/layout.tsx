import Footer from '@/ui/Footer';
import Topbar from '@/ui/Topbar';

export default function RootLayoutMarketing({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Topbar />
        <p>I am root layout marketing</p>
        {children}
        <Footer />
      </body>
    </html>
  );
}
