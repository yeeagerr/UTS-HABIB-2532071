import { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import InfoCard from '@/components/InfoCard';
import { useTheme } from '@/hooks/use-theme';

const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Alifia Putri', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Bima Pratama', prodi: 'Teknik Informatika' },
  { id: '3', nama: 'Citra Lestari', prodi: 'Manajemen' },
  { id: '4', nama: 'Daffa Ramadhan', prodi: 'Teknik Sipil' },
  { id: '5', nama: 'Eka Wulandari', prodi: 'Akuntansi' },
];

export default function HomeScreen() {
  const [keyword, setKeyword] = useState('');
  const theme = useTheme();
  const mahasiswaTersaring = DAFTAR_MAHASISWA.filter((mahasiswa) =>
    mahasiswa.nama.toLowerCase().includes(keyword.trim().toLowerCase())
  );

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <FlatList
        data={mahasiswaTersaring}
        keyExtractor={(mahasiswa) => mahasiswa.id}
        renderItem={({ item }) => (
          <View style={[styles.studentCard, { backgroundColor: theme.backgroundElement }]}>
            <Text style={[styles.studentName, { color: theme.text }]}>{item.nama}</Text>
            <Text style={[styles.studentProgram, { color: theme.textSecondary }]}>{item.prodi}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={[styles.emptyMessage, { color: theme.textSecondary }]}>
            Data tidak ditemukan!
          </Text>
        }
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={[styles.heading, { color: theme.text }]}>Informasi Akademik</Text>
            <InfoCard
              title="Pengajuan KRS"
              status="selesai"
              onPress={() => Alert.alert('Pengajuan KRS', 'Pengajuan KRS telah selesai.')}
            />
            <InfoCard
              title="Pembayaran UKT"
              status="proses"
              onPress={() => Alert.alert('Pembayaran UKT', 'Pembayaran UKT sedang diproses.')}
            />

            <Text style={[styles.sectionHeading, { color: theme.text }]}>Daftar Mahasiswa</Text>
            <TextInput
              accessibilityLabel="Cari mahasiswa berdasarkan nama"
              style={[
                styles.searchInput,
                {
                  backgroundColor: theme.backgroundElement,
                  borderColor: theme.textSecondary,
                  color: theme.text,
                },
              ]}
              placeholder="Cari nama mahasiswa..."
              placeholderTextColor={theme.textSecondary}
              value={keyword}
              onChangeText={setKeyword}
              autoCapitalize="none"
              returnKeyType="search"
            />
          </View>
        }
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  listContent: {
    width: '100%',
    maxWidth: 800,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 32,
  },
  header: {
    gap: 12,
    marginBottom: 12,
  },
  heading: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 4,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 12,
  },
  searchInput: {
    minHeight: 48,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 16,
  },
  studentCard: {
    borderRadius: 12,
    marginBottom: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  studentName: {
    fontSize: 16,
    fontWeight: '600',
  },
  studentProgram: {
    fontSize: 14,
    marginTop: 4,
  },
  emptyMessage: {
    fontSize: 15,
    paddingVertical: 16,
    textAlign: 'center',
  },
});
