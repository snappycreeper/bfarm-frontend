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
        label: 'Gems Exchange ',
        href: 'https://game.defikingdoms.com/#/marketplace?outputCurrency=0x7BF379FcB16b4a6F648371cD72D9D443EF24168F',
      },
      {
        label: 'Manage Liquidity',
        href: 'https://game.defikingdoms.com/#/add/ONE',
      },
    ],
  },

  {
    label: 'Earn',
    icon: 'FarmIcon',
    items: [
      {
        label: 'The Valleys',
        href: '/farms',
      },
     {
        label: 'Gem Hunting',
        href: '/pools',
      },
      {
        label: 'VFAT',
        href: 'https://vfat.tools/harmony/thevalleys/',
      },
    ],
  },

/*
  {
    label: 'The Valleys',
    icon: 'FarmIcon',
    href: '/farms',
  },
    /* {
    label: 'Bridged Pools',
    icon: 'LayerIcon',
    items: [
      {
        label: 'Pools',
        href: '/BridgeFarms',
      },
     {
        label: 'Bridge Assets',
        href: 'https://bridge.harmony.one/',
      },
    ],
  },     
  {
    label: 'Gem Hunting',
    icon: 'PoolIcon',
    href: '/pools',
  },
*/
  {
    label: 'Casino',
    icon: 'TicketIcon',
    items: [
      {
        label: 'BabyJewel Wheel',
        href: '/wheel',
      },
      {
        label: 'Jewel Wheel (Disabled)',
        href: '',
      },
     {
        label: 'Lottery (Soon)',
        href: '/lottery',
      },
    ],
  },
  {
    label: 'Bridge Assets',
    icon: 'LayerIcon',
    items: [
      {
        label: 'Horizon Bridge',
        href: 'https://bridge.harmony.one/',
      },
     {
        label: 'Terra Bridge',
        href: 'https://bridge.terra.money/',
      },
    ],
  },
  {
    label: 'BabyHeroes (NFTs)',
    icon: 'NftIcon',
    href: '/nft',
  },

  /* {
  label: 'Garden',
  icon: 'PoolIcon',
  href: '/garden',
  }, */
/* {
  label: 'Lottery',
  icon: 'TicketIcon',
  href: '/lottery',
}, */


{
    label: 'Vaults',
    icon: 'BondsIcon',
    href: '/vaults',
  },


  /* {
    label: 'Tavern (Lottery)',
    icon: 'TicketIcon',
    href: '/lottery',
  }, */
  {
      label: 'Request a Farm',
      icon: 'HandshakeIcon',
      href: 'https://forms.gle/5p6W2y9xD2ga1SjX7',
  },
  {
    label: 'Charts',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Chart',
        href: 'https://info.defikingdoms.com/token/0x7bf379fcb16b4a6f648371cd72d9d443ef24168f',
      },
     {
        label: 'CoinGecko (To Apply)',
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
        href: 'https://babyjewelone.gitbook.io/the-valleys/',
      },
      {
        label: 'Github',
        href: 'https://github.com/',
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
