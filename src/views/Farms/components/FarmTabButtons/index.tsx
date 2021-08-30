import React from 'react'
import styled from 'styled-components'
import { useRouteMatch, Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, Text, Toggle, InputScales } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'


const FarmTabButtons = ({ stakedOnly, setStakedOnly }) => {
  const { url, isExact } = useRouteMatch()
  const TranslateString = useI18n()

  return (
    <Wrapper>
      
      <ButtonMenu activeIndex={isExact ? 0 : 1} size="md" variant="subtle">
        <ButtonMenuItem as={Link} to={`${url}`}>
          {TranslateString(698, 'Active')}
        </ButtonMenuItem>
        <ButtonMenuItem as={Link} to={`${url}/history`}>
          {TranslateString(700, 'Inactive')}
        </ButtonMenuItem>
      </ButtonMenu>
      
      <ToggleWrapper>

        <Text bold color="white" fontSize="22px"> {TranslateString(689, 'Earn Amethyst by staking Defi Kingdoms LP') }  </Text>

      </ToggleWrapper>

    </Wrapper>
  )
}

export default FarmTabButtons

const Wrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 11px;
`

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;

  ${Text} {
    margin-left: 8px;
  }
`