import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { carBrands, defaultVehicles, paymentMethods } from '@/data/catalog';
import { currentJob } from '@/data/mock';
import { Job, Language, PaymentMethod, PaymentRecord, RepairService, Vehicle } from '@/types';

type AppState={
 language:Language; setLanguage:(v:Language)=>void;
 job:Job; updateStatus:(s:Job['status'])=>void;
 vehicles:Vehicle[]; selectedVehicleId:string; selectedVehicle?:Vehicle; selectVehicle:(id:string)=>void; addVehicle:(v:Vehicle)=>void; removeVehicle:(id:string)=>void;
 selectedServices:RepairService[]; toggleService:(s:RepairService)=>void; clearServices:()=>void;
 methods:PaymentMethod[]; selectedPaymentId:string; selectPayment:(id:string)=>void; payments:PaymentRecord[]; recordPayment:(p:PaymentRecord)=>void;
};
const Ctx=createContext<AppState|undefined>(undefined);
export function AppProvider({children}:{children:React.ReactNode}){
 const [language,setLanguageState]=useState<Language>('en');
 const [job,setJob]=useState(currentJob);
 const [vehicles,setVehicles]=useState<Vehicle[]>(defaultVehicles);
 const [selectedVehicleId,setSelectedVehicleId]=useState(defaultVehicles[0].id);
 const [selectedServices,setSelectedServices]=useState<RepairService[]>([]);
 const [selectedPaymentId,setSelectedPaymentId]=useState(paymentMethods[0].id);
 const [payments,setPayments]=useState<PaymentRecord[]>([]);
 useEffect(()=>{
  AsyncStorage.multiGet(['language','vehicles','selectedVehicleId','payments']).then(entries=>{
   const map=Object.fromEntries(entries);
   if(map.language==='ar'||map.language==='en')setLanguageState(map.language);
   if(map.vehicles){try{const v=JSON.parse(map.vehicles); if(Array.isArray(v)&&v.length)setVehicles(v)}catch{}}
   if(map.selectedVehicleId)setSelectedVehicleId(map.selectedVehicleId);
   if(map.payments){try{setPayments(JSON.parse(map.payments)||[])}catch{}}
  });
 },[]);
 const persistVehicles=(next:Vehicle[])=>{setVehicles(next); AsyncStorage.setItem('vehicles',JSON.stringify(next));};
 const setLanguage=(v:Language)=>{setLanguageState(v); AsyncStorage.setItem('language',v)};
 const selectVehicle=(id:string)=>{setSelectedVehicleId(id); AsyncStorage.setItem('selectedVehicleId',id)};
 const addVehicle=(v:Vehicle)=>{const next=[...vehicles,v];persistVehicles(next);selectVehicle(v.id)};
 const removeVehicle=(id:string)=>{const next=vehicles.filter(v=>v.id!==id);persistVehicles(next);if(id===selectedVehicleId&&next[0])selectVehicle(next[0].id)};
 const updateStatus=(status:Job['status'])=>setJob(j=>({...j,status,updatedAt:'Just now'}));
 const toggleService=(service:RepairService)=>setSelectedServices(list=>list.some(s=>s.id===service.id)?list.filter(s=>s.id!==service.id):[...list,service]);
 const clearServices=()=>setSelectedServices([]);
 const selectPayment=(id:string)=>setSelectedPaymentId(id);
 const recordPayment=(p:PaymentRecord)=>{const next=[p,...payments];setPayments(next);AsyncStorage.setItem('payments',JSON.stringify(next));setJob(j=>({...j,paymentStatus:'paid',status:'approved'}));};
 const selectedVehicle=vehicles.find(v=>v.id===selectedVehicleId) || vehicles[0];
 return <Ctx.Provider value={useMemo(()=>({language,setLanguage,job,updateStatus,vehicles,selectedVehicleId,selectedVehicle,selectVehicle,addVehicle,removeVehicle,selectedServices,toggleService,clearServices,methods:paymentMethods,selectedPaymentId,selectPayment,payments,recordPayment}),[language,job,vehicles,selectedVehicleId,selectedServices,selectedPaymentId,payments])}>{children}</Ctx.Provider>;
}
export const useApp=()=>{const v=useContext(Ctx); if(!v)throw new Error('useApp must be inside AppProvider'); return v};
export { carBrands };
