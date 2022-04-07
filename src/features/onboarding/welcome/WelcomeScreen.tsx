import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import LogoSVG from '@assets/images/smart_host.svg'
import LogoSVGDark from '@assets/images/smart_host_dark.svg'
import { useColorScheme, View } from 'react-native'
import { OnboardingNavigationProp } from '../onboardingTypes'
import Box from '../../../components/Box'
import TextTransform from '../../../components/TextTransform'
import SafeAreaBox from '../../../components/SafeAreaBox'
import { DebouncedButton } from '../../../components/Button'

const WelcomeScreen = () => {
  const { t } = useTranslation()
  const navigation = useNavigation<OnboardingNavigationProp>()

  const colorScheme = useColorScheme()
  const createAccount = useCallback(() => navigation.push('CreateAccount'), [
    navigation,
  ])

  const importAccount = useCallback(() => navigation.push('LinkAccount'), [
    navigation,
  ])
  const color = () => {
    if (colorScheme === 'light') {
      return <LogoSVG width="300" height="150" />
    }
    return <LogoSVGDark width="300" height="150" />
  }
  return (
    <SafeAreaBox
      backgroundColor="primaryBackground"
      flex={1}
      paddingHorizontal="l"
      alignItems="center"
      paddingTop="xxxl"
    >
      <View>{color()}</View>

      <TextTransform
        variant="subtitle1"
        marginVertical="xxl"
        i18nKey="account_setup.welcome.subtitle"
      />
      <Box flex={1} />

      {/* <TouchableOpacityBox onPress={createAccount} width="100%" padding="l"> */}
      {/*  <Text variant="body1">{t('account_setup.welcome.create_account')}</Text> */}
      {/* </TouchableOpacityBox> */}

      <DebouncedButton
        title={t('account_setup.welcome.login_with_helium')}
        mode="contained"
        variant="primary"
        onPress={importAccount}
        width={400}
        padding="ms"
      />
      <DebouncedButton
        title={t('account_setup.welcome.create_account')}
        mode="contained"
        variant="secondary"
        onPress={createAccount}
        width={400}
        padding="ms"
      />
      {/* <TouchableOpacityBox onPress={importAccount} width="100%" padding="l"> */}
      {/*  <Text variant="body1"> */}
      {/*    {t('account_setup.welcome.login_with_helium')} */}
      {/*  </Text> */}
      {/* </TouchableOpacityBox> */}
    </SafeAreaBox>
  )
}

export default WelcomeScreen
