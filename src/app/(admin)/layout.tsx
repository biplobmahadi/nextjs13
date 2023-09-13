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
        <p>I am root layout Admin</p>
        {children}
      </body>
    </html>
  );
}
