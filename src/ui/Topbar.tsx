import { uiPaths } from '@/paths/uiPaths';
import Link from 'next/link';

export default function Topbar() {
  return (
    <span>
      <Link href={uiPaths.home}>Home</Link>
      <Link href={uiPaths.about}>About</Link>
      <Link href={uiPaths.users}>Users</Link>
      <Link href={uiPaths.todos}>Todos</Link>
      <Link href={uiPaths.contact}>Contact</Link>
    </span>
  );
}
