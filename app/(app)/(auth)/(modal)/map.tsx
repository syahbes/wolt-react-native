import { useRouter } from 'expo-router';
import { useRef } from 'react';
import { ActivityIndicator, Platform, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GoogleMaps } from 'expo-maps';
import { useRestaurantMarkers, useRestaurants } from '@/hooks/useRestaurants';
import * as Location from 'expo-location';
import { Colors } from '@/constants/theme';

const Page = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const mapRef = useRef<GoogleMaps.MapView>(null);

  const { data: restaurants, isLoading: restaurantsLoading } = useRestaurants();
  const { data: restaurantsMarkers, isLoading: markersLoading } = useRestaurantMarkers();

  const markers: GoogleMaps.Marker[] =
    restaurantsMarkers?.map((marker) => ({
      id: marker.id,
      //systemImage: 'circle.fill' ios -> icon? android
      //tintColor: Colors.muted ios -> android?
      coordinates: {
        latitude: marker.latitude,
        longitude: marker.longitude,
      },
      title: marker.name,
    })) || [];

  const locateMe = async () => {
    let location = await Location.getCurrentPositionAsync();
    mapRef.current?.setCameraPosition({
      coordinates: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
      zoom: 14,
    });
  };

  if (restaurantsLoading || markersLoading) {
    return (
      <View>
        <ActivityIndicator size={'large'} color={Colors.secondary} />
      </View>
    );
  }
  const markerSelected = (e: any) => {
    console.log(e);
  };

  if (Platform.OS === 'ios') {
    return <></>;
  } else if (Platform.OS === 'android') {
    return <View style={{ flex: 1 }} />;
  } else {
    return (
      <View>
        <Text>Maps are only supported on Android and iOS</Text>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Page;
