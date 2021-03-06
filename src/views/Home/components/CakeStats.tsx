import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress, getMasterChefAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms();
  const eggPrice = usePriceCakeBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = eggPrice.times(circSupply);
  const transferTax = '1%'; 
  const masterchef = getMasterChefAddress();
  const cakeaddy = getCakeAddress();

  let eggPerBlock = 1;
  if(farms && farms[0] && farms[0].eggPerBlock){
    eggPerBlock = new BigNumber(farms[0].eggPerBlock).div(new BigNumber(10).pow(18)).toNumber();
  }

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="18px">
          {TranslateString(505, 'Amethyst Overview')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(10045, 'Marketplace Price')}</Text>
          <CardValue fontSize="14px" value={eggPrice.toNumber()} decimals={2} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(10005, 'Market Cap')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total Minted')}</Text>
          {totalSupply && <CardValue fontSize="14px" value={getBalanceNumber(totalSupply)} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(10004, 'Circulating Supply')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(541, 'Mined Ametyst/Block')}</Text>
          <Text bold fontSize="14px">{eggPerBlock}</Text>
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(541, 'Transfer Tax')}</Text>
          <Text bold fontSize="14px">{transferTax}</Text>
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(541, '')}</Text>
          <Text bold fontSize="14px">{}</Text>
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(541, 'Masterchef:')}</Text>
          <Text bold fontSize="12px">{masterchef}</Text>
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(541, 'Token:')}</Text>
          <Text bold fontSize="12px">{cakeaddy}</Text>
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
