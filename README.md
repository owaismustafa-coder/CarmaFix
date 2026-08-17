# Carma Fix — Expo SDK 54

Carma Fix is a UAE-focused roadside assistance and garage service SaaS customer application built with React Native, Expo Router and Expo SDK 54.

## Version 1.2.0

This build expands the modern UI prototype into a connected functional product flow:

- Multi-vehicle **My Garage** with persistent local storage
- Visual UAE-relevant car brand and model catalog with representative vehicle photos
- Vehicle year, plate, VIN-ready, mileage, fuel and transmission data model
- Roadside request uses the currently selected vehicle
- Repair/service catalog with categories, parts, labour, duration and warranty placeholders
- Parts catalog with search and vehicle-fitment notice
- Service selection cart and preliminary estimate
- UAE VAT 5% estimate calculation
- Payment method selection: Apple Pay UI, cards and secure payment-link option
- Demo payment provider that records successful transactions locally
- Payment history and default payment method screen
- Existing live map, garage/recovery mock data, job tracking and bilingual English/Arabic UI
- Expo SDK 54 + EAS build configuration preserved

## Important: production payments

The included payment flow is intentionally a **demo provider** so the complete customer journey works without merchant secrets. It does not charge real cards. Before launch, replace `src/services/payment.ts` with your approved payment provider using server-created payment intents/sessions. Never store secret merchant keys in the mobile app.

Recommended integration targets include Stripe where appropriate, or a UAE payment service provider supported by your acquiring bank. Apple Pay / Google Pay normally require a development/production build and merchant configuration.

## Install

```bash
npm install
npx expo install --fix
npx expo-doctor
npx expo start
```

Press `i` for iOS Simulator after Xcode/iOS Simulator is installed.

## Main routes

- `/(tabs)` — Dashboard
- `/(tabs)/services` — Repair & service catalog
- `/(tabs)/map` — Live recovery/garage map
- `/(tabs)/jobs` — Job tracking
- `/(tabs)/settings` — Account/settings
- `/vehicles` — My Garage
- `/vehicle-add` — Add/select make/model/year
- `/parts` — Searchable parts catalog
- `/service-summary` — Estimate review
- `/payment/custom` — Payment-method checkout
- `/payment-methods` — Payment preferences/history
- `/request` — Roadside assistance

## Data/API upgrade path

Current vehicle/catalog/job/payment records are local/mock data for product development. The types and service adapter are separated so they can be replaced with a real backend later (Supabase, Firebase, custom Node API, etc.) for authentication, live recovery GPS, multi-tenant garages, inventory, technician diagnosis, push notifications, invoices and real payments.

## Carma AI (v1.3)
The app includes a working contextual demo assistant. It uses safe local fallback logic so the UI can be tested without any API key. For production, set `EXPO_PUBLIC_AI_PROXY_URL` to your own authenticated backend endpoint. Keep provider/OpenAI API keys only on the server.

## Appearance
Carma Fix now includes Light, Dark and System modes in Settings. iOS uses `expo-blur` for the Liquid Glass-inspired material surfaces; Android uses a stable translucent fallback under Expo SDK 54.

