import type { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Carma Fix',
  slug: 'carma-fix',
  scheme: 'carmafix',
  version: '1.1.0',
  orientation: 'portrait',
  userInterfaceStyle: 'light',
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'ae.carmafix.customer',
    infoPlist: {
      NSLocationWhenInUseUsageDescription: 'Carma Fix uses your location to dispatch and track nearby recovery vehicles.'
    }
  },
  android: {
    package: 'ae.carmafix.customer',
    adaptiveIcon: { backgroundColor: '#F4FAF8' },
    permissions: ['ACCESS_COARSE_LOCATION', 'ACCESS_FINE_LOCATION'],
    config: {
      googleMaps: {
        apiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY || ''
      }
    }
  },
  plugins: [
    'expo-router',
    'expo-font',
    ['expo-location', { locationWhenInUsePermission: 'Allow Carma Fix to use your location for roadside assistance.' }],
    ['expo-notifications', { defaultChannel: 'service-updates' }]
  ],
  experiments: { typedRoutes: true },
  extra: {
    eas: { projectId: process.env.EXPO_PUBLIC_EAS_PROJECT_ID || 'REPLACE_WITH_EAS_PROJECT_ID' },
    apiBaseUrl: process.env.EXPO_PUBLIC_API_BASE_URL || 'https://api.example.com'
  }
});
