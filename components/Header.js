import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 max-w-xl m-auto">
      <h1 className="font-bold">
        <Link href="/">
          <a className="transition hover:opacity-80">
            next<span className="font-light">xkcd</span>
          </a>
        </Link>
      </h1>

      <nav>
        <ul className="flex flex-row gap-2 text-xs">
          
          <li>
            <Link href="/">
              <a className="text-sm font-semibold">Home</a>
            </Link>
          </li>
          
          <li>
            <Link href="/search">
              <a className="text-sm font-semibold">Search</a>
            </Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}
