export {ThemeProvider,useTheme} from './ThemeContext';
export type {ThemeMode,ThemePalette} from './ThemeContext';
export const radius={xs:10,sm:14,md:18,lg:24,xl:30,pill:999};
export const shadowSoft={shadowColor:'#0B231B',shadowOffset:{width:0,height:7},shadowOpacity:.08,shadowRadius:20,elevation:3};
export const shadow={shadowColor:'#0B231B',shadowOffset:{width:0,height:14},shadowOpacity:.12,shadowRadius:30,elevation:6};
// Legacy light palette retained for secondary v1.2 routes while they migrate to useTheme.
export const colors={ink:'#0B1220',ink2:'#283444',muted:'#6F7B88',muted2:'#99A3AE',canvas:'#F3F6F8',surface:'#FFFFFF',white:'#FFFFFF',primary:'#0A8F69',primaryDark:'#05654B',primarySoft:'#E5F6EF',mint:'#DDF5EC',mint2:'#BEEAD9',line:'#E7ECE9',lineStrong:'#D6DFDA',warning:'#F4A340',warningSoft:'#FFF3DF',danger:'#E45757',dangerSoft:'#FDECEC',blue:'#4178E7',blueSoft:'#EAF0FF',purple:'#7859D8',purpleSoft:'#F0ECFF',charcoal:'#0E1715'};
