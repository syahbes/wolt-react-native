import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const AppleAuthButton = () => {
  return (
    <TouchableOpacity style={styles.appleButton}>
      <Ionicons name="logo-apple" size={18} color={'#fff'} />
      <Text style={styles.appleButtonText}>Sign in with Apple</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appleButton: {
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 17,
    borderRadius: 12,
    gap: 8,
  },
  appleButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default AppleAuthButton;

