import AppleAuthButton from '@/components/auth/AppleAuthButton';
import GoogleAuthButton from '@/components/auth/GoogleAuthButton';
import { Fonts } from '@/constants/theme';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.infiniteScrollContainer}></View>

      <View style={styles.contentContainer}>
        <Image source={require('@/assets/images/wolt-logo.png')} style={styles.brandLogo} />
        <Animated.Text entering={FadeInDown} style={styles.tagLine}>
          Almost everything deliverd
        </Animated.Text>

        {/* Animated Buttons */}
        <View style={styles.buttonContainer}>
          <Animated.View entering={FadeInDown.delay(100)}>
            <AppleAuthButton />
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(200)}>
            <GoogleAuthButton />
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(300)}>
            <TouchableOpacity style={styles.otherButton}>
              <Text style={styles.otherButtonText}>Other options</Text>
            </TouchableOpacity>
          </Animated.View>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  brandLogo: {
    width: '100%',
    height: 48,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  tagLine: {
    fontSize: 32,
    fontFamily: Fonts.brandBlack,
    textAlign: 'center',
    marginBottom: 50,
    lineHeight: 36,
  },
  buttonContainer: {
    gap: 12,
    width: '100%',
  },
  otherButton: {
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 17,
    borderRadius: 12,
    gap: 4,
  },
  otherButtonText: {
    color: '#666',
    fontSize: 18,
    fontWeight: '600',
  },

  infiniteScrollContainer: {
    flex: 0.8,
  },
});
