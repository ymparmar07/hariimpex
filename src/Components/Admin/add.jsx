import { getFirestore, doc, setDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxJPmDC5mgFNCoNRRmMhKVL9Pa6K2hjv4",
    authDomain: "hari-impex5.firebaseapp.com",
    projectId: "hari-impex5",
    storageBucket: "hari-impex5.appspot.com",
    messagingSenderId: "81821225787",
    appId: "1:81821225787:web:f35e5c01b03b0fc91d1d1e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const product = [
    {
      id: 1,
     title: "40*40 Mm Top Nozzell Aluminium Water Block",
     description: "<img class=\"alignnone size-medium wp-image-49409\" src=\"https://hariimpex.in/wp-content/uploads/2024/02/61HKThMKpML._AC_UF10001000_QL80_-300x252.jpg\" alt=\"\" width=\"300\" height=\"252\" /><img class=\"alignnone size-medium wp-image-49410\" src=\"https://hariimpex.in/wp-content/uploads/2024/02/61HKThMKpML._AC_UF10001000_QL80_-1-300x252.jpg\" alt=\"\" width=\"300\" height=\"252\" /><img class=\"alignnone size-medium wp-image-49411\" src=\"https://hariimpex.in/wp-content/uploads/2024/02/IMG-20240201-WA0018-300x300.jpg\" alt=\"\" width=\"300\" height=\"300\" />",
      featured: false,
      price: 465,
     saleprice: 325,
      category: "Water Block",
     image: "https://hariimpex.in/wp-content/uploads/2024/02/IMG-20240201-WA0018.jpg",
     stock: true
    },
    {
      id: 2,
     title: "Aquarium Chiller HI-150A with Shipping",
     description: "<blockquote>&nbsp;</blockquote>",
      featured: false,
      price: 26500,
     saleprice: 21500,
      category: "Aquarium Chiller",
     image: "https://hariimpex.in/wp-content/uploads/2023/04/IMG-20220419-WA0015.jpg",
     stock: true
    },
    {
      id: 3,
     title: "Aquarium Chiller HI-150A",
     description: "",
      featured: false,
      price: "",
     saleprice: "",
      category: "Uncategorized",
     image: "",
     stock: ""
    },
    {
      id: 4,
     title: "test",
     description: "",
      featured: false,
      price: 1,
     saleprice: "",
      category: "Uncategorized",
     image: "",
     stock: true
    },
    {
      id: 5,
     title: "Triple Peltier Module",
     description: "<p style=\"text-align: left\">Triple Peltier Module with Three fan Grill 12706 peltier 40mm heatsink with miniature fans</p>",
      featured: false,
      price: 5500,
     saleprice: 3600,
      category: "Cooling/Water Block accesories",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/Screenshot_2022-03-10-20-29-59-30_6012fa4d4ddec268fc5c7112cbb265e7-1.jpg",
     stock: true
    },
    {
      id: 6,
     title: "Dual Peltier Module with Miniature Fans",
     description: "<div><strong>Specifications:</strong>\n\n2 Core Refrigeration Thermoelectric Peltier Air Cooling Cooler   Power Supply</div>\n\n<div>Power: 120W (2 pcs 12705 chips)</div>\n\n<div>Current: 10A</div>\n\n<div>Voltage: DC12V</div>\n\n<div>Stable current: 7A</div>\n\n<div>Product size: 200 * 120 * 95mm</div>\n\n<div>\n\n</div>\n\n<div><strong>Feature:</strong></div>\n\n<div>\n\n<div>Stable work and low noise, no refrigerant required.</div>\n\n</div>\n\n<div>Can be used as dual-core cooling, air cooling device, cooling equipment.\n\nApplication: tablet, computer, experiment board, pet bed and other small space cooling.\n\nRefrigeration effect depends on the size of the cooling space, ambient temperature, heat insulation, seal ability ,etc.</div>\n\n<div>Suitable for small space cooling, semiconductor refrigeration learning theory, research solutions developed cooling equipment planning.</div>\n\n<div></div>\n\n<div></div>\n\n<div><strong>Application: </strong></div>\n\n<div>Tablet, computer, experiment board, pet bed and other small space cooling.</div>\n\n<div>Stable work and low noise, no refrigerant required.</div>",
      featured: false,
      price: 3500,
     saleprice: 2400,
      category: "Cooling/Water Block accesories",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/IMG-20220222-WA0010.jpg",
     stock: true
    },
    {
      id: 7,
     title: "TEC Peltier-12715",
     description: "",
      featured: false,
      price: 690,
     saleprice: 490,
      category: "Water Block",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/images-6.jpeg",
     stock: true
    },
    {
      id: 8,
     title: "Single peltier module",
     description: "",
      featured: false,
      price: 2050,
     saleprice: 1250,
      category: "Cooling/Water Block accesories",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/IMG_20210601_181334.jpg",
     stock: true
    },
    {
      id: 9,
     title: "12V 33Amp SMPS",
     description: "",
      featured: false,
      price: 2395,
     saleprice: 1695,
      category: "Cooling/Water Block accesories",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/IMG_20210531_192434.jpg",
     stock: true
    },
    {
      id: 10,
     title: "Hari Impex 12V 7 Amp SMPS",
     description: "",
      featured: false,
      price: 1195,
     saleprice: "",
      category: "Cooling/Water Block accesories",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/IMG_20210531_191602.jpg",
     stock: true
    },
    {
      id: 11,
     title: "Hari Impex 12V 20Amp SMPS",
     description: "",
      featured: false,
      price: 2195,
     saleprice: 1695,
      category: "Cooling/Water Block accesories",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/IMG_20210531_190520.jpg",
     stock: true
    },
    {
      id: 12,
     title: "Hari Impex 12V 15Amp Power supply",
     description: "",
      featured: false,
      price: 2095,
     saleprice: 1495,
      category: "Cooling/Water Block accesories",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/IMG_20210531_185403.jpg",
     stock: true
    },
    {
      id: 13,
     title: "Hari Impex 12V 10Amp SMPS",
     description: "",
      featured: false,
      price: 1895,
     saleprice: 1395,
      category: "Cooling/Water Block accesories",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/IMG_20210531_184224.jpg",
     stock: true
    },
    {
      id: 14,
     title: "Triple Peltier Water Cooling Module",
     description: "",
      featured: false,
      price: 3600,
     saleprice: "",
      category: "Water Block",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/300-mm-combo-main.jpg",
     stock: true
    },
    {
      id: 15,
     title: "Hari Impex 80*40mm Copper Water Block",
     description: "",
      featured: false,
      price: 3496,
     saleprice: 2250,
      category: "Water Block",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/80-40-side-nozell-3.jpg",
     stock: true
    },
    {
      id: 16,
     title: "CPU Water Cooling Block",
     description: "",
      featured: false,
      price: 2095,
     saleprice: 1495,
      category: "Water Block",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/Cpu-water-Block-4-1.jpg",
     stock: true
    },
    {
      id: 17,
     title: "Hari Impex 92 mm Fan grill Pack of 4",
     description: "",
      featured: false,
      price: 695,
     saleprice: 365,
      category: "Cooling/Water Block accesories",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/120-mm-fan-grill-pack-of-4.jpg",
     stock: true
    },
    {
      id: 18,
     title: "Hari Impex 92 mm Fan Grill",
     description: "",
      featured: false,
      price: 295,
     saleprice: 125,
      category: "Cooling/Water Block accesories",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/92-mm-fam-grill.jpg",
     stock: true
    },
    {
      id: 19,
     title: "92 mm 12 V DC Fan with Grill Combo",
     description: "",
      featured: false,
      price: 695,
     saleprice: 395,
      category: "Cooling/Water Block accesories",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/120-mm-fan-wuth-grill.jpg",
     stock: true
    },
    {
      id: 20,
     title: "300mm heatsink combo (without Peltier)",
     description: "<p style=\"text-align: left\">300mm heatsink combo includes 1 heatsink 300mm, 3 water block of 40mm *40mm*12mm, 3 clip set, three 12 V DC  100mm Fan with grill and PVC Pipe</p>\n\n&nbsp;",
      featured: false,
      price: 4500,
     saleprice: 2700,
      category: "Cooling/Water Block accesories",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/Screenshot_2020-08-25-21-00-45-42.jpg",
     stock: true
    },
    {
      id: 21,
     title: "Hari Impex Four Peltier Cooling Module",
     description: "",
      featured: false,
      price: 12995,
     saleprice: 9500,
      category: "Cooling/Water Block accesories",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/IMG-20200923-WA0004.jpg",
     stock: true
    },
    {
      id: 22,
     title: "120 * 240 mm Radiator Fan and Grill Combo Set",
     description: "",
      featured: false,
      price: 5995,
     saleprice: 2850,
      category: "Condenser And Heat sinks",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/Edited-Radiator-main.png",
     stock: true
    },
    {
      id: 23,
     title: "12 V 40AMP SMPS",
     description: "",
      featured: false,
      price: 1895,
     saleprice: 1690,
      category: "Cooling/Water Block accesories",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/power-supply.jpg",
     stock: true
    },
    {
      id: 24,
     title: "160*100 mm Heatsink",
     description: "",
      featured: false,
      price: 1295,
     saleprice: 895,
      category:"Cooling/Water Block accesories",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/200-100-mm-1.jpg",
     stock: "Out of Stock"
    },
    {
      id: 25,
     title: "12*12 inches condenser",
     description: "",
      featured: false,
      price: 2100,
     saleprice: 1895,
      category: "Condenser And Heat sinks",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/16-16-1-1.png",
     stock: "Out of Stock"
    },
    {
      id: 26,
     title: "100mm*100mm heatsink combo (without Peltier)",
     description: "",
      featured: false,
      price: 2195,
     saleprice: 990,
      category: "Cooling/Water Block accesories",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/combooo.jpg",
     stock: true
    },
    {
      id: 27,
     title: "Hari Impex 12V 120mm DC Fan+Grill Combo",
     description: "",
      featured: false,
      price: 895,
     saleprice: 470,
      category: "Cooling/Water Block accesories",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/fan-plus-grill-combo.jpg",
     stock: true
    },
    {
      id: 28,
     title: "Hari Impex 120mm Fan Grill Pack of 4",
     description: "",
      featured: false,
      price: 795,
     saleprice: 365,
      category: "Cooling/Water Block accesories",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/120-mm-fan-grill-pack-of-4.jpg",
     stock: true
    },
    {
      id: 29,
     title: "Hari Impex 120mm Fan Grill",
     description: "",
      featured: false,
      price: 195,
     saleprice: 125,
      category: "Cooling/Water Block accesories",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/fan-plus-grill-2.jpeg",
     stock: true
    },
    {
      id: 30,
     title: "Hari Impex 300*100mm Heatsink",
     description: "",
      featured: false,
      price: 1990,
     saleprice: 1320,
      category: "Condenser And Heat sinks",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/200-100-mm-1.jpg",
     stock: true
    },
    {
      id: 31,
     title: "Hari Impex 100 * 100mm heatsink",
     description: "",
      featured: false,
      price: 760,
     saleprice: "",
      category: "Condenser And Heat sinks",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/100mm-100-mm-heatsink-1.jpg",
     stock: true
    },
    {
      id: 32,
     title: "Hari Impex 200MM Heatsink",
     description: "",
      featured: false,
      price: 1495,
     saleprice: 1100,
      category: "Condenser And Heat sinks",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/200-100-mm-1.jpg",
     stock: true
    },
    {
      id: 33,
     title: "Hari Impex 120*240 mm radiator",
     description: "",
      featured: false,
      price: 2495,
     saleprice: 1950,
      category: "Condenser And Heat sinks",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/120-radiotor-main.jpg",
     stock: true
    },
    {
      id: 34,
     title: "Hari Impex 120mm Axial Fan with 220V AC Supply Voltage",
     description: "",
      featured: false,
      price: 895,
     saleprice: 500,
      category: "Cooling/Water Block accesories",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/120-mm-ac-main.jpg",
     stock: true
    },
    {
      id: 35,
     title: "Corner for LED Profile Model no.2260",
     description: "",
      featured: false,
      price: 65,
     saleprice: 50,
      category: "Category>Aluminium Profiles for LED Scrolling Board",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/corner-1-updated-1.png",
     stock: true
    },
    {
      id: 36,
     title: "Aluminium Profile for LED Scrolling Board",
     description: "",
      featured: true,
      price: 790,
     saleprice: 680,
      category: "Category>Aluminium Profiles for LED Scrolling Board",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/profile-upload-6-1.png",
     stock: true
    },
    {
      id: 37,
     title: "Hari Impex 12 Volt DC Water Pump",
     description: "",
      featured: false,
      price: 275,
     saleprice: 255,
      category: "Category|Cooling/Water Block accesories",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/pump-6.jpg",
     stock: true
    },
    {
      id: 38,
     title: "Hari Impex Axial Case Cooling Fan. Size 120mm, Supply Voltage : 12VDC",
     description: "",
      featured: false,
      price: 695,
     saleprice: 400,
      category: "Cooling/Water Block accesories",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/Fan-1.jpg",
     stock: true
    },
    {
      id: 39,
     title: "Hari Impex Axial Case Cooling Fan. (9.2×9.2×2.5cm) , Supply Voltage :12VDC",
     description: "<hr />\n\n<p style=\"text-align: right\"></p>",
      featured: false,
      price: 495,
     saleprice: 275,
      category: "Cooling/Water Block accesories",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/fan-92-mm.jpg",
     stock: true
    },
    {
      id: 40,
     title: "8*8 inches Condenser",
     description: "8*8 inches condenser are especially made for four Peltier water block reduce temperature to around 15 degree..\n\n\n\nIt is especially made with copper coil and anodized aluminium fins and secure with metal frame where four fans or either a single 8 inches fan can be fixed.",
      featured: true,
      price: 2195,
     saleprice: 1490,
      category: "Condenser And Heat sinks",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/16-16-2-1.png",
     stock: true
    },
    {
      id: 41,
     title: "12*4 inches Condenser",
     description: "12*4 inches condenser are especially made for three Peltier water block reduce temperature to around 15 degree..\n\n\n\nIt is especially made with copper coil and anodized aluminium fins and secure with metal frame where three fans can be fixed.",
      featured: true,
      price: 1995,
     saleprice: 1290,
      category: "Condenser And Heat sinks",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/4-12-2-1.png",
     stock: "Out of Stock"
    },
    {
      id: 42,
     title: "8*4 inches Condenser Coil",
     description: "8*4 inches condenser are especially made for two Peltier water block reduce temperature to around 15 degree..\n\n\n\nIt is especially made with copper coil and anodized aluminium fins and secure with metal frame where two fans can be fixed.",
      featured: false,
      price: 1099,
     saleprice: 790,
      category: "Condenser And Heat sinks",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/8-4-1-1.png",
     stock: true
    },
    {
      id: 43,
     title: "4*4 inches Condenser",
     description: "4*4 inches condenser are especially made for single Peltier water block reduce temperature to around 15 degree..\n\n\n\nIt is especially made with copper coil and anodized aluminium fins and secure with metal frame where a fan can be fixed.",
      featured: false,
      price: 890,
     saleprice: 650,
      category: "Condenser And Heat sinks",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/cond-1-1.png",
     stock: "Out of Stock"
    },
    {
      id: 44,
     title: "40*40*12 Side Nozzle Copper Water Block",
     description: "<blockquote>&nbsp;</blockquote>",
      featured: true,
      price: 1795,
     saleprice: 1295,
      category: "Water Block",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/IMG_20210521_201135.jpg",
     stock: true
    },
    {
      id: 45,
     title: "PVC Pipe for Water Block",
     description: "Material: PVC Color: transparent Outside diameter: 4mm, inside diameter: 7 mm Length: 3 meter ptfe/Teflon tube Temperature range: -120 celsius~160 celsius",
      featured: true,
      price: 299,
     saleprice: 189,
      category: "Cooling/Water Block accesories",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/pipe-4-1.jpg",
     stock: true
    },
    {
      id: 46,
     title: "Water Block Fasting Clip Set",
     description: "Water Block Peltier Fastning Clips made from hard alloy steel with string vicors.. The set includes two clips,two screws,two nuts and two spring vicors. This clip set is used for fastning two blocks togeather with the peltie",
      featured: true,
      price: 199,
     saleprice: 89,
      category: "Cooling/Water Block accesories",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/clips-1.jpg",
     stock: true
    },
    {
      id: 47,
     title: "320*40*12mm Water Block",
     description: "320x40x12mm Aluminium CPU Graphics Card Hard Disk Water Cooling Waterblock Liquid Cooler Heatsink BlockFeature:1. The semiconductor refrigeration film is exclusive of water cooling head, liquid and cold water plate, water cooling exchanger and positive and negative plane right angle, which is in perfect agreement with the refrigerator.2. It is made for the semiconductor refrigeration film, which can be made of heat dissipation, cold transfer, cold water formation and so on.Specification:Material: AluminiumInterface: approx. 9.5mm/0.37'' (can be connected with internal diameter 7-8mm/0.27-0.31'' water pipe)Size: approx. 320x40x12mm/6.29x1.57x0.47''Note: Please allow 1-3mm differs due to manual measurement.Due to the different display and different light, the picture may not show the actual color of the item. Thanks for your understanding.Package included:1 x Waterblock",
      featured: false,
      price: 2195,
     saleprice: 1620,
      category: "Water Block",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/320-mm-main-1.jpg",
     stock: true
    },
    {
      id: 48,
     title: "280*40*12mm Water Block",
     description: "280x40x12mm Aluminium CPU Graphics Card Hard Disk Water Cooling Waterblock Liquid Cooler Heatsink BlockFeature:1. The semiconductor refrigeration film is exclusive of water cooling head, liquid and cold water plate, water cooling exchanger and positive and negative plane right angle, which is in perfect agreement with the refrigerator.2. It is made for the semiconductor refrigeration film, which can be made of heat dissipation, cold transfer, cold water formation and so on.Specification:Material: AluminiumInterface: approx. 9.5mm/0.37'' (can be connected with internal diameter 7-8mm/0.27-0.31'' water pipe)Size: approx. 280x40x12mm/6.29x1.57x0.47''Note: Please allow 1-3mm differs due to manual measurement.Due to the different display and different light, the picture may not show the actual color of the item. Thanks for your understanding.Package included:1 by x Waterblock",
      featured: true,
      price: 1130,
     saleprice: "",
      category: "Water Block",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/280-mm-main-1.jpg",
     stock: true
    },
    {
      id: 49,
     title: "240*40*12mm Water Block",
     description: "240x40x12mm Aluminium CPU Graphics Card Hard Disk Water Cooling Waterblock Liquid Cooler Heatsink BlockFeature:1. The semiconductor refrigeration film is exclusive of water cooling head, liquid and cold water plate, water cooling exchanger and positive and negative plane right angle, which is in perfect agreement with the refrigerator.2. It is made for the semiconductor refrigeration film, which can be made of heat dissipation, cold transfer, cold water formation and so on.Specification:Material: AluminiumInterface: approx. 9.5mm/0.37'' (can be connected with internal diameter 7-8mm/0.27-0.31'' water pipe)Size: approx. 240x40x12mm/6.29x1.57x0.47''Note: Please allow 1-3mm differs due to manual measurement.Due to the different display and different light, the picture may not show the actual color of the item. Thanks for your understanding.Package included:1 x Waterblock",
      featured: false,
      price: 1495,
     saleprice: 1030,
      category: "Water Block",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/240-mm-main-1.jpg",
     stock: true
    },
    {
      id: 50,
     title: "200*40*12mm Water Block",
     description: "200x40x12mm Aluminium CPU Graphics Card Hard Disk Water Cooling Waterblock Liquid Cooler Heatsink BlockFeature:1. The semiconductor refrigeration film is exclusive of water cooling head, liquid and cold water plate, water cooling exchanger and positive and negative plane right angle, which is in perfect agreement with the refrigerator.2. It is made for the semiconductor refrigeration film, which can be made of heat dissipation, cold transfer, cold water formation and so on.Specification:Material: AluminiumInterface: approx. 9.5mm/0.37'' (can be connected with internal diameter 7-8mm/0.27-0.31'' water pipe)Size: approx. 200x40x12mm/6.29x1.57x0.47''Note: Please allow 1-3mm differs due to manual measurement.Due to the different display and different light, the picture may not show the actual color of the item. Thanks for your understanding.Package included:1 x Waterblock",
      featured: true,
      price: 1395,
     saleprice: 860,
      category: "Water Block",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/200-40-2-1.jpg",
     stock: true
    },
    {
      id: 51,
     title: "160*40*12mm Water block",
     description: "160x40x12mm Aluminium CPU Graphics Card Hard Disk Water Cooling Waterblock Liquid Cooler Heatsink BlockFeature:1. The semiconductor refrigeration film is exclusive of water cooling head, liquid and cold water plate, water cooling exchanger and positive and negative plane right angle, which is in perfect agreement with the refrigerator.2. It is made for the semiconductor refrigeration film, which can be made of heat dissipation, cold transfer, cold water formation and so on.Specification:Material: AluminiumInterface: approx. 9.5mm/0.37'' (can be connected with internal diameter 7-8mm/0.27-0.31'' water pipe)Size: approx. 160x40x12mm/6.29x1.57x0.47''Note: Please allow 1-3mm differs due to manual measurement.Due to the different display and different light, the picture may not show the actual color of the item. Thanks for your understanding.Package included:1 x Waterblock",
      featured: false,
      price: 1195,
      saleprice: 550,
      category: "Water Block",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/160-40-1-1.jpg",
     stock: true
    },
    {
      id: 52,
     title: "120*40*12mm Water Block",
     description: "<span class=\"reconciledValue--muted\">This Anodized Aluminium Waterblock is suitable for Solar devices heatsink, computer CPU/GPU water cooling, industrial variable frequency drives, the laser head cooling, industrial control cabinet cooling. The external diameter of the connector is 9.5mm. Can be used to connect tubes with 6mm-8mm inner diameter. The external diameter of the connector is Aprox. 8mm (9.5 mm Locking Ring) The inner diameter of the connector is Aprox. 6mm Internal flow channel extrusion forming Brazing parts into a whole Leak rate of less than 5X10-6 mbar.l/s parts Internal fin thickness 0.5mm Applicable to computer CPU water, industrial inverter driver, laser head cooling, industrial control cabinet cooling Approximate Size: 120 x 40 x 12mm</span><label for=\"katal-id-27\"><span class=\"text\">Product Description</span></label>",
      featured: true,
      price: 995,
     saleprice: 470,
      category: "Water Block",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/120-40-main.jpg",
     stock: true
    },
    {
      id: 53,
     title: "80*40*12mm Water Block",
     description: "<span class=\"reconciledValue--muted\">This Anodized Aluminium Waterblock is suitable for Solar devices heatsink, computer CPU/GPU water cooling, industrial variable frequency drives, the laser head cooling, industrial control cabinet cooling. The external diameter of the connector is 9.5mm. Can be used to connect tubes with 6mm-8mm inner diameter. The external diameter of the connector is Aprox. 8mm (9.5 mm Locking Ring) The inner diameter of the connector is Aprox. 6mm Internal flow channel extrusion forming Brazing parts into a whole Leak rate of less than 5X10-6 mbar.l/s parts Internal fin thickness 0.5mm Applicable to computer CPU water, industrial inverter driver, laser head cooling, industrial control cabinet cooling Approximate Size: 80 x 40 x 12mm</span><label for=\"katal-id-27\"><span class=\"text\">Product Description</span></label>",
      featured: false,
      price: 895,
     saleprice: 340,
      category: "Water Block",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/download-80.jpg",
     stock: true
    },
    {
      id: 54,
     title: "40*40*12mm Water Block",
     description: "",
      featured: false,
      price: 695,
     saleprice: 250,
      category: "Water Block",
     image: "https://hariimpex.in/wp-content/uploads/2022/08/40-40-main.jpg",
     stock: true
    }
  ];

const addProductsToFirestore = async () => {
  try {
    const batch = db.batch();

    product.forEach((item) => {
      const productRef = doc(db, "products", item.id.toString());
      batch.set(productRef, item);
    });

    await batch.commit();
    console.log("Products added successfully!");
  } catch (error) {
    console.error("Error adding products: ", error);
  }
};

addProductsToFirestore();
