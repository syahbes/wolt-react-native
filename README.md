used bun js for this app

```
bunx expo run:android
```

bun install

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


protected route

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
