import { PaymentMethod, PaymentRecord } from '@/types';

export type PaymentRequest={jobId:string; amount:number; method:PaymentMethod};

// Demo provider: completes payments locally so the full product flow can be tested.
// Replace this adapter with Stripe / Network International server-created payment intents before production.
export async function processPayment(req:PaymentRequest):Promise<PaymentRecord>{
  await new Promise(r=>setTimeout(r,900));
  return {
    id:`PAY-${Date.now()}`,
    jobId:req.jobId,
    amount:req.amount,
    method:req.method.label,
    status:'paid',
    createdAt:new Date().toISOString(),
    reference:`CF${Math.floor(100000+Math.random()*899999)}`
  };
}
