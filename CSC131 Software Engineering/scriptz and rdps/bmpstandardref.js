// bmp standard reference script
var bmpchecklist = this.getField("bmpchecklist");
var bmpstandardref = this.getField("bmpstandardreference");

// Soil Stabilization Checklist
var SSChecklist1 = [
    " ",
    "SS-1.1: Are BMPs appropriately scheduled to prevent or reduce runoff"
];

var SSChecklist2 = [
    " ",
    "SS-2.1: Is existing vegetation appropriately preserved",
    "SS-2.2: Is preservation of existing vegetation maintained correctly"
];

var SSChecklist3 = [,
    "SS-3.1: Is the Hydraulic Mulch used for the correct application",
    "SS-3.2: Is the Hydraulic Mulch installed correctly",
    "SS-3.3: Is the Hydraulic Mulch made of the correct materials",
    "SS-3.4: Is the Hydraulic Mulch maintianed correctly"
];

var SSChecklist4 = [
    " ",
    "SS-4.1 Is the Hydroseeding used for the correct application",
    "SS-4.2 Is the Hydroseeding applied correctly",
    "SS-4.3 Are Hydroseeding materials appropriate",
    "SS-4.4 Is the Hydroseeding maintained correctly"
];

var SSChecklist5 = [
    " ",
    "SS-5.1: Are the Soil Binders used for the correct application",
    "SS-5.2: Are the Soil Binders installed correctly",
    "SS-5.3: Are the Soil Binders made of the correct materials",
    "SS-5.4: Are the Soil Binders maintained correctly"
];

var SSChecklist6 = [
    " ",
    "SS-6.1: Is the Straw Mulch used for the correct application",
    "SS-6.2: Is the Straw Mulch installed correctly",
    "SS-6.3: Is the Straw Mulch made of the correct materials",
    "SS-6.4: Is the Straw Mulch maintained correctly"
];

var SSChecklist7 = [
    " ",
    "SS-7.1: Are the Geotextiles, Plastic or Erosion Control Blanket Mats used for the correct application",
    "SS-7.2: Are the Geotextiles, Plastic or Erosion Control Blanket Mats installed correctly",
    "SS-7.3: Are the Geotextiles, Plastic or Erosion Control Blanket Mats made of the correct materials",
    "SS-7.4: Are the Geotextiles, Plastic or Erosion Control Blanket Mats maintained correctly"
];

var SSChecklist8 = [
    " ",
    "SS-8.1: Is the Wood Mulching used for the correct application",
    "SS-8.2: Is the Wood Mulching used for the correct application",
    "SS-8.3: Is the Wood Mulching used for the correct application",
    "SS-8.4: Is the Wood Mulching used for the correct application",
];

var SSChecklist9 = [
    " ",
    "SS-9.1: Are the Earth Dikes Drainage Swales and Lined Ditches used for the correct application",
    "SS-9.2: Are the Earth Dikes Drainage Swales and Lined Ditches installed correctly",
    "SS-9.3: Are the Earth Dikes Drainage Swales and Lined Ditches made of the correct materials",
    "SS-9.4: Are the Earth Dikes Drainage Swales and Lined Ditches maintained correctly"
];

var SSChecklist10 = [
    " ",
    "SS-10.1: Are the Outlet Protection Velocity Dissipation Devices used for the correct application",
    "SS-10.2: Are the Outlet Protection Velocity Dissipation Devices installed correctly",
    "SS-10.3: Are the Outlet Protection Velocity Dissipation Devices made of the correct materials",
    "SS-10.4: Are the Outlet Protection Velocity Dissipation Devices maintained correctly"
];

var SSChecklist11 = [
    " ",
    "SS-11.1 Are the Slope Drains used for the correct application",
    "SS-11.2 Are the Slope Drains installed correctly",
    "SS-11.3 Are the Slope Drains made of the correct materials",
    "SS-11.4 Are the Slope Drains maintained correctly"
];

var SSChecklist12 = [
    " ",
    "SS-12.1 Is the Streambanks Stabilization used for the correct application",
    "SS-12.2 Is the Streambanks Stabilization installed correctly",
    "SS-12.3 Is the Streambanks Stabilization made of the correct materials",
    "SS-12.4 Is the Streambanks Stabilization maintained correctly"
]

// Sediment Control Checklist
var SCChecklist1 = [
    " ",
    "SC-1.1 Is the Temporary Silt Fence used for the correct application",
    "SC-1.2 Is the Temporary Silt Fence installed correctly",
    "SC-1.3 Is the Temporary Reinforced Silt Fence installed correctly",
    "SC-1.4 Does the Temporary Silt Fence consist of the correct materials (fabric, posts)",
    "SC-1.5 Does the Temporary Reinforced Silt Fence consist of the correct materials (fabric, posts)",
    "SC-1.6 Is the Temporary Silt Fence or the Temporary Reinforced Silt Fence maintained correctly",
];

var SCChecklist2 = [
    " ",
    "SC-2.1 Is the Sediment Basin installed correctly",
    "SC-2.2 Is the Sediment Basin maintained correctly"
];

var SCChecklist3 = [
    " ",
    "SC-3.1 Is the Sediment Trap applied properly",
    "SC-3.2 Is the Sediment Trap maintained properly"
];

var SCChecklist4 = [
    " ",
    "SC-4.1 Are the Check Dams used for the correct application",
    "SC-4.2 If fiber rolls are used as Check Dams, is a type 1 Temporary check dam installed correctly",
    "SC-4.3 If gravel-filled bags are used as Check Dams, is a type 2 Temporary check dam installed correctly",
    "SC-4.4 Are the Check Dams made of the correct materials",
    "SC-4.5 Are the Check Dams maintained correctly",
];

var SCChecklist5_1 = [
    " ",
    "SC-5.1a Are the Fiber Rolls applied as required - temporary linear barrier (perimeter control)?",
    "SC-5.1b Are the Fiber Rolls applied as required - temporary slope interrupters (face of slope)?"
];

var SCChecklist5_2 = [
    " ",
    "SC-5.2a Are the Fiber Rolls installed properly as temporary linear barrier (perimeter control)?",
    "SC-5.2b Are the Fiber Rolls installed properly as temporary slope interrupters (face of slope)?"
];

var SCChecklist5 = [
    " ",
    "SC-5.3 Do Fiber Rolls consist of the proper materials?",
    "SC-5.4 Are the Fiber Rolls maintained properly?"
];

var SCChecklist6_1 = [
    " ",
    "SC-6.1a Is the Temporary Gravel Bag Berm applied as required - temporary linear barrier (perimeter control)?",
    "SC-6.1b Is the Temporary Gravel Bag Berm applied as required - temporary slope interrupters (face of slope)?"
];

var SCChecklist6_2 = [
    " ",
    "SC-6.2a Is the Temporary Gravel Bag Berm applied as required - temporary linear barrier (perimeter control)?",
    "SC-6.2b Is the Temporary Gravel Bag Berm applied as required - temporary slope interrupters (face of slope)?"
];

var SCChecklist6 = [
    " ",
    "SC-6.3 Does the Temporary Gravel Bag Berm consist of the proper materials?",
    "SC-6.4 Is the Temporary Gravel Bag Berm maintained properly?"
];

var SCChecklist7 = [
    " ",
    "SC-7.1 Are the streets swept to prevent unauthorized non-stormwater",
    "SC-7.2 If street sweeping is required, is a street sweeper available at all times",
    "SC-7.3 Is the sediment collected and disposed on the job site protected against erosion",
];

var SCChecklist8 = [
    " ",
    "SC-8.1 Is the Sandbag Barrier installed correctly",
    "SC-8.2 Is the Sandbag Barrier maintained correctly"
];

var SCChecklist9 = [
    " ",
    "SC-9.1 Is the Straw Bale Barrier installed correctly",
    "SC-9.2 Is the Straw Bale Barrier maintaind correctly"
];

