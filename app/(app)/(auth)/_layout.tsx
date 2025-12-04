import { Stack } from '@/components/Stack';
import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { TouchableOpacity, Platform } from 'react-native';
// import Transition from 'react-native-screen-transitions';

const Layout = () => {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      <Stack.Screen
        name="(modal)/location"
        options={{
          presentation: Platform.OS === 'ios' ? 'formSheet' : 'modal',
          sheetAllowedDetents: Platform.OS === 'ios' ? [0.7] : undefined,
          title: '',
          headerShadowVisible: false,
          sheetCornerRadius: Platform.OS === 'ios' ? 16 : undefined,
          sheetGrabberVisible: Platform.OS === 'ios' ? true : false,
          headerBackVisible:false,
          animation: Platform.OS === 'android' ? 'slide_from_bottom' : undefined,
          headerLeft: () => null,
          headerRight: () => (
            <TouchableOpacity style={{ padding: 4, borderRadius: 20, backgroundColor: Colors.light }} onPress={() => router.dismiss()}>
              <Ionicons name="close-sharp" size={28} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};
export default Layout;
