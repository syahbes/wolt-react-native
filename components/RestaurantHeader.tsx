import { Colors } from '@/constants/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { SharedValue } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface RestaurantHeaderProps {
  title: string;
  scrollOffset: SharedValue<number>;
}

const RestaurantHeader = ({ title, scrollOffset }: RestaurantHeaderProps) => {
  const insets = useSafeAreaInsets();
  return (
    <Animated.View style={[styles.headerContainer,{paddingTop: insets.top}]}>
      <Animated.View style={[styles.header1]}>
        <TouchableOpacity style={styles.locationButton}>
          <View style={styles.locationButtonIcon}>
            <Ionicons name="business-outline" size={16} />
          </View>
          <Text style={styles.locationText}>Stringy</Text>
          <Ionicons name="chevron-down" size={16} />
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 100,
    boxShadow: '0px 2px 4px -2px rgba(0,0,0, 0.2)',
    backgroundColor: '#fff',
  },
  header1: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    gap: 6,
  },
  locationButtonIcon: {
    borderRadius: 20,
    backgroundColor: Colors.light,
    padding: 10,
  },
  locationText: {},
});
export default RestaurantHeader;
