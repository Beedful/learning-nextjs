'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Page() {
    const pathName = usePathname();
    return <p>Dashboard</p>
}