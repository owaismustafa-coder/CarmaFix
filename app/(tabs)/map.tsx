import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Card, Glass, Pill } from '@/components/UI';
import { useApp } from '@/context/AppContext';
import { useTheme } from '@/theme';

export default function LiveMap() {
  const { language } = useApp();
  const { theme } = useTheme();
  const ar = language === 'ar';

  return (
    <View style={[s.page, { backgroundColor: theme.canvas }]}>
      <View style={s.mapShell}>
        <View style={s.mapGrid} />
        <View style={[s.route, { backgroundColor: '#DFF6EE', borderColor: '#9DD7C5' }]} />
        <View style={[s.route2, { backgroundColor: '#EAF0FF', borderColor: '#B2C2F2' }]} />
        <View style={[s.pin, { top: 120, left: 80, backgroundColor: theme.primary }]}>
          <Ionicons name="car" size={16} color="#fff" />
        </View>
        <View style={[s.pin, { top: 200, right: 92, backgroundColor: '#ffffff', borderColor: '#D7E3F5' }]}>
          <Ionicons name="construct" size={16} color={theme.primary} />
        </View>
        <View style={[s.pin, { bottom: 170, left: 120, backgroundColor: '#ffffff', borderColor: '#D7E3F5' }]}>
          <Ionicons name="location" size={16} color={theme.primary} />
        </View>
      </View>

      <Glass style={s.topBar} intensity={70}>
        <View>
          <Text style={[s.title, { color: theme.ink }]}>{ar ? 'المساعدة القريبة' : 'Help near you'}</Text>
          <Text style={[s.subtitle, { color: theme.muted }]}>{ar ? 'متابعة مباشرة حول موقعك' : 'Live services around your location'}</Text>
        </View>
        <Pressable onPress={() => router.push('/assistant')} style={[s.filter, { backgroundColor: theme.primarySoft }]}>
          <Ionicons name="sparkles" size={19} color={theme.primary} />
        </Pressable>
      </Glass>

      <View style={s.chips}>
        <Pill label={ar ? 'ونش' : 'Recovery'} icon="car-outline" />
        <Pill label={ar ? 'كراجات' : 'Garages'} tone="blue" icon="construct-outline" />
      </View>

      <Pressable style={[s.locate, { backgroundColor: theme.surfaceElevated, borderColor: theme.line }]}>
        <Ionicons name="locate" size={21} color={theme.primary} />
      </Pressable>

      <Card style={s.bottom}>
        <View style={[s.handle, { backgroundColor: theme.lineStrong }]} />
        <View style={s.sheetHead}>
          <View>
            <Text style={[s.sheetEyebrow, { color: theme.primary }]}>{ar ? 'أقرب مزود متاح' : 'NEAREST AVAILABLE'}</Text>
            <Text style={[s.sheetTitle, { color: theme.ink }]}>{ar ? 'ونش معتمد قريب منك' : 'Verified recovery nearby'}</Text>
          </View>
          <View style={[s.eta, { backgroundColor: theme.primarySoft }]}>
            <Text style={[s.etaValue, { color: theme.primary }]}>8</Text>
            <Text style={[s.etaLabel, { color: theme.muted }]}>{ar ? 'دقيقة' : 'MIN'}</Text>
          </View>
        </View>

        <View style={[s.divider, { backgroundColor: theme.line }]} />

        <View style={s.driverRow}>
          <View style={[s.driverAvatar, { backgroundColor: theme.primarySoft }]}>
            <Ionicons name="person" size={21} color={theme.primary} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[s.name, { color: theme.ink }]}>{ar ? 'أحمد الحوسني' : 'Ahmed Al Hosani'}</Text>
            <Text style={[s.meta, { color: theme.muted }]}>{ar ? '4.9 ★ · ونش معتمد · دبي R 43821' : '4.9 ★ · Verified recovery · Dubai R 43821'}</Text>
          </View>
        </View>

        <View style={s.actions}>
          <Pressable style={[s.secondary, { backgroundColor: theme.primarySoft }]} onPress={() => router.push('/assistant')}>
            <Ionicons name="sparkles" size={17} color={theme.primary} />
            <Text style={[s.secondaryText, { color: theme.primary }]}>Carma AI</Text>
          </Pressable>
          <Pressable style={[s.button, { backgroundColor: theme.primary }]} onPress={() => router.push('/request')}>
            <Ionicons name="navigate" size={17} color="#fff" />
            <Text style={s.buttonText}>{ar ? 'اطلبي الونش' : 'Request recovery'}</Text>
          </Pressable>
        </View>
      </Card>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1 },
  mapShell: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#E8F3F0',
    overflow: 'hidden'
  },
  mapGrid: {
    position: 'absolute',
    inset: 0,
    backgroundColor: '#EBF4F3',
    opacity: 0.9,
    borderWidth: 1,
    borderColor: '#D6E8E0'
  },
  route: {
    position: 'absolute',
    left: 62,
    top: 140,
    right: 80,
    height: 130,
    borderRadius: 30,
    borderWidth: 2,
    transform: [{ rotate: '-35deg' }],
    opacity: 0.8
  },
  route2: {
    position: 'absolute',
    left: 110,
    bottom: 170,
    right: 100,
    height: 150,
    borderRadius: 30,
    borderWidth: 2,
    transform: [{ rotate: '24deg' }],
    opacity: 0.8
  },
  pin: {
    position: 'absolute',
    width: 38,
    height: 38,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#F3F8FF'
  },
  topBar: {
    position: 'absolute',
    top: 56,
    left: 16,
    right: 16,
    padding: 15,
    borderRadius: 21,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: { fontSize: 19, fontWeight: '900' },
  subtitle: { fontSize: 10.5, marginTop: 3 },
  filter: { width: 42, height: 42, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  chips: { position: 'absolute', top: 134, left: 16, right: 16, flexDirection: 'row', gap: 7 },
  locate: { position: 'absolute', right: 18, bottom: 342, width: 46, height: 46, borderRadius: 16, borderWidth: 1, alignItems: 'center', justifyContent: 'center' },
  bottom: { position: 'absolute', left: 12, right: 12, bottom: 93, padding: 17 },
  handle: { width: 36, height: 4, borderRadius: 2, alignSelf: 'center', marginBottom: 15 },
  sheetHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  sheetEyebrow: { fontSize: 8.5, fontWeight: '800', letterSpacing: 0.6 },
  sheetTitle: { fontSize: 15, fontWeight: '900', marginTop: 4 },
  eta: { width: 52, height: 52, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  etaValue: { fontSize: 18, fontWeight: '900' },
  etaLabel: { fontSize: 7, fontWeight: '800' },
  divider: { height: 1, marginVertical: 14 },
  driverRow: { flexDirection: 'row', alignItems: 'center', gap: 11 },
  driverAvatar: { width: 48, height: 48, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  name: { fontSize: 13.5, fontWeight: '800' },
  meta: { fontSize: 9.5, marginTop: 4 },
  actions: { flexDirection: 'row', gap: 9, marginTop: 15 },
  secondary: { height: 49, paddingHorizontal: 15, borderRadius: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 7 },
  secondaryText: { fontSize: 11, fontWeight: '800' },
  button: { flex: 1, height: 49, borderRadius: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
  buttonText: { color: '#fff', fontWeight: '800', fontSize: 12 }
}) as Record<string, any>;

