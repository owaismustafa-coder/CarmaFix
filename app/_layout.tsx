import 'react-native-gesture-handler';
import {Stack} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import {AppProvider} from '@/context/AppContext';
import {ThemeProvider,useTheme} from '@/theme';
function Navigation(){const {scheme,theme}=useTheme();return <><StatusBar style={scheme==='dark'?'light':'dark'}/><Stack screenOptions={{headerShown:false,contentStyle:{backgroundColor:theme.canvas}}}><Stack.Screen name="(tabs)"/><Stack.Screen name="assistant" options={{presentation:'modal'}}/><Stack.Screen name="request" options={{presentation:'modal'}}/><Stack.Screen name="job/[id]"/><Stack.Screen name="estimate/[id]"/><Stack.Screen name="payment/[id]"/></Stack></>}
export default function RootLayout(){return <ThemeProvider><AppProvider><Navigation/></AppProvider></ThemeProvider>}
