export type Language = 'en' | 'ar';
export type JobStatus = 'requested'|'recovery_assigned'|'vehicle_collected'|'garage_received'|'diagnosing'|'estimate_ready'|'approved'|'repairing'|'ready'|'completed';

export type Vehicle = {
  id:string; brandId:string; brand:string; model:string; year:number; trim?:string;
  plate:string; vin?:string; mileage:number; fuel:'Petrol'|'Hybrid'|'Electric'|'Diesel';
  transmission:'Automatic'|'Manual'; image:string; color?:string; primary?:boolean;
};

export type CarModel = { name:string; image:string; years:number[]; body:string };
export type CarBrand = { id:string; name:string; country:string; accent:string; models:CarModel[] };

export type ServiceCategory = { id:string; name:string; nameAr:string; icon:string; description:string; descriptionAr:string; services:RepairService[] };
export type RepairService = { id:string; name:string; nameAr:string; fromPrice:number; labour:number; duration:string; part?:string; partPrice?:number; warranty?:string };
export type EstimateLine = { id:string; serviceId?:string; title:string; kind:'part'|'labour'|'service'|'fee'; qty:number; unitPrice:number; approved:boolean };

export type PaymentMethod = { id:string; type:'card'|'apple_pay'|'google_pay'|'link'; label:string; detail:string; icon:string; default?:boolean };
export type PaymentRecord = { id:string; jobId:string; amount:number; method:string; status:'paid'|'pending'|'failed'; createdAt:string; reference:string };

export type Job = { id:string; vehicle:string; vehicleId?:string; plate:string; garage:string; recovery:string; eta:string; status:JobStatus; total:number; issue:string; updatedAt:string; estimate?:EstimateLine[]; paymentStatus?:'unpaid'|'paid'|'partial' };
