used bun js for this app

```
bunx expo run:android
```

bun install

notes:

theme js
```
export const Colors = {
  background: '#fff',
  text: '#FFE81F',
  primary: '#01BEE5',
  secondary: '#0094DD',
  dark: '#000000',
  light: '#e6e6e6',
  primaryLight: '#E9F9FF',
  muted: '#666',
};

export const Fonts = {
  brand: 'Nunito',
  brandBold: 'Nunito_700Bold',
  brandBlack: 'Nunito_900Black',
};

```


fonts from consts
animation with reanimated

instead of bottom modal:
      <Stack.Screen
        name="other-options"
        options={{
          headerShown: false,
          presentation: 'formSheet',
          title: '',
          headerShadowVisible: false,
          sheetAllowedDetents: [0.6]
        }}
      />


Protected Stack:
```
import useUserStore from '@/hooks/use-userstore';
import { Stack } from 'expo-router';

const RootNav = () => {
  const { isGuest, user } = useUserStore();

  return (
    <Stack>
      <Stack.Protected guard={isGuest || user}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack.Protected>

      <Stack.Protected guard={!isGuest && !user}>
        <Stack.Screen name="(public)" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
};

export default RootNav;
```

persist zustand store

in profile header to ios native when scroll automatic

padding top :
```
top

  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <Animated.ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop: insets.top + 60 }}>



    borderWidth: StyleSheet.hairlineWidth
```

Animated header


const RestaurantHeader = ({ title, scrollOffset }: RestaurantHeaderProps) => {

disable pointer events

  pointerEvents={scrollOffset.value < SCROLL_THRESHOLD * 0.3 ? 'none' : 'auto'}
