import { Text, View, StyleSheet } from 'react-native';
import { CategoryList } from '@/components/CategoryList';
import RestaurantList from '@/components/RestaurantList';
import Animated from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Fonts } from '@/constants/theme';

const ResturantListPage = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <Animated.ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop: insets.top + 60 }}>
        <Text style={styles.pageTitle}>Resturants</Text>
        <CategoryList />
        <Text style={styles.allRestaurantsTitle}>All Resturants</Text>
        <RestaurantList />
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageTitle: {
    fontFamily: Fonts.brandBlack,
    fontSize: 30,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  allRestaurantsTitle: {
    fontFamily: Fonts.brandBold,
    fontSize: 20,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
});
export default ResturantListPage;
