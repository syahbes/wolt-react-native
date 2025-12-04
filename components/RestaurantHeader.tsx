import { Colors } from '@/constants/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
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
    <Animated.View style={[styles.headerContainer, { paddingTop: insets.top }]}>
      {/* Header 1 */}
      <Animated.View style={[styles.header1]}>
        <Link href={'/(app)/(auth)/(modal)/location'} asChild>
          <TouchableOpacity style={styles.locationButton}>
            <View style={styles.locationButtonIcon}>
              <Ionicons name="business-outline" size={16} />
            </View>
            <Text style={styles.locationText}>Stringy</Text>
            <Ionicons name="chevron-down" size={16} />
          </TouchableOpacity>
        </Link>
        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="filter" size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="map-outline" size={20} />
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* Header 2 */}
      {/*   <Animated.View style={[styles.header2]}> */}
      {/*     <View style={styles.centerContent}> */}
      {/*       <Text style={styles.titleSmall}>{title}</Text> */}
      {/**/}
      {/*       <TouchableOpacity style={styles.locationSmall}> */}
      {/*         <Text style={styles.locationSmallText}>Stringy</Text> */}
      {/*         <Ionicons name="chevron-down" size={14} /> */}
      {/*       </TouchableOpacity> */}
      {/*     </View> */}
      {/**/}
      {/*     <View style={styles.rightIcons}> */}
      {/*       <TouchableOpacity style={styles.iconButton}> */}
      {/*         <Ionicons name="filter" size={20} /> */}
      {/*       </TouchableOpacity> */}
      {/*     </View> */}
      {/*   </Animated.View> */}
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
    backgroundColor: '#fff',
    // boxShadow: '0px 2px 4px -2px rgba(0,0,0, 0.2)',
  },
  header1: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header2: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingVertical: 12,
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
  locationText: {
    fontSize: 14,
    fontWeight: '600',
  },
  rightIcons: {
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    width: 40,
    height: 40,
    backgroundColor: Colors.light,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 40,
  },
  titleSmall: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 2,
  },
  locationSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  locationSmallText: {
    fontSize: 12,
    color: Colors.muted,
  },
});
export default RestaurantHeader;
