import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function InfoCard({ title, status, onPress }) {
  const selesai = status === 'selesai';

  return (
    <View style={styles.card}>
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text
          style={[
            styles.status,
            selesai ? styles.completedStatus : styles.inProgressStatus,
          ]}>
          {selesai ? 'Selesai' : 'Proses'}
        </Text>
      </View>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={onPress}
        style={styles.button}>
        <Text style={styles.buttonLabel}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#e5e7eb',
    borderRadius: 14,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  details: {
    flex: 1,
    gap: 8,
  },
  title: {
    color: '#172033',
    fontSize: 16,
    fontWeight: '600',
  },
  status: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    fontSize: 12,
    fontWeight: '600',
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  completedStatus: {
    backgroundColor: '#dcfce7',
    color: '#15803d',
  },
  inProgressStatus: {
    backgroundColor: '#ffedd5',
    color: '#c2410c',
  },
  button: {
    backgroundColor: '#2563eb',
    borderRadius: 10,
    marginLeft: 12,
    minHeight: 44,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  buttonLabel: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '600',
  },
});
