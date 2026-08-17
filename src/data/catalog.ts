import { CarBrand, PaymentMethod, ServiceCategory, Vehicle } from '@/types';

const img=(id:string)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

export const carBrands:CarBrand[] = [
 {id:'toyota',name:'Toyota',country:'Japan',accent:'#EB0A1E',models:[
  {name:'Land Cruiser',image:img('photo-1533473359331-0135ef1b58bf'),years:[2026,2025,2024,2023,2022],body:'SUV'},
  {name:'Camry',image:img('photo-1550355291-bbee04a92027'),years:[2026,2025,2024,2023],body:'Sedan'},
  {name:'RAV4',image:img('photo-1519641471654-76ce0107ad1b'),years:[2026,2025,2024,2023],body:'SUV'}]},
 {id:'nissan',name:'Nissan',country:'Japan',accent:'#C3002F',models:[
  {name:'Patrol',image:img('photo-1511527844068-006b95d162c2'),years:[2026,2025,2024,2023,2022],body:'SUV'},
  {name:'X-Trail',image:img('photo-1517949908119-7209a9f7d8d3'),years:[2026,2025,2024,2023],body:'SUV'},
  {name:'Altima',image:img('photo-1494905998402-395d579af36f'),years:[2025,2024,2023,2022],body:'Sedan'}]},
 {id:'lexus',name:'Lexus',country:'Japan',accent:'#1A1A1A',models:[
  {name:'NX 350',image:img('photo-1549399542-7e3f8b79c341'),years:[2026,2025,2024,2023,2022],body:'SUV'},
  {name:'RX 350',image:img('photo-1504215680853-026ed2a45def'),years:[2026,2025,2024,2023],body:'SUV'},
  {name:'ES 350',image:img('photo-1553440569-bcc63803a83d'),years:[2025,2024,2023,2022],body:'Sedan'}]},
 {id:'mercedes',name:'Mercedes-Benz',country:'Germany',accent:'#111827',models:[
  {name:'C-Class',image:img('photo-1618843479313-40f8afb4b4d8'),years:[2026,2025,2024,2023],body:'Sedan'},
  {name:'GLE',image:img('photo-1606664515524-ed2f786a0bd6'),years:[2026,2025,2024,2023],body:'SUV'},
  {name:'G-Class',image:img('photo-1520031441872-265e4ff70366'),years:[2026,2025,2024,2023],body:'SUV'}]},
 {id:'bmw',name:'BMW',country:'Germany',accent:'#1C69D4',models:[
  {name:'3 Series',image:img('photo-1555215695-3004980ad54e'),years:[2026,2025,2024,2023],body:'Sedan'},
  {name:'X5',image:img('photo-1556189250-72ba954cfc2b'),years:[2026,2025,2024,2023],body:'SUV'},
  {name:'X3',image:img('photo-1556189250-72ba954cfc2b'),years:[2026,2025,2024,2023],body:'SUV'}]},
 {id:'audi',name:'Audi',country:'Germany',accent:'#BB0A30',models:[
  {name:'A6',image:img('photo-1542282088-72c9c27ed0cd'),years:[2026,2025,2024,2023],body:'Sedan'},
  {name:'Q5',image:img('photo-1544636331-e26879cd4d9b'),years:[2026,2025,2024,2023],body:'SUV'},
  {name:'Q8',image:img('photo-1544636331-e26879cd4d9b'),years:[2026,2025,2024,2023],body:'SUV'}]},
 {id:'landrover',name:'Land Rover',country:'United Kingdom',accent:'#005A2B',models:[
  {name:'Range Rover',image:img('photo-1606664515524-ed2f786a0bd6'),years:[2026,2025,2024,2023],body:'SUV'},
  {name:'Defender',image:img('photo-1533473359331-0135ef1b58bf'),years:[2026,2025,2024,2023],body:'SUV'}]},
 {id:'tesla',name:'Tesla',country:'USA',accent:'#E82127',models:[
  {name:'Model Y',image:img('photo-1560958089-b8a1929cea89'),years:[2026,2025,2024,2023],body:'EV SUV'},
  {name:'Model 3',image:img('photo-1561580125-028ee3bd62eb'),years:[2026,2025,2024,2023],body:'EV Sedan'}]},
 {id:'ford',name:'Ford',country:'USA',accent:'#003478',models:[
  {name:'Explorer',image:img('photo-1549317661-bd32c8ce0db2'),years:[2026,2025,2024,2023],body:'SUV'},
  {name:'Mustang',image:img('photo-1584345604476-8ec5e12e42dd'),years:[2026,2025,2024,2023],body:'Coupe'}]},
 {id:'chevrolet',name:'Chevrolet',country:'USA',accent:'#D8A928',models:[
  {name:'Tahoe',image:img('photo-1533473359331-0135ef1b58bf'),years:[2026,2025,2024,2023],body:'SUV'},
  {name:'Captiva',image:img('photo-1519641471654-76ce0107ad1b'),years:[2026,2025,2024,2023],body:'SUV'}]},
 {id:'gmc',name:'GMC',country:'USA',accent:'#C00',models:[
  {name:'Yukon',image:img('photo-1533473359331-0135ef1b58bf'),years:[2026,2025,2024,2023],body:'SUV'},
  {name:'Sierra',image:img('photo-1551830820-330a71b99659'),years:[2026,2025,2024,2023],body:'Pickup'}]},
 {id:'hyundai',name:'Hyundai',country:'South Korea',accent:'#002C5F',models:[
  {name:'Tucson',image:img('photo-1519641471654-76ce0107ad1b'),years:[2026,2025,2024,2023],body:'SUV'},
  {name:'Santa Fe',image:img('photo-1511527844068-006b95d162c2'),years:[2026,2025,2024,2023],body:'SUV'}]},
 {id:'kia',name:'Kia',country:'South Korea',accent:'#05141F',models:[
  {name:'Sportage',image:img('photo-1519641471654-76ce0107ad1b'),years:[2026,2025,2024,2023],body:'SUV'},
  {name:'Sorento',image:img('photo-1511527844068-006b95d162c2'),years:[2026,2025,2024,2023],body:'SUV'}]},
 {id:'porsche',name:'Porsche',country:'Germany',accent:'#B12B28',models:[
  {name:'Cayenne',image:img('photo-1503736334956-4c8f8e92946d'),years:[2026,2025,2024,2023],body:'SUV'},
  {name:'Macan',image:img('photo-1503736334956-4c8f8e92946d'),years:[2026,2025,2024,2023],body:'SUV'}]},
];

