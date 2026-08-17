import { Job } from '@/types';
export const garages = [
  { id:'g1', name:'Al Quoz Auto Care', lat:25.1348, lng:55.2250, rating:4.9, eta:'18 min' },
  { id:'g2', name:'Sheikh Zayed Motor Works', lat:25.1587, lng:55.2071, rating:4.8, eta:'24 min' }
];
export const trucks = [
  { id:'r1', driver:'Ahmed', lat:25.1762, lng:55.2464, eta:'8 min', plate:'Dubai R 43821' },
  { id:'r2', driver:'Saeed', lat:25.1911, lng:55.2581, eta:'12 min', plate:'Dubai R 61208' }
];
export const currentJob: Job = {
  id:'CF-24819', vehicle:'2023 Lexus NX 350', plate:'Dubai A 58291', garage:'Al Quoz Auto Care', recovery:'Ahmed · Dubai R 43821', eta:'8 min',
  status:'diagnosing', total:1260, issue:'Battery health + alternator charging system', updatedAt:'Today, 8:42 PM'
};
