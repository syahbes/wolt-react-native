import { Dish } from '@/data/restaurant_menu';
import { View, Text, StyleSheet } from 'react-native';
interface MenuItemProps {
  dish: Dish;
}
const MenuItem = ({ dish }: MenuItemProps) => {
  return (
    <View style={styles.container}>
      <Text>{dish.name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
export default MenuItem;
