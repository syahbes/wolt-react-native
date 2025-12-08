import { useRestaurantMarkers, useRestaurants } from '@/hooks/useRestaurants';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Page = () => {
  const { data: restaurants, isLoading: restaurantsLoading } = useRestaurants();
  const { data: restaurantsMarkers, isLoading: markersLoading } = useRestaurantMarkers();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <Text>Map Markers</Text>
      {restaurantsMarkers &&
        restaurantsMarkers?.length > 0 &&
        restaurantsMarkers?.map((item) => (
          <TouchableOpacity key={item.id} style={styles.markerContainer} onPress={() => router.push(`/(modal)/(restaurant)/${item.id}`)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    padding: 10,
  },
  markerContainer: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 16,
  },
});
export default Page;

// import { useRouter } from 'expo-router';
// import { useRef } from 'react';
// import { ActivityIndicator, Platform, StyleSheet, Text, View } from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { GoogleMaps } from 'expo-maps';
// import { useRestaurantMarkers, useRestaurants } from '@/hooks/useRestaurants';
// import * as Location from 'expo-location';
// import { Colors } from '@/constants/theme';
//
// const Page = () => {
//   const router = useRouter();
//   const insets = useSafeAreaInsets();
//   const mapRef = useRef<GoogleMaps.MapView>(null);
//
//   const { data: restaurants, isLoading: restaurantsLoading } = useRestaurants();
//   const { data: restaurantsMarkers, isLoading: markersLoading } = useRestaurantMarkers();
//
//   const markers: GoogleMaps.Marker[] =
//     restaurantsMarkers?.map((marker) => ({
//       id: marker.id,
//       //systemImage: 'circle.fill' ios -> icon? android
//       //tintColor: Colors.muted ios -> android?
//       coordinates: {
//         latitude: marker.latitude,
//         longitude: marker.longitude,
//       },
//       title: marker.name,
//     })) || [];
//
//   const locateMe = async () => {
//     let location = await Location.getCurrentPositionAsync();
//     mapRef.current?.setCameraPosition({
//       coordinates: {
//         latitude: location.coords.latitude,
//         longitude: location.coords.longitude,
//       },
//       zoom: 14,
//     });
//   };
//
//   if (restaurantsLoading || markersLoading) {
//     return (
//       <View>
//         <ActivityIndicator size={'large'} color={Colors.secondary} />
//       </View>
//     );
//   }
//   const markerSelected = (e: any) => {
//     console.log(e);
//   };
//
//   if (Platform.OS === 'ios') {
//     return <></>;
//   } else if (Platform.OS === 'android') {
//     return <View style={{ flex: 1 }} />;
//   } else {
//     return (
//       <View>
//         <Text>Maps are only supported on Android and iOS</Text>
//       </View>
//     );
//   }
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
// export default Page;
