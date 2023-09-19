import Topbar from '@/ui/Topbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Home layout</h1>
      {children}
    </>
  );
}