var SCChecklist10 = [
    " ",
    "SC-10.1 Is the Drainage Inlet Protection used for the correct application (Type 1, 2, 3A, 3B, 4A, 4B, 5, 6A, or 6B)",
    "SC-10.2 Is the Drainage Inlet Protection installed correctly (Type 1, 2, 3A, 3B, 4A, 4B, 5, 6A, or 6B)",
    "SC-10.3 Is the Drainage Inlet Protection made of the correct materials",
    "SC-10.4 Is the Drainage Inlet Protection maintained correctly"
]

// Tracking Control Checklist
var TCChecklist1 = [
    " ",
    "TC-1.1 Is the Temporary Construction Entrance used for the correct application",
    "TC-1.2 Is the Temporary Construction Entrance installed correctly",
    "TC-1.3 Does the Temporary Construction Entrance consist of the correct materials (Type 1 or Type 2)",
    "TC-1.4 Is the Temporary Construction Entrance maintained correctly"
];

var TCChecklist2 = [
    " ",
    "TC-2.1 Is the Temporary Construction Roadway used for the correct application",
    "TC-2.2 Is the Temporary Construction Roadway installed correctly",
    "TC-2.3 Does the Temporary Construction Roadway consist of the correct materials",
    "TC-2.4 Is the Temporary Construction Roadway maintained correctly"
];

var TCChecklist3 = [
    " ",
    "TC-3.1 Is the EntranceOutlet Tire Wash used for the correct application",
    "TC-3.2 Is the EntranceOutlet Tire Wash used correctly",
    "TC-3.3 Does the EntranceOutlet Tire Wash consist of the correct materialsequipment",
    "TC-3.4 Is the EntranceOutlet Tire Wash maintained correctly"
];

// Wind Erosion Control Checklist
var WEChecklist1 = [
    " ",
    "WE-1.1 Is Wind Erosion Control implemented for active and inactive stockpiles subject to wind erosion",
    "WE-1.2 Is Wind Erosion Control installed correctly",
    "WE-1.3 Are the materials used for Wind Erosion Control correct",
    "WE-1.4 is Wind Erosion Control maintained correctly"
];

// Non-Storm Water Checklist
var NSChecklist1 = [
    " ",
    "NS-1.1 Are the Water Conservation Practices being applied correctly",
    "NS-1.2 Are the Water Conservation Practices implemented correctly",
    "NS-1.3 Are hoses equipped with a positive shut off valve"
];

var NSChecklist2 = [
    " ",
    "NS-2.1 Are Dewatering Operations being correctly applied to control non-storm water discharges during construction",
    "NS-2.2 Are Dewatering Operations being implemented correctly",
    "NS-2.3 Are Dewatering Operations being maintained correctly"
];

var NSChecklist3 = [
    " ",
    "NS-3.1 Are Paving and Grinding Operations being correctly applied to control non-storm water discharges during construction",
    "NS-3.2 Are Paving and Grinding Operations implemented correctly",
    "NS-3.3 Are linear sediment barriers and covers repaired or replaced to keep them functioning properly",
    "NS-3.4 Has sediment accumulated to 13 of the linear barrier height removed"
];

var NSChecklist4 = [
    " ",
    "NS-4.1 Is the Temporary Stream Crossing appropriately applied",
    "NS-4.2 Is the Temporary Stream Crossing implemented correctly",
    "NS-4.3 Is the Temporary Stream Crossing maintained correctly"
];

var NSChecklist5 = [
    " ",
    "NS-5.1 Is the Clear Water Diversion appropriately applied",
    "NS-5.2 Is the Clear Water Diversion implemented correctly",
    "NS-5.3 Is the Clear Water Diversion maintained correctly"
];

var NSChecklist6 = [
    " ",
    "NS-6.1 Are there any instances of an observed Illicit Connection or Illegal Discharge during the field BMP review"
];

var NSChecklist7 = [
    " ",
    "NS-7.1 Is the Potable WaterIrrigation BMP correctly applied to control non-storm water discharges during construction",
    "NS-7.2 Is the Potable WaterIrrigation BMP implemented correctly",
    "NS-7.3 Is the Potable WaterIrrigation BMP maintained correctly"
];

var NSChecklist8 = [
    " ",
    "NS-8.1 Are Vehicle and Equipment Cleaning processes correctly",
    "NS-8.2 Is Vehicle and Equipment Cleaning performed at least 1 to 50 feet if outside the floodplain, unless otherwise authorized",
    "NS-8.3 Are Vehicle and Equipment Cleaning processes implemented correctly",
    "NS-8.4 Is Vehicle and Equipment Cleaning performed in a structure equipped with disposal facilities",
    "NS-8.5 Are Vehicle and Equipment Cleaning materials and tools maintained correctly"
];

var NSChecklist9 = [
    " ",
    "NS-9.1 Is the Vehicle and Equipment Fueling being correctly applied to control non-storm water discharges during construction",
    "NS-9.2 Is the fueling of vehicles and equipment performed at least 1 to 50 feet if outside the floodplain, unless otherwise authorized",
    "NS-9.3 Are fuels in water tight containers or in a storage shed (completely enclosed)",
    "NS-9.4 Is Vehicle and Equipment Fueling implemented correctly",
    "NS-9.5 Is Vehicle and Equipment Fueling maintained correctly"
];

var NSChecklist10 = [
    " ",
    "NS-10.1 Is Vehicle and Equipment Maintenance correctly applied to non-storm water discharges during construction",
    "NS-10.2 Is Vehicle and Equipment Maintenance performed at least 1 to 50 feet if outside the floodplains, unless otherwise authorized",
    "NS-10.3 Are oil, grease, and fuel prevented from leaking onto the ground, storm drains, or surface water",
    "NS-10.4 Is Vehicle and Equipment Maintenance implemented correctly",
    "NS-10.5 Are Vehicle and Equipment Maintenance materials and tools maintained correctly"
];

var NSChecklist11 = [
    " ",
    "NS-11.1 Are Pile Driving Operations BMPs correctly applied to control non-storm water discharges during construction",
    "NS-11.2 Are Pile Driving equipment and liquid waste containers 1 to 50 feet if outside the floorplain, unless otherwise authorized",
    "NS-11.3 Are Pile Driving Operations being conducted properly",
    "NS-11.4 Are Pile Driving Operations implemented correctly",
    "NS-11.5 Are Pile Driving Operations maintained correctly"
];

var NSChecklist12 = [
    " ",
    "NS-12.1 Is Concrete Curing correctly applied to control non-storm water discharges during construction",
    "NS-12.2 Is Concrete Curing overspray controlled",
    "NS-12.3 Is Concrete Curing implemented correctly",
    "NS-12.4 Are maintenance procedures correctly performed during Concrete Curing"
];

var NSChecklist13 = [
    " ",
    "NS-13.1 Is Material and Equipment Use Over Water correctly applied to control non-storm water discharges during construction",
    "NS-13.2 Are spill kits and cleanup materials present or kept on hand",
    "NS-13.3 Is Material and Equipment Use Over Water implemented correctly",
    "NS-13.4 Are measures used for Material and Equipment Use Over Water maintained correctly"
];

var NSChecklist14 = [
    " ",
    "NS-14.1 Are Concrete Finishing BMP processes applied correctly to control non-storm water discharges during construction",
    "NS-14.2 Are Concrete Finishing processes implemented correctly",
    "NS-14.3 Is equipment used in Concrete Finishing maintained correctly"
];

var NSChecklist15 = [
    " ",
    "NS-15.1 Is the Structure DemolitionRemoval Near Water BMP",
    "NS-15.2 Are demolished materials prevented from entering storm drain systems and receiving waters",
    "NS-15.3 Are attachments on equipment used to catch debris during small demolition activities",
    "NS-15.4 Is Structure DemolitionRemoval Near Water implemented correctly",
    "NS-15.5 Is Structure DemolitionRemoval Near Water maintained correctly"
]

var WMChecklist1 = [
    " ",
    "WM-1.1 Are materials delivered and stored correctly",
    "WM-1.2 Are Material Delivery and Storage Areas correctly installed",
    "WM-1.3 Are Material Delivery and Storage Areas maintained correctly installed"
];

