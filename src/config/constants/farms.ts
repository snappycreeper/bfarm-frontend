import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'AMETHYST-ONE',
    lpAddresses: {
      97: '',
      1666600000: '0xd22afc683130b7c899b701e86e546f19bc598167',
    },
    tokenSymbol: 'AMETHYST',
    tokenAddresses: {
      97: '',
      1666600000: '0x7BF379FcB16b4a6F648371cD72D9D443EF24168F',
    },
    quoteTokenSymbol: QuoteToken.WONE,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'AMETHYST-BUSD',
    lpAddresses: {
      97: '',
      1666600000: '0x167c2d2e9630ebc63d69269179964d782240657d',
    },
    tokenSymbol: 'AMETHYST',
    tokenAddresses: {
      97: '',
      1666600000: '0x7BF379FcB16b4a6F648371cD72D9D443EF24168F',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  /* {
    pid: 1,
    risk: 5,
    lpSymbol: 'Amethyst-Rain',
    lpAddresses: {
      97: '',
      1666600000: '0x9539c1c15b0eb0d3692c969ae233da344bef2b9c',
    },
    tokenSymbol: 'Bsnappy',
    tokenAddresses: {
      97: '',
      1666600000: '0x1ce753cD86C1881411C281bfab533D54086D9377',
    },
    quoteTokenSymbol: QuoteToken.WONE,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 4,
    risk: 2,
    lpSymbol: 'Jewel<>BJewel',
    lpAddresses: {
      97: '',
      1666600000: '0x79118dbed6b6ff060d62d38781c8e79441be88f9',
    },
    tokenSymbol: 'RAIN',
    tokenAddresses: {
      97: '',
      1666600000: '0xd009b07B4a65CC769379875Edc279961D710362d',
    },
    quoteTokenSymbol: QuoteToken.VIPER,
    quoteTokenAdresses: contracts.viper,
  },
  {
    pid: 5,
    risk: 2,
    lpSymbol: 'Amethyst<>XYA',
    lpAddresses: {
      97: '',
      1666600000: '0x4eb51880acec7cda64977d1cc35eddb9100ce1b5',
    },
    tokenSymbol: 'RAIN',
    tokenAddresses: {
      97: '',
      1666600000: '0xd009b07B4a65CC769379875Edc279961D710362d',
    },
    quoteTokenSymbol: QuoteToken.XYA,
    quoteTokenAdresses: contracts.xya,
  }, */
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'WONE-BUSD LP',
    lpAddresses: {
      97: '',
      1666600000: '0x3a0c4d87bde442150779d63c1c695d003184df52',
    },
    tokenSymbol: 'WONE',
    tokenAddresses: {
      97: '',
      1666600000: '0xcf664087a5bb0237a0bad6742852ec6c8d69a27a',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'AMETHYST',
    lpAddresses: {
      97: '',
      1666600000: '0x167c2d2e9630ebc63d69269179964d782240657d',
    },
    tokenSymbol: 'AMETHYST',
    tokenAddresses: {
      97: '',
      1666600000: '0x7BF379FcB16b4a6F648371cD72D9D443EF24168F',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'WONE',
    lpAddresses: {
      97: '',
      1666600000: '0x3a0c4d87bde442150779d63c1c695d003184df52',
    },
    tokenSymbol: 'WONE',
    tokenAddresses: {
      97: '',
      1666600000: '0xcf664087a5bb0237a0bad6742852ec6c8d69a27a',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'JEWEL',
    lpAddresses: {
      97: '',
      1666600000: '0xeb579ddcd49a7beb3f205c9ff6006bb6390f138f',
    },
    tokenSymbol: 'JEWEL',
    tokenAddresses: {
      97: '',
      1666600000: '0x72cb10c6bfa5624dd07ef608027e366bd690048f',
    },
    quoteTokenSymbol: QuoteToken.WONE,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 6,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'XYA',
    lpAddresses: {
      97: '',
      1666600000: '0xc74eaf04777f784a7854e8950daeb27559111b85',
    },
    tokenSymbol: 'XYA',
    tokenAddresses: {
      97: '',
      1666600000: '0x9b68BF4bF89c115c721105eaf6BD5164aFcc51E4',
    },
    quoteTokenSymbol: QuoteToken.WONE,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 7,
    risk: 5,
    lpSymbol: 'AMETHYST-JEWEL',
    lpAddresses: {
      97: '',
      1666600000: '0x7f91c688f0933c435f3d4d965d17a15f507514e2',
    },
    tokenSymbol: 'AMETHYST',
    tokenAddresses: {
      97: '',
      1666600000: '0x7BF379FcB16b4a6F648371cD72D9D443EF24168F',
    },
    quoteTokenSymbol: QuoteToken.JEWEL,
    quoteTokenAdresses: contracts.jewel,
  },
  {
    pid: 8,
    risk: 5,
    lpSymbol: 'AMETHYST-RAIN',
    lpAddresses: {
      97: '',
      1666600000: '0x882cF21E4bf43B6d5658C27e07f5b2873DBE5718',
    },
    tokenSymbol: 'AMETHYST',
    tokenAddresses: {
      97: '',
      1666600000: '0x7BF379FcB16b4a6F648371cD72D9D443EF24168F',
    },
    quoteTokenSymbol: QuoteToken.RAIN,
    quoteTokenAdresses: contracts.rain,
  },
  {
    pid: 9,
    risk: 5,
    lpSymbol: 'AMETHYST-XYA',
    lpAddresses: {
      97: '',
      1666600000: '0x0cdedb1d99e76a10cada082cc5fa2f6eb352d8fd',
    },
    tokenSymbol: 'AMETHYST',
    tokenAddresses: {
      97: '',
      1666600000: '0x7BF379FcB16b4a6F648371cD72D9D443EF24168F',
    },
    quoteTokenSymbol: QuoteToken.XYA,
    quoteTokenAdresses: contracts.xya,
  },
  {
    pid: 10,
    risk: 5,
    lpSymbol: 'AMETHYST-COINK',
    lpAddresses: {
      97: '',
      1666600000: '0x910acee6b6a13f4afbdae643ff332add6400491c',
    },
    tokenSymbol: 'AMETHYST',
    tokenAddresses: {
      97: '',
      1666600000: '0x7BF379FcB16b4a6F648371cD72D9D443EF24168F',
    },
    quoteTokenSymbol: QuoteToken.COINK,
    quoteTokenAdresses: contracts.coink,
  },
  {
    pid: 11,
    risk: 5,
    lpSymbol: 'AMETHYST-BJEWEL',
    lpAddresses: {
      97: '',
      1666600000: '0xd03a0a65897804a583c9b1d0ce57164c235ee62f',
    },
    tokenSymbol: 'BJEWEL',
    tokenAddresses: {
      97: '',
      1666600000: '0x70831ee5f8a0434bd2ddb1e45ed24cbca8b41fec',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 12,
    risk: 5,
    lpSymbol: 'BJEWEL-JEWEL',
    lpAddresses: {
      97: '',
      1666600000: '0x440061aebf3021b741b5791e1664e708503d395c',
    },
    tokenSymbol: 'BJEWEL',
    tokenAddresses: {
      97: '',
      1666600000: '0x70831ee5f8a0434bd2ddb1e45ed24cbca8b41fec',
    },
    quoteTokenSymbol: QuoteToken.JEWEL,
    quoteTokenAdresses: contracts.jewel,
  },
  {
    pid: 13,
    risk: 5,
    lpSymbol: 'BJEWEL-KURO',
    lpAddresses: {
      97: '',
      1666600000: '0xfa6f4c2b0018ea559e2bbb4b6a5520e922557aec',
    },
    tokenSymbol: 'BJEWEL',
    tokenAddresses: {
      97: '',
      1666600000: '0x70831ee5f8a0434bd2ddb1e45ed24cbca8b41fec',
    },
    quoteTokenSymbol: QuoteToken.KURO,
    quoteTokenAdresses: contracts.kuro,
  },
  {
    pid: 14,
    risk: 5,
    lpSymbol: 'WONE-BSCADA',
    lpAddresses: {
      97: '',
      1666600000: '0x01dbf3053152a23c60cb1c106b94d2959b3cf7cc',
    },
    tokenSymbol: 'WONE',
    tokenAddresses: {
      97: '',
      1666600000: '0xcf664087a5bb0237a0bad6742852ec6c8d69a27a',
    },
    quoteTokenSymbol: QuoteToken.BSCADA,
    quoteTokenAdresses: contracts.bscada,
  },
  {
    pid: 15,
    risk: 5,
    lpSymbol: 'WONE-1ETH',
    lpAddresses: {
      97: '',
      1666600000: '0x864fcd9a42a5f6e0f76bc309ee26c8fab473fc3e',
    },
    tokenSymbol: '1ETH',
    tokenAddresses: {
      97: '',
      1666600000: '0x6983d1e6def3690c4d616b13597a09e6193ea013',
    },
    quoteTokenSymbol: QuoteToken.WONE,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 16,
    risk: 5,
    lpSymbol: 'UST-LUNA',
    lpAddresses: {
      97: '',
      1666600000: '0x430d746f4bbeca5399c3decb0bcd83bc0a5615f2',
    },
    tokenSymbol: 'UST',
    tokenAddresses: {
      97: '',
      1666600000: '0x224e64ec1bdce3870a6a6c777edd450454068fec',
    },
    quoteTokenSymbol: QuoteToken.LUNA,
    quoteTokenAdresses: contracts.luna,
  },
  {
    pid: 17,
    risk: 5,
    lpSymbol: 'BUSD-1FTM',
    lpAddresses: {
      97: '',
      1666600000: '0xc9d4786b600873ef0f4cbe60474563fe55ec2320',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      1666600000: '0xe176ebe47d621b984a73036b9da5d834411ef734',
    },
    quoteTokenSymbol: QuoteToken.ONEFTM,
    quoteTokenAdresses: contracts.oneftm,
  },
  {
    pid: 18,
    risk: 5,
    lpSymbol: 'BUSD-UST',
    lpAddresses: {
      97: '',
      1666600000: '0x71428970fe552615e90014c1ad858b740139badc',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      1666600000: '0xe176ebe47d621b984a73036b9da5d834411ef734',
    },
    quoteTokenSymbol: QuoteToken.UST,
    quoteTokenAdresses: contracts.ust,
  },
  {
    pid: 19,
    risk: 5,
    lpSymbol: 'BUSD-1ETH',
    lpAddresses: {
      97: '',
      1666600000: '0xf70ad6be6cde07960bb05f01fc84e43d04b6e3c2',
    },
    tokenSymbol: '1ETH',
    tokenAddresses: {
      97: '',
      1666600000: '0x6983d1e6def3690c4d616b13597a09e6193ea013',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 20,
    risk: 5,
    lpSymbol: 'AMETHYST-VIPER',
    lpAddresses: {
      97: '',
      1666600000: '0xb8464ddef7701a8d64c8054dc87ad428dc604ab5',
    },
    tokenSymbol: 'AMETHYST',
    tokenAddresses: {
      97: '',
      1666600000: '0x7BF379FcB16b4a6F648371cD72D9D443EF24168F',
    },
    quoteTokenSymbol: QuoteToken.VIPER,
    quoteTokenAdresses: contracts.viper,
  },
  {
    pid: 21,
    risk: 5,
    lpSymbol: '1AXS-WONE',
    lpAddresses: {
      97: '',
      1666600000: '0xd147ac7ccedca0f6f34238d4b3d0cb737ac0cfb2',
    },
    tokenSymbol: '1AXS',
    tokenAddresses: {
      97: '',
      1666600000: '0x14a7b318fed66ffdcc80c1517c172c13852865de',
    },
    quoteTokenSymbol: QuoteToken.WONE,
    quoteTokenAdresses: contracts.wbnb,
  },
  /* {
    pid: 4,
    risk: 2,
    lpSymbol: 'RAIN-VIPER LP',
    lpAddresses: {
      97: '',
      1666600000: '0x79118dbed6b6ff060d62d38781c8e79441be88f9',
    },
    tokenSymbol: 'RAIN',
    tokenAddresses: {
      97: '',
      1666600000: '0xd009b07B4a65CC769379875Edc279961D710362d',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    risk: 2,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      1666600000: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      1666600000: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 6,
    risk: 1,
    lpSymbol: 'DAI-BUSD LP',
    lpAddresses: {
      97: '',
      1666600000: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      1666600000: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    risk: 1,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      1666600000: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      1666600000: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 9,
    risk: 3,
    lpSymbol: 'DOT-BNB LP',
    lpAddresses: {
      97: '',
      1666600000: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c',
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      1666600000: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 10,
    risk: 4,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      1666600000: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      1666600000: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 11,
    risk: 4,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      1666600000: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      1666600000: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 12,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'EGG',
    lpAddresses: {
      97: '',
      1666600000: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // EGG-BUSD LP
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '',
      1666600000: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      1666600000: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // EGG-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      1666600000: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 14,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      1666600000: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      1666600000: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 15,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      1666600000: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd', // USDT-BUSD LP
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      1666600000: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 16,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      1666600000: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      1666600000: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 17,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      1666600000: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      1666600000: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 18,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'DAI',
    lpAddresses: {
      97: '',
      1666600000: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc', // DAI-BUSD LP
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      1666600000: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 19,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDC',
    lpAddresses: {
      97: '',
      1666600000: '0x680dd100e4b394bda26a59dd5c119a391e747d18', // USDC-BUSD LP
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      1666600000: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 20,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'DOT',
    lpAddresses: {
      97: '',
      1666600000: '0x54c1ec2f543966953f2f7564692606ea7d5a184e', // DOT-BUSD LP
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      1666600000: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 21,
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      1666600000: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      1666600000: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 22,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'BSCX',
    lpAddresses: {
      97: '',
      1666600000: '0xa32a983a64ce21834221aa0ad1f1533907553136', // BSCX-BUSD LP
    },
    tokenSymbol: 'BSCX',
    tokenAddresses: {
      97: '',
      1666600000: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 23,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'AUTO',
    lpAddresses: {
      97: '',
      1666600000: '0x4d0228ebeb39f6d2f29ba528e2d15fc9121ead56', // AUTO-BNB LP
    },
    tokenSymbol: 'AUTO',
    tokenAddresses: {
      97: '',
      1666600000: '0xa184088a740c695e156f91f5cc086a06bb78b827',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
   },
   */ 
]

export default farms
