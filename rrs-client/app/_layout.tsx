import '@tamagui/core/reset.css'
import { TamaguiProvider, View } from '@tamagui/core' // or 'tamagui'
import config from './tamagui.config'

export default function App () => (
  <TamaguiProvider config={config}>
    <View width={200} height={200} backgroundColor="red" />
  </TamaguiProvider>
)