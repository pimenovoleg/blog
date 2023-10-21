import Link from 'next/link';

import { Logo } from '@/components/Logo';
import { ThemeToggle } from '@/app/theme-toggle';

export function Header() {
    return (
        <header className="flex mb-5 md:mb-10 items-center">
            <Logo />
            <nav className="font-mono text-xs grow justify-end items-center flex gap-1 md:gap-3">
                <ThemeToggle />
                <Link
                    href="/about"
                    className="inline-flex hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-[background-color]"
                >
                    About
                </Link>
            </nav>
        </header>
    );
}
