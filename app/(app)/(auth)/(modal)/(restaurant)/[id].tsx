import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

const Page = () => {
  const {id} = useLocalSearchParams()
  return (
    <View style={styles.container}>
      <Text>Resturant page for {id}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
export default Page;
