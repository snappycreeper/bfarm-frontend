import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'World Map',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Marketplace',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Minerals Exchange ',
        href: 'https://game.defikingdoms.com/#/marketplace',
      },
      {
        label: 'Manage Liquidity',
        href: 'https://game.defikingdoms.com/#/add/ONE',
      },
    ],
  },
  {
    label: 'Mineral Mining',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Gem Hunting',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  {
  label: 'BabyHeroes (NFTs)',
  icon: 'NftIcon',
  href: '/nft',
  },
  {
    label: 'Bridge',
    icon: 'LayerIcon',
    href: 'https://bridge.harmony.one/erc20',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Chart',
        href: 'https://info.defikingdoms.com/',
      },
     {
        label: 'CoinGecko',
        href: '',
      },
    ],
  },
  {
    label: 'More',
    icon: 'RoadmapIcon',
    items: [
      {
        label: 'Docs',
        href: '',
      },
      {
        label: 'Github',
        href: '',
      },
      {
        label: 'Audits',
        href: '',
      },
      {
        label: 'Discord',
        href: 'https://discord.gg/dR3HH76hfc',
      },
    ],
  }, /*
  {
    label: 'Audit by Hacken',
    icon: 'AuditIcon',
    href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  },
  {
    label: 'Audit by CertiK',
    icon: 'AuditIcon',
    href: 'https://certik.org/projects/goose-finance',
  }, */
]

export default config
