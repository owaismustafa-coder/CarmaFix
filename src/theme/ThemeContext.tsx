import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext,useContext,useEffect,useMemo,useState} from 'react';
import {Appearance,ColorSchemeName} from 'react-native';

export type ThemeMode='light'|'dark'|'system';
const light={mode:'light' as const,canvas:'#F3F6F8',surface:'rgba(255,255,255,.72)',surfaceSolid:'#FFFFFF',surfaceElevated:'rgba(255,255,255,.88)',ink:'#0B1220',ink2:'#283444',muted:'#6F7B88',muted2:'#99A3AE',primary:'#0A8F69',primaryDark:'#05654B',primarySoft:'rgba(20,184,134,.12)',line:'rgba(122,137,151,.20)',lineStrong:'rgba(122,137,151,.34)',glassBorder:'rgba(255,255,255,.72)',glassHighlight:'rgba(255,255,255,.86)',warning:'#F4A340',warningSoft:'rgba(244,163,64,.14)',danger:'#E45757',dangerSoft:'rgba(228,87,87,.13)',blue:'#4178E7',blueSoft:'rgba(65,120,231,.12)',purple:'#7859D8',purpleSoft:'rgba(120,89,216,.12)',charcoal:'#0E1715',tab:'rgba(248,251,252,.76)',shadow:'#20302B',mapSheet:'rgba(255,255,255,.83)'};
const dark={mode:'dark' as const,canvas:'#070A0E',surface:'rgba(22,27,33,.66)',surfaceSolid:'#11161D',surfaceElevated:'rgba(28,34,42,.82)',ink:'#F5F7FA',ink2:'#D8DEE7',muted:'#9BA6B2',muted2:'#6E7986',primary:'#3ED7A4',primaryDark:'#16A87B',primarySoft:'rgba(62,215,164,.13)',line:'rgba(224,232,240,.10)',lineStrong:'rgba(224,232,240,.18)',glassBorder:'rgba(255,255,255,.12)',glassHighlight:'rgba(255,255,255,.18)',warning:'#FFB85C',warningSoft:'rgba(255,184,92,.12)',danger:'#FF6A6A',dangerSoft:'rgba(255,106,106,.12)',blue:'#78A6FF',blueSoft:'rgba(120,166,255,.12)',purple:'#A68BFF',purpleSoft:'rgba(166,139,255,.12)',charcoal:'#050807',tab:'rgba(17,22,29,.74)',shadow:'#000000',mapSheet:'rgba(17,22,29,.84)'};
export type ThemePalette=typeof light|typeof dark;
const Ctx=createContext<{mode:ThemeMode;setMode:(m:ThemeMode)=>void;scheme:'light'|'dark';theme:ThemePalette}>({mode:'system',setMode:()=>{},scheme:'light',theme:light});
export function ThemeProvider({children}:{children:React.ReactNode}){
 const [mode,setModeState]=useState<ThemeMode>('system'); const [system,setSystem]=useState<ColorSchemeName>(Appearance.getColorScheme());
 useEffect(()=>{AsyncStorage.getItem('themeMode').then(v=>{if(v==='light'||v==='dark'||v==='system')setModeState(v)});const s=Appearance.addChangeListener(({colorScheme})=>setSystem(colorScheme));return()=>s.remove()},[]);
 const setMode=(m:ThemeMode)=>{setModeState(m);AsyncStorage.setItem('themeMode',m)};
 const scheme: 'light'|'dark'=mode==='system'?(system==='dark'?'dark':'light'):mode;
 return <Ctx.Provider value={useMemo(()=>({mode,setMode,scheme,theme:scheme==='dark'?dark:light}),[mode,scheme])}>{children}</Ctx.Provider>
}
export const useTheme=()=>useContext(Ctx);
