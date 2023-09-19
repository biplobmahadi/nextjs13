import Topbar from '@/ui/Topbar';

export default function RootLayoutMarketing({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <p>I am root layout Admin</p>
      {children}
    </>
  );
}
