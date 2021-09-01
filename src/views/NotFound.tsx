import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import useI18n from 'hooks/useI18n'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const NotFound = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <StyledNotFound>
        <Text bold mb="16px" fontSize="50px" color="white">{TranslateString(999, 'Coming Soon')}</Text>
        <Button as="a" href="/" >
          {TranslateString(999, 'Back to World Map')}
        </Button>
      </StyledNotFound>
    </Page>
  )
}

export default NotFound
