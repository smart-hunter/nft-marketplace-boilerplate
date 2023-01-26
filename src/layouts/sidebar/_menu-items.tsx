import routes from '@/config/routes';
import { PlusCircle } from '@/components/icons/plus-circle';

export const menuItems = [
  {
    name: 'MINT',
    icon: <PlusCircle />,
    href: routes.marketplace,
  },
  {
    name: 'MARKETPLACE',
    icon: <PlusCircle />,
    href: routes.marketplace,
  },
  {
    name: 'ABOUT',
    icon: null,
    href: routes.marketplace,
  },
  {
    name: 'ROADMAP',
    icon: <PlusCircle />,
    href: routes.marketplace,
  },
  {
    name: 'TEAM',
    icon: <PlusCircle />,
    href: routes.marketplace,
  },
  {
    name: 'FAQ',
    icon: <PlusCircle />,
    href: routes.marketplace,
  },
  // {
  //   name: 'Vote',
  //   icon: <VoteIcon />,
  //   href: routes.vote,
  //   dropdownItems: [
  //     {
  //       name: 'Explore',
  //       href: routes.vote,
  //     },
  //     {
  //       name: 'Vote with pools',
  //       href: routes.proposals,
  //     },
  //     {
  //       name: 'Create proposal',
  //       href: routes.createProposal,
  //     },
  //   ],
  // },
];
