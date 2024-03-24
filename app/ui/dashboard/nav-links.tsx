import {
  UserGroupIcon,
  HomeIcon,
  ExclamationCircleIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
// import { CalendarIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Начало', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Аварии',
    href: '/dashboard/incidents',
    icon: ExclamationCircleIcon,
  },
  { name: 'Клиенти', href: '/dashboard/clients', icon: UserGroupIcon },
  { name: 'Календар', href: '/dashboard/calendar', icon: CalendarIcon },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
