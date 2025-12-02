import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Colors } from '@/constants/theme';
const FacebookAuthButton = () => {
  return (
    <TouchableOpacity style={styles.facebookButton}>
      <FontAwesome5 name="facebook" size={18} color={Colors.dark} />
      <Text style={styles.facebookButtonText}>Continue with Facebook</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  facebookButton: {
    backgroundColor: Colors.light,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 17,
    borderRadius: 12,
    gap: 8,
  },
  facebookButtonText: {
    color: Colors.dark,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default FacebookAuthButton;