var WMChecklist2 = [
    " ",
    "WM-2.1 Are Materials used correctly"
];

var WMChecklist3 = [
    " ",
    "WM-3.1 Are stockpiles at least 100 feet from concentrated flow 1 to 50 feet outside the floodplain, unless otherwise authorized",
    "WM-3.2 Are Stockpiles properly protected",
    "WM-3.3 Are the correct materials used to protect stockpiles",
    "WM-3.4 Is stockpile protection maintained correctly"
];

var WMChecklist4 = [
    " ",
    "WM-4.1 Are Spill Prevention and Control measures correctly selected",
    "WM-4.2 Are Spill Prevention and Control measures correctly implemented"
];

var WMChecklist5 = [
    " ",
    "WM-5.1 Are Solid Waste Management measures correctly selected",
    "WM-5.2 Are Solid Waste Management measures correctly implemented"
];

var WMChecklist6 = [
    " ",
    "WM-6.1 Are Hazardous Waste Management control measures correctly measures",
    "WM-6.2 Are Hazardous Waste Management control measures correctly implemented"
];

var WMChecklist7 = [
    " ",
    "WM-7.1 Are Contaminated Soil Management measures correctly selected and applied"
];

var WMChecklist8 = [
    " ",
    "WM-8.1 Is Concrete Waste Management applied correctly",
    "WM-8.2 Is Concrete Waste Management implemented correctly",
    "WM-8.3 Are materials used for concrete waste management correct"
];

var WMChecklist9 = [
    " ",
    "WM-9.1 Is the SanitarySeptic Waste Management properly located",
    "WM-9.2 Is the SanitarySeptic Waste Management correctly installed",
    "WM-9.3 Is SanitarySeptic Waste Management correctly maintained"
];

var WMChecklist10 = [
    " ",
    "WM-10.1 Is Liquid Waste Management correctly applied",
    "WM-10.2 Is Liquid Waste Management correctly implemented",
    "WM-10.3 Are materials used for Liquid Waste Management correct",
    "WM-10.4 Is Liquid Waste Management properly maintained"
];
// Non Stormwater SR arrays:
var NSSR1_1 = [
    " ",
    "SPECs, 13-4.03E(1) Water Control and Conservation",
    "CGP, Attachment C.C.1; D.C.1; E.C.1",
    "LTP, VIII"
];
var NSSR1_2 = [
    " ",
    "SPECs, 13-4.03E(1) Water Control and Conservation",
    "SPECs, 17-2.02 Materials",
    "CGP, Order IV.E Proper Operation and Maintenance"
];
var NSSR2_1 = [
    " ",
    "SPECs, 13-4.03G Dewatering",
    "CGP, Attachment C.C.1; D.C.1; E.C.1",
    "CGP, Order III.C",
    "LTP, VIII-C"
];
var NSSR2_2 = [
    " ",
    "SPECs, 13-4.03G Dewatering",
    "CGP, Order IV.E Proper Operation and Maintenance"
];
var NSSR3_1 = [
    " ",
    "SPECs, 13-4.03C(1) General",
    "SPECs, 13-4.03E(7) Paving, Sealing, Sawcutting, and Grinding Operations",
    "CGP, Attachment C.C.1; D.C.1; E.C.1",
    "LTP, VIII"
];
var NSSR3_2 = [
    " ",
    "SPECs, 13-4.03E(7) Paving, Sealing, Sawcutting, and Grinding Operations",
    "CGP, Order IV.E Proper Operation and Maintenance"
];
// MISSING NSSR4
// MISSING NSSR5
var NSSR6_1 = [
    " ",
    "SPECs, 13-4.03E(2) Illicit Connection and Illegal Discharge Detection and Reporting"
];
var NSSR6_2 = [
    " ",
    "SPECs, 13-4.03E(2) Illicit Connection and Illegal Discharge Detection and Reporting",
    "CGP, Order IV.E Proper Operation and Maintenance"
];
// MISSING NSSR7
var NSSR8_1 = [
    " ",
    "SPECs, 13-4.03E(3) Vehicle/Equipment Cleaning",
    "CGP, Attachment C.C.1; D.C.1; E.C.1",
    "CGP, Attachment C.C.2; D.C.2; E.C.2",
    "LTP VIII",
    "LTP VIII.A"
];
var NSSR8_2 = [
    " ",
    "SPECs, 13-4.03C(1) General",
    "SPECs, 13-4.03E(3) Vehicle/Equipment Cleaning",
    "SPECs, 13-4.03D(5) Liquid Waste",
    "CGP, Order IV.E Proper Operation and Maintenance"
];
var NSSR9_1 = [
    " ",
    "CGP, Attachment C.B.3; D.B.3; E.B.3",
    "LTP VIII",
    "LTP VIII.A"
];
var NSSR9_2 = [
    " ",
    "SPECs, 13-4.03C(1) General",
    "SPECs, 13-4.03E(4) Vehicle/Equipment Fueling and Maintenance",
    "CGP, Order IV.E Proper Operation and Maintenance"
];
var NSSR10_1 = [
    " ",
    "CGP, Attachment C.B.3; D.B.3; E.B.3",
    "LTP VIII",
    "LTP VIII.A"
];
var NSSR10_2 = [
    " ",
    "SPECs, 13-4.03C(1) General",
    "SPECs, 13-4.03E(4) Vehicle/Equipment Fueling and Maintenance",
    "CGP, Order IV.E Proper Operation and Maintenance"
];
var NSSR11_1 = [
    " ",
    "SPECs, 13-4.03C(1) General",
    "CGP, Attachment C.C.1; D.C.1; E.C.1",
    "LTP VIII"
];
var NSSR11_2 = [
    " ",
    "SPECs, 13-4.03C(1) General",
    "SPECs, 13-4.03E(9) Pile Driving",
    "CGP, Order IV.E Proper Operation and Maintenance"
];
var NSSR12_1 = [
    " ",
    "SPECs, 13-4.03C(1) General",
    "CGP, Attachment C.C.1; D.C.1; E.C.1",
    "LTP VIII"
];
var NSSR12_2 = [
    " ",
    "SPECs, 13-4.03E(10) Concrete Curing",
    "CGP, Order IV.E Proper Operation and maintenance"
];
var NSSR13_1 = [
    " ",
    "SPECs, 13-4.03C(1) General",
    "CGP, Attachment C.C.1; D.C.1; E.C.1",
    "LTP VIII"
];
var NSSR13_2 = [
    " ",
    "SPECs, 13-4.03E(5) Material and Equipment Used Over Water",
    "CGP, Order IV.E Proper Operation and Maintenance"
];
var NSSR14_1 = [
    " ",
    "SPECs, 13-4.03C(1) General",
    "CGP, Attachment C.C.1; D.C.1; E.C.1",
    "LTP VIII"
];
var NSSR14_2 = [
    " ",
    "SPECs, 13-4.03E(11) Concrete Finishing",
    "CGP, Order IV.E Proper Operation and Maintenance"
];
var NSSR15_1 = [
    " ",
    "SPECs, 13-4.03E(6) Structure Removal Over or Adjacent to Water",
    "SPECs, 13-4.03C(1) General",
    "CGP, Attachment C.C.1; D.C.1; E.C.1",
    "LTP VIII"
];
var NSSR15_2 = [
    " ",
    "SPECs, 13-4.03E(6) Structure Removal Over or Adjacent to Water",
    "CGP, Order IV.E Proper Operation and Maintenance"
];

