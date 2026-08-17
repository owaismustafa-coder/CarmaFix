import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@/theme';
import { JobStatus } from '@/types';
const steps: {key:JobStatus; en:string; ar:string}[]=[
 {key:'requested',en:'Request received',ar:'تم استلام الطلب'},{key:'recovery_assigned',en:'Recovery assigned',ar:'تم تعيين الونش'},
 {key:'vehicle_collected',en:'Vehicle collected',ar:'تم استلام السيارة'},{key:'garage_received',en:'Received by garage',ar:'وصلت السيارة للكراج'},
 {key:'diagnosing',en:'Diagnosis in progress',ar:'جاري فحص السيارة'},{key:'estimate_ready',en:'Estimate ready',ar:'عرض السعر جاهز'},
 {key:'repairing',en:'Repair in progress',ar:'جاري الإصلاح'},{key:'ready',en:'Ready for collection',ar:'السيارة جاهزة'}];
export function StatusTimeline({status,lang}:{status:JobStatus;lang:'en'|'ar'}){
 let index=steps.findIndex(x=>x.key===status); if(status==='approved')index=5;if(status==='completed')index=steps.length;
 return <View>{steps.map((x,i)=><View key={x.key} style={s.item}><View style={s.rail}><View style={[s.dot,i<=index&&s.dotOn]}/>{i<steps.length-1&&<View style={[s.line,i<index&&s.lineOn]}/>}</View><View style={s.body}><Text style={[s.title,i>index&&s.off]}>{lang==='ar'?x.ar:x.en}</Text><Text style={s.meta}>{i<index?'Completed':i===index?'Current step':'Upcoming'}</Text></View></View>)}</View>
}
const s=StyleSheet.create({item:{flexDirection:'row',minHeight:58},rail:{width:28,alignItems:'center'},dot:{width:14,height:14,borderRadius:7,backgroundColor:'#D6DFDC',borderWidth:3,borderColor:'#EFF4F2'},dotOn:{backgroundColor:colors.primary,borderColor:'#DDF4EC'},line:{width:2,flex:1,backgroundColor:'#E1E8E6'},lineOn:{backgroundColor:'#8FD7C2'},body:{paddingLeft:8,paddingBottom:16},title:{fontSize:14,fontWeight:'800',color:colors.ink},off:{color:'#9AA8A4'},meta:{fontSize:11,color:colors.muted,marginTop:3}}) as Record<string, any>
