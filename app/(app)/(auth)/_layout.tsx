import { Stack } from '@/components/Stack';
import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Platform, TouchableOpacity } from 'react-native';
import Transition from 'react-native-screen-transitions';

const Layout = () => {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modal)/(restaurant)/[id]"
        options={{
          ...Transition.presets.DraggableCard(),
        }}
      />

      <Stack.Screen
        name="(modal)/map"
        options={{
          ...Transition.presets.SharedAppleMusic(),
        }}
      />

      <Stack.Screen
        name="(modal)/location"
        options={{
          presentation: Platform.OS === 'ios' ? 'formSheet' : 'modal',
          sheetAllowedDetents: Platform.OS === 'ios' ? [0.7] : undefined,
          title: '',
          headerShadowVisible: false,
          sheetCornerRadius: Platform.OS === 'ios' ? 16 : undefined,
          sheetGrabberVisible: Platform.OS === 'ios' ? true : false,
          headerBackVisible: false,
          animation: Platform.OS === 'android' ? 'slide_from_bottom' : undefined,
          headerLeft: () => null,
          headerRight: () => (
            <TouchableOpacity style={{ padding: 4, borderRadius: 20, backgroundColor: Colors.light }} onPress={() => router.dismiss()}>
              <Ionicons name="close-sharp" size={28} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="(modal)/filter"
        options={{
          presentation: Platform.OS === 'ios' ? 'formSheet' : 'modal',
          sheetAllowedDetents: Platform.OS === 'ios' ? [0.7] : undefined,
          title: '',
          headerShadowVisible: false,
          sheetCornerRadius: Platform.OS === 'ios' ? 16 : undefined,
          sheetGrabberVisible: Platform.OS === 'ios' ? true : false,
          headerBackVisible: false,
          animation: Platform.OS === 'android' ? 'slide_from_bottom' : undefined,
          contentStyle: {
            backgroundColor: Colors.background,
          },
          headerLeft: () => null,
          headerRight: () => (
            <TouchableOpacity style={{ padding: 4, borderRadius: 20, backgroundColor: Colors.light }} onPress={() => router.dismiss()}>
              <Ionicons name="close-sharp" size={28} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="(modal)/(menu)/[id]"
        options={{
          headerShown: false,
          presentation: 'formSheet',
          title: '',
          headerShadowVisible: false,
          sheetAllowedDetents: [0.95],
          sheetCornerRadius: 16,
          sheetGrabberVisible: true,
        }}
      />
    </Stack>
  );
};
export default Layout;