// Sediment Control SR arrays:
var SCSR1_1 = [
    " ",
    "CGP, Attachment C.E.1, D.E.1, E.E.1",
    "LTP, Section VIII.B"
];
var SCSR1_2 = [
    " ",
    "SPECs, 13-10.03A General",
    "SPECs, 13-10.03E Temporary Reinforced Silt Fences",
    "SPECs, 13-10.03F Temporary Silt Fences",
    "See Standard Plan Sheet T51",
    "See Standard Plan Sheet T60"
];
var SCSR1_3 = [
    " ",
    "SPECs, 13-10.02C Posts",
    "SPECs, 13-10-02D High Visibility Fence",
    "SPECs, 13-10.02E Wire Mesh",
    "SPECs, 13-10.02F Wire",
    "SPECs, 13-10.02G Anchors",
    "SPECs, 80-2.02E Wire Mesh"
];
var SCSR1_4 = [
    " ",
    "SPECs, 13-10.03A General",
    "CGP, Attachment C.E.1, D.E.1, E.E.1",
    "CGP, Attachment D.E.6; E.E.6",
    "CGP, Order IV.E Proper Operation and Maintenance"
];
// MISSING SCSR2
// MISSING SCSR3
var SCSR4_1 = [
    " ",
    "CGP, Attachment C.F, D.F, E.F",
    "LTP, VIII.B"
];
var SCSR4_2 = [
    " ",
    "SPECs, 13-6.03B Temporary Check Dams",
    "See Standard Plan Sheet T57"
];
var SCSR4_3 = [
    " ",
    "SPECs, 13-5.02G Gravel-Filled Bags",
    "SPECs, 21-1.02P Fiber Rolls",
    "SPECs, 21-1.02R Fasteners"
];
var SCSR4_4 = [
    " ",
    "CGP, Attachment D.E.6; E.E.6",
    "CGP, Order IV.E Proper Operation and Maintenance"
];
var SCSR5_1A = [
    " ",
    "CGP, Attachment C.E.1, D.E.1, E.E.1",
    "LTP, VIII, B"
];
var SCSR5_1B = [
    " ",
    "CGP, Attachment D.E.4; E.E.4"
];
var SCSR5_2A = [
    " ",
    "SPECs, 13-10.03D Temporary Large Sediment Barriers",
    "SPECs, 21-1.03P Fiber Rolls",
    "See Standard Plan Sheet T66"
];
var SCSR5_2B = [
    " ",
    "SPECs, 21-1.03P Fiber Rolls",
    "SPECs, 21-1.03P Fiber Rolls",
    "See Standard Plan Sheet T56"
];
var SCSR5_3 = [
    " ",
    "SPECs, 13-10.02B Fiber Roll",
    "SPECs, 13-10.02C Posts",
    "SPECs, 21-1.02P Fiber Rolls",
    "SPECs, 21-1.02R Fasteners"
];
var SCSR5_4 = [
    " ",
    "SPECs, 13-10.03A  General",
    "CGP, Attachment C.E.1, D.E.1, E.E.1",
    "CGP, Attachment D.E.6; E.E.6",
    "CGP, Order IV.E Proper Operation and Maintenance"
];
var SCSR6_1A = [
    " ",
    "CGP, Attachment C.E.1, D.E.1, E.E.1",
    "LTP, VIII, B"
];
var SCSR6_1B = [
    " ",
    "CGP, Attachment D.E.4; E.E.4"
];
var SCSR6_2A = [
    " ",
    "SPECs, 13-10.03A General",
    "SPECs, 13-10.03C Temporary Gravel Bag Berms"
];
var SCSR6_2B = [
    " ",
    "CGP, Attachment D.E.4; E.E.4",
    "SPECs, 13-10.03A General",
    "SPECs, 13-10.03C Temporary Gravel Bag Berms"
];
var SCSR6_3 = [
    " ",
    "SPECs, 13-5.02G Gravel-Filled Bags"
];
var SCSR6_4 = [
    " ",
    "SPECs, 13-10.03A General",
    "CGP, Attachment C.E.1, D.E.1, E.E.1",
    "CGP, Attachment D.E.6; E.E.6",
    "CGP, Order IV.E Proper Operation and Maintenance"
];
var SCSR7_1 = [
    " ",
    "SPECs, 13-4.03F Sweeping",
    "SPECs, 13-7.03A General",
    "SPECs, 13-7.03D Street Sweeping",
    "CGP, Attachment C.E.6, D.E.6, E.E.6"
];
var SCSR7_2 = [
    " ",
    "SPECs, 13-4.03F Sweeping",
    "SPECs, 13-7.02A Materials",
    "CGP, Order A.6",
    "CGP, Attachment C.C.3; D.C.3; E.C.3",
    "CGP, Order IV.E Proper Operation and Maintenance"
];
var SCSR9_1 = [
    " ",
    "CGP, Attachment C.E.1, D.E.1, E.E.1"
];
var SCSR9_2 = [
    " ",
    "SPECs, 13-10.03A General",
    "SPECs, 13-10.03G Temporary Straw Bale Barriers",
    "See Standard Plan Sheet T52"
];
var SCSR9_3 = [
    " ",
    "SPECs, 13-10.02H Straw Bales",
    "SPECs, 13-10.02C Posts",
    "SPECs, 21-1.02I Straw"
];
var SCSR9_4 = [
    " ",
    "SPECs, 13-10.03A General",
    "CGP, Attachment C.E.1, D.E.1, E.E.1",
    "CGP, Attachment D.E.6; E.E.6",
    "CGP, Order IV.E Proper Operation and Maintenance"
];
var SCSR10_1 = [
    " ",
    "SPECs, 13-6.03C Temporary Drainage Inlet Protection",
    "LTP, VIII.B"
];
var SCSR10_2 = [
    " ",
    "SPECs, 13-6.03C Temporary Drainage Inlet Protection",
    "SPECs, 13-6.02B Rigid Plastic Barriers",
    "SPECs, 13-10.02I Foam Barriers",
    "SPECs, 13-10.03H Temporary Foam Barriers",
    "See Standard Plan Sheet T61",
    "See Standard Plan Sheet T62",
    "See Standard Plan Sheet T63",
    "See Standard Plan Sheet T64"
];
var SCSR10_3 = [
    " ",
    "SPECs, 13-10.02C Posts",
    "SPECs, 13-10.02B Fiber Roll",
    "SPECs, 21-1.02P Fiber Rolls",
    "SPECs, 21-1.02R Fasteners",
    "SPECs, 13-5.02G Gravel-Filled Bags",
    "SPECs, 13-6.02B Rigid Plastic Barriers",
    "SPECs, 13-6.02C Sediment Filter Bags",
    "SPECs, 13-10.02I Foam Barriers",
    "SPECs, 21-1.02O(4) Erosion Control Blankets",
    "SPECs, 21-1.02R Fasteners"
];
var SCSR10_4 = [
    " ",
    "SPECs, 13-6.03A  General",
    "CGP, Attachment D.E.6; E.E.6",
    "CGP, Order IV.E Proper Operation and Maintenance"
];

