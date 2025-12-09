import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Animated, { SharedValue } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
interface RestaurantDetailsHeaderProps {
  scrollOffset: SharedValue<number>;
}

const SCROLL_THRESHOLD_START = 50;
const SCROLL_THRESHOLD_END = 80;

const RestaurantDetailsHeader = ({ scrollOffset }: RestaurantDetailsHeaderProps) => {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <Animated.View style={[styles.headerContainer, { paddingTop: insets.top }]}>
      <View style={[styles.headerContent]}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={25} />
        </TouchableOpacity>

        <Animated.View style={[styles.searchBar]}>
          <Ionicons name="search" size={20} color={Colors.light} />
          <TextInput placeholder="Search" placeholderTextColor={Colors.light} />
        </Animated.View>

        <View style={{ width: 40, height: 40 }} />

        <Animated.View style={[styles.iconButton]}>
          <Ionicons name="heart-outline" size={24} />
        </Animated.View>

        <Animated.View style={[styles.iconButton]}>
          <Ionicons name="ellipsis-horizontal" size={24} />
        </Animated.View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    boxShadow: '0px 4px 2px -2px rgba(0, 0, 0, 0.05)',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.light,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 2px -2px rgba(0, 0, 0, 0.1)',
  },
  searchBar: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 12,
    // paddingVertical: 8,
    borderRadius: 20,
    gap: 8,
    // temp
    backgroundColor: '#fff',
  },
  iconButton: {
    position: 'absolute',
    top: 12,
    right: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.light,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 2px -2px rgba(0, 0, 0, 0.1)',
  },
});
export default RestaurantDetailsHeader;
