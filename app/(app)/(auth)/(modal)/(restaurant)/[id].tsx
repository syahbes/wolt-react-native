import MenuItem from '@/components/MenuItem';
import { Colors } from '@/constants/theme';
import type { Dish } from '@/data/restaurant_menu';
import { useMenu } from '@/hooks/useMenu';
import { useRestaurant } from '@/hooks/useRestaurants';
import { useLocalSearchParams } from 'expo-router';
import { useRef, useState } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');
const IMAGE_HEIGHT = 300;

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList<Dish>);

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionListRef = useRef<SectionList>(null);
  const categoryScrollRef = useRef<ScrollView>(null);
  const scrollOffset = useSharedValue(0);
  const insets = useSafeAreaInsets();
  const categoryTabWidth = 100;

  //fetch data
  const { data: restaurant, isLoading: restaurantLoading } = useRestaurant(id || '');
  const { data: menu, isLoading: menuLoading } = useMenu(id || '');

  const sections = (menu ?? []).map((category) => ({
    title: category.category,
    subtitle: category.subtitle,
    data: category.dishes,
  }));

  if (restaurantLoading || menuLoading) {
    return (
      <View>
        <ActivityIndicator size={'large'} color={Colors.secondary} />
      </View>
    );
  }
  if (!restaurant) {
    return (
      <View>
        <Text>Resturant not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Animated.Image resizeMode={'cover'} source={restaurant.image!} style={[styles.backgroundImage]} />
      <AnimatedSectionList ref={sectionListRef} sections={sections} renderItem={({ item }) => <MenuItem dish={item} />} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width,
    height: IMAGE_HEIGHT,
  },
});
export default Page;