// Soil Stabilization SR arrays:
// MISSING SSSR1
// MISSING SSSR2
var SSSR3_1 = [
    " ",
    "CGP, Attachment C.D.2, D.D.2, E.D.2",
    "CGP, Attachment D.E.3, E.E.3",
    "13-1.03A General",
    "SPECs, 13-5.03A General"
];
var SSSR3_2 = [
    " ",
    "SPECs, 13-5.03A General",
    "SPECs, 13-5.03D Temporary Hydraulic Mulch",
    "SPECs, 13-5.03E Temporary Hydraulic Mulch (Bonded Fiber Matrix)",
    "SPECs, 13-5.03F Temporary Hydraulic Mulch (Polymer-Stabilized Fiber Matrix)",
    "SPECs, 13-5.03G Temporary Hydraulic Mulch (Cementitious Binder)",
    "SPECs, 21-1.03E Hydromulch and Hydroseed",
    "SPECs, 21-1.03J Bonded Fiber Matrix"
];
var SSSR3_3 = [
    " ",
    "SPECs, 13-5.02D Cementitious Binder",
    "SPECs, 21-1.02E Fiber",
    "SPECs, 21-1.02F(1) Tackifier, General",
    "SPECs, 21-1.02F(2) Polymer Stabilized Fiber Matrix Tackifier",
    "SPECs, 21-1.02F(3) Bonded Fiber Matrix Tackifier",
    "SPECs, 21-1.02J Polymer Stabilized Fiber Matrix",
    "SPECs, 21-1.02K Bonded Fiber Matrix"
];
var SSSR3_4 = [
    " ",
    "CGP, Order IV.E Proper Operations and Maintenance"
];
var SSSR4_1 = [
    " ",
    "CGP, Attachment C.E.2, D.D.2, E.D.2",
    "CGP, Attachment D.E.3, E.E.3",
    "13-1.03A General",
    "SPECs, 13-5.03A General"
];
var SSSR4_2 = [
    " ",
    "SPECs, 13-5.03A General",
    "SPECs, 13-5.03I  Temporary Hydroseed",
    "SPECs, 21-1.03E  Hydromulch and Hydroseed"
];
var SSSR4_3 = [
    " ",
    "SPECs, 21-1.02E  Fiber",
    "SPECs, 21-1.02F(1) Tackifier, General",
    "SPECs, 21-1.02G  Seed"
];
var SSSR4_4 = [
    " ",
    "CGP, Order IV.E Proper Operations and Maintenance"
];
var SSSR5_1 = [
    " ",
    "CGP, Attachment C.D.2, D.D.2, E.D.2",
    "CGP, Attachment D.E.3, E.E.3",
    "13-1.03A General",
    "SPECs, 13-5.03A General"
];
var SSSR5_2 = [
    " ",
    "SPECs, 13-5.03A General",
    "SPECs, 13-5.03J Temporary Soil Binder"
];
var SSSR5_3 = [
    " ",
    "SPECs, 21-1.02F(1) Tackifier, General"
];
var SSSR5_4 = [
    " ",
    "CGP, Order IV.E Proper Operations and Maintenance"
];
var SSSR6_1 = [
    " ",
    "CGP, Attachment C.D.2, D.D.2, E.D.2",
    "CGP, Attachment D.E.3, E.E.3",
    "13-1.03A General",
    "SPECs, 13-5.03A General"
];
var SSSR6_2 = [
    " ",
    "SPECs, 13-5.03A General",
    "SPECs, 21-1.03H Straw",
    "SPECs, 13-5.03H Temporary Tacked Straw"
];
var SSSR6_3 = [
    " ",
    "SPECs, 13-5.03H Temporary Tacked Straw",
    "SPECs, 21-1.02I Straw",
    "SPECs, 21-1.02F(1) Tackifier, General"
];
var SSSR6_4 = [
    " ",
    "CGP, Order IV.E Proper Operations and Maintenance"
];
var SSSR7_1 = [
    " ",
    "CGP, Attachment C.D.2, D.D.2, E.D.2",
    "CGP, Attachment D.E.3, E.E.3",
    "13-1.03A General",
    "SPECs, 13-5.03A General"
];
var SSSR7_2 = [
    " ",
    "SPECs, 13-5.02F Temporary Covers",
    "SPECs, 13-5.03K Temporary Covers",
    "SPECs, 21-1.03O Rolled Erosion Control Products",
    "See Standard Plan Sheet T53",
    "See Standard Plan Sheet T54"
];
var SSSR7_3 = [
    " ",
    "SPECs, 13-5.02B Erosion Control Blankets",
    "SPECs, 13-5.02F Temporary Covers",
    "SPECs, 13-5.02G Gravel-Filled Bags",
    "SPECs, 21-1.02O(1) Rolled Erosion Control Products General",
    "SPECs, 21-1.02O(2) Jute Mesh",
    "SPECs, 21-1.02O(3) Netting",
    "SPECs, 21-1.02O(4) Erosion Control Blankets",
    "SPECs, 21-1.02O(5) Turf Reinforcement Mats",
    "SPECs, 21-1.02R Fasteners"
];
var SSSR7_4 = [
    " ",
    "SPECs, 13-5.03K Temporary Covers",
    "CGP, Order IV.E Proper Operations and Maintenance"
];
var SSSR8_1 = [
    " ",
    "CGP, Attachment C.D.2, D.D.2, E.D.2",
    "CGP, Attachment D.E.3, E.E.3",
    "13-1.03A General",
    "SPECs, 13-5.03A General"
];
var SSSR8_2 = [
    " ",
    "SPECs, 13-5.03C Temporary Mulch",
    "SPECs, 20-7.03I(10) Mulch"
];
var SSSR8_3 = [
    " ",
    "SPECs, 20-7.02D(6) Mulch 20-7.02D(6)(a) General",
    "SPECs, 20-7.02D(6)(b) Tree Bark Mulch",
    "SPECs, 20-7.02D(6)(c) Wood Chip Mulch",
    "SPECs, 20-7.02D(6)(d) Shredded Bark Mulch",
    "SPECs, 20-7.02D(6)(e) Tree Trimming Mulch"
];
var SSSR8_4 = [
    " ",
    "CGP, Order IV.E Proper Operations and Maintenance"
];
var SSSR9_1 = [
    " ",
    "CGP, Attachment C.F, D.F, E.F",
    "LTP, VIII, B"
];
var SSSR9_2 = [
    " ",
    "SPECs, 13-10.03I Temporary Earthen Berms",
    "SPECs, 21-1.03O Rolled Erosion Control Products",
    "See Standard Plan Sheet T55"
];
var SSSR9_3 = [
    " ",
    "SPECs, 13-5.02B Erosion Control Blankets",
    "SPECs, 13-5.02G Gravel-Filled Bags",
    "SPECs, 21-1.02O(1) Rolled Erosion Control Products General",
    "SPECs, 21-1.02O(2) Jute Mesh",
    "SPECs, 21-1.02O(3) Netting",
    "SPECs, 21-1.02O(4) Erosion Control Blankets",
    "SPECs, 21-1.02O(5) Turf Reinforcement Mats",
    "SPECs, 21-1.02R Fasteners"
];
var SSSR9_4 = [
    " ",
    "CGP, Attachment D.E.6; E.E.6",
    "CGP, Order IV.E Proper Operations and Maintenance"
];
var SSSR10_1 = [
    " ",
    "CGP, Attachment C.F, D.F, E.F"
];
var SSSR10_2 = [
    " ",
    "None"
];
var SSSR10_3 = [
    " ",
    "None"
];
var SSSR10_4 = [
    " ",
    "CGP, Attachment D.E.6; E.E.6",
    "CGP, Order IV.E Proper Operations and Maintenance"
];
var SSSR11_1 = [
    " ",
    "CGP, Attachment C.F, D.F, E.F"
];
var SSSR11_2 = [
    " ",
    "None"
];
var SSSR11_3 = [
    " ",
    "None"
];
var SSSR11_4 = [
    " ",
    "CGP, Attachment D.E.6; E.E.6",
    "CGP, Order IV.E Proper Operations and Maintenance"
];

// Tracking Controll SR arrays:
var TCSR1_1 = [
    " ",
    "CGP, Attachment C.E.1, D.E.1, E.E.1",
    "CGP, Attachment D.E.5, E.E.5",
    "CGP, Attachment D.E.7, E.E.7",
    "LTP, VIII.B,5"
];
var TCSR1_2 = [
    " ",
    "SPECs, 13-7.03A General",
    "SPECs, 13-7.03B Temporary Construction Entrance",
    "See Standard Plan Sheet T58"
];
var TCSR1_3 = [
    " ",
    "SPECs, 13-7.02A General",
    "SPECs, 13-7.02B Rock",
    "SPECs, 13-7.02C Corrugated Steel Panels"
];
var TCSR1_4 = [
    " ",
    "SPECs, 13-7.03A General",
    "CGP, Attachment D.E.6; E.E.6",
    "CGP, Order IV.E Proper Operation and Maintenance"
];
var TCSR2_1 = [
    " ",
    "None"
];
var TCSR2_2 = [
    " ",
    "SPECs, 13-7.03A General"
];
var TCSR2_3 = [
    " ",
    "SPECs, 13-7.02A General",
    "SPECs, 13-7.02B Rock"
];
var TCSR2_4 = [
    " ",
    "SPECs, 13-7.03A General",
    "CGP, Order IV.E Proper Operation and Maintenance"
];