export const defaultVehicles:Vehicle[]=[
 {id:'v1',brandId:'lexus',brand:'Lexus',model:'NX 350',year:2023,trim:'Premium',plate:'Dubai A 58291',vin:'JTJHGCEZ0P2008421',mileage:42180,fuel:'Petrol',transmission:'Automatic',image:carBrands.find(b=>b.id==='lexus')!.models[0].image,color:'Pearl White',primary:true},
 {id:'v2',brandId:'toyota',brand:'Toyota',model:'Land Cruiser',year:2025,trim:'GXR',plate:'Dubai N 21417',mileage:11320,fuel:'Petrol',transmission:'Automatic',image:carBrands.find(b=>b.id==='toyota')!.models[0].image,color:'Black'}
];

export const serviceCategories:ServiceCategory[]=[
 {id:'battery',name:'Battery & Electrical',nameAr:'البطارية والكهرباء',icon:'battery-charging',description:'Starting, charging, lighting and electrical diagnosis.',descriptionAr:'فحص البطارية والشحن والأنظمة الكهربائية.',services:[
  {id:'battery-test',name:'Battery health test',nameAr:'فحص صحة البطارية',fromPrice:80,labour:80,duration:'20 min',warranty:'Diagnostic report'},
  {id:'battery-replace',name:'Battery replacement',nameAr:'تبديل البطارية',fromPrice:590,labour:90,duration:'45 min',part:'Premium AGM battery',partPrice:500,warranty:'12–24 months'},
  {id:'alternator',name:'Alternator diagnosis / replacement',nameAr:'فحص أو تبديل الدينمو',fromPrice:980,labour:280,duration:'2–4 hr',part:'Alternator',partPrice:700,warranty:'6 months'}]},
 {id:'engine',name:'Engine',nameAr:'المحرك',icon:'speedometer',description:'Diagnostics, ignition, belts, mounts and engine repairs.',descriptionAr:'تشخيص وإصلاح أعطال المحرك.',services:[
  {id:'engine-diagnostic',name:'Computer engine diagnosis',nameAr:'فحص كمبيوتر للمحرك',fromPrice:180,labour:180,duration:'45 min'},
  {id:'spark-plugs',name:'Spark plugs replacement',nameAr:'تبديل شمعات الاحتراق',fromPrice:420,labour:180,duration:'1.5 hr',part:'Spark plug set',partPrice:240,warranty:'3 months'},
  {id:'engine-mount',name:'Engine mount replacement',nameAr:'تبديل قواعد المحرك',fromPrice:850,labour:350,duration:'3 hr',part:'Engine mount',partPrice:500,warranty:'6 months'}]},
 {id:'brakes',name:'Brakes',nameAr:'الفرامل',icon:'disc',description:'Pads, discs, fluid and braking system checks.',descriptionAr:'فحص وتبديل قطع نظام الفرامل.',services:[
  {id:'brake-pads',name:'Front brake pads',nameAr:'سفايف أمامية',fromPrice:620,labour:220,duration:'1.5 hr',part:'Brake pad set',partPrice:400,warranty:'6 months'},
  {id:'brake-discs',name:'Brake discs + pads',nameAr:'هوبات وسفايف',fromPrice:1450,labour:350,duration:'2.5 hr',part:'Disc & pad kit',partPrice:1100,warranty:'6 months'},
  {id:'brake-fluid',name:'Brake fluid service',nameAr:'تغيير زيت الفرامل',fromPrice:290,labour:140,duration:'45 min',part:'DOT brake fluid',partPrice:150}]},
 {id:'tyres',name:'Tyres & Wheels',nameAr:'الإطارات والعجلات',icon:'ellipse',description:'Puncture, replacement, balancing and alignment.',descriptionAr:'إصلاح وتبديل الإطارات والميزان.',services:[
  {id:'puncture',name:'Puncture repair',nameAr:'إصلاح بنشر',fromPrice:90,labour:90,duration:'25 min'},
  {id:'alignment',name:'Wheel alignment',nameAr:'ميزان أذرعة',fromPrice:180,labour:180,duration:'45 min'},
  {id:'tyre-replace',name:'Tyre replacement',nameAr:'تبديل إطار',fromPrice:450,labour:80,duration:'30 min',part:'Tyre',partPrice:370,warranty:'Manufacturer warranty'}]},
 {id:'ac',name:'AC & Cooling',nameAr:'التكييف والتبريد',icon:'snow',description:'AC gas, compressor, radiator and cooling diagnosis.',descriptionAr:'فحص التكييف ونظام تبريد السيارة.',services:[
  {id:'ac-check',name:'AC performance check',nameAr:'فحص أداء المكيف',fromPrice:150,labour:150,duration:'30 min'},
  {id:'ac-gas',name:'AC gas recharge',nameAr:'تعبئة غاز المكيف',fromPrice:320,labour:150,duration:'45 min',part:'Refrigerant',partPrice:170},
  {id:'compressor',name:'AC compressor replacement',nameAr:'تبديل كمبروسر المكيف',fromPrice:1750,labour:450,duration:'4 hr',part:'AC compressor',partPrice:1300,warranty:'6 months'}]},
 {id:'suspension',name:'Suspension',nameAr:'التعليق',icon:'git-compare',description:'Shocks, arms, bushes and ride-quality repairs.',descriptionAr:'فحص المساعدات والأذرعة ونظام التعليق.',services:[
  {id:'suspension-check',name:'Suspension inspection',nameAr:'فحص التعليق',fromPrice:150,labour:150,duration:'40 min'},
  {id:'shock',name:'Shock absorber replacement',nameAr:'تبديل مساعد',fromPrice:950,labour:300,duration:'2 hr',part:'Shock absorber',partPrice:650,warranty:'6 months'}]},
 {id:'service',name:'Oil & Periodic Service',nameAr:'الزيوت والصيانة الدورية',icon:'water',description:'Oil, filters, fluids and scheduled maintenance.',descriptionAr:'الزيوت والفلاتر والصيانة الدورية.',services:[
  {id:'minor-service',name:'Minor service',nameAr:'سيرفس خفيف',fromPrice:390,labour:150,duration:'1 hr',part:'Oil + filter',partPrice:240,warranty:'Service guarantee'},
  {id:'major-service',name:'Major service',nameAr:'سيرفس شامل',fromPrice:1150,labour:350,duration:'3 hr',part:'Oil + filters + plugs',partPrice:800,warranty:'Service guarantee'}]},
 {id:'body',name:'Body, Paint & Glass',nameAr:'الهيكل والصبغ والزجاج',icon:'color-palette',description:'Dent repair, paint, detailing and glass replacement.',descriptionAr:'إصلاح الهيكل والصبغ والزجاج.',services:[
  {id:'paint-panel',name:'Panel paint',nameAr:'صبغ قطعة',fromPrice:650,labour:650,duration:'1–2 days'},
  {id:'dent',name:'Paintless dent repair',nameAr:'إصلاح ضربة بدون صبغ',fromPrice:350,labour:350,duration:'2 hr'},
  {id:'windshield',name:'Windshield replacement',nameAr:'تبديل الزجاج الأمامي',fromPrice:1200,labour:300,duration:'3 hr',part:'Windshield',partPrice:900,warranty:'Installation warranty'}]},
];

export const paymentMethods:PaymentMethod[]=[
 {id:'apple',type:'apple_pay',label:'Apple Pay',detail:'Fast and secure on iPhone',icon:'logo-apple',default:true},
 {id:'visa',type:'card',label:'Visa •••• 4242',detail:'Expires 12/29',icon:'card'},
 {id:'mastercard',type:'card',label:'Mastercard •••• 8821',detail:'Expires 08/28',icon:'card-outline'},
 {id:'link',type:'link',label:'Secure payment link',detail:'Send a hosted checkout link',icon:'link'}
];
