"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./header.module.css";

// TODO: skip nav
// BUG: nav link shifts on navigation (adding 2px for border)

export const Header = () => {
  const path = usePathname();
  const isHome = path === "/";
  const isExample = path === "/example";
  const isTest1 = path === "/example/test1";

  return (
    <header className={styles.header}>
      <span>Weather CMS</span>

      <ul>
        <li>
          <Link className={clsx({ [styles.active]: isHome })} href="/">
            Home
          </Link>
        </li>

        <li>
          <Link
            className={clsx({ [styles.active]: isExample })}
            href="/example"
          >
            example
          </Link>
        </li>

        <li>
          <Link
            className={clsx({ [styles.active]: isTest1 })}
            href="/example/test1"
          >
            example test1
          </Link>
        </li>
      </ul>
    </header>
  );
};