// Wind Erosion Control SR arrays:
var WESR1_1 = [
    " ",
    "SPECs, 14-9.03A General",
    "CGP, Attachment C.D.1, D.D.1, E.D.1",
    "SPECs, 18-1.03A General",
    "CGP, Attachment C.B.6, D.B.6, E.B.6",
    "LTP VIII, B.15"
];
var WESR1_2 = [
    " ",
    "SPECs, 18-1.02 MATERIALS",
    "SPECs, 18-1.02 MATERIALS",
    "SPECs, 18-1.03C Application",
    "CGP, Order IV.E Proper Operation and Maintenance"
];

// Waste Management SR arrays:
var WMSR1_1 = [
    " ",
    "SPECs, 13-4.03C(1) General",
    "CGP, Attachment C.B.1; D.B.1; E.B.1",
    "CGP, Attachment C.B.4; D.B.4; E.B.4",
    "LTP, VIII.",
    "LTP, VIII.A"
];
var WMSR1_2 = [
    " ",
    "SPECs, 13-4.03C(1) General",
    "SPECs, 13-4.03C(2) Material Storage",
    "CGP, Order IV.E Proper Operation and Maintenance"
];
var WMSR2_1 = [
    " ",
    "SPECs, 13-4.03C(1) General",
    "CGP, Attachment C.B.4; D.B.4; E.B.4",
    "LTP VIII."
];
var WMSR2_2 = [
    " ",
    "SPECs, 13-4.03E(8) Thermoplastic Striping and Pavement Markers",
    "CGP, Order IV.E Proper Operation and Maintenance",
    "LTP,VIII.A.2"
];
var WMSR3_1 = [
    " ",
    "SPECs, 13-4.03C(3) Stockpile Management",
    "CGP, Attachment C.B.1; D.B.1; E.B.1",
    "LTP VIII.",
    "LTP, VIII, A"
];
var WMSR3_2 = [
    " ",
    "SPECs, 13-4.03C(1) General",
    "Standard PlanT53"
];
var WMSR3_3 = [
    " ",
    "SPECs, 13-5.02F"
];
var WMSR3_4 = [
    " ",
    "SPECs, 13-4.03C(3) Stockpile Management",
    "CGP, Order IV.E Proper Operation and Maintenance"
];
var WMSR4_1 = [
    " ",
    "SPECs, 13-4.03B Spill Prevention and Control",
    "CGP, Attachment C.B.2; D.B.2; E.B.2",
    "LTP VIII.",
    "LTP, VII.A"
];
var WMSR4_2 = [
    " ",
    "SPECs, 13-4.03B Spill Prevention and Control",
    "SPECs, 13-4.03B(1) Minor Spills",
    "SPECs, 13-4.03B(2) Semi-significant Spills",
    "SPECs, 13-4.03B(3) Significant or Hazardous Spills",
    "CGP, Order IV.E Proper Operation and Maintenance"
];
var WMSR5_1 = [
    " ",
    "CGP, Attachment C.B.2; D.B.2; E.B.2",
    "CGP, Attachment C.B.6, D.B.6, E.B.6",
    "LTP, VIII"
];
var WMSR5_2 = [
    " ",
    "SPECs, 14-10 SOLID WASTE DISPOSAL AND RECYCLING 14-10.01 GENERAL",
    "CGP, Order IV.E Proper Operation and Maintenance"
];
var WMSR6_1 = [
    " ",
    "SPECs, 14-11.01A Summary",
    "LTP, VIII.",
    "LTP, VIII.A"
];
var WMSR6_2 = [
    " ",
    "SPECs, 13-4.03D(2) Paint Waste",
    "SPECs, 14-11.02B Hazardous Waste Management Practices",
    "SPECs, 14-11.02C Dust Control",
    "SPECs, 14-11.02D Stockpiling",
    "SPECs, 14-11.02E(1) General",
    "SPECs, 14-11.02E(2) Contaminated Soil",
    "SPECs, 14-11.02F(2) Hazardous Waste Storage",
    "CGP, Order IV.E Proper Operation and Maintenance"
];
var WMSR7_1 = [
    " ",
    "CGP, Order III.E",
    "LTP, VIII."
];
var WMSR7_2 = [
    " ",
    "SPECs, 14-11.02C Dust Control",
    "SPECs, 14-11.02D Stockpiling",
    "SPECs, 14-11.02E(2) Contaminated Soil",
    "CGP, Order IV.E P)roper Operation and Maintenance"
];
var WMSR8_1 = [
    " ",
    "SPECs, 13-4.03D(3) Concrete Waste",
    "SPECs, 13-9.03 CONSTRUCTION",
    "CGP, Attachment C.B.2; D.B.2; E.B.2",
    "LTP, VIII."
];
var WMSR8_2 = [
    " ",
    "13-9.01A Summary",
    "SPECs, 13-9.03 CONSTRUCTION",
    "See Standard Plan Sheet T59"
];
var WMSR8_3 = [
    " ",
    "SPECs, 13-9.02A General",
    "SPECs, 13-9.02B Temporary Concrete Washout Facility",
    "SPECs, 13-9.02C Portable Temporary Concrete Washout",
    "SPECs, 13-9.02D Temporary Concrete Washout Bin",
    "SPECs, 13-10.02C Posts",
    "SPECs, 13-10.02H Straw Bales",
    "SPECs, 21-1.02I  Straw",
    "SPECs, 13-5.02G Gravel-Filled Bags"
];
var WMSR8_4 = [
    " ",
    "SPECs, 13-9.03 CONSTRUCTION",
    "CGP, Order IV.E Proper Operation and Maintenance"
];
var WMSR9_1 = [
    " ",
    "CGP, Attachment C.B.2; D.B.2; E.B.2",
    "LTP, VIII."
];
var WMSR9_2 = [
    " ",
    "SPECs, 13-4.03D(4) Sanitary and Septic Waste",
    "CGP, Order IV.E Proper Operation and Maintenance"
];
var WMSR10_1 = [
    " ",
    "SPECs, 13-4.03D(5) Liquid Waste",
    "GGP, Attachment C.B.2; D.B.2; E.B.2",
    "LTP, VIII."
];
var WMSR10_2 = [
    " ",
    "SPECs, 13-4.03D(5) Liquid Waste",
    "CGP, Order IV.E Operation and Maintenance"
];

// Logic for NSSR1-15 (missing some)
if (bmpchecklist.value == NSChecklist1[1]) {
    bmpstandardref.setItems(NSSR1_1);
} else if (bmpchecklist.value == NSChecklist1[2]) {
    bmpstandardref.setItems(NSSR1_2);
}
/*else if (bmpchecklist.value == NSChecklist1[3]) {
    bmpstandardref.setItems(NSSR1_3);
} MISSING NSSR1.3*/
else if (bmpchecklist.value == NSChecklist2[1]) {
    bmpstandardref.setItems(NSSR2_1);
} else if (bmpchecklist.value == NSChecklist2[2]) {
    bmpstandardref.setItems(NSSR2_2);
}
/*else if (bmpchecklist.value == NSChecklist2[3]) {
    bmpstandardref.setItems(NSSR2_3);
} MISSING NSSR2.3*/
else if (bmpchecklist.value == NSChecklist3[1]) {
    bmpstandardref.setItems(NSSR3_1);
} else if (bmpchecklist.value == NSChecklist3[2]) {
    bmpstandardref.setItems(NSSR3_2);
}
/*else if (bmpchecklist.value == NSChecklist3[3]) {
    bmpstandardref.setItems(NSSR3_3);
} MISSING NSSR3.3*/
/*else if (bmpchecklist.value == NSChecklist3[4]) {
    bmpstandardref.setItems(NSSR3_4);
} MISSING NSSR3.4*/
// MISSING ENTIRE NSSR4
// MISSING ENTIRE NSSR5
else if (bmpchecklist.value == NSChecklist6[1]) {
    bmpstandardref.setItems(NSSR6_1);
} else if (bmpchecklist.value == NSChecklist6[2]) {
    bmpstandardref.setItems(NSSR6_2);
}
// MISSING ENTIRE NSSR7
else if (bmpchecklist.value == NSChecklist8[1]) {
    bmpstandardref.setItems(NSSR8_1);
} else if (bmpchecklist.value == NSChecklist8[2]) {
    bmpstandardref.setItems(NSSR8_2);
} else if (bmpchecklist.value == NSChecklist9[1]) {
    bmpstandardref.setItems(NSSR9_1);
} else if (bmpchecklist.value == NSChecklist9[2]) {
    bmpstandardref.setItems(NSSR9_2);
} else if (bmpchecklist.value == NSChecklist10[1]) {
    bmpstandardref.setItems(NSSR10_1);
} else if (bmpchecklist.value == NSChecklist10[2]) {
    bmpstandardref.setItems(NSSR10_2);
} else if (bmpchecklist.value == NSChecklist11[1]) {
    bmpstandardref.setItems(NSSR11_1);
} else if (bmpchecklist.value == NSChecklist11[2]) {
    bmpstandardref.setItems(NSSR11_2);
} else if (bmpchecklist.value == NSChecklist12[1]) {
    bmpstandardref.setItems(NSSR12_1);
} else if (bmpchecklist.value == NSChecklist12[2]) {
    bmpstandardref.setItems(NSSR12_2);
} else if (bmpchecklist.value == NSChecklist13[1]) {
    bmpstandardref.setItems(NSSR13_1);
} else if (bmpchecklist.value == NSChecklist13[2]) {
    bmpstandardref.setItems(NSSR13_2);
} else if (bmpchecklist.value == NSChecklist14[1]) {
    bmpstandardref.setItems(NSSR14_1);
} else if (bmpchecklist.value == NSChecklist14[2]) {
    bmpstandardref.setItems(NSSR14_2);
} else if (bmpchecklist.value == NSChecklist15[1]) {
    bmpstandardref.setItems(NSSR15_1);
} else if (bmpchecklist.value == NSChecklist15[2]) {
    bmpstandardref.setItems(NSSR15_2);
}

