import Link from "next/link";

export default function Footer() {
  const routes = [
    {
      path: "/terms-conditions",
      name: "Term & Conditions",
    },
    {
      path: "/privacy-policy",
      name: "Privacy Policy",
    },
  ];
  return (
    <footer className="mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25">
      <small className="text-xs">&copy; 2050 Nattapon W. All rights reserved.</small>

      <ul className="flex gap-x-3 sm:gap-x-8"> 
        {routes.map((routes) => (
          <li key={routes.path}>
            <Link href={routes.path}>{routes.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
