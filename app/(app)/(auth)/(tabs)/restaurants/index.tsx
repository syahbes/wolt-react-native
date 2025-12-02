//export { default } from '@/components/screens/RestaurantListPage';
import { StyleSheet, Text, View } from 'react-native';

const Page = () => {
  return (
    <View style={styles.container}>
      <Text>Restaurants</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Page;