// Logic for WMSR1-10
if (bmpchecklist.value == WMChecklist1[1]) {
    bmpstandardref.setItems(WMSR1_1);
} else if (bmpchecklist.value == WMChecklist1[2]) {
    bmpstandardref.setItems(WMSR1_2);
} else if (bmpchecklist.value == WMChecklist2[1]) {
    bmpstandardref.setItems(WMSR2_1);
} else if (bmpchecklist.value == WMChecklist2[2]) {
    bmpstandardref.setItems(WMSR2_2);
} else if (bmpchecklist.value == WMChecklist3[1]) {
    bmpstandardref.setItems(WMSR3_1);
} else if (bmpchecklist.value == WMChecklist3[2]) {
    bmpstandardref.setItems(WMSR3_2);
} else if (bmpchecklist.value == WMChecklist3[3]) {
    bmpstandardref.setItems(WMSR3_3);
} else if (bmpchecklist.value == WMChecklist3[4]) {
    bmpstandardref.setItems(WMSR3_4);
} else if (bmpchecklist.value == WMChecklist4[1]) {
    bmpstandardref.setItems(WMSR4_1);
} else if (bmpchecklist.value == WMChecklist4[2]) {
    bmpstandardref.setItems(WMSR4_2);
} else if (bmpchecklist.value == WMChecklist5[1]) {
    bmpstandardref.setItems(WMSR5_1);
} else if (bmpchecklist.value == WMChecklist5[2]) {
    bmpstandardref.setItems(WMSR5_2);
} else if (bmpchecklist.value == WMChecklist6[1]) {
    bmpstandardref.setItems(WMSR6_1);
} else if (bmpchecklist.value == WMChecklist6[2]) {
    bmpstandardref.setItems(WMSR6_2);
} else if (bmpchecklist.value == WMChecklist7[1]) {
    bmpstandardref.setItems(WMSR7_1);
} else if (bmpchecklist.value == WMChecklist7[2]) {
    bmpstandardref.setItems(WMSR7_2);
} else if (bmpchecklist.value == WMChecklist8[1]) {
    bmpstandardref.setItems(WMSR8_1);
} else if (bmpchecklist.value == WMChecklist8[2]) {
    bmpstandardref.setItems(WMSR8_2);
} else if (bmpchecklist.value == WMChecklist8[3]) {
    bmpstandardref.setItems(WMSR8_3);
} else if (bmpchecklist.value == WMChecklist8[4]) {
    bmpstandardref.setItems(WMSR8_4);
} else if (bmpchecklist.value == WMChecklist9[1]) {
    bmpstandardref.setItems(WMSR9_1);
} else if (bmpchecklist.value == WMChecklist9[2]) {
    bmpstandardref.setItems(WMSR9_2);
} else if (bmpchecklist.value == WMChecklist10[1]) {
    bmpstandardref.setItems(WMSR10_1);
} else if (bmpchecklist.value == WMChecklist10[2]) {
    bmpstandardref.setItems(WMSR10_2);
}

// Logic for WESR1-2
if (bmpchecklist.value == WEChecklist1[1]) {
    bmpstandardref.setItems(WESR1_1);
} else if (bmpchecklist.value == WEChecklist1[2]) {
    bmpstandardref.setItems(WESR1_2);
}
/*else if (bmpchecklist.value == WEChecklist1[3]) {
    bmpstandardref.setItems(WESR1_3);
} else if (bmpchecklist.value == WEChecklist1[4]) {
    bmpstandardref.setItems(WESR1_4);
} MISSING WESR1.3 AND WESR1.4*/

// Logic for TCSR1-2
if (bmpchecklist.value == TCChecklist1[1]) {
    bmpstandardref.setItems(TCSR1_1);
} else if (bmpchecklist.value == TCChecklist1[2]) {
    bmpstandardref.setItems(TCSR1_2);
} else if (bmpchecklist.value == TCChecklist1[3]) {
    bmpstandardref.setItems(TCSR1_3);
} else if (bmpchecklist.value == TCChecklist1[4]) {
    bmpstandardref.setItems(TCSR1_4);
} else if (bmpchecklist.value == TCChecklist2[1]) {
    bmpstandardref.setItems(TCSR2_1);
} else if (bmpchecklist.value == TCChecklist2[2]) {
    bmpstandardref.setItems(TCSR2_2);
} else if (bmpchecklist.value == TCChecklist2[3]) {
    bmpstandardref.setItems(TCSR2_3);
} else if (bmpchecklist.value == TCChecklist2[4]) {
    bmpstandardref.setItems(TCSR2_4);
}

