import Topbar from '@/ui/Topbar';
import 'bootstrap/dist/css/bootstrap.css';

export default function RootLayoutMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Topbar />
        <p>I am root layout</p>
        {children}
      </body>
    </html>
  );
}