// Logic for SSSR1-11 (missing some)
/*if (bmpchecklist.value == SSChecklist1[1]) {
    bmpstandardref.setItems(SSSR1_1);
} else if (bmpchecklist.value == SSChecklist1[2]) {
    bmpstandardref.setItems(SSSR1_2);
} else if (bmpchecklist.value == SSChecklist2[1]) {
    bmpstandardref.setItems(SSSR2_1);
} else if (bmpchecklist.value == SSChecklist2[2]) {
    bmpstandardref.setItems(SSSR2_2);
} MISSING ENTIRE SSSR1 AND SSSR2*/
if (bmpchecklist.value == SSChecklist3[1]) {
    bmpstandardref.setItems(SSSR3_1);
} else if (bmpchecklist.value == SSChecklist3[2]) {
    bmpstandardref.setItems(SSSR3_2);
} else if (bmpchecklist.value == SSChecklist3[3]) {
    bmpstandardref.setItems(SSSR3_3);
} else if (bmpchecklist.value == SSChecklist3[4]) {
    bmpstandardref.setItems(SSSR3_4);
} else if (bmpchecklist.value == SSChecklist4[1]) {
    bmpstandardref.setItems(SSSR4_1);
} else if (bmpchecklist.value == SSChecklist4[2]) {
    bmpstandardref.setItems(SSSR4_2);
} else if (bmpchecklist.value == SSChecklist4[3]) {
    bmpstandardref.setItems(SSSR4_3);
} else if (bmpchecklist.value == SSChecklist4[4]) {
    bmpstandardref.setItems(SSSR4_4);
} else if (bmpchecklist.value == SSChecklist5[1]) {
    bmpstandardref.setItems(SSSR5_1);
} else if (bmpchecklist.value == SSChecklist5[2]) {
    bmpstandardref.setItems(SSSR5_2);
} else if (bmpchecklist.value == SSChecklist5[3]) {
    bmpstandardref.setItems(SSSR5_3);
} else if (bmpchecklist.value == SSChecklist5[4]) {
    bmpstandardref.setItems(SSSR5_4);
} else if (bmpchecklist.value == SSChecklist6[1]) {
    bmpstandardref.setItems(SSSR6_1);
} else if (bmpchecklist.value == SSChecklist6[2]) {
    bmpstandardref.setItems(SSSR6_2);
} else if (bmpchecklist.value == SSChecklist6[3]) {
    bmpstandardref.setItems(SSSR6_3);
} else if (bmpchecklist.value == SSChecklist6[4]) {
    bmpstandardref.setItems(SSSR6_4);
} else if (bmpchecklist.value == SSChecklist7[1]) {
    bmpstandardref.setItems(SSSR7_1);
} else if (bmpchecklist.value == SSChecklist7[2]) {
    bmpstandardref.setItems(SSSR7_2);
} else if (bmpchecklist.value == SSChecklist7[3]) {
    bmpstandardref.setItems(SSSR7_3);
} else if (bmpchecklist.value == SSChecklist7[4]) {
    bmpstandardref.setItems(SSSR7_4);
} else if (bmpchecklist.value == SSChecklist8[1]) {
    bmpstandardref.setItems(SSSR8_1);
} else if (bmpchecklist.value == SSChecklist8[2]) {
    bmpstandardref.setItems(SSSR8_2);
} else if (bmpchecklist.value == SSChecklist8[3]) {
    bmpstandardref.setItems(SSSR8_3);
} else if (bmpchecklist.value == SSChecklist8[4]) {
    bmpstandardref.setItems(SSSR8_4);
} else if (bmpchecklist.value == SSChecklist9[1]) {
    bmpstandardref.setItems(SSSR9_1);
} else if (bmpchecklist.value == SSChecklist9[2]) {
    bmpstandardref.setItems(SSSR9_2);
} else if (bmpchecklist.value == SSChecklist9[3]) {
    bmpstandardref.setItems(SSSR9_3);
} else if (bmpchecklist.value == SSChecklist9[4]) {
    bmpstandardref.setItems(SSSR9_4);
} else if (bmpchecklist.value == SSChecklist10[1]) {
    bmpstandardref.setItems(SSSR10_1);
} else if (bmpchecklist.value == SSChecklist10[2]) {
    bmpstandardref.setItems(SSSR10_2);
} else if (bmpchecklist.value == SSChecklist10[3]) {
    bmpstandardref.setItems(SSSR10_3);
} else if (bmpchecklist.value == SSChecklist10[4]) {
    bmpstandardref.setItems(SSSR10_4);
} else if (bmpchecklist.value == SSChecklist11[1]) {
    bmpstandardref.setItems(SSSR11_1);
} else if (bmpchecklist.value == SSChecklist11[2]) {
    bmpstandardref.setItems(SSSR11_2);
} else if (bmpchecklist.value == SSChecklist11[3]) {
    bmpstandardref.setItems(SSSR11_3);
} else if (bmpchecklist.value == SSChecklist11[4]) {
    bmpstandardref.setItems(SSSR11_4);
}

// Logic for SCSR1-10 (missing some)
if (bmpchecklist.value == SCChecklist1[1]) {
    bmpstandardref.setItems(SCSR1_1);
} else if (bmpchecklist.value == SCChecklist1[2]) {
    bmpstandardref.setItems(SCSR1_2);
} else if (bmpchecklist.value == SCChecklist1[3]) {
    bmpstandardref.setItems(SCSR1_3);
} else if (bmpchecklist.value == SCChecklist1[4]) {
    bmpstandardref.setItems(SCSR1_4);
}
/* else if (bmpchecklist.value == SCChecklist2[1]) {
    bmpstandardref.setItems(SCSR2_1);
} else if (bmpchecklist.value == SCChecklist2[2]) {
    bmpstandardref.setItems(SCSR2_2);
} else if (bmpchecklist.value == SCChecklist3[1]) {
    bmpstandardref.setItems(SCSR3_2);
} else if (bmpchecklist.value == SCChecklist3[2]) {
    bmpstandardref.setItems(SCSR3_2);
} MISSING ENTIRE SCSR2 AND SCSR3*/
else if (bmpchecklist.value == SCChecklist4[1]) {
    bmpstandardref.setItems(SCSR4_1);
} else if (bmpchecklist.value == SCChecklist4[2]) {
    bmpstandardref.setItems(SCSR4_2);
} else if (bmpchecklist.value == SCChecklist4[3]) {
    bmpstandardref.setItems(SCSR4_3);
} else if (bmpchecklist.value == SCChecklist4[4]) {
    bmpstandardref.setItems(SCSR4_4);
} else if (bmpchecklist.value == SCChecklist5_1[1]) {
    bmpstandardref.setItems(SCSR5_1A);
} else if (bmpchecklist.value == SCChecklist5_1[2]) {
    bmpstandardref.setItems(SCSR5_2A);
} else if (bmpchecklist.value == SCChecklist5_2[1]) {
    bmpstandardref.setItems(SCSR5_2B);
} else if (bmpchecklist.value == SCChecklist5_2[2]) {
    bmpstandardref.setItems(SCSR5_2B);
} else if (bmpchecklist.value == SCChecklist5[1]) {
    bmpstandardref.setItems(SCSR5_3);
} else if (bmpchecklist.value == SCChecklist5[2]) {
    bmpstandardref.setItems(SCSR5_4);
} else if (bmpchecklist.value == SCChecklist6_1[1]) {
    bmpstandardref.setItems(SCSR6_1A);
} else if (bmpchecklist.value == SCChecklist6_1[2]) {
    bmpstandardref.setItems(SCSR6_1B);
} else if (bmpchecklist.value == SCChecklist6_2[1]) {
    bmpstandardref.setItems(SCSR6_2A);
} else if (bmpchecklist.value == SCChecklist6_2[2]) {
    bmpstandardref.setItems(SCSR6_2B);
} else if (bmpchecklist.value == SCChecklist6[1]) {
    bmpstandardref.setItems(SCSR6_3);
} else if (bmpchecklist.value == SCChecklist6[2]) {
    bmpstandardref.setItems(SCSR6_4);
} else if (bmpchecklist.value == SCChecklist7[1]) {
    bmpstandardref.setItems(SCSR7_1);
} else if (bmpchecklist.value == SCChecklist7[2]) {
    bmpstandardref.setItems(SCSR7_2);
}
/* else if (bmpchecklist.value == SCChecklist8[1]) {
    bmpstandardref.setItems(SCSR8_1);
} else if (bmpchecklist.value == SCChecklist8[2]) {
    bmpstandardref.setItems(SCSR8_2);
} MISSING ENTIRE SCSR8*/
else if (bmpchecklist.value == SCChecklist9[1]) {
    bmpstandardref.setItems(SCSR9_1);
} else if (bmpchecklist.value == SCChecklist9[2]) {
    bmpstandardref.setItems(SCSR9_2);
} else if (bmpchecklist.value == SCChecklist9[3]) {
    bmpstandardref.setItems(SCSR9_3);
} else if (bmpchecklist.value == SCChecklist9[4]) {
    bmpstandardref.setItems(SCSR9_4);
} else if (bmpchecklist.value == SCChecklist10[1]) {
    bmpstandardref.setItems(SCSR10_1);
} else if (bmpchecklist.value == SCChecklist10[2]) {
    bmpstandardref.setItems(SCSR10_2);
} else if (bmpchecklist.value == SCChecklist10[3]) {
    bmpstandardref.setItems(SCSR10_3);
} else if (bmpchecklist.value == SCChecklist10[4]) {
    bmpstandardref.setItems(SCSR10_4);
}

// TODO: ask ben if there are missing documents related to standard references
// or if the documents provided are the most current versions so I can
// delete all these comments.