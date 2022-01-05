// bmp standard script
//var bmpstandardref = this.getField("bmpstandardreference");
//var bmpstandard = this.getField("bmpstandard");

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

/* BMP STANDARD AUTOPOPULATE ARRAYS */
// Non Storm Water Standards
var NSS1_1 = [
    " ",
    "Manage water used for work activities in a way that will prevent erosion and the discharge of pollutants into storm drain systems and receiving waters. Implement water conservation practices if water is used at the job site.",
    "Risk Level 1, 2 and 3 dischargers shall implement measures to control all non-storm water discharges during construction.",
    "Dischargers shall minimize or prevent pollutants in authorized non-storm water discharges through the use of controls, structures and management practices that achieve BAT for toxic and non-conventional pollutants and BCT for conventional pollutants"
];
var NSS1_2 = [
    " ",
    "Obtain authorization before washing anything at the job site with water that could discharge into a storm drain system or receiving waters. Report discharges immediately.Adjust watering schedules to prevent erosion, excess watering, or runoff. Shut off the water source to broken lines, sprinklers, or valves and repair breaks within 24 hours. Reuse water from waterline flushing for landscape irrigation if practicable. Sweep and vacuum paved areas. Do not wash paved areas with water.Direct runoff water, including water from water line repair, from the job site to areas where it can infiltrate into the ground. Do not allow runoff water to enter storm drain systems and receiving waters. Do not allow spilled water to escape filling areas for water trucks. Direct water from off-site sources around the job site if practicable. Minimize the contact of off-site water with job site water.",
    "Each water storage tank and distribution system must be equipped with positive shut-off valves.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var NSS2_1 = [
    " ",
    "Dewatering consists of discharging accumulated stormwater, groundwater, or surface water from excavations or temporary containment facilities. Perform dewatering work as specified for the work items involved, such as temporary active treatment system or dewatering and discharge.",
    "Risk Level 1, 2 and 3 dischargers shall implement measures to control all non-storm water discharges during construction.",
    "Authorized non-storm water discharges may include those from dechlorinated potable water sources such as:\n- fire hydrant flushing, irrigation of vegetative erosion control - measures, pipe flushing and testing, water to control dust\n- uncontaminated ground water from dewatering, and other discharges not subject to a separate general NPDES permit adopted by a Regional Water Board.\nThe discharge of non-storm water is authorized under the following conditions:\n1. The discharge does not cause or contribute to a violation of any water quality standard;\n2. The discharge does not violate any other provision of this General Permit;\n3. The discharge is not prohibited by the applicable Basin Plan;\n4. The discharger has included and implemented specific BMPs required by this General Permit to prevent or reduce the contact of the non-stormwater discharge with construction materials or equipment.\n5. The discharge does not contain toxic constituents in toxic amounts or (other) significant quantities of pollutants;\n6. The discharge is monitored and meets the applicable NALs; and\n7. The discharger reports the sampling information in the Annual Report.\nIf any of the above conditions are not satisfied, the discharge is not authorized by this General Permit.\n",
    "Construction site dewatering waste must not be discharged to surface waters or tributaries thereto, including municipal separate storm sewer systems, unless the discharge meets the criteria for a low threat discharge, or meets the criteria for other exemptions presented in Attachment F. Prior to conducting dewatering or clear water diversion activities on a site covered by this General Permit. Dischargers must prepare a dewatering/diversion plan as part of the SWPPP. Lahontan Water Board staff will require Dischargers to provide the dewatering plan as part of the project PRDs or upon determining dewatering is necessary."
];
var NSS2_2 = [
    " ",
    "If dewatering and discharging activities are not specified under a work item and you perform dewatering activities:\n1. Conduct dewatering activities under the Department's Field Guide for Construction Site Dewatering.\n2. Ensure that any dewatering discharge does not cause erosion, scour, or sedimentary deposits that could impact natural bedding materials.\n3. Discharge the water within the project limits. Dispose of the water if it cannot be discharged within project limits due to site constraints or contamination.\n4. Do not discharge stormwater or non-stormwater that has an odor, discoloration other than sediment, an oily sheen, or foam on the surface. Notify the Engineer immediately upon discovering any such condition.\n",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var NSS3_1 = [
    " ",
    "Minimize or eliminate discharge of material into the air, storm drain systems, and receiving waters while taking delivery of, using, or storing the following materials:\n7. Asphalt and concrete components",
    "Prevent material from entering storm drain systems and receiving waters including:\n1. Cementitious material\n2. Asphaltic material\n3. Aggregate or screenings\n4. Sawcutting, grooving, and grinding residue\n5. Pavement chunks\n6. Shoulder backing\n7. Methacrylate\n8. Sandblasting residue\n",
    "Risk Level 1, 2 and 3 dischargers shall implement measures to control all non-storm water discharges during construction.",
    "Dischargers shall minimize or prevent pollutants in storm water discharges and authorized non-storm water discharges through the use of controls, structures, and management practices that achieve BAT for toxic and non-conventional pollutants and BCT for conventional pollutants."
];
var NSS3_2 = [
    " ",
    "Cover drainage inlets and use linear sediment barriers to protect downhill receiving waters until paving, sealing, sawcutting, grooving, and grinding activities are completed and excess material has been removed. Cover drainage inlets and manholes during the application of seal coat, tack coat, slurry seal, or fog seal. Whenever precipitation is forecasted, limit paving, sawcutting, and grinding to places where runoff can be captured. Do not start seal coat, tack coat, slurry seal, or fog seal activities whenever precipitation is forecasted during the application and curing period. Do not excavate material from existing roadways during precipitation. Use a vacuum to remove slurry immediately after slurry is produced. Do not allow the slurry to run onto lanes open to traffic or off the pavement. Collect the residue from PCC grooving and grinding activities with a vacuum attachment on the grinding machine. Do not leave the residue on the pavement or allow the residue to flow across pavement. You may stockpile material excavated from existing roadways under section 13-4.03C(3) if authorized. Do not coat asphalt trucks and equipment with substances that contain soap, foaming agents, or toxic chemicals. Park paving equipment over drip pans or plastic sheeting with absorbent material to catch drips if the paving equipment is not in use.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
// MISSING NSS4
// MISSING NSS5
var NSS6_1 = [
    " ",
    "Before starting work, inspect the job site and the job site's perimeter for evidence of illicit connections, illegal discharges, and dumping. After starting work, inspect the job site and perimeter on a daily schedule for illicit connections and illegal dumping and discharges."
];
var NSS6_2 = [
    " ",
    "Whenever illegal connections, discharges, or dumping are discovered, notify the Engineer immediately. Do not take further action unless ordered. Assume that unlabeled or unidentifiable material is hazardous.\nLook for the following evidence of illicit connections, illegal discharges, and dumping:\n1. Debris or trash piles\n2. Staining or discoloration on pavement or soils\n3. Pungent odors coming from drainage systems\n4. Discoloration or oily sheen on water\n5. Stains and residue in ditches, channels, or drain boxes\n6. Abnormal water flow during dry weather\n7. Excessive sediment deposits\n8. Nonstandard drainage junction structures\n9. Broken concrete or other disturbances at or near junction structures\n",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
// MISSING NSS7
var NSS8_1 = [
    " ",
    "Limit vehicle and equipment cleaning or washing at the job site except what is necessary to control vehicle tracking or hazardous waste.",
    "Risk Level 1, 2 and 3 dischargers shall implement measures to control all non-storm water discharges during construction.",
    "Risk Level 1, 2 and 3 dischargers shall wash vehicles in such a manner as to prevent non-storm water discharges to surface waters or MS4 drainage systems.",
    "Dischargers shall minimize or prevent pollutants in authorized non-storm water discharges through the use of controls, structures and management practices that achieve BAT for toxic and non-conventional pollutants and BCT for conventional pollutants",
    "15. Prevent the discharge of pollutants from equipment and vehicle washing, wheel wash water, and other wash waters."
];
var NSS8_2 = [
    " ",
    "The following activities must be performed at least 100 feet from concentrated flows of stormwater, drainage courses, and inlets if within the floodplain and at least 50 feet if outside the floodplain, unless otherwise authorized:\n2. Storing... liquid waste containers \n3. Washing vehicles and equipment in outside areas\n",
    "Notify the Engineer before cleaning vehicles and equipment at the job site with soap, solvents, or steam. Contain and recycle or dispose of resulting waste under section 14-11 or section 13-4.03D(5), whichever is applicable. Do not use diesel to clean vehicles or equipment. Minimize the use of solvents.\nClean or wash vehicles and equipment in a structure equipped with disposal facilities. You may wash vehicles in an outside area if the area is:\n1. Paved with asphalt concrete, HMA, or PCC\n2. Surrounded by a containment berm\n3. Equipped with a sump to collect and dispose of wash water\nUse as little water as practicable whenever washing vehicles and equipment with water. Hoses must be equipped with a positive shutoff valve.\nDischarge liquid from wash racks to a recycling system or to another authorized system. Remove liquids and sediment as necessary.\n",
    "Use practices that will prevent job-site liquid waste from entering storm drain systems and receiving waters. Liquid wastes include the following:\n2. Grease-free and oil-free wastewater and rinse water\n4. Liquid waste running off a surface, including wash or rinse water\nHold liquid waste in structurally sound, leak-proof containers, such as roll-off bins or portable tanks.\nLiquid waste containers must be of sufficient quantity and volume to prevent overflow, spills, and leaks.\nStore containers at least 50 feet from moving vehicles and equipment.\nRemove and dispose of deposited solids from sediment traps under section 14-10 unless the Engineer authorizes another method.\nLiquid waste may require testing to determine hazardous material content before disposal.\nIf an authorized location is available within the job site, fluids and residue exempt under 23 CA Code of Regs § 2511(g) may be dried by evaporation in a leak-proof container. Dispose of the remaining solid waste under section 14-10.\n",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var NSS9_1 = [
    " ",
    "Risk Level 1, 2, and 3 dischargers shall implement good housekeeping for vehicle storage and maintenance, which, at a minimum, shall consist of the following:\na. Prevent oil, grease, or fuel to leak in to the ground, storm drains or surface waters.\nb. Place all equipment or vehicles, which are to be fueled, maintained and stored in a designated area fitted with appropriate BMPs.\nc. Clean leaks immediately and disposing of leaked materials properly.\n",
    "Dischargers shall minimize or prevent pollutants in authorized non-storm water discharges through the use of controls, structures and management practices that achieve BAT for toxic and non-conventional pollutants and BCT for conventional pollutants.",
    "16. Conduct equipment and vehicle fueling, maintenance and repair activities only in designated areas with appropriate BMPs and containment for spills."
];
var NSS9_2 = [
    " ",
    "Employees trained in emergency spill cleanup procedures must be present during the unloading of hazardous materials or chemicals.\nThe following activities must be performed at least 100 feet from concentrated flows of stormwater, drainage courses, and inlets if within the floodplain and at least 50 feet if outside the floodplain, unless otherwise authorized:\n4. Fueling and maintaining vehicles and equipment",
    "If practicable, perform maintenance on vehicles and equipment off-site. If fueling or maintenance must be done at the job site, assign a site or sites, and obtain authorization before using them. Minimize mobile fueling and maintenance activities. Fueling and maintenance activities must be performed on level ground in areas protected from stormwater run-on and runoff. Use containment berms or dikes around fueling and maintenance areas. Keep adequate quantities of absorbent spill-cleanup material and spill kits in the fueling or maintenance area and on fueling trucks. Dispose of spill-cleanup material and kits immediately after use. Use drip pans or absorbent pads during fueling or maintenance. Do not leave fueling or maintenance areas unattended during fueling and maintenance activities. Fueling nozzles must be equipped with an automatic shutoff control. Nozzles must be equipped with vapor-recovery fueling nozzles where required by the Air Quality Management District. Secure nozzles in an upright position when not in use. Do not top off fuel tanks. Recycle or properly dispose of used batteries and tires.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var NSS10_1 = [
    " ",
    "Risk Level 1, 2, and 3 dischargers shall implement good housekeeping for vehicle storage and maintenance, which, at a minimum, shall consist of the following:\na. Prevent oil, grease, or fuel to leak in to the ground, storm drains or surface waters.\nb. Place all equipment or vehicles, which are to be fueled, maintained and stored in a designated area fitted with appropriate BMPs.\nc. Clean leaks immediately and disposing of leaked materials properly.",
    "Dischargers shall minimize or prevent pollutants in authorized non-storm water discharges through the use of controls, structures and management practices that achieve BAT for toxic and non-conventional pollutants and BCT for conventional pollutants",
    "16. Conduct equipment and vehicle fueling, maintenance and repair activities only in designated areas with appropriate BMPs and containment for spills."
];
var NSS10_2 = [
    " ",
    "Employees trained in emergency spill cleanup procedures must be present during the unloading of hazardous materials or chemicals.\nThe following activities must be performed at least 100 feet from concentrated flows of stormwater, drainage courses, and inlets if within the floodplain and at least 50 feet if outside the floodplain, unless otherwise authorized:\n4. Fueling and maintaining vehicles and equipment.",
    "If practicable, perform maintenance on vehicles and equipment off-site. If fueling or maintenance must be done at the job site, assign a site or sites, and obtain authorization before using them. Minimize mobile fueling and maintenance activities. Fueling and maintenance activities must be performed on level ground in areas protected from stormwater run-on and runoff. Use containment berms or dikes around fueling and maintenance areas. Keep adequate quantities of absorbent spill-cleanup material and spill kits in the fueling or maintenance area and on fueling trucks. Dispose of spill-cleanup material and kits immediately after use. Use drip pans or absorbent pads during fueling or maintenance. Do not leave fueling or maintenance areas unattended during fueling and maintenance activities. Recycle or properly dispose of used batteries and tires. If leaks cannot be repaired immediately, remove the vehicle or equipment from the job site.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var NSS11_1 = [
    " ",
    "Minimize or eliminate discharge of material into the air, storm drain systems, and receiving waters while taking delivery of, using, or storing the following materials:\n6. Petroleum materials, including fuel, oil, and grease",
    "Risk Level 1, 2 and 3 dischargers shall implement measures to control all non-storm water discharges during construction.",
    "Dischargers shall minimize or prevent pollutants in authorized non-storm water discharges through the use of controls, structures and management practices that achieve BAT for toxic and non-conventional pollutants and BCT for conventional pollutants"
];
var NSS11_2 = [
    " ",
    "The following activities must be performed at least 100 feet from concentrated flows of stormwater, drainage courses, and inlets if within the floodplain and at least 50 feet if outside the floodplain, unless otherwise authorized: 2. Storing pile-driving equipment...",
    "Keep spill kits and cleanup materials at pile driving locations. Park pile driving equipment over drip pans, absorbent pads, or plastic sheeting with absorbent material. Protect pile driving equipment by parking on plywood and covering with plastic whenever precipitation is forecasted.Store pile driving equipment on level ground and protect it from stormwater run-on when not in use. Use vegetable oil instead of hydraulic fluid if practicable.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var NSS12_1 = [
    " ",
    "Minimize or eliminate discharge of material into the air, storm drain systems, and receiving waters while taking delivery of, using, or storing the following materials:\n1. Hazardous chemicals, including acids, lime, glues, adhesives, paints, solvents, and curing compounds.",
    "Risk Level 1, 2 and 3 dischargers shall implement measures to control all non-storm water discharges during construction.",
    "Dischargers shall minimize or prevent pollutants in authorized non-storm water discharges through the use of controls, structures and management practices that achieve BAT for toxic and non-conventional pollutants and BCT for conventional pollutants"
];
var NSS12_2 = [
    " ",
    "Do not overspray chemical curing compounds. Minimize the drift by spraying as close to the concrete as practicable. Do not allow runoff of curing compounds. Cover drainage inlets before applying the curing compound. Minimize the use and discharge of water by using wet blankets or similar methods to maintain moisture when concrete is curing.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var NSS13_1 = [
    " ",
    "Minimize or eliminate discharge of material into the air, storm drain systems, and receiving waters while taking delivery of, using, or storing the following materials:\n1. Hazardous chemicals, including acids, lime, glues, adhesives, paints, solvents, and curing compounds\n4. Detergents\n6. Petroleum materials, including fuel, oil, and grease\n7. Asphalt and concrete components",
    "Risk Level 1, 2 and 3 dischargers shall implement measures to control all non-storm water discharges during construction.",
    "Dischargers shall minimize or prevent pollutants in authorized non-storm water discharges through the use of controls, structures and management practices that achieve BAT for toxic and non-conventional pollutants and BCT for conventional pollutants"
];
var NSS13_2 = [
    " ",
    "Place drip pans and absorbent pads under vehicles and equipment used over water. Keep an adequate supply of spill-cleanup material with vehicles and equipment. Place drip pans or plastic sheeting under vehicles and equipment on docks, barges, or other surfaces over water whenever vehicles or equipment will be idle for more than 1 hour. Furnish watertight curbs or toe boards on barges, platforms, docks, or other surfaces over water to contain material, debris, and tools. Secure material to prevent spills or discharge into the water due to wind.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var NSS14_1 = [
    " ",
    "Minimize or eliminate discharge of material into the air, storm drain systems, and receiving waters while taking delivery of, using, or storing the following materials:\n1. Hazardous chemicals, including acids, lime, glues, adhesives, paints, solvents, and curing compounds\n7. Asphalt and concrete components",
    "Risk Level 1, 2 and 3 dischargers shall implement measures to control all non-storm water discharges during construction.",
    "Dischargers shall minimize or prevent pollutants in authorized non-storm water discharges through the use of controls, structures and management practices that achieve BAT for toxic and non-conventional pollutants and BCT for conventional pollutants"
];
var NSS14_2 = [
    " ",
    "Collect and dispose of water and solid waste from high-pressure water blasting. Collect and dispose of sand and solid waste from sandblasting. Before sandblasting, cover drainage inlets within 50 feet of sandblasting. Minimize the drift of dust and blast material by keeping the nozzle close to the surface of the concrete. If the character of the blast residue is unknown, test it for hazardous materials and dispose of it properly.Inspect containment structures for concrete finishing for damage before each day of use and before forecasted precipitation. Remove liquid and solid waste from containment structures after each work shift.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var NSS15_1 = [
    " ",
    "Do not allow demolished material to enter storm drain systems and receiving waters.",
    "Minimize or eliminate discharge of material into the air, storm drain systems, and receiving waters while taking delivery of, using, or storing the following materials:\n6. Petroleum materials, including fuel, oil, and grease\n7. Asphalt and concrete components",
    "Risk Level 1, 2 and 3 dischargers shall implement measures to control all non-storm water discharges during construction.",
    "Dischargers shall minimize or prevent pollutants in authorized non-storm water discharges through the use of controls, structures and management practices that achieve BAT for toxic and non-conventional pollutants and BCT for conventional pollutants"
];
var NSS15_2 = [
    " ",
    "Use authorized covers and platforms to collect debris. Use attachments on equipment to catch debris during small demolition activities. Empty debris-catching devices daily.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];

// Sediment Control BMP Arrays
var SCS1_1 = [
    " ",
    "Risk Level 1, 2 and 3 dischargers shall establish and maintain effective perimeter controls and stabilize all construction entrances and exits to sufficiently control erosion and sediment discharges from the site.",
    "Dischargers shall implement a combination of sediment and erosion controls to prevent or minimize sediment discharges from the site. Control measures shall include, but are not limited to, the following items:\n1. Install temporary sediment controls for the down-gradient perimeter of the project site, and/or any location where storm water or authorized nonstorm water may discharge from the project site, prior to the initiation of any construction-related activities."
];
var SCS1_2 = [
    " ",
    "Before installing a temporary linear sediment barrier, remove obstructions, including rocks, clods, and debris greater than 1 inch in diameter from the ground.",
    "Place a temporary reinforced silt fence parallel with the slope contour. For any 50-foot section of reinforced silt fence, do not allow the elevation at the base of the fence to vary by more than 1/3 of the fence height.\nInstall temporary reinforced silt fence as follows:\n1. Dig a 6-inch deep trench.\n2. Place the wire mesh and the bottom of the silt fence fabric in the trench.\n3. Place posts on the downhill side of the fabric and wire mesh.\n4. Attach the silt fence fabric to the wire mesh with tie wires or locking plastic fasteners along the length of the fence at not more than 3-foot horizontal spacing and from top to bottom at not more than 8-inch vertical spacing.\n5. Backfill the trench with soil by hand or mechanical tamping to secure the silt fence fabric and the wire mesh in the trench.\n6. Attach guy wires and anchors at each post. Install at least 2 anchors and guy wires at angle points and end posts.\nConnect sections of temporary reinforced silt fence as follows:\n1. Join separate sections of the silt fence to form reaches not more than 500 feet long. Each section must be a continuous run of silt fence from end-to-end or from an end to an opening, including joined panels.\n2. Secure the end posts of each section by wrapping the tops of the posts with at least 2 wraps of 16-gauge tie wire.\nIf temporary reinforced silt fence Type 1 is shown, attach high-visibility fabric to the steel posts by using tie wires or locking plastic fasteners.",
    "Construct a temporary silt fence with silt fence fabric, posts, and fasteners assembled at the job site or with prefabricated silt fence.\nIf prefabricated silt fence is used, attach the fabric to the posts by inserting the posts into the sewn pockets. If assembled at the job site:\n1. Fasten the fabric to the posts with staples or nails if wood posts are used\n2. Fasten the fabric to the posts with tie wires or locking plastic fasteners if steel posts are used\n3. Space the fasteners not more than 8 inches apart\nPlace temporary silt fence parallel with the slope contour. For any 50-foot section of temporary silt fence, do not allow the base elevation of the fence to vary by more than 1/3 of the height of the fence above the ground.\nInstall a temporary silt fence as follows:\n1. Place the bottom of the fabric in a 6-inch deep trench\n2. Secure it with the posts placed on the downhill side of the fabric\n3. Backfill the trench with soil and compact by hand or mechanical methods to secure the fabric in the trench\nConnect sections of a temporary silt fence as follows:\n1. Join separate sections of the silt fence to form reaches not more than 500 feet long. Each section must be a continuous run from end-to-end or from an end to an opening, including joined panels.\n2. Secure the end posts of each section by wrapping the tops of the posts with at least 2 wraps of 16 gauge tie wire.\nYou may install the silt fence by mechanically pushing the silt fence fabric vertically into the soil. Mechanically installed fabric must not slip out of the soil or allow sediment to pass under the fabric.",
    "Temporary Silt Fence",
    "Temporary Reinforced Silt Fence"
];
var SCS1_3 = [
    " ",
    "Posts must be wood or metal.\nWood posts must be:\n1. At least 2 by 2 inches in size and 4 feet long\n2. Untreated fir, redwood, cedar, or pine, cut from sound timber\n3. Straight and free of loose or unsound knots and other defects that could render the posts unfit for use\n4. Pointed on the end to be driven into the ground\nMetal posts must:\n1. Be at least 4 feet long.\n2. Be made of steel.\n3. Have a U-shaped, T-shaped, L-shaped, or other cross-sectional shape that can resist failure from lateral loads.\n4. Be pointed on the end to be driven into the ground.\n5. Weigh at least 0.75 pound per foot.\n6. Have a safety cap attached to the exposed end. The safety cap must be orange or red plastic and must fit snugly onto the metal post.\nPosts for a temporary reinforced silt fence must be at least 6 feet in length for a Type 1 installation and 5 feet in length for a Type 2 installation.",
    "High visibility fabric must contain UV inhibitors and comply with the following requirements (Property; Specifications; Value):\nWidth, inches, min; Measured; 48\nOpening size inches; Measured; 1'' x 1'' (min), 2'' x4'' (max)\nColor; Observed; Orange\nRoll weight, lb, min for 4' x 100' roll; Measured; 12",
    "Wire mesh for a temporary reinforced silt fence must comply with section 80-2.02E, be fabricated from at least 14-gauge horizontal and vertical wires welded at each intersection, and have a maximum opening 2 inches wide by 4 inches high. The fence must be supplied in 50-foot rolls.",
    "Wire for guy wires and tie wires for a temporary reinforced silt fence must be 16-gage iron or steel.",
    "Anchors for a temporary reinforced silt fence must be fabricated from no. 4 steel reinforcing bar.",
    "Wire mesh must:\n2. Be 32 inches wide\n3. Have 8 horizontal wires with vertical stays spaced 6 inches apart\nThe top and bottom wires must be 10-gauge. The intermediate wires and vertical stays must be 12-1/2 gauge."
];
var SCS1_4 = [
    " ",
    "Maintain a temporary linear sediment barrier to provide sediment-holding capacity and to reduce concentrated flow velocities.\nRepair or adjust the barrier whenever rills and other evidence of concentrated runoff are occurring beneath the barrier.\nRepair or replace split, torn, or unraveled material. Add or replace posts, stakes, or fasteners as needed to prevent sagging or slumping.\nWhenever a barrier becomes detached or dislodged from the pavement, reattach it.\nRemove sediment deposits, trash, and other debris as needed or ordered.\nRemove sediment deposits whenever the sediment exceeds:\n1. 1/3 of the height above ground behind a fence\nWhenever you place the removed sediment deposits within the job site, stabilize the sediment deposits to prevent erosion.",
    "Risk Level 1, 2 and 3 dischargers shall establish and maintain effective perimeter controls and stabilize all construction entrances and exits to sufficiently control erosion and sediment discharges from the site.",
    "Risk Level 2 and 3 dischargers shall ensure that all storm drain inlets and perimeter controls, runoff control BMPs, and pollutant controls at entrances and exits (e.g. tire washoff locations) are maintained and protected from activities that reduce their effectiveness.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
// MISSING SCS2
// MISSING SCS3
var SCS4_1 = [
    " ",
    "Risk Level 1, 2, 1nd 3 dischargers shall effectively manage all run-on, all runoff within the site and all runoff that discharges off the site. Run-on from off site shall be directed away from all disturbed areas or shall collectively be in compliance with the effluent limitations in this General Permit.",
    "Dischargers shall implement a combination of sediment and erosion controls to prevent or minimize sediment discharges from the site. Control measures shall include, but are not limited to, the following items:\n2. Install temporary gravel bag dikes, fiber rolls, filter fabric fence, or other equivalent measures as necessary to control erosion and runoff.\n3. Install temporary check dams such as gravel bag dikes in concentrated flow lines to slow and detain water flows and retain sediment.\n8. Control storm water volume and velocity within the site to minimize soil erosion and offsite discharges."
];
var SCS4_2 = [
    " ",
    "Before placing a temporary check dam, remove obstructions, including rocks, clods, and debris greater than 1 inch in diameter from the ground.\nIf a temporary check dam is to be placed in the same area as an erosion control blanket, install the blanket before placing the dam.\nA temporary check dam must be:\n1. Placed approximately perpendicular to the centerline of the ditch or drainage line\n2. Installed with sufficient spillway depth to prevent flanking of concentrated flow around the ends of the check dam\n3. Type 2 if the ditch is lined with concrete or HMA\n4. Type 1 or Type 2 if the ditch is unlined\nFor a Type 1 temporary check dam:\n1. Secure the fiber rolls with rope and notched wood stakes as shown.\n2. Drive the stakes into the soil until the notch is even with the top of the fiber roll.\n3. Lace rope between the stakes and over the fiber roll. Knot the rope at each stake.\n4. Tighten by driving the stakes further into the soil and forcing the fiber roll against the surface of the ditch or drainage line.\nPlace a Type 2 temporary check dam as a single layer of gravel-filled bags, placed end-to-end to eliminate gaps. If you need to increase the height of the dam, add more layers of gravel-filled bags. Stack the bags in the upper row to overlap the joints in the lower row. Stabilize the rows by adding more rows of bags in the lower layers.",
    "Temporary Check Dam"
];
var SCS4_3 = [
    " ",
    "Gravel-filled bags must:\n1. Be made of geosynthetic gravel-filled bag.\n2. Have inside dimensions from 24 to 32 inches long and from 16 to 20 inches wide.\n3. Have a bound opening to keep gravel. The opening must be sewn with yarn, bound with wire, or secured with a closure device.\n4. Weigh from 30 to 50 pounds when filled with gravel.\nGravel for gravel-filled bags must be from 3/8 to 3/4 inch in diameter and must be clean and free of clay balls, organic matter, and other deleterious materials.",
    "Fiber roll must have a minimum functional longevity of 1 year and comply with the following requirements: \n1. Type A fiber roll must be fabricated from an erosion control blanket rolled along its width. Secure with natural fiber twine at 6-foot intervals, and 6 inches from each end. Fiber roll size must comply with either one of the following:\n1.1. 8 to 10 inches in diameter, 10 to 20 feet long, and at least 0.5 lb/ft\n1.2. 10 to 12 inches in diameter, at least 10 feet long, and at least 2 lb/ft\n2. Type B fiber roll must be a premanufactured roll filled with rice or wheat straw, wood excelsior, or coconut fiber. Rolls must be covered with biodegradable jute, sisal, or coir fiber netting secured tightly at each end. Fiber roll size must comply with either one of the following:\n2.1. 8 to 10 inches in diameter, 10 to 20 feet long, and at least 1.1 lb/ft \n2.2. 10 to 12 inches in diameter, at least 10 feet long, and at least 3 lb/ft",
    "Wood stakes must be untreated fir, redwood, cedar, or pine and cut from sound timber. The ends must be pointed for driving into the ground. Notched stakes must be at least 1 by 2 by 24 inches in size. Stakes without notches must be at least 1 by 1 by 24 inches. Metal stakes must be at least 1/2 inch in diameter and have tops bent at 90-degree angles or capped with an orange or red plastic safety cap that fits snugly onto the metal stake. Rope to fasten fiber rolls and compost socks must be 1/4 inch in diameter and biodegradable, such as sisal or manila."
];
var SCS4_4 = [
    " ",
    "Risk Level 2 and 3 dischargers shall ensure that all storm drain inlets and perimeter controls, runoff control BMPs, and pollutant controls at entrances and exits (e.g. tire washoff locations) are maintained and protected from activities that reduce their effectiveness.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var SCS5_1A = [
    " ",
    "Risk Level 1, 2 and 3 dischargers shall establish and maintain effective perimeter controls and stabilize all construction entrances and exits to sufficiently control erosion and sediment discharges from the site.",
    "Dischargers shall implement a combination of sediment and erosion controls to prevent or minimize sediment discharges from the site. Control measures shall include, but are not limited to, the following items:\n1. Install temporary sediment controls for the down gradient perimeter of the project site, and/or any location where storm water or authorized non-stormwater may discharge from the project site, prior to the initiation of any construction related activities."
];
var SCS5_1B = [
    " ",
    "Risk Level 2 and 3 dischargers shall apply linear sediment controls along the toe of the slope, face of the slope, and at the grade breaks of exposed slopes."
];
var SCS5_2A = [
    " ",
    "Install a temporary large sediment barrier as follows:\n1. Place a single row of fiber rolls end-to-end approximately parallel with the slope contour. For any 20-foot section of fiber roll, do not allow the fiber roll to vary by more than 5 percent from level.\n2. Place the fiber rolls in a furrow that is from 6 to 8 inches deep.\n3. Secure the fiber rolls with wood stakes 4 feet apart.\n4. Place a stake 18 inches from each end of each fiber roll.\n5. Drive the stakes into the soil so that the top of the stakes are less than 2 inches above the top of the fiber rolls.\n6. Angle the last 6 feet upslope at the downhill end of the run.",
    "Before installing fiber roll remove obstructions from the ground, including rocks, clods, and debris greater than 1 inch in diameter.\nType 1 fiber roll installation consists of placing and fastening as follows:\n1. Place in a furrow that is from 2 to 4 inches deep.\n2. Fasten with wood stakes every 4 feet along the length of the fiber roll.\n3. Fasten the ends of the fiber roll by placing a stake 6 inches from the end of the roll.\n4. Drive the stakes into the soil so that the top of the stake is less then 2 inches above the top of the fiber roll.\nType 2 fiber roll installation consists of placing and fastening as follows:\n1. Fasten with notched wood stakes and rope.\n2. Drive stakes into the soil until the notch is even with the top of the fiber roll.\n3. Lace the rope between stakes and over the fiber roll. Knot the rope at each stake.\n4. Tighten the fiber roll to the surface of the slope by driving the stakes further into the soil.",
    "Temporary Large Sediment Barrier"
];
var SCS5_2B = [
    " ",
    "Install fiber roll approximately parallel to the slope contour. For any 20-foot section of fiber roll, prevent the fiber roll from varying more than 5 percent from level. Install fiber roll on slopes at the following spacing unless shown otherwise:\n1. 10 feet apart for slopes steeper than 2:1 (horizontal:vertical)\n2. 15 feet apart for slopes from 2:1 to 4:1 (horizontal:vertical)\n3. 20 feet apart for slopes from 4:1 to 10:1 (horizontal:vertical)\n4. 50 feet apart for slopes flatter than 10:1 (horizontal:vertical)",
    "As specified for Type 1 and Type 2 fiber roll installations above in temporary linear barrier (perimeter control).",
    "Temporary Fiber Roll"
];
var SCS5_3 = [
    " ",
    "Fiber rolls for a large sediment barrier must be Type B, except the dimensions must be from 18 to 22 inches in diameter, at least 8 feet long, and weigh at least 6.5 pounds per linear foot.",
    "Do not use metal posts for a temporary large sediment barrier.\nWood posts must be:\n1. At least 2 by 2 inches in size and 4 feet long\n2. Untreated fir, redwood, cedar, or pine, cut from sound timber\n3. Straight and free of loose or unsound knots and other defects that could render the posts unfit for use\n4. Pointed on the end to be driven into the ground",
    "Fiber roll must have a minimum functional longevity of 1 year and comply with the following requirements:\n1: Type A fiber roll must be fabricated from an erosion control blanket rolled along its width. Secure with natural fiber twine at 6-foot intervals, and 6 inches from each end. Fiber roll size must comply with either one of the following:\n1.1: 8 to 10 inches in diameter, 10 to 20 feet long, and at least 0.5 lb/ft\n1.2: 10 to 12 inches in diameter, at least 10 feet long, and at least 2 lb/ft\n2: Type B fiber roll must be a pre-manufactured roll filled with rice or wheat straw, wood excelsior, or coconut fiber. Rolls must be covered with biodegradable jute, sisal, or coir fiber netting secured tightly at each end. Fiber roll size must comply with either one of the following:\n2.1: 8 to 10 inches in diameter, 10 to 20 feet long, and at least 1.1 lb/ft\n2.2: 10 to 12 inches in diameter, at least 10 feet long, and at least 3 lb/ft",
    "Wood stakes must be untreated fir, redwood, cedar, or pine and cut from sound timber. The ends must be pointed for driving into the ground. Notched stakes must be at least 1 by 2 by 24 inches in size. Stakes without notches must be at least 1 by 1 by 24 inches. Metal stakes must be at least 1/2 inch in diameter and have tops bent at 90-degree angles or capped with an orange or red plastic safety cap that fits snugly onto the metal stake. Rope to fasten fiber rolls and compost socks must be 1/4 inch in diameter and biodegradable, such as sisal or manila."
];
var SCS5_4 = [
    " ",
    "Maintain a temporary linear sediment barrier to provide sediment-holding capacity and to reduce concentrated flow velocities. Repair or adjust the barrier whenever rills and other evidence of concentrated runoff are occurring beneath the barrier. Repair or replace split, torn, or unraveled material. Remove sediment deposits, trash, and other debris as needed or ordered. Whenever you place the removed sediment deposits within the job site, stabilize the sediment deposits to prevent erosion.",
    "Risk Level 1, 2 and 3 dischargers shall establish and maintain effective perimeter controls and stabilize all construction entrances and exits to sufficiently control erosion and sediment discharges from the site.",
    "Risk Level 2 and 3 dischargers shall ensure that all storm drain inlets and perimeter controls, runoff control BMPs, and pollutant controls at entrances and exits (e.g. tire washoff locations) are maintained and protected from activities that reduce their effectiveness.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var SCS6_1A = [
    " ",
    "Risk Level 1, 2 and 3 dischargers shall establish and maintain effective perimeter controls and stabilize all construction entrances and exits to sufficiently control erosion and sediment discharges from the site.",
    "Dischargers shall implement a combination of sediment and erosion controls to prevent or minimize sediment discharges from the site. Control measures shall include, but are not limited to, the following items:\n1. Install temporary sediment controls for the down gradient perimeter of the project site, and/or any location where storm water or authorized non-stormwater may discharge from the project site, prior to the initiation of any construction related activities."
];
var SCS6_1B = [
    " ",
    "Risk Level 2 and 3 dischargers shall apply linear sediment controls along the toe of the slope, face of the slope, and at the grade breaks of exposed slopes."
];
var SCS6_2A = [
    " ",
    "Before installing a temporary linear sediment barrier, remove obstructions, including rocks, clods, and debris greater than 1 inch in diameter from the ground. Place gravel-filled bags behind Type K temporary railing if used within the shoulder area.",
    "Place the bags end-to-end to eliminate gaps. Place bags approximately parallel with the slope contour. Angle the last 6 feet upslope at the downhill end of the run. Stack the bags so that the upper row overlaps joints in the lower row. If you need to increase the height of a temporary gravel bag berm, add more layers of gravel-filled bags. Stack the bags in the upper row to overlap the joints in the lower row. Stabilize the rows by adding more rows of bags in the lower layers."
];
var SCS6_2B = [
    " ",
    "Risk Level 2 and 3 dischargers shall apply linear sediment controls along the toe of the slope, face of the slope, and at the grade breaks of exposed slopes to comply with sheet flow lengths in accordance with the following table (Slope Percentage; Sheet flow length not to exceed):\n0-25%; 20 feet\n25-50%; 15 feet\nOver 50%; 10 feet",
    "As specified for installation above in temporary linear barrier (perimeter control).",
    "As specified for installation above in temporary linear barrier (perimeter control)."
];
var SCS6_3 = [
    " ",
    "Gravel-filled bags must:\n1. Be made of geosynthetic gravel-filled bag.\n2. Have inside dimensions from 24 to 32 inches long and from 16 to 20 inches wide.\n3. Have a bound opening to keep gravel. The opening must be sewn with yarn, bound with wire, or secured with a closure device.\n4. Weigh from 30 to 50 pounds when filled with gravel.\nGravel for gravel-filled bags must be from 3/8 to 3/4 inch in diameter and must be clean and free of clay balls, organic matter, and other deleterious materials."
];
var SCS6_4 = [
    " ",
    "Maintain a temporary linear sediment barrier to provide sediment-holding capacity and to reduce concentrated flow velocities. Repair or adjust the barrier whenever rills and other evidence of concentrated runoff are occurring beneath the barrier. Repair or replace split, torn, or unraveled material. Remove sediment deposits, trash, and other debris as needed or ordered. Whenever you place the removed sediment deposits within the job site, stabilize the sediment deposits to prevent erosion.",
    "Risk Level 1, 2 and 3 dischargers shall establish and maintain effective perimeter controls and stabilize all construction entrances and exits to sufficiently control erosion and sediment discharges from the site.",
    "Risk Level 2 and 3 dischargers shall ensure that all storm drain inlets and perimeter controls, runoff control BMPs, and pollutant controls at entrances and exits (e.g. tire washoff locations) are maintained and protected from activities that reduce their effectiveness.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var SCS7_1 = [
    " ",
    "Sweep paved roads at construction entrance and exit locations and paved areas within the job site:\n1. During clearing and grubbing activities\n2. During earthwork activities\n3. During trenching activities\n4. During pavement structure activities\n5. When vehicles are entering and leaving the job site\n6. After soil-disturbing activities\n7. After observing off-site tracking of material\nMonitor paved areas and roadways within the project. Sweep within:\n1. 1 hour whenever sediment or debris is observed during activities that require sweeping\n2. 24 hours whenever sediment or debris is observed during activities that do not require sweeping",
    "When material is tracked onto the pavement, remove it within 6 hours, unless the Engineer authorizes a longer period. (At a stabilized construction exit/entrance)",
    "At least 1 street sweeper must be kept at the job site at all times when street sweeping work is required. The street sweeper must be in good working order.",
    "Risk Level 2 and 3 dischargers shall inspect on a daily basis all immediate access roads daily. At a minimum daily (when necessary) and prior to a rain event, the discharger shall remove any sediment or other construction activity-related materials that are deposited on the roads (by vacuuming or sweeping)."
];
var SCS7_2 = [
    " ",
    "Sweep by hand or mechanical methods, such as vacuuming. Do not use methods that use only mechanical kick brooms. Remove collected material, including sediment, from paved shoulders, drain inlets, curbs and dikes, and other drainage areas. You may stockpile collected material at the job site. Dispose of collected material at least once per week if stockpiled. You may dispose of sediment within the job site collected during sweeping activities. Protect the disposal areas against erosion. Keep dust to a minimum during street sweeping activities. Use water or a vacuum whenever dust generation is excessive or sediment pickup is ineffective. Remove and dispose of trash collected during sweeping.",
    "The street sweeper must be one of the following:\n1. Mechanical sweeper followed by a vacuum-assisted sweeper\n2. Vacuum-assisted dry, waterless, sweeper\n3. Regenerative-air sweeper",
    "Discharge of wastes or wastewater from road-sweeping vehicles or from other maintenance activities to any waters of the United States or to any storm drain leading to waters of the United States is prohibited unless in compliance with section E.2.h.3)c)ii) of this Order or authorized by another NPDES permit.",
    "Risk Level 1, 2 and 3 dischargers shall clean streets in such a manner as to prevent unauthorized non-storm water discharges from reaching surface water or MS4 drainage systems.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
// MISSING SCS8
var SCS9_1 = [
    " ",
    "Risk Level 1, 2 and 3 dischargers shall establish and maintain effective perimeter controls and stabilize all construction entrances and exits to sufficiently control erosion and sediment discharges from the site."
];
var SCS9_2 = [
    " ",
    "Before installing a temporary linear sediment barrier, remove obstructions, including rocks, clods, and debris greater than 1 inch in diameter from the ground.",
    "Install a temporary straw bale barrier as follows:\n1. Place a single row of straw bales end-to-end parallel with the slope contour. For any 20-foot section of straw bale barrier, do not allow it to vary by more than 5 percent from level.\n2. Place straw bales in a trench or keyed into the slope. Place the bales so that the binding wire or string does not come in contact with the soil.\n3. Secure each straw bale with 2 stakes. The first stake in each bale must be driven toward the previously laid bale to force the bales together.\n4. Drive the stakes into the soil so that the top of the stake is less than 2 inches above the top of the straw bale.\n5. Angle the last 6 feet upslope at the downhill end of the run.",
    "Temporary Straw Bale Barrier"
];
var SCS9_3 = [
    " ",
    "Straw bales must be:\n1. At least 14 inches wide, 18 inches high, 36 inches long, and weigh at least 50 pounds.\n2. Composed entirely of vegetative matter except for the binding material.\n3. Bound by wire, nylon, or polypropylene string. Do not use jute or cotton binding. Baling wire must be at least 16 gauge. Nylon or polypropylene string must be approximately 0.08 inch in diameter with 80 pounds of breaking strength.",
    "Posts used as stakes for a temporary straw-bale barrier must be wood or metal.\nWood posts must be:\n1. At least 2 by 2 inches in size and 4 feet long\n2. Untreated fir, redwood, cedar, or pine, cut from sound timber\n3. Straight and free of loose or unsound knots and other defects that could render the posts unfit for use\n4. Pointed on the end to be driven into the ground\nMetal posts must:\n1. Be at least 4 feet long.\n2. Be made of steel.\n3. Have a U-shaped, T-shaped, L-shaped, or other cross-sectional shape that can resist failure from lateral loads.\n4. Be pointed on the end to be driven into the ground.\n5. Weigh at least 0.75 pound per foot.\n6. Have a safety cap attached to the exposed end. The safety cap must be orange or red plastic and must fit snugly onto the metal post.",
    "Straw must be stalks from wheat, rice, or barley furnished in air-dry condition with a consistency compatible for application with commercial straw-blowing equipment. Wheat and barley straw must be derived from irrigated crops.Straw must be free of plastic, glass, metal, rocks, and refuse or other deleterious material. Straw must have not have been used for stable bedding."
];
var SCS9_4 = [
    " ",
    "Maintain a temporary linear sediment barrier to provide sediment-holding capacity and to reduce concentrated flow velocities. Repair or adjust the barrier whenever rills and other evidence of concentrated runoff are occurring beneath the barrier. Repair or replace split, torn, or unraveled material. Remove sediment deposits, trash, and other debris as needed or ordered. Whenever you place the removed sediment deposits within the job site, stabilize the sediment deposits to prevent erosion.",
    "Risk Level 1, 2 and 3 dischargers shall establish and maintain effective perimeter controls and stabilize all construction entrances and exits to sufficiently control erosion and sediment discharges from the site.",
    "Risk Level 2 and 3 dischargers shall ensure that all storm drain inlets and perimeter controls, runoff control BMPs, and pollutant controls at entrances and exits (e.g. tire washoff locations) are maintained and protected from activities that reduce their effectiveness.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var SCS10_1 = [
    " ",
    "Provide temporary drainage inlet protection around drainage inlets as changing conditions require.",
    "Dischargers shall implement a combination of sediment and erosion controls to prevent or minimize sediment discharges from the site. Control measures shall include, but are not limited to, the following items:\n4. Protect drain inlets and outfall structures with appropriate controls for erosion and to minimize sediment discharges."
];
var SCS10_2 = [
    " ",
    "Drainage inlet protection must be Type 1, Type 2, Type 3A, Type 3B, Type 4A, Type 4B, Type 5, Type 6A, Type 6B, or a combination, as appropriate for conditions around the drainage inlet.\nFor drainage inlet protection at drainage inlets in paved and unpaved areas:\n1. Prevent runoff ponds from encroaching onto the traveled way or overtopping the curb or dike. Use a linear sediment barrier to redirect runoff and control ponding.\n2. Clear the area around each drainage inlet of obstructions, including rocks, clods, and debris greater than 1 inch in diameter, before installing the drainage inlet protection.\n3. Install the linear sediment barrier upslope of the existing drainage inlet and parallel with the curb, dike, or flow line to prevent sediment from entering the drainage inlet\nIf gravel-filled bags are used for Type 3A and Type 3B temporary drainage inlet protection, place the gravel-filled bags end-to-end to eliminate gaps. Stack the bags so that the upper row overlaps joints in the lower row. Arrange the bags to create a spillway by removing 1 or more gravel-filled bags from the upper layer.\nPlace fiber rolls over the erosion control blanket for Type 4A temporary drainage inlet protection.\nIf a foam barrier is used for Type 4B temporary drainage inlet protection, secure the barrier to the pavement at the angle and spacing shown. Place the barrier to provide a tight joint with the curb or dike. Cut the cover fabric or jacket to ensure a tight fit.\nIf a rigid sediment barrier is used for Type 6A or Type 6B temporary drainage inlet protection at a grated catch basin without a curb inlet, place the barrier using a gasket to prevent runoff from flowing under the barrier. Secure the barrier to the pavement with nails and adhesive, gravel-filled bags, or a combination.\nInstall a sediment filter bag for Type 5 temporary drainage inlet protection as follows:\n1. Remove the drainage inlet grate\n2. Place the sediment filter bag in the opening\n3. Replace the grate to secure the sediment filter bag in place",
    "For a curb inlet without a grate, rigid plastic barriers must be sized to fit the catch basin or drainage inlet and have:\n1. Horizontal flap of at least 6 inches with an under-seal gasket to prevent underflows	2. High-flow bypass	3. Vertical height of at least 7 inches after installation\nFor a grated catch basin without a curb inlet, rigid plastic barriers must be sized to fit the catch basin or drainage inlet and:\n1. Cover the grate by at least 2 inches on each side and have an under-seal gasket to prevent underflows\n2. Have a high-flow bypass\n3. Have a vertical height of at least 1.5 inches after installation\nFor a curb inlet with a grate, rigid plastic barriers must be sized to fit the catch basin or drainage inlet and have:\n1. Horizontal flap that covers the grate by at least 2 inches on the 3 sides that are away from the curb opening and must have an under-seal gasket to prevent underflows\n2. High-flow bypass \n3. Vertical section that covers the curb opening by at least 5 inches after installation",
    "Secure foam barriers to:\n1. Pavement with 1-inch concrete nails, 1-inch washers, and solvent-free adhesive\n2. Soil with 6-inch nails and 1-inch washers",
    "Secure temporary foam barriers to the pavement with nails and adhesive, gravel-filled bags, or a combination. Install the foam barrier with a horizontal flap in a 3-inch deep trench and secure with nails and washers placed not more than 4 feet apart. Secure the barrier with 2 nails at the connection points where barriers overlap. Do not pierce the barrier’s core with nails or stakes.",
    "Temporary Drainage Inlet Protection",
    "Temporary Drainage Inlet Protection",
    "Temporary Drainage Inlet Protection",
    "Temporary Drainage Inlet Protection"
];
var SCS10_3 = [
    " ",
    "Posts must be wood or metal.\nWood posts must be:\n1. At least 2 by 2 inches in size and 4 feet long\n2. Untreated fir, redwood, cedar, or pine, cut from sound timber\n3. Straight and free of loose or unsound knots and other defects that could render the posts unfit for use\n4. Pointed on the end to be driven into the ground\nMetal posts must:\n1. Be at least 4 feet long.\n2. Be made of steel.\n3. Have a U-shaped, T-shaped, L-shaped, or other cross-sectional shape that can resist failure from lateral loads.\n4. Be pointed on the end to be driven into the ground.\n5. Weigh at least 0.75 pound per foot.\n6. Have a safety cap attached to the exposed end. The safety cap must be orange or red plastic and must fit snugly onto the metal post.\nPosts for a temporary reinforced silt fence must be at least 6 feet in length for a Type 1 installation and 5 feet in length for a Type 2 installation.",
    "Fiber rolls for a large sediment barrier must be Type B, except the dimensions must be from 18 to 22 inches in diameter, at least 8 feet long, and weigh at least 6.5 pounds per linear foot.",
    "Fiber roll must have a minimum functional longevity of 1 year and comply with the following requirements: \n1. Type A fiber roll must be fabricated from an erosion control blanket rolled along its width. Secure with natural fiber twine at 6-foot intervals, and 6 inches from each end. Fiber roll size must comply with either one of the following:\n1.1: 8 to 10 inches in diameter, 10 to 20 feet long, and at least 0.5 lb/ft\n1.2: 10 to 12 inches in diameter, at least 10 feet long, and at least 2 lb/ft\n2: Type B fiber roll must be a premanufactured roll filled with rice or wheat straw, wood excelsior, or coconut fiber. Rolls must be covered with biodegradable jute, sisal, or coir fiber netting secured tightly at each end. Fiber roll size must comply with either one of the following:\n2.1: 8 to 10 inches in diameter, 10 to 20 feet long, and at least 1.1 lb/ft \n2.2: 10 to 12 inches in diameter, at least 10 feet long, and at least 3 lb/ft",
    "Wood stakes must be untreated fir, redwood, cedar, or pine and cut from sound timber. The ends must be pointed for driving into the ground. Notched stakes must be at least 1 by 2 by 24 inches in size. Stakes without notches must be at least 1 by 1 by 24 inches. Metal stakes must be at least 1/2 inch in diameter and have tops bent at 90-degree angles or capped with an orange or red plastic safety cap that fits snugly onto the metal stake. Rope to fasten fiber rolls and compost socks must be 1/4 inch in diameter and biodegradable, such as sisal or manila.",
    "Gravel-filled bags must:\n1. Be made of geosynthetic gravel-filled bag.\n2. Have inside dimensions from 24 to 32 inches long and from 16 to 20 inches wide.\n3. Have a bound opening to keep gravel. The opening must be sewn with yarn, bound with wire, or secured with a closure device.\n4. Weigh from 30 to 50 pounds when filled with gravel.\nGravel for gravel-filled bags must be from 3/8 to 3/4 inch in diameter and must be clean and free of clay balls, organic matter, and other deleterious materials.",
    "A rigid plastic barrier must:\n1. Have an integrated filter\n2. Have a formed outer jacket of perforated HDPE or polyethylene terephthalate\n3. Have a flattened tubular-shaped cross section\n4. Be made from virgin or recycled materials\n5. Be free from biodegradable filler materials that degrade the physical or chemical characteristics of the completed filter core or outer jacket\n6. Have a length of at least 4 feet per unit\n7. Have the ability to interlock separate units into a long barrier so that water does not flow between the units\n8. Be secured to:\n8.1. Pavement with 1-inch concrete nails with 1-inch washers and solvent-free adhesive, gravel-filled bags, or a combination\n8.2. Soil with 6-inch nails with 1-inch washers and wood stakes",
    "Each sediment filter bag must be sized to fit the catch basin or drainage inlet and have a high-flow bypass. Sediment filter bags may include a metal frame. If the sediment filter bag does not have a metal frame and is deeper than 18 inches, it must include lifting loops, dump straps, and a restraint cord to keep the sides of the bag away from the walls of the catch basin.",
    "Foam barriers must have:\n1. Urethane foam-filled core\n2. Geosynthetic fabric cover and flap\n3. Triangular, circular, or square cross section\n4. Vertical height of at least 5 inches after installation\n5. Horizontal flap at least 8 inches in width\n6. A length of at least 4 feet per unit\n7. Ability to interlock separate units into a long barrier so that water will not flow between units",
    "Erosion control blanket must be made of processed natural fibers that are mechanically, structurally, or chemically bound together to form a continuous matrix that is surrounded by 2 natural nets. The erosion control blanket must comply with the requirements shown in the following table (Property; Type; Requirements):\nClassification; --; ECTC Type 2D\nNet Type; A, B, C; Natural\nNumber of Nets; A, B, C; Double\nMinimum Roll Width; A, B, C; 72 inches\nMatrix (A, B, C):\n[A: 70/30% (straw/coconut fiber)]\n[B: 100% woven coir (coconut fiber)]\n[C: Wood excelsior (80 percent of the fiber 6 inches or longer)]\nFunctional Longevity; A, B, C; 12 Months",
    "Steel staples must be a minimum of 11-gauge, 6-inch, U-shaped staples with a 1-inch crown. Provide heavier gauge and greater length if required by the site conditions. You may use an alternative CGP, Attachment device such as a 100 percent biodegradable fastener to install RECP instead of staples."
];
var SCS10_4 = [
    " ",
    "Remove sediment deposits whenever the sediment exceeds 1 inch in depth from the surface of an erosion control blanket. Remove sediment from a Type 2 sediment trap of a temporary inlet whenever the volume has been reduced by approximately 1/2. Remove sediment from a sediment filter bag whenever it becomes full or whenever the restraint cords are no longer visible. Empty a sediment filter bag without a metal frame by placing 1-inch steel reinforcing bars through the lifting loops and lifting the filled bag from the drainage inlet. Empty a sediment filter bag with a metal frame by lifting the metal frame from the drainage inlet. Rinse the sediment filter bag before replacing it at the drainage inlet. Whenever rinsing a sediment filter bag, do not allow the rinse water to enter a drainage inlet or waterway. Whenever you place the removed sediment within the job site, stabilize the sediment deposits to prevent erosion.",
    "Risk Level 2 and 3 dischargers shall ensure that all storm drain inlets and perimeter controls, runoff control BMPs, and pollutant controls at entrances and exits (e.g. tire washoff locations) are maintained and protected from activities that reduce their effectiveness.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];

// Soil Stabilization BMP Arrays:
var SSS3_1 = [
    " ",
    "Risk Level 1, 2 and 3 dischargers shall provide effective soil cover for *inactive areas and all finished slopes, open space, utility backfill, and completed lots.\n*Inactive areas of construction are areas of construction activity that have been disturbed and are not scheduled to be re-disturbed for at least 14 days.",
    "Risk Level 2 and 3 dischargers shall implement appropriate erosion control BMPs (runoff control and soil stabilization) in conjunction with sediment control BMPs for areas under *active construction.\n*Active areas of construction are areas undergoing land surface disturbance. This includes construction activity during the preliminary stage, mass grading stage, streets and utilities stage and the vertical construction stage.",
    "Install soil stabilization materials for water pollution control practices in all work areas that are inactive or before storm events.",
    "Apply temporary soil stabilization materials within 24 hours after an area is ready to receive temporary soil stabilization or before a forecasted storm event."
];
var SSS3_2 = [
    " ",
    "Do not use hydraulically-applied materials under the following conditions:\n1. During precipitation\n2. Whenever water is standing on or moving across the soil surface\n3. Soil is frozen\n4. Air temperature is below 40 degrees F during the tackifier's curing period unless allowed by the tackifier manufacturer and authorized",
    "If rates are not shown, apply temporary hydraulic mulch at the following rate:\n1. Fiber at 2,000 lb/acre	2. Tackifier under the manufacturer's instructions for the slope, soil, and wind conditions",
    "If rates are not shown, apply temporary hydraulic mulch (bonded fiber matrix) at the rate of 3,500 lb/acre.",
    "If rates are not shown, apply temporary hydraulic mulch (polymer-stabilize fiber matrix) at the following rate:\n1. Fiber at 2,000 lb/acre\n2. Tackifier at 8 gallons/acre",
    "If rates are not shown, apply temporary hydraulic mulch (cementitious binder) at the following rate:\n1. Fiber at 2,000 lb/acre\n2. Cementitious binder at 4,000 lb/acre\nFiber for temporary hydraulic mulch (cementitious binder) must be at least 50 percent wood fiber. The remaining percentage must be cellulose fiber, alternate fiber, or a combination.",
    "Apply hydromuch with hydraulic spray equipment that mixes fiber, tackifier, fertilizer, and other erosion control materials specified. If applying hydroseed, add seed to hydromulch. Seed may be dry applied to small areas not accessible by hydroseeding equipment if authorized.\nAdd water to hydromulch and hydroseed materials as recommended by the manufacturer and mix sufficiently to ensure an even application. A dispersing agent may be added to the mixture if authorized.\nEquipment must utilize a built-in continuous agitation and discharge system capable of producing a homogeneous mixture and a uniform application rate. The tank must have a minimum capacity of 1,000 gallons. You may use a smaller tank if authorized.\nApply materials in locations, rates, and number of applications shown and as follows: \n1. Begin application within 60 minutes after adding seed to the tank.\n2. Apply in successive passes as necessary to achieve the required application rate.\n3. Apply all hydromulch or hydroseed materials indicated for a single area within 72 hours.\nWhen hydromulch or hydroseed materials are applied to areas covered by RECP, apply hydromulch and hydroseed materials to the rolled product as follows:\n1. Verify the RECP is in uniform contact with the slope surface.\n2. Spray materials into the RECP perpendicular to the slope and integrate well.\n3. Do not displace or damage the RECP.\nAfter the final application, do not allow pedestrians or equipment onto the treated areas.",
    "Apply bonded fiber matrix materials in the locations, rates, and number of applications shown and as follows:\n1. Apply in successive passes as necessary to achieve the required application rate.\n2. Form a continuous uniform mat with no gaps between the mat and the soil surface as follows:\n2.1. Apply in 2 or more directions if necessary.\n2.2. Apply in layers as necessary to avoid slumping and aid drying."
];
var SSS3_3 = [
    " ",
    "Cementitious binder must be:\n1. Calcium sulfate hemihydrate\n2. At least 85 percent pure\n3. Functional for at least 365 days\n4. Able to easily mix with water and fiber\n5. Nontoxic to aquatic organisms\n6. Free from growth or germination-inhibiting factors\n7. Nonflammable",
    "Fiber must be wood fiber, cellulose fiber, alternate fiber, or a combination of these fibers.\nWood fiber must be a long strand, whole wood fiber thermos-mechanically processed from clean whole wood chips.\nCelullose fiber must be made from natural or recycled pulp fiber, such as wood chips, sawdust, newsprint, chipboard, corrugated cardboard, or a combination of these materials.\nAlternate fiber must be a long strand, whole natural fiber made from clean straw, cotton, corn, or other natural feed stock.\nFiber must:\n1. Disperse into a uniform slurry when mixed with water.\n2. Contain 3/4-inch fiber strands for at least 25 percent by total volume.\n3. Have at least 40 percent retained when passed through a no. 25 sieve.\n4. Have an initial moisture content of no more than 15 percent of its dry weight when tested under CA Test 226. The moisture content must be marked on the packaging.\n5. Have a water holding capacity, by weight, of at least 1,200 percent when tested under the procedure designated in the Department's Final Report, CA-DOT-TL-2176-1-76-36, Water Holding Capacity for Hydromulch, available from METS.\n6. Be nontoxic to plants and animal life.\n7. Be free of synthetic or plastic materials, lead paint, printing ink, varnish, petroleum products, seed germination inhibitors, and chlorine bleach.\n8. Contain less than 250 ppm of boron.\n9. Contain less than 7 percent ash when tested under Technical Association of the Pulp and Paper Industry, TAPPI Standard T 413.\n10. Be colored to contrast with the area on which the fiber is to be applied. The coloring agent must be biodegradable, nontoxic, and free from copper, mercury and arsenic and must not stain concrete or painted surfaces.\nFiber for temporary hydraulic mulch must be at least 50 percent wood fiber. The remaining percentage must be cellulose fiber, alternate fiber, or a combination.\nFiber for temporary bonded fiber matrix and bonded fiber matrix must be 100 percent wood fiber and comply with the requirements for fiber except the sieve requirement must be at least 50 percent retained on a no. 25 sieve.\nFiber for polymer stabilized fiber matrix must be at least 50 percent wood fiber. The remaining percentage must be cellulose fiber, alternate fiber, or a combination.",
    "Tackifier must be (1) free from growth or germination inhibiting factors, (2) nonflammable, (3) nontoxic to aquatic organisms, and (4) functional for a minimum of 180 days.\nGeneral purpose tackifier may be either a plant based product or a polymeric emulsion blend as follows:\n1. Plant based tackifier must be a natural high molecular weight polysaccharide, a high viscosity hydrocolloid that is miscible in water, and labeled as either guar, psyllium, or starch, as follows:\n1.1. Guar gum based product must be derived from the ground endosperm of the guar plant, Cyanmopsis tetragonolobus. It must be treated with dispersing agents for easy mixing. It must be able to be diluted at the rate of 1 to 5 pounds per 100 gallons of water.\n1.2. Psyllium based product must be manufactured from the finely ground, mucilloid coating of Plantago ovata or Plantago ispaghula seeds and able to dry and form a firm but rewettable membrane.\n1.3. Starch based product must be a nonionic, water-soluble, granular material derived from corn, potato, or other plant-based source.\n2. Polymeric emulsion blend tackifier must be a prepackaged liquid or dry powder, anionic formulation with a residual monomer content not exceeding 0.05 percent by weight. The tackifier must contain and be labeled with one of the following as the primary active ingredients:\n2.1. Acrylic copolymers and polymers.\n2.2. Polymers of methacrylates and acrylates.\n2.3. Copolymers of sodium acrylates and acrylamides.\n2.4. Polyacrylamide and copolymer of acrylamide.\n2.5. Hydrocolloid polymers.",
    "Tackifier for polymer stabilized fiber matrix must be:\n1. A liquid formulation with polyacrylamide as the primary active ingredient with the following requirements:\n1.1. Linear, anionic copolymer of acrylamide and sodium acrylate.\n1.2. Anionic with a residual monomer content that is at most 0.05 percent by weight.\n2. Formulated and labeled as one of the following:\n2.1. Water-in-oil emulsion containing at least 2.6 pounds of pure polyacrylamide per gallon. Pure polyacrylamide must be at least 30 percent active.\n2.2. Liquid dispersed polyacrylamide containing at least 4.4 pounds pure polyacrylamide per gallon. Pure polyacrylamide must be at least 35 percent active.",
    "Tackifier for bonded fiber matrix must:\n1. Be bonded to the fiber or prepackaged with the fiber by the manufacturer\n2. Contain a minimum of 10 percent of the combined weight of the dry fiber, activating agents, and additives\n3. Be an organic, high viscosity colloidal polysaccharide with activating agents or a blended hydrocolloid-based binder",
    "Polymer stabilized fiber matrix must be hydraulically-applied material composed of fiber and tackifier and may also include seed and fertilizer as shown.",
    "Bonded fiber matrix must be hydraulically-applied material composed of fiber and tackifier and may also include seed and fertilizer as shown."
];
var SSS3_4 = [
    " ",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var SSS4_1 = [
    " ",
    "Risk Level 1, 2 and 3 dischargers shall provide effective soil cover for *inactive areas and all finished slopes, open space, utility backfill, and completed lots.\n*Inactive areas of construction are areas of construction activity that have been disturbed and are not scheduled to be re-disturbed for at least 14 days.",
    "Risk Level 2 and 3 dischargers shall implement appropriate erosion control BMPs (runoff control and soil stabilization) in conjunction with sediment control BMPs for areas under *active construction\n*Active areas of construction are areas undergoing land surface disturbance. This includes construction activity during the preliminary stage, mass grading stage, streets and utilities stage and the vertical construction stage.",
    "Install soil stabilization materials for water pollution control practices in all work areas that are inactive or before storm events.",
    "Apply temporary soil stabilization materials within 24 hours after an area is ready to receive temporary soil stabilization or before a forecasted storm event."
];
var SSS4_2 = [
    " ",
    "Do not use hydraulically-applied materials under the following conditions:\n1. During precipitation\n2. Whenever water is standing on or moving across the soil surface\n3. Soil is frozen\n4. Air temperature is below 40 degrees F during the tackifier's curing period unless allowed by the tackifier manufacturer and authorized",
    "If rates are not shown for fiber and tackifier, apply temporary hydroseed at the following rate:\n1. Seed as shown\n2. Fiber at 2,000 lb/acre	\n3. Tackifier under the manufacturer's instructions for the slope, soil, and wind conditions\nFiber for temporary hydroseed must be at least 50 percent wood fiber. The remaining percentage must be cellulose fiber, alternate fiber, or a combination.",
    "Apply hydromuch with hydraulic spray equipment that mixes fiber, tackifier, fertilizer, and other erosion control materials specified. If applying hydroseed, add seed to hydromulch. Seed may be dry applied to small areas not accessible by hydroseeding equipment if authorized.\nAdd water to hydromulch and hydroseed materials as recommended by the manufacturer and mix sufficiently to ensure an even application. A dispersing agent may be added to the mixture if authorized.\nEquipment must utilize a built-in continuous agitation and discharge system capable of producing a homogeneous mixture and a uniform application rate. The tank must have a minimum capacity of 1,000 gallons. You may use a smaller tank if authorized.\nApply materials in locations, rates, and number of applications shown and as follows: \n1. Begin application within 60 minutes after adding seed to the tank.\n2. Apply in successive passes as necessary to achieve the required application rate.\n3. Apply all hydromulch or hydroseed materials indicated for a single area within 72 hours.\nWhen hydromulch or hydroseed materials are applied to areas covered by RECP, apply hydromulch and hydroseed materials to the rolled product as follows:\n1. Verify the RECP is in uniform contact with the slope surface.\n2. Spray materials into the RECP perpendicular to the slope and integrate well.\n3. Do not displace or damage the RECP.\nAfter the final application, do not allow pedestrians or equipment onto the treated areas."
];
var SSS4_3 = [
    " ",
    "Fiber must be wood fiber, cellulose fiber, alternate fiber, or a combination of these fibers.\nWood fiber must be a long strand, whole wood fiber thermos-mechanically processed from clean whole wood chips.\nCelullose fiber must be made from natural or recycled pulp fiber, such as wood chips, sawdust, newsprint, chipboard, corrugated cardboard, or a combination of these materials.\nAlternate fiber must be a long strand, whole natural fiber made from clean straw, cotton, corn, or other natural feed stock.\nFiber must:\n1. Disperse into a uniform slurry when mixed with water.\n2. Contain 3/4-inch fiber strands for at least 25 percent by total volume.\n3. Have at least 40 percent retained when passed through a no. 25 sieve.\n4. Have an initial moisture content of no more than 15 percent of its dry weight when tested under CA Test 226. The moisture content must be marked on the packaging.\n5. Have a water holding capacity, by weight, of at least 1,200 percent when tested under the procedure designated in the Department's Final Report, CA-DOT-TL-2176-1-76-36, Water Holding Capacity for Hydromulch, available from METS.\n6. Be nontoxic to plants and animal life.\n7. Be free of synthetic or plastic materials, lead paint, printing ink, varnish, petroleum products, seed germination inhibitors, and chlorine bleach.\n8. Contain less than 250 ppm of boron.\n9. Contain less than 7 percent ash when tested under Technical Association of the Pulp and Paper Industry, TAPPI Standard T 413.\n10. Be colored to contrast with the area on which the fiber is to be applied. The coloring agent must be biodegradable, nontoxic, and free from copper, mercury and arsenic and must not stain concrete or painted surfaces.\nFiber for temporary hydraulic mulch must be at least 50 percent wood fiber. The remaining percentage must be cellulose fiber, alternate fiber, or a combination.\nFiber for temporary bonded fiber matrix and bonded fiber matrix must be 100 percent wood fiber and comply with the requirements for fiber except the sieve requirement must be at least 50 percent retained on a no. 25 sieve.\nFiber for polymer stabilized fiber matrix must be at least 50 percent wood fiber. The remaining percentage must be cellulose fiber, alternate fiber, or a combination.",
    "Tackifier must be (1) free from growth or germination inhibiting factors, (2) nonflammable, (3) nontoxic to aquatic organisms, and (4) functional for a minimum of 180 days.\nGeneral purpose tackifier may be either a plant based product or a polymeric emulsion blend as follows:\n1. Plant based tackifier must be a natural high molecular weight polysaccharide, a high viscosity hydrocolloid that is miscible in water, and labeled as either guar, psyllium, or starch, as follows:\n1.1. Guar gum based product must be derived from the ground endosperm of the guar plant, Cyanmopsis tetragonolobus. It must be treated with dispersing agents for easy mixing. It must be able to be diluted at the rate of 1 to 5 pounds per 100 gallons of water.\n1.2. Psyllium based product must be manufactured from the finely ground, mucilloid coating of Plantago ovata or Plantago ispaghula seeds and able to dry and form a firm but rewettable membrane.\n1.3. Starch based product must be a nonionic, water-soluble, granular material derived from corn, potato, or other plant-based source.\n2. Polymeric emulsion blend tackifier must be a prepackaged liquid or dry powder, anionic formulation with a residual monomer content not exceeding 0.05 percent by weight. The tackifier must contain and be labeled with one of the following as the primary active ingredients:\n2.1. Acrylic copolymers and polymers.\n2.2. Polymers of methacrylates and acrylates.\n2.3. Copolymers of sodium acrylates and acrylamides.\n2.4. Polyacrylamide and copolymer of acrylamide.\n2.5. Hydrocolloid polymers.",
    "Seed with a germination rate lower than the minimum rate shown may be used if authorized. Measure and mix individual seed species in the presence of the Engineer before applying seed."
];
var SSS4_4 = [
    " ",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var SSS5_1 = [
    " ",
    "Risk Level 1, 2 and 3 dischargers shall provide effective soil cover for *inactive areas and all finished slopes, open space, utility backfill, and completed lots.\n*Inactive areas of construction are areas of construction activity that have been disturbed and are not scheduled to be re-disturbed for at least 14 days.",
    "Risk Level 2 and 3 dischargers shall implement appropriate erosion control BMPs (runoff control and soil stabilization) in conjunction with sediment control BMPs for areas under *active construction.\n*Active areas of construction are areas undergoing land surface disturbance. This includes construction activity during the preliminary stage, mass grading stage, streets and utilities stage and the vertical construction stage.",
    "Install soil stabilization materials for water pollution control practices in all work areas that are inactive or before storm events.",
    "Apply temporary soil stabilization materials within 24 hours after an area is ready to receive temporary soil stabilization or before a forecasted storm event."
];
var SSS5_2 = [
    " ",
    "Do not use hydraulically-applied materials under the following conditions:\n1. During precipitation\n2. Whenever water is standing on or moving across the soil surface\n3. Soil is frozen\n4. Air temperature is below 40 degrees F during the tackifier's curing period unless allowed by the tackifier manufacturer and authorized",
    "If rates are not shown, apply temporary soil binder under the manufacturer’s instructions for the slope, soil, and wind conditions."
];
var SSS5_3 = [
    " ",
    "Tackifier must be (1) free from growth or germination inhibiting factors, (2) nonflammable, (3) nontoxic to aquatic organisms, and (4) functional for a minimum of 180 days.\nGeneral purpose tackifier may be either a plant based product or a polymeric emulsion blend as follows:\n1. Plant based tackifier must be a natural high molecular weight polysaccharide, a high viscosity hydrocolloid that is miscible in water, and labeled as either guar, psyllium, or starch, as follows:\n1.1. Guar gum based product must be derived from the ground endosperm of the guar plant, Cyanmopsis tetragonolobus. It must be treated with dispersing agents for easy mixing. It must be able to be diluted at the rate of 1 to 5 pounds per 100 gallons of water.\n1.2. Psyllium based product must be manufactured from the finely ground, mucilloid coating of Plantago ovata or Plantago ispaghula seeds and able to dry and form a firm but rewettable membrane.\n1.3. Starch based product must be a nonionic, water-soluble, granular material derived from corn, potato, or other plant-based source.\n2. Polymeric emulsion blend tackifier must be a prepackaged liquid or dry powder, anionic formulation with a residual monomer content not exceeding 0.05 percent by weight. The tackifier must contain and be labeled with one of the following as the primary active ingredients:\n2.1. Acrylic copolymers and polymers.\n2.2. Polymers of methacrylates and acrylates.\n2.3. Copolymers of sodium acrylates and acrylamides.\n2.4. Polyacrylamide and copolymer of acrylamide.\n2.5. Hydrocolloid polymers."
];
var SSS5_4 = [
    " ",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var SSS6_1 = [
    " ",
    "Risk Level 1, 2 and 3 dischargers shall provide effective soil cover for *inactive areas and all finished slopes, open space, utility backfill, and completed lots.\n*Inactive areas of construction are areas of construction activity that have been disturbed and are not scheduled to be re-disturbed for at least 14 days.",
    "Risk Level 2 and 3 dischargers shall implement appropriate erosion control BMPs (runoff control and soil stabilization) in conjunction with sediment control BMPs for areas under *active construction.\n*Active areas of construction are areas undergoing land surface disturbance. This includes construction activity during the preliminary stage, mass grading stage, streets and utilities stage and the vertical construction stage.",
    "Install soil stabilization materials for water pollution control practices in all work areas that are inactive or before storm events.",
    "Apply temporary soil stabilization materials within 24 hours after an area is ready to receive temporary soil stabilization or before a forecasted storm event."
];
var SSS6_2 = [
    " ",
    "Do not use hydraulically-applied materials under the following conditions:\n1. During precipitation\n2. Whenever water is standing on or moving across the soil surface\n3. Soil is frozen\n4. Air temperature is below 40 degrees F during the tackifier's curing period unless allowed by the tackifier manufacturer and authorized",
    "Apply straw by spreading it uniformly without clumping or piling at the rates shown, based upon slope measurements. Once straw work is started in an area, apply all materials for that area in the same working day.",
    "If rates are not shown, apply temporary tacked straw at the following rate:\n1. Straw at 2.0 tons/acre\n2. Fiber at 2,000 lb/acre\n3. Tackifier under the manufacturer's instructions for the slope, soil, and wind conditions"
];
var SSS6_3 = [
    " ",
    "Fiber for temporary tacked straw must be at least 50 percent wood fiber. The remaining percentage must be cellulose fiber, alternate fiber, or a combination.",
    "Straw must be stalks from wheat, rice, or barley furnished in air-dry condition with a consistency compatible for application with commercial straw-blowing equipment. Wheat and barley straw must be derived from irrigated crops. Straw must be free of plastic, glass, metal, rocks, and refuse or other deleterious material. Straw must have not have been used for stable bedding.",
    "Tackifier must be (1) free from growth or germination inhibiting factors, (2) nonflammable, (3) nontoxic to aquatic organisms, and (4) functional for a minimum of 180 days.\nGeneral purpose tackifier may be either a plant based product or a polymeric emulsion blend as follows:\n1. Plant based tackifier must be a natural high molecular weight polysaccharide, a high viscosity hydrocolloid that is miscible in water, and labeled as either guar, psyllium, or starch, as follows:\n1.1. Guar gum based product must be derived from the ground endosperm of the guar plant, Cyanmopsis tetragonolobus. It must be treated with dispersing agents for easy mixing. It must be able to be diluted at the rate of 1 to 5 pounds per 100 gallons of water.\n1.2. Psyllium based product must be manufactured from the finely ground, mucilloid coating of Plantago ovata or Plantago ispaghula seeds and able to dry and form a firm but rewettable membrane.\n1.3. Starch based product must be a nonionic, water-soluble, granular material derived from corn, potato, or other plant-based source.\n2. Polymeric emulsion blend tackifier must be a prepackaged liquid or dry powder, anionic formulation with a residual monomer content not exceeding 0.05 percent by weight. The tackifier must contain and be labeled with one of the following as the primary active ingredients:\n2.1. Acrylic copolymers and polymers. \n2.2. Polymers of methacrylates and acrylates. \n2.3. Copolymers of sodium acrylates and acrylamides.\n2.4. Polyacrylamide and copolymer of acrylamide. \n2.5. Hydrocolloid polymers."
];
var SSS6_4 = [
    " ",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var SSS7_1 = [
    " ",
    "Risk Level 1, 2 and 3 dischargers shall provide effective soil cover for *inactive areas and all finished slopes, open space, utility backfill, and completed lots.\n*Inactive areas of construction are areas of construction activity that have been disturbed and are not scheduled to be re-disturbed for at least 14 days.",
    "Risk Level 2 and 3 dischargers shall implement appropriate erosion control BMPs (runoff control and soil stabilization) in conjunction with sediment control BMPs for areas under *active construction.\n*Active areas of construction are areas undergoing land surface disturbance. This includes construction activity during the preliminary stage, mass grading stage, streets and utilities stage and the vertical construction stage.",
    "Install soil stabilization materials for water pollution control practices in all work areas that are inactive or before storm events.",
    "Apply temporary soil stabilization materials within 24 hours after an area is ready to receive temporary soil stabilization or before a forecasted storm event."
];
var SSS7_2 = [
    " ",
    "Use restrainers to secure the cover fabric or plastic sheeting to the surface of the slope.\nRestrainers must be one of the following:\n1. Gravel-filled bags roped together and spaced not more than 6 feet apart.\n2. Wooden lath and anchor restrainers as shown. Wooden lath must be 2 by 4 inches by 8 feet made from fir or pine. Anchor restrainers must be made from steel reinforcing bars and spaced not more than 4 feet apart along the wooden lath.\n3. Another authorized method.",
    "Install temporary cover fabric as follows:\n1. Place fabric loosely on the slope or stockpile with the longitudinal edges perpendicular to the slope contours.\n2. Place fabric on the upper portion of the slope to overlap the fabric on the lower portion of the slope.\n3. Place fabric on the side facing the prevailing wind to overlap the fabric on the downwind side of the slope.\n4. Anchor the perimeter edge of the fabric in key trenches.\n5. Overlap edges of the fabric by at least 2 feet.\n6. Place restrainers at the overlap area and along the toe of the slope. Space the restrainers a maximum of 8 feet on center between the overlaps.\n7. If anchor restraints are used, ensure that the leg of the steel reinforcing bar pierces the fabric and holds the wooden lath firmly against the surface of the slope or stockpile.\nWhenever you remove a temporary cover to perform other work, replace and resecure it within 1 hour of stopping work.",
    "Before placing RECP, ensure the subgrade has been graded smooth and has no depressed voids. The subgrade must be free from obstructions, such as tree roots, projecting stones, or foreign matter greater than 1 inch in diameter. Fasten RECP to the surface with staples and anchor as shown. Do not drive vehicles upon RECP following placement.",
    "Temporary Cover",
    "Temporary Erosion Control Blanket"
];
var SSS7_3 = [
    " ",
    "An erosion control blanket classified as long-term and non-degradable must be rock slope protection fabric, Class 8.",
    "Temporary cover must be geosynthetic fabric, plastic sheeting, or a combination. Plastic sheeting must be single-ply geomembrane material, 10 mils thick, complying with ASTM D2103. Rope must be at least 3/8 inch in diameter and be biodegradable or nondegradable. Biodegradable rope must be made from sisal, manila, or other natural fiber. Nondegradable rope must be made from nylon, polypropylene, or other geosynthetic fiber.",
    "Gravel-filled bags must:\n1. Be made of geosynthetic gravel-filled bag.\n2. Have inside dimensions from 24 to 32 inches long and from 16 to 20 inches wide.\n3. Have a bound opening to keep gravel. The opening must be sewn with yarn, bound with wire, or secured with a closure device.\n4. Weigh from 30 to 50 pounds when filled with gravel.\nGravel for gravel-filled bags must be from 3/8 to 3/4 inch in diameter and must be clean and free of clay balls, organic matter, and other deleterious materials.",
    "RECP must be a long-term, degradable, open-weave textile manufactured or fabricated into rolls designed to reduce soil erosion and assist in the growth, establishment, and protection of vegetation. RECP must conform to the classification system established by the Erosion Control Technology Council.",
    "Jute mesh must be made of processed natural jute yarns woven into a matrix.",
    "Netting must be made of coconut fiber woven into a matrix.",
    "Erosion control blanket must be made of processed natural fibers that are mechanically, structurally, or chemically bound together to form a continuous matrix that is surrounded by 2 natural nets.",
    "Turf reinforcement mat must be a nondegradable, open-weave textile made of synthetic fibers, filaments, nets, wire mesh or other elements, processed into a permanent, three-dimensional matrix. Turf reinforcement mat must comply with requirements shown in the following table:",
    "Steel staples must be a minimum of 11-gauge, 6-inch, U-shaped staples with a 1-inch crown. Provide heavier gauge and greater length if required by the site conditions. You may use an alternative CGP, Attachment device such as a 100 percent biodegradable fastener to install RECP instead of staples."
];
var SSS7_4 = [
    " ",
    "Maintain a temporary cover to minimize exposure of slopes and stockpiles and prevent material movement beyond the linear sediment barrier.\nRelocate and secure restrainers to keep erosion control blankets in place. Whenever a temporary cover breaks free, re-secure it immediately.\nRepair or replace a temporary cover whenever any of the following occur:\n1. Covered area becomes exposed or exhibits visible erosion\n2. Washouts occur between the joints or beneath the linear sediment barrier\n3. Temporary cover becomes detached, torn, or unraveled",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var SSS8_1 = [
    " ",
    "Risk Level 1, 2 and 3 dischargers shall provide effective soil cover for *inactive areas and all finished slopes, open space, utility backfill, and completed lots.\n*Inactive areas of construction are areas of construction activity that have been disturbed and are not scheduled to be re-disturbed for at least 14 days.",
    "Risk Level 2 and 3 dischargers shall implement appropriate erosion control BMPs (runoff control and soil stabilization) in conjunction with sediment control BMPs for areas under *active construction.\n*Active areas of construction are areas undergoing land surface disturbance. This includes construction activity during the preliminary stage, mass grading stage, streets and utilities stage and the vertical construction stage.",
    "Install soil stabilization materials for water pollution control practices in all work areas that are inactive or before storm events.",
    "Apply temporary soil stabilization materials within 24 hours after an area is ready to receive temporary soil stabilization or before a forecasted storm event."
];
var SSS8_2 = [
    " ",
    "If rates are not shown, spread mulch to a uniform thickness to form a 2-inch thick blanket.",
    "Spread mulch placed in areas outside of plant basins to a uniform thickness as shown. Mulch must be placed at the rate described and placed in the plant basins or spread in areas as shown after the plants have been planted. Mulch placed in plant basins must not come in contact with the plant crown and stem. Spread mulch from the outside edge of the proposed plant basin or plant without basin to the adjacent edges of shoulders, paving, retaining walls, dikes, curbs, sidewalks, walls, fences, and existing plantings. If the proposed plant or plant without basin is 12 feet or more from the adjacent edges of shoulders, paving, retaining walls, dikes, curbs, sidewalks, walls, fences, and existing plantings, spread the mulch 6 feet beyond the outside edge of the proposed plant basin or plant without basin. Do not place mulch within 4 feet of the (1) flow line of earthen drainage ditches, (2) edge of paved ditches, or (3) drainage flow lines."
];
var SSS8_3 = [
    " ",
    "Mulch must not contain more than 0.1 percent of deleterious materials such as rocks, glass, plastics, metals, clods, weeds, weed seeds, coarse objects, sticks larger than the specified particle size, salts, paint, petroleum products, pesticides or other chemical residues harmful to plant or animal life.",
    "Tree bark mulch must be derived from cedar, Douglas fir, or redwood species. Tree bark mulch must be ground so that a minimum of 95 percent of the material by volume is less than 2 inches and no more than 30 percent by volume is less than 1 inch.",
    "Wood chip mulch must be derived from clean wood and not contain leaves or small twigs. Wood chip mulch must have an average thickness of 1/16 inch, length between 1/2 inch and 3 inches, and a width 3/8 inch or greater. At least 95 percent of wood chips, by volume, must conform to these dimensions.",
    "Shredded bark mulch must be a blend of loose, long, thin wood or bark pieces derived from trees with a high length-to-width ratio. A minimum of 95 percent of the wood strands must have lengths from 2 to 8 inches, with a width and thickness from 1/8 to 1-1/2 inches.",
    "Tree trimming mulch must be derived from chipped trees and may contain leaves and small twigs. Tree trimming mulch must have a particle size such that a minimum of 95 percent of the material by volume is less than 3 inches and no more than 30 percent by volume is less than 1 inch."
];
var SSS8_4 = [
    " ",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var SSS9_1 = [
    " ",
    "Risk Level 1, 2, 1nd 3 dischargers shall effectively manage all run-on, all runoff within the site and all runoff that discharges off the site. Run-on from off site shall be directed away from all disturbed areas or shall collectively be in compliance with the effluent limitations in this General Permit.",
    "Dischargers shall implement a combination of sediment and erosion controls to prevent or minimize sediment discharges from the site. Control measures shall include, but are not limited to, the following items:\n2. Install temporary gravel bag dikes, fiber rolls, filter fabric fence, or other equivalent measures as necessary to control erosion and runoff.\n8. Control storm water volume and velocity within the site to minimize soil erosion and offsite discharges.\n9. Direct all run-on surface flows from offsite, to the maximum extent possible, away from all disturbed areas.\n10. Surface flows from the project site shall be controlled to prevent downstream erosion at any point."
];
var SSS9_2 = [
    " ",
    "Construct a temporary earthen berm with native soil or selected material at least 8 inches high by 36 inches wide. Compacter by hand or mechanical methods. For other devices - See individual device requirement, but note the finding as SS-9.",
    "Before placing RECP, ensure the subgrade has been graded smooth and has no depressed voids. The subgrade must be free from obstructions, such as tree roots, projecting stones, or foreign matter greater than 1 inch in diameter. Fasten RECP to the surface with staples and anchor as shown. Do not drive vehicles upon RECP following placement",
    "Temporary Erosion Control Blanket"
];
var SSS9_3 = [
    " ",
    "An erosion control blanket classified as long-term and non-degradable must be rock slope protection fabric, Class 8.",
    "Gravel-filled bags must:\n1. Be made of geosynthetic gravel-filled bag.\n2. Have inside dimensions from 24 to 32 inches long and from 16 to 20 inches wide.\n3. Have a bound opening to keep gravel. The opening must be sewn with yarn, bound with wire, or secured with a closure device.\n4. Weigh from 30 to 50 pounds when filled with gravel.\nGravel for gravel-filled bags must be from 3/8 to 3/4 inch in diameter and must be clean and free of clay balls, organic matter, and other deleterious materials.",
    "RECP must be a long-term, degradable, open-weave textile manufactured or fabricated into rolls designed to reduce soil erosion and assist in the growth, establishment, and protection of vegetation. RECP must conform to the classification system established by the Erosion Control Technology Council.",
    "Jute mesh must be made of processed natural jute yarns woven into a matrix.",
    "Netting must be made of coconut fiber woven into a matrix.",
    "Erosion control blanket must be made of processed natural fibers that are mechanically, structurally, or chemically bound together to form a continuous matrix that is surrounded by 2 natural nets.",
    "Turf reinforcement mat must be a nondegradable, open-weave textile made of synthetic fibers, filaments, nets, wire mesh or other elements, processed into a permanent, three-dimensional matrix.",
    "Steel staples must be a minimum of 11-gauge, 6-inch, U-shaped staples with a 1-inch crown. Provide heavier gauge and greater length if required by the site conditions. You may use an alternative CGP, Attachment device such as a 100 percent biodegradable fastener to install RECP instead of staples."
];
var SSS9_4 = [
    " ",
    "Risk Level 2 and 3 dischargers shall ensure that all storm drain inlets and perimeter controls, runoff control BMPs, and pollutant controls at entrances and exits (e.g. tire washoff locations) are maintained and protected from activities that reduce their effectiveness.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var SSS10_1 = [
    " ",
    "Risk Level 1, 2, and 3 dischargers shall effectively manage all run-on, all runoff within the site and all runoff that discharges off the site. Run-on from off site shall be directed away from all disturbed areas or shall collectively be in compliance with the effluent limitations in this General Permit."
];
var SSS10_2 = [
    " ",
    "Note - If the installation of the Outlet Protection / Velocity Dissipation Device, SS-10 is not appropriate, the finding shall be noted under checklist question 10.2, not for the installation of the other BMP."
];
var SSS10_3 = [
    " ",
    "Note - If the material used to construct the Outlet Protection / Velocity Dissipation Device, SS-10 is not appropriate, the finding shall be noted under checklist question 10.3, not for the material for the other BMP."
];
var SSS10_4 = [
    " ",
    "Risk Level 2 and 3 dischargers shall ensure that all storm drain inlets and perimeter controls, runoff control BMPs, and pollutant controls at entrances and exits (e.g. tire washoff locations) are maintained and protected from activities that reduce their effectiveness.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var SSS11_1 = [
    " ",
    "Risk Level 1, 2, 1nd 3 dischargers shall effectively manage all run-on, all runoff within the site and all runoff that discharges off the site. Run-on from offsite shall be directed away from all disturbed areas or shall collectively be in compliance with the effluent limitations in this General Permit."
];
var SSS11_2 = [
    " ",
    "Note - If the installation of the Slope Drain, SS-11 is not appropriate, the finding shall be noted under checklist question 11.2, not for the installation of the other BMP."
];
var SSS11_3 = [
    " ",
    "Note - If the material of the Slope Drain, SS-11 is not appropriate, the finding shall be noted under checklist question 11.3, not for the installation of the other BMP."
];
var SSS11_4 = [
    " ",
    "Risk Level 2 and 3 dischargers shall ensure that all storm drain inlets and perimeter controls, runoff control BMPs, and pollutant controls at entrances and exits (e.g. tire washoff locations) are maintained and protected from activities that reduce their effectiveness.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];

// Tracking Control BMP Arrays:
var TCS1_1 = [
    " ",
    "Risk level 1, 2 and 3 dischargers shall establish and maintain effective perimeter controls and stabilize all construction entrances and exits to sufficiently control erosion and sediment discharges from the site.",
    "Risk level 2 and 3 dischargers shall ensure that construction activity traffic to and from the project is limited to entrances and exits that employ effective controls to prevent offsite tracking of sediment.",
    "Risk level 2 and 3 dischargers shall inspect on a daily basis all immediate access roads daily. At a minimum daily (when necessary) and prior to any rain event, the discharger shall remove any sediment or other construction activity-related materials that are deposited on the roads (by vacuuming or sweeping).",
    "Dischargers shall implement a combination of sediment and erosion controls to prevent or minimize sediment discharges from the site. Control measures shall include, but are not limited to, the following items:\n5. Prevent off-site tracking of earthen materials from the construction site onto adjacent roads and public ways. Dischargers shall control access points, install stabilized entrances/exits for vehicle and equipment traffic operating on the site, and implement sweeping as necessary where tracking prevention is not complete."
];
var TCS1_2 = [
    " ",
    "Prepare the location for a temporary construction entrance or roadway as follows:\n1. Remove vegetation to ground level and clear away debris\n2. Grade the ground to a uniform plane\n3. Grade the ground surface to drain\n4. Remove sharp objects that could damage the fabric\n5. Compact the top 1.5 feet of the soil to at least 90 percent relative compaction\nConstruct a temporary construction entrance or roadway as follows:\n1. Position the fabric along the length of the entrance or roadway\n2. Overlap the sides and ends of the fabric by at least 12 inches\n3. Spread rock over the fabric in the direction of traffic\n4. Cover the fabric with rock within 24 hours\n5. Keep a 6-inch layer of rock over the fabric to prevent damage from spreading equipment\nDo not drive on the fabric until the rock is spread.\nRepair fabric damaged during rock spreading by placing new fabric over the damaged area. The new fabric must be large enough to cover the damaged area and provide at least an 18-inch overlap on all edges.",
    "If a Type 1 temporary construction entrance is shown, use Type A rock. If a Type 2 temporary construction entrance is shown, use Type B rock under the corrugated steel panels. Use at least 6 corrugated steel panels for each entrance. Couple the panels together to prevent movement. If using a sump, install the sump within 20 feet of each temporary construction entrance.",
    "Temporary Construction Entrance"
];
var TCS1_3 = [
    " ",
    "Fabric for a temporary construction entrance must be rock slope protection fabric, Class 8.",
    "Type A rock must comply with:\n2. Sizes shown in the following table (Square screen size (inch); Percentage Passing; Percentage Retained):\n6; 100; 0\n3; 0; 100\nType B rock must be railway ballast number 25. Do not use blast furnace slag. Railway ballast number 25 must comply with:\n1. Description in AREMA Manual for Railway Engineering\n2. Sizes shown in the following table (Nominal Size Square Opening; Percentage Passing):\n2-1/2'' - 3/8''; 100\n3''; 100\n2-1/2''; 80-100\n2''; 60-85\n1-1/2''; 50-70\n1''; 25-50\n3/4''; --\n1/2''; 5-20\n3/8''; 0-10\nNo.4; 0-3",
    "Corrugated steel panels must:\n1. Be made of steel\n2. Be pressed or shop welded\n3. Have a slot or hook for connecting the panels together"
];
var TCS1_4 = [
    " ",
    "Maintain a temporary construction entrance or roadway to minimize the generation of dust and tracking of soil and sediment onto public roads. Whenever dust or sediment tracking increases, place additional rock unless the Engineer authorizes another method.\nRepair a temporary construction entrance or roadway if:\n1. Fabric is exposed\n2. Depressions in the surface develop\n3. Rock is displaced\nWhen the temporary construction entrance or roadway is being used, do not allow soil, sediment, and other debris that is tracked onto the pavement to enter storm drains, open drainage facilities, and watercourses.",
    "Risk Level 2 and 3 dischargers shall ensure that all storm drain inlets and perimeter controls, runoff control BMPs, and pollutant controls at entrances and exits (e.g. tire washoff locations) are maintained and protected from activities that reduce their effectiveness.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var TCS2_1 = [
    " ",
    "Not a specific CGP or Water Pollution Control Specification requirement"
];
var TCS2_2 = [
    " ",
    "Prepare the location for a temporary construction entrance or roadway as follows:\n1. Remove vegetation to ground level and clear away debris\n2. Grade the ground to a uniform plane\n3. Grade the ground surface to drain\n4. Remove sharp objects that could damage the fabric\n5. Compact the top 1.5 feet of the soil to at least 90 percent relative compaction\nConstruct a temporary construction entrance or roadway as follows:\n1. Position the fabric along the length of the entrance or roadway\n2. Overlap the sides and ends of the fabric by at least 12 inches\n3. Spread rock over the fabric in the direction of traffic\n4. Cover the fabric with rock within 24 hours\n5. Keep a 6-inch layer of rock over the fabric to prevent damage from spreading equipment\nDo not drive on the fabric until the rock is spread.\nRepair fabric damaged during rock spreading by placing new fabric over the damaged area. The new fabric must be large enough to cover the damaged area and provide at least an 18-inch overlap on all edges."
];
var TCS2_3 = [
    " ",
    "Fabric for a temporary construction entrance must be rock slope protection fabric, Class 10.",
    "Type A rock must comply with:\n2. Sizes shown in the following table (Square screen size (inch); Percentage Passing; Percentage Retained):\n6; 100; 0\n3; 0; 100\nType B rock must be railway ballast number 25. Do not use blast furnace slag. Railway ballast number 25 must comply with:\n1. Description in AREMA Manual for Railway Engineering\n2. Sizes shown in the following table (Nominal Size Square Opening; Percentage Passing):\n2-1/2'' - 3/8''; 100\n3''; 100\n2-1/2''; 80-100\n2''; 60-85\n1-1/2''; 50-70\n1''; 25-50\n3/4''; --\n1/2''; 5-20\n3/8''; 0-10\nNo.4; 0-3"
];
var TCS2_4 = [
    " ",
    "Maintain a temporary construction entrance or roadway to minimize the generation of dust and tracking of soil and sediment onto public roads. Whenever dust or sediment tracking increases, place additional rock unless the Engineer authorizes another method.\nRepair a temporary construction entrance or roadway if:\n1. Fabric is exposed\n2. Depressions in the surface develop\n3. Rock is displaced\nWhen the temporary construction entrance or roadway is being used, do not allow soil, sediment, and other debris that is tracked onto the pavement to enter storm drains, open drainage facilities, and watercourses.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];

// Wind Erosion Control BMP Arrays:
var WES1_1 = [
    " ",
    "Prevent and alleviate dust by applying water, dust palliative, or both and by covering active and inactive stockpiles.",
    "Risk Level 1, 2 and 3 dischargers shall implement effective wind erosion control.",
    "Monitor conditions and apply dust palliative for dust control as described and as ordered.  Dust control may be required at any time.",
    "Risk Level 1, 2 and 3 dischargers shall implement good housekeeping measures on the construction site to control the air deposition of site materials and from site operations. Such particulates can include, but are not limited to, sediment, nutrients, trash, metals, bacteria, oil and grease and organics. ",
    "Dischargers shall implement a combination of sediment and erosion controls to prevent or minimize sediment discharges from the site. Control measures shall include, but are not limited to, the following items:\n15. Wind erosion shall be controlled to prevent nuisance and to prevent the transport of dust and soil particles into the air, off the project site, into any surface waters, or into any drainage course."
];
var WES1_2 = [
    " ",
    "Dust control binders or dust palliative must be either miscible in water or a material that is directly applied to the surface without mixing with water.\nBinders that are miscible in water must be one of the following types:\n1. Resin emulsion composed from 57 to 63 percent of semiliquid petroleum resin and the remainder composed of water to which a suitable emulsifying agent has been added. Resin emulsion must comply with the following:\n1.1. Resin emulsion must be readily miscible with water and when diluted with any hard water in the proportions of 1 part emulsion to 10 parts water must show no signs of breakdown or separation of the petroleum resin base.\n1.2. Resin emulsion that has been stored in closed containers at temperatures above freezing for a period up to 3 months must show no signs of separation.\n1.3. Resin emulsion that has been stored for more than 3 months must not be used until tested and authorized.\n2. Asphaltic emulsion complying with the material specifications for asphaltic emulsions, Grade SS1.\n3. Binder materials composed of lignin sulfonate.\n4. Binder material that is noncorrosive, effective as a dust palliative, and miscible in water in the proportions specified in section 18-1.03C.\nBinders that are directly applied to the surface without mixing with water must be a product prepared from crude petroleum that is effective as a dust palliative.",
    "Mix binders that are miscible in water with additional water at a rate of 4 to 19 parts water to 1 part binder. The exact rate must be authorized. Accomplish mixing by placing the binder and water in the spreading equipment simultaneously or by another mixing method that produces equivalent results.",
    "Apply binders that are miscible in water with pressure type water distributor trucks equipped with a spray system or pressure type asphalt distributors that comply with mixing and application specifications in section 93. Apply material at an approximate rate of 0.2 to 0.8 gal/sq yd. Apply binders that are directly applied to the surface without mixing with water using authorized equipment. Apply binder at a rate of 0.10 to 0.25 gal/sq yd.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];

// Waste Management BMP Arrays:
var WMS1_1 = [
    " ",
    "Minimize or eliminate discharge of material into the air, storm drain systems, and receiving waters while taking delivery of, using, or storing the following materials:\n1. Hazardous chemicals, including acids, lime, glues, adhesives, paints, solvents, and curing compounds\n2. Soil stabilizers and binders\n3. Fertilizers\n4. Detergents\n5. Plaster\n6. Petroleum materials, including fuel, oil, and grease\n7. Asphalt and concrete components\n8. Pesticides and herbicides",
    "Risk Level 1, 2 and 3 dischargers shall implement good site management (i.e., 'housekeeping') measures for construction materials that could potentially be a threat to water quality if discharged. At a minimum, Risk Level 1, 2 and 3 dischargers shall implement the following good housekeeping measures:\na. Conduct an inventory of the products used and/or expected to be used and the end products that are produced and/or expected to be produced. This does not include materials and equipment that are designed to be outdoors and exposed to environmental conditions (i.e. poles, equipment pads, cabinets, conductors, insulators, bricks, etc.).\nb. Cover and berm loose stockpiled construction materials that are not actively being used (i.e. soil, spoils, aggregate, fly-ash, stucco, hydrated lime, etc.).\nc. Store chemicals in watertight containers (with appropriate secondary containment to prevent any spillage or leakage) or in a storage shed (completely enclosed).\nd. Minimize exposure of construction materials to precipitation. This does not include materials and equipment that are designed to be outdoors and exposed to environmental conditions (i.e. poles, equipment pads, cabinets, conductors, insulators, bricks, etc.).\ne. implement BMPs to prevent the off-site tracking of loose construction and landscape materials.",
    "Risk Level 1, 2 and 3 dischargers shall implement good housekeeping for landscape materials, which, at a minimum, shall consist of the following:\na. Contain stockpiled materials such as mulches and topsoil when they are not actively being used.\nb. Contain fertilizers and other landscape materials when they are not actively being used.\ne. Stack erodible landscape material on pallets and covering or storing such materials when not being used or applied.",
    "Dischargers shall minimize or prevent pollutants in authorized non-storm water discharges through the use of controls, structures and management practices that achieve BAT for toxic and non-conventional pollutants and BCT for conventional pollutants",
    "4. Store chemicals in watertight containers with appropriate secondary containment to prevent any spillage or leakage, and protect from precipitation and surface run-on.  For hazardous liquids used in active work areas, place in appropriate temporary secondary containment when not in use."
];
var WMS1_2 = [
    " ",
    "The following activities must be performed at least 100 feet from concentrated flows of stormwater, drainage courses, and inlets if within the floodplain and at least 50 feet if outside the floodplain, unless otherwise authorized:\n1. Stockpiling materials",
    "If materials are stored:\n1. Store liquids, petroleum materials, and substances listed in 40 CFR 110, 117, and 302 and place them in secondary containment facilities as specified by USDOT for storage of hazardous materials.\n2. Secondary containment facilities must be impervious to the materials stored there for a minimum contact time of 72 hours.\n3. Cover secondary containment facilities during nonworking days and whenever precipitation is forecasted. Secondary containment facilities must be adequately ventilated.\n4. Keep secondary containment facilities free of accumulated rainwater or spills. After precipitation, or in the event of spills or leaks, collect accumulated liquid and place it into drums within 24 hours. Handle the liquid as hazardous waste under section 14-11 unless testing confirms that the liquid is nonhazardous.\n5. Do not store incompatible materials, such as chlorine and ammonia, in the same secondary containment facility.\n6. Store materials in their original containers with the original material labels maintained in legible condition. Immediately replace damaged or illegible labels.\n7. Secondary containment facilities must have the capacity to contain precipitation from a 24-hour-long, 25-year storm, plus 10 percent of the aggregate volume of all containers or the entire volume of the largest container within the facility, whichever is greater.\n8. Store bagged or boxed material on pallets. Protect bagged or boxed material from wind and rain during nonworking days and whenever precipitation is forecasted.\n9. Provide sufficient separation between stored containers to allow for spill cleanup or emergency response access. Storage areas must be kept clean, well-organized, and equipped with cleanup supplies appropriate for the materials being stored.\n10. Repair or replace perimeter controls, containment structures, covers, and liners as necessary. Inspect storage areas before and after precipitation and at least weekly during other times.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var WMS2_1 = [
    " ",
    "Minimize or eliminate discharge of material into the air, storm drain systems, and receiving waters while taking delivery of, using, or storing the following materials:\n1. Hazardous chemicals, including acids, lime, glues, adhesives, paints, solvents, and curing compounds\n2. Soil stabilizers and binders\n3. Fertilizers\n4. Detergents\n5. Plaster\n6. Petroleum materials, including fuel, oil, and grease\n7. Asphalt and concrete components\n8. Pesticides and herbicides",
    "Risk Level 1, 2 and 3 dischargers shall implement good housekeeping for landscape materials, which, at a minimum, shall consist of the following:\nc. Discontinuing the application of any erodible landscape material within 2 days before a forecast rain event or during periods of precipitation.\nd. Applying erodible landscape material at quantities and application rates according to manufacturer’s recommendations or based on written specifications by knowledgeable and experience field personnel.",
    "Dischargers shall minimize or prevent pollutants in authorized non-storm water discharges through the use of controls, structures and management practices that achieve BAT for toxic and non-conventional pollutants and BCT for conventional pollutants"
];
var WMS2_2 = [
    " ",
    "Do not preheat, transfer, or load thermoplastic within 50 feet of drainage inlets and receiving waters. Do not unload, transfer, or load bituminous material for pavement markers within 50 feet of drainage inlets and receiving waters. Collect and dispose of bituminous material from the roadway after removing markers.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit.",
    "a. Consider the quantity, physical characteristics (e.g., liquid, powder, solid), and locations of each potential pollutant source handled, produced, stored, recycled, or disposed of at the site.\nb. Consider the degree to which pollutants associated with those materials may be exposed to and mobilized by contact with stormwater.\nc. Consider the direct and indirect pathways that pollutants may be exposed to storm water or authorized non-storm water discharges. This shall include an assessment of past spills or leaks, non-storm water discharges, and discharges from adjoining areas."
];
var WMS3_1 = [
    " ",
    "Minimize stockpiling of materials at the job site. Implement water pollution control practices within 72 hours of stockpiling material or before a forecasted storm event, whichever occurs first. If stockpiles are being used, do not allow soil, sediment, or other debris to enter storm drains, open drainages, and watercourses.\nActive and inactive soil stockpiles must be:\n1. Covered with soil stabilization material or a temporary cover\n2. Surrounded with a linear sediment barrier\nStockpiles of asphalt concrete and PCC rubble, HMA, aggregate base, or aggregate subbase must be:\n1. Covered with a temporary cover\n2. Surrounded with a linear sediment barrier\nStockpiles of pressure-treated wood must be:\n1. Placed on pallets\n2. Covered with impermeable material\nStockpiles of cold mix asphalt concrete must be:\n1. Placed on an impervious surface\n2. Covered with an impermeable material\n3. Protected from stormwater run-on and runoff",
    "Risk Level 1, 2 and 3 dischargers shall implement good site management (i.e., 'housekeeping') measures for construction materials that could potentially be a threat to water quality if discharged. At a minimum, Risk Level 1, 2 and 3 dischargers shall implement the following good housekeeping measures:\nb. Cover and berm loose stockpiled construction materials that are not actively being used (i.e. soil, spoils, aggregate, fly-ash, stucco, hydrated lime, etc.).",
    "Dischargers shall minimize or prevent pollutants in authorized non-storm water discharges through the use of controls, structures and management practices that achieve BAT for toxic and non-conventional pollutants and BCT for conventional pollutants",
    "10. Contain and securely protect stockpiled waste material from wind and rain at all times unless actively being used.\n11. Protect all loose piles of soil, silt, clay, sand, debris, or other earthen materials such that sediment is prevented from leaving the site."
];
var WMS3_2 = [
    " ",
    "The following activities must be performed at least 100 feet from concentrated flows of stormwater, drainage courses, and inlets if within the floodplain and at least 50 feet if outside the floodplain, unless otherwise authorized:\n1. Stockpiling materials",
    "Temporary cover"
];
var WMS3_3 = [
    " ",
    "Temporary cover must be geosynthetic fabric, plastic sheeting, or a combination.\nPlastic sheeting must be single-ply geomembrane material, 10 mils thick, complying with ASTM D2103.\nUse restrainers to secure the cover fabric or plastic sheeting to the surface of the slope or stockpile.\nRestrainers must be one of the following:\n1. Gravel-filled bags roped together and spaced not more than 6 feet apart.\n2. Wooden lath and anchor restrainers as shown. Wooden lath must be 2 by 4 inches by 8 feet made from fir or pine. Anchor restrainers must be made from steel reinforcing bars and spaced not more than 4 feet apart along the wooden lath.\n3. Another authorized method.\nRope must be at least 3/8 inch in diameter and be biodegradable or nondegradable. Biodegradable rope must be made from sisal, manila, or other natural fiber. Nondegradable rope must be made from nylon, polypropylene, or other geosynthetic fiber."
];
var WMS3_4 = [
    " ",
    "Repair or replace linear sediment barriers and covers as needed to keep them functioning properly. Whenever sediment accumulates to 1/3 of the linear sediment barrier height, remove the accumulated sediment.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var WMS4_1 = [
    " ",
    "Implement spill and leak prevention procedures for chemicals and hazardous substances stored on the job site.",
    "Risk Level 1, 2 and 3 dischargers shall implement good housekeeping measures for waste management, which, at a minimum, shall consist of the following:\ng. Implement procedures that effectively address hazardous and nonhazardous spills.\nh. Develop a spill response and implementation element of the SWPPP prior to commencement of construction activities. The SWPPP shall require that:\n  i. Equipment and materials for cleanup of spills shall be available on site and that spills and leaks shall be cleaned up immediately and disposed of properly; and\n  ii. Appropriate spill response personnel are assigned and trained.",
    "Dischargers shall minimize or prevent pollutants in authorized non-storm water discharges through the use of controls, structures and management practices that achieve BAT for toxic and non-conventional pollutants and BCT for conventional pollutants",
    "13. Develop a spill response plan prior to commencement of construction activities. The plan shall include:\na. Descriptions of equipment and materials required to be on site for cleanup of spills/leaks, and\nb. Descriptions of appropriate spill response procedures, the responsible personnel, and the training records of such personnel.  Include provisions to respond to potentially large spills that are beyond the capacity of the contractor to respond."
];
var WMS4_2 = [
    " ",
    "Keep material or waste storage areas clean, well-organized, and equipped with enough cleanup supplies for the material being stored. Report minor, semi-significant, and significant or hazardous spills to the WPC manager. The WPC manager must notify the Engineer immediately. As soon as it is safe, contain and clean up spills of petroleum materials and sanitary and septic waste substances listed under 40 CFR, parts 110, 117, and 302. Comply with section 14-11 whenever spills or leaks produce hazardous waste.",
    "Minor spills consist of quantities of oil, gasoline, paint, or other materials that are small enough to be controlled by a first responder upon discovery of the spill.\nClean up a minor spill using the following procedures:\n1. Contain the spread of the spill\n2. Recover the spilled material using absorption\n3. Clean the contaminated area\n4. Dispose of the contaminated material and absorbents promptly and properly",
    "Semi-significant spills consist of spills that can be controlled by a first responder with help from other personnel.\nClean up a semi-significant spill immediately using the following procedures:\n1. Contain the spread of the spill\n2. On paved or impervious surfaces, encircle and recover the spilled material with absorbent materials. Do not allow the spill to\nspread widely.\n3. If the spill occurs on soil, contain the spill by constructing an earthen dike and dig up the contaminated soil for disposal.\n4. If the spill occurs during precipitation, cover the spill with 10-mil plastic sheeting or other material to prevent contamination of runoff.\n5. Dispose of the contaminated material promptly and properly.",
    "Significant or hazardous spills consist of spills that cannot be controlled by job site personnel.\nImmediately notify qualified personnel of a significant or hazardous spill. Take the following steps:\n1. Do not attempt to clean up the spill until qualified personnel have arrived\n2. Notify the Engineer and follow up with a report\n3. Obtain the immediate services of a spill contractor or hazardous material team\n4. Notify local emergency response teams by dialing 911 and county officials by using the emergency phone numbers retained at the job site\n5. Notify the California Emergency Management Agency State Warning Center at (916) 845-8911\n6. Notify the National Response Center at (800) 424-8802 regarding spills of Federal reportable quantities under 40 CFR 110, 119, and 302\n7. Notify other agencies as appropriate, including:\n7.1. Fire Department\n7.2. Public Works Department\n7.3. Coast Guard\n7.4. Highway Patrol\n7.5. City Police or County Sheriff's Department\n7.6. Department of Toxic Substances\n7.7. California Division of Oil and Gas\n7.8. Cal/OSHA\n7.9. Regional Water Resources Control Board\nPrevent a spill from entering stormwater runoff before and during cleanup activities. Do not bury or wash the spill with water.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var WMS5_1 = [
    " ",
    "Risk Level 1, 2 and 3 dischargers shall implement good housekeeping measures for waste management, which, at a minimum, shall consist of the following:\nd. Cover waste disposal containers at the end of every business day and during a rain event.\ne. Prevent discharges from waste disposal containers to the storm water drainage system or receiving water.\nf. Contain and securely protect stockpiled waste material from wind and rain at all times unless actively being used.",
    "Risk Level 1, 2 and 3 dischargers shall implement good housekeeping measures on the construction site to control the air deposition of site materials and from site operations. Such particulates can include, but are not limited to, sediment, nutrients, trash, metals, bacteria, oil and grease and organics.",
    "Dischargers shall minimize or prevent pollutants in authorized non-storm water discharges through the use of controls, structures and management practices that achieve BAT for toxic and non-conventional pollutants and BCT for conventional pollutants"
];
var WMS5_2 = [
    " ",
    "Section 14-10 includes general specifications relating to solid waste disposal and recycling.\nDo not allow litter, trash, or debris to accumulate anywhere on the job site, including storm drain grates, trash racks, and ditch lines. Pick up and remove litter, trash, and debris from the job site at least once a week. WPC manager must monitor solid waste storage and disposal procedures on the job site.\nIf practicable, recycle nonhazardous job site waste and excess material. If recycling is not practicable, dispose of it.\nFurnish enough closed-lid dumpsters of sufficient size to contain the solid waste generated by work activities. When refuse reaches the fill line, empty the dumpsters. Dumpsters must be watertight. Do not wash out dumpsters at the job site. Furnish additional containers and more frequent pickup during the demolition phase of construction.\nSolid waste includes:\n1. Brick\n2. Mortar\n3. Timber\n4. Metal scraps\n5. Sawdust\n6. Pipe\n7. Electrical cuttings\n8. Nonhazardous equipment parts\n9. Styrofoam and other packaging materials\n10. Vegetative material and plant containers from highway planting\n11. Litter and smoking material, including litter generated randomly by the public\n12. Other trash and debris\nFurnish and use trash receptacles in the job site yard, field trailers, and locations where workers gather for lunch and breaks.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var WMS6_1 = [
    " ",
    "Section 14-11 includes general specifications relating to hazardous waste and contamination\nIf hazardous waste is, or will be, generated on the job site, the WPC manager must be thoroughly familiar with proper hazardous waste handling and emergency procedures under 40 CFR § 262.34(d)(5)(iii) and must have successfully completed training under 22 CA Code of Regs § 66265.16.\nThe WPC manager must:\n1. Oversee and enforce hazardous waste management practices\n2. Inspect all hazardous waste storage areas daily, including all temporary containment facilities and satellite collection locations\n3. Oversee all hazardous waste transportation activities on the job site",
    "Dischargers shall minimize or prevent pollutants in authorized non-storm water discharges through the use of controls, structures and management practices that achieve BAT for toxic and non-conventional pollutants and BCT for conventional pollutants",
    "4. Store chemicals in watertight containers with appropriate secondary containment to prevent any spillage or leakage, and protect from precipitation and surface run-on.  For hazardous liquids used in active work areas, place in appropriate temporary secondary containment when not in use."
];
var WMS6_2 = [
    " ",
    "Clean water-based and oil-based paint from brushes or equipment within a contained area in a way that does not contaminate soil, receiving waters, or storm drain systems. Handle and dispose of the following as hazardous waste under section 14-11: paints, thinners, solvents, residues, and sludges that cannot be recycled or reused. When thoroughly dry, dispose of the following as solid waste under section 14-10: dry latex paint, paint cans, used brushes, rags, absorbent materials, and drop cloths.",
    "Handle, store, and dispose of hazardous waste under 22 CA Code of Regs Div 4.5.\nUse the following storage procedures:\n1. Store hazardous waste and potentially hazardous waste separately from nonhazardous waste at the job site.\n2. For hazardous waste storage, use metal containers approved by the United States Department of Transportation (US DOT) for the transportation and temporary storage of hazardous waste.\n3. Store hazardous waste in sealed, covered containers labeled with the contents and accumulation start date under 22 CA Code of Regs, Div 4.5. Labels must comply with the provisions of 22 CA Code of Regs, Div 4.5.§ 66262.31 and § 66262.32. Immediately replace damaged or illegible labels.\n4. Handle hazardous waste containers such that no spillage occurs.\n5. Store hazardous waste away from storm drains, watercourses, moving vehicles, and equipment.\n6. Furnish containers with adequate storage volume at convenient satellite locations for hazardous waste collection. Immediately move these containers to secure temporary containment facilities when no longer needed at the collection location or when full.\n7. Store hazardous waste and potentially hazardous waste in secure temporary containment enclosures having secondary containment facilities impervious to the materials stored there for a minimum contact time of 72 hours. Temporary containment enclosures must be located away from public access. Acceptable secure enclosures include a locked chain link fenced area or a lockable shipping container located within the project limits until disposal as authorized.\n8. Design and construct secondary containment facilities with the capacity to contain precipitation from a 24-hour-long, 25-year storm; and 10 percent of the aggregate volume of all containers, or the entire volume of the largest container within the facility, whichever is greater.\n9. Cover secondary containment facilities during non-working days and if a storm event is predicted. Secondary containment facilities must be adequately ventilated.\n10. Keep secondary containment facility free of accumulated rainwater or spills. After a storm event, or in the event of spills or leaks, collect accumulated liquid and place into drums within 24 hours. Handle these liquids as hazardous waste unless testing determines them to be nonhazardous.\n11. Do not store incompatible wastes, such as chlorine and ammonia, in the same secondary containment facility.\n12. Provide sufficient separation between stored containers to allow for spill cleanup or emergency response access. Storage areas must be kept clean, well organized, and equipped with cleanup supplies appropriate for the wastes being stored.\n13. Repair or replace perimeter controls, containment structures, covers, and liners as necessary. Inspect storage areas before and after a storm event, and at least weekly during other times.\nDo not:\n1. Overfill hazardous waste containers\n2. Spill hazardous waste or potentially hazardous waste\n3. Mix hazardous wastes\n4. Allow hazardous waste or potentially hazardous waste to accumulate on the ground\nDispose of hazardous waste within 90 days of the start of generation. Use a hazardous waste manifest and a transporter registered with the DTSC and in compliance with the CA Highway Patrol Biennial Inspection of Terminals Program to transport hazardous waste to an appropriately permitted hazardous waste management facility.",
    "Excavation, transportation, and handling of material containing hazardous waste or contamination must result in no visible dust migration. Have a water truck or tank on the job site at all times while clearing and grubbing and performing earthwork operations in work areas containing hazardous waste or contamination.",
    "Do not stockpile material containing hazardous waste or contamination unless ordered by the Engineer. Stockpiles of material containing hazardous waste or contamination must not be placed where affected by surface run-on or run-off. Cover stockpiles with 13 mils minimum thickness of plastic sheeting or 1 foot of nonhazardous material. Do not place stockpiles in environmentally sensitive areas. Stockpiled material must not enter storm drains, inlets, or waters of the State.",
    "You are the generator of hazardous waste generated as a result of materials you bring to the job site. Use hazardous waste management practices under section 14-11.02B if you generate waste on the job site from the following substances: \n1. Petroleum materials\n2. Asphalt materials\n3. Concrete curing compound\n4. Pesticides\n5. Acids\n6. Paints\n7. Stains\n8. Solvents\n9. Wood preservatives\n10. Roofing tar\n11. Road flares\n12. Lime\n13. Glues and adhesives\n14. Materials classified as hazardous waste under 22 CA Code of Regs, Div 4.5",
    "Prevent the flow of water, including ground water, from mixing with contaminated soil by using one or a combination of the following measures:\n1. Berms\n2. Cofferdams\n3. Grout curtains\n4. Freeze walls\n5. Concrete seal course\nIf water mixes with contaminated soil and becomes contaminated, sample and analyze the water using a laboratory certified by the ELAP. If analysis results demonstrate that the water is a hazardous waste, manage and dispose of the water as hazardous waste.",
    "Labels must comply with the provisions of 22 CA Code of Regs § 66262.31 and § 66262.32. Mark labels with:\n1. Date the hazardous waste is generated\n2. The words 'Hazardous Waste'\n3. Composition and physical state of the hazardous waste (for example, asphalt grindings with thermoplastic or paint)\n4. The word 'Toxic'\n5. Name, address, and telephone number of the Engineer\n6. Contract number\n7. Contractor or subcontractor name\nHandle the containers such that no spillage occurs. You are the generator of any hazardous waste generated as the result of cleanup of spillage.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var WMS7_1 = [
    " ",
    "When soil contamination is found or suspected and a responsible party is not identified, or the responsible party fails to promptly take the appropriate action, the discharger shall have those soils sampled and tested to ensure proper handling and public safety measures are implemented. The discharger shall notify the appropriate local, State, and federal agency(ies) when contaminated soil is found at a construction site, and will notify the appropriate Regional Water Board.",
    "Dischargers shall minimize or prevent pollutants in authorized non-storm water discharges through the use of controls, structures and management practices that achieve BAT for toxic and non-conventional pollutants and BCT for conventional pollutants"
];
var WMS7_2 = [
    " ",
    "Excavation, transportation, and handling of material containing hazardous waste or contamination must result in no visible dust migration. Have a water truck or tank on the job site at all times while clearing and grubbing and performing earthwork operations in work areas containing hazardous waste or contamination.",
    "Do not stockpile material containing hazardous waste or contamination unless ordered by the Engineer. Stockpiles of material containing hazardous waste or contamination must not be placed where affected by surface run-on or run-off. Cover stockpiles with 13 mils minimum thickness of plastic sheeting or 1 foot of nonhazardous material. Do not place stockpiles in environmentally sensitive areas. Stockpiled material must not enter storm drains, inlets, or waters of the State.",
    "Prevent the flow of water, including ground water, from mixing with contaminated soil by using one or a combination of the following measures:\n1. Berms\n2. Cofferdams\n3. Grout curtains\n4. Freeze walls\n5. Concrete seal course\nIf water mixes with contaminated soil and becomes contaminated, sample and analyze the water using a laboratory certified by the ELAP. If analysis results demonstrate that the water is a hazardous waste, manage and dispose of the water as hazardous waste.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var WMS8_1 = [
    " ",
    "Use practices to prevent the discharge of asphalt concrete, PCC, and HMA waste into storm drain systems and receiving waters.\nCollect and dispose of asphalt concrete, PCC, and HMA waste at locations where:\n1. Concrete material, including grout, is used\n2. Concrete dust and debris result from demolition creates a residue or slurry\n3. Sawcutting, coring, grinding, grooving, or hydro-concrete demolition\n4. Concrete trucks or other concrete-coated equipment is cleaned at the job site",
    "Use a concrete washout to collect:\n1. Washout from concrete delivery trucks\n2. Slurries containing PCC or HMA from sawcutting, coring, grinding, grooving, and hydro-concrete demolition\n3. Concrete waste from mortar mixing stations",
    "Risk Level 1, 2 and 3 dischargers shall implement good housekeeping measures for waste management, which, at a minimum, shall consist of the following\ni. Ensure the containment of concrete washout areas and other washout areas that may contain additional pollutants so there is no discharge into the underlying soil and onto the surrounding areas.",
    "Dischargers shall minimize or prevent pollutants in authorized non-storm water discharges through the use of controls, structures and management practices that achieve BAT for toxic and non-conventional pollutants and BCT for conventional pollutants"
];
var WMS8_2 = [
    " ",
    "You may use any of the following systems for temporary concrete washout:\n1. Temporary concrete washout facilities\n2. Portable temporary concrete washouts\n3. Temporary concrete washout bins",
    "Place a concrete washout at the job site:\n1. Before concrete placement activities start\n2. In the immediate area of concrete work where authorized\n3. No closer than 50 feet from storm drain inlets, open drainage facilities, ESAs, and watercourses\n4. Away from traffic or public access areas\nInstall a concrete washout sign adjacent to each concrete washout location.",
    "Temporary Concrete Washout Facility"
];
var WMS8_3 = [
    " ",
    "The sign for a concrete washout must comply with section 12-3.06B(3), except the sign panel may be plywood if authorized. The sign panel must be at least 2 by 4 feet in size. The sign legend must read 'Concrete Washout' in at least 3-inch high black letters on a white background.",
    "The plastic liner for a temporary concrete washout facility must be:\n1. Single ply, new polyethylene sheeting, without seams or overlapping joints\n2. At least 10 mils thick\n3. Free of holes, punctures, tears or other defects",
    "A portable temporary concrete washout must be a commercially available, watertight container with enough capacity to contain all liquid and concrete waste generated by washout activities without seepage or spills and be:\n1. At least 55 gallons in capacity.\n2. Labeled for exclusive use as a concrete waste and washout facility. Stencil 'Concrete Waste Material' in 3-inch high black letters on white background where the top of stenciling is 12 inches from the top of the container.",
    "A temporary concrete washout bin must be a commercially available, watertight container with enough capacity to contain all liquid and concrete waste generated by washout activities without seepage or spills and be:\n1. At least 5 cubic yards in capacity.\n2. Roll-off type with or without folding steel ramps\n3. Labeled for exclusive use as a concrete waste and washout facility",
    "Posts must be wood or metal.\nWood posts must be:\n1. At least 2 by 2 inches in size and 4 feet long\n2. Untreated fir, redwood, cedar, or pine, cut from sound timber\n3. Straight and free of loose or unsound knots and other defects that could render the posts unfit for use\n4. Pointed on the end to be driven into the ground\nMetal posts must:\n1. Be at least 4 feet long.\n2. Be made of steel.\n3. Have a U-shaped, T-shaped, L-shaped, or other cross-sectional shape that can resist failure from lateral loads.\n4. Be pointed on the end to be driven into the ground.\n5. Weigh at least 0.75 pound per foot.\n6. Have a safety cap attached to the exposed end. The safety cap must be orange or red plastic and must fit snugly onto the metal post.",
    "Straw bales must be:\n1. At least 14 inches wide, 18 inches high, 36 inches long, and weigh at least 50 pounds.\n2. Composed entirely of vegetative matter except for the binding material.\n3. Bound by wire, nylon, or polypropylene string. Do not use jute or cotton binding. Baling wire must be at least 16 gauge. Nylon or polypropylene string must be approximately 0.08 inch in diameter with 80 pounds of breaking strength.",
    "Straw must be stalks from wheat, rice, or barley furnished in air-dry condition with a consistency compatible for application with commercial straw-blowing equipment. Wheat and barley straw must be derived from irrigated crops. Straw must be free of plastic, glass, metal, rocks, and refuse or other deleterious material. Straw must have not have been used for stable bedding.",
    "Gravel-filled bags must:\n1. Be made of geosynthetic gravel-filled bag.\n2. Have inside dimensions from 24 to 32 inches long and from 16 to 20 inches wide.\n3. Have a bound opening to keep gravel. The opening must be sewn with yarn, bound with wire, or secured with a closure device.\n4. Weigh from 30 to 50 pounds when filled with gravel.\nGravel for gravel-filled bags must be from 3/8 to 3/4 inch in diameter and must be clean and free of clay balls, organic matter, and other deleterious materials."
];
var WMS8_4 = [
    " ",
    "Do not fill a concrete washout higher than 6 inches below the upper rim. Remove and dispose of concrete waste within 2 business days after a concrete washout becomes filled. Dispose of concrete waste material from a concrete washout at a plant licensed to receive solid concrete waste, liquid concrete waste, or both. Relocate a portable temporary concrete washout or bin as needed for concrete work. Secure a portable temporary concrete washout or bin to prevent spilling of concrete waste material whenever it is being relocated or transported within the job site. Whenever any spilled material is observed, clean up the spilled material and place it back into the concrete washout unit.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var WMS9_1 = [
    " ",
    "Risk Level 1, 2 and 3 dischargers shall implement good housekeeping measures for waste management, which, at a minimum, shall consist of the following:\nb. Ensure the containment of sanitation facilities (e.g., portable toilets) to prevent discharges of pollutants to the storm water drainage system or receiving water.\nc. Clean or replace sanitation facilities and inspecting them regularly for leaks and spills.",
    "Dischargers shall minimize or prevent pollutants in authorized non-storm water discharges through the use of controls, structures and management practices that achieve BAT for toxic and non-conventional pollutants and BCT for conventional pollutants"
];
var WMS9_2 = [
    " ",
    "Do not bury or discharge wastewater from a sanitary or septic system within the highway. A sanitary facility discharging into a sanitary sewer system must be properly connected and free from leaks. Place a portable sanitary facility at least 50 feet away from storm drains, receiving waters, and flow lines. Comply with local health agency provisions if using an on-site disposal system.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];
var WMS10_1 = [
    " ",
    "Use practices that will prevent job-site liquid waste from entering storm drain systems and receiving waters. Liquid wastes include the following:\n1. Drilling slurries or fluids\n2. Grease-free and oil-free wastewater and rinse water\n3. Dredgings, including liquid waste from cleaning drainage systems\n4. Liquid waste running off a surface, including wash or rinse water\n5. Other non-stormwater liquids not covered by separate permit",
    "Risk Level 1, 2 and 3 dischargers shall implement good housekeeping measures for waste management, which, at a minimum, shall consist of the following:\na. Prevent disposal of any rinse or wash waters or materials on impervious or pervious site surfaces or into the storm drain system.",
    "Dischargers shall minimize or prevent pollutants in authorized non-storm water discharges through the use of controls, structures and management practices that achieve BAT for toxic and non-conventional pollutants and BCT for conventional pollutants"
];
var WMS10_2 = [
    " ",
    "Hold liquid waste in structurally sound, leak-proof containers, such as roll-off bins or portable tanks. Liquid waste containers must be of sufficient quantity and volume to prevent overflow, spills, and leaks. Store containers at least 50 feet from moving vehicles and equipment. Remove and dispose of deposited solids from sediment traps under section 14-10 unless the Engineer authorizes another method. Liquid waste may require testing to determine hazardous material content before disposal. Dispose of drilling fluids and residue. If an authorized location is available within the job site, fluids and residue exempt under 23 CA Code of Regs § 2511(g) may be dried by evaporation in a leak-proof container. Dispose of the remaining solid waste under section 14-10.",
    "The discharger shall at all times properly operate and maintain any facilities and systems of treatment and control (and related appurtenances) which are installed or used by the discharger to achieve compliance with the conditions of this General Permit. Proper operation and maintenance also includes adequate laboratory controls and appropriate quality assurance procedures. Proper operation and maintenance may require the operation of backup or auxiliary facilities or similar systems installed by a discharger when necessary to achieve compliance with the conditions of this General Permit."
];

// Logic for Non Storm Water (NS)
if (bmpstandardref.value == NSSR1_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS1_1[1] + "\n");
} else if (bmpstandardref.value == NSSR1_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS1_1[2] + "\n");
} else if (bmpstandardref.value == NSSR1_1[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS1_1[3] + "\n");
} else if (bmpstandardref.value == NSSR1_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS1_2[1] + "\n");
} else if (bmpstandardref.value == NSSR1_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS1_2[2] + "\n");
} else if (bmpstandardref.value == NSSR1_2[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS1_2[3] + "\n");
} else if (bmpstandardref.value == NSSR2_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS2_1[1] + "\n");
} else if (bmpstandardref.value == NSSR2_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS2_1[2] + "\n");
} else if (bmpstandardref.value == NSSR2_1[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS2_1[3] + "\n");
} else if (bmpstandardref.value == NSSR2_1[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS2_1[4] + "\n");
} else if (bmpstandardref.value == NSSR2_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS2_2[1] + "\n");
} else if (bmpstandardref.value == NSSR2_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS2_2[2] + "\n");
} else if (bmpstandardref.value == NSSR3_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS3_1[1] + "\n");
} else if (bmpstandardref.value == NSSR3_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS3_1[2] + "\n");
} else if (bmpstandardref.value == NSSR3_1[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS3_1[3] + "\n");
} else if (bmpstandardref.value == NSSR3_1[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS3_1[4] + "\n");
} else if (bmpstandardref.value == NSSR3_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS3_2[1] + "\n");
} else if (bmpstandardref.value == NSSR3_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS3_2[2] + "\n");
} else if (bmpstandardref.value == NSSR6_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS6_1[1] + "\n");
} else if (bmpstandardref.value == NSSR6_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS6_2[1] + "\n");
} else if (bmpstandardref.value == NSSR6_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS6_2[2] + "\n");
} else if (bmpstandardref.value == NSSR8_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS8_1[1] + "\n");
} else if (bmpstandardref.value == NSSR8_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS8_2[1] + "\n");
} else if (bmpstandardref.value == NSSR8_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS8_2[2] + "\n");
} else if (bmpstandardref.value == NSSR8_2[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS8_2[3] + "\n");
} else if (bmpstandardref.value == NSSR8_2[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS8_2[4] + "\n");
} else if (bmpstandardref.value == NSSR9_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS9_1[1] + "\n");
} else if (bmpstandardref.value == NSSR9_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS9_1[2] + "\n");
} else if (bmpstandardref.value == NSSR9_1[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS9_1[3] + "\n");
} else if (bmpstandardref.value == NSSR9_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS9_2[1] + "\n");
} else if (bmpstandardref.value == NSSR9_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS9_2[2] + "\n");
} else if (bmpstandardref.value == NSSR9_2[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS9_2[3] + "\n");
} else if (bmpstandardref.value == NSSR10_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS10_1[1] + "\n");
} else if (bmpstandardref.value == NSSR10_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS10_1[2] + "\n");
} else if (bmpstandardref.value == NSSR10_1[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS10_1[3] + "\n");
} else if (bmpstandardref.value == NSSR10_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS10_2[1] + "\n");
} else if (bmpstandardref.value == NSSR10_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS10_2[2] + "\n");
} else if (bmpstandardref.value == NSSR10_2[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS10_2[3] + "\n");
} else if (bmpstandardref.value == NSSR11_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS11_1[1] + "\n");
} else if (bmpstandardref.value == NSSR11_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS11_1[2] + "\n");
} else if (bmpstandardref.value == NSSR11_1[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS11_1[3] + "\n");
} else if (bmpstandardref.value == NSSR11_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS11_2[1] + "\n");
} else if (bmpstandardref.value == NSSR11_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS11_2[2] + "\n");
} else if (bmpstandardref.value == NSSR11_2[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS11_2[3] + "\n");
} else if (bmpstandardref.value == NSSR12_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS12_1[1] + "\n");
} else if (bmpstandardref.value == NSSR12_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS12_1[2] + "\n");
} else if (bmpstandardref.value == NSSR12_1[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS12_1[3] + "\n");
} else if (bmpstandardref.value == NSSR12_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS12_2[1] + "\n");
} else if (bmpstandardref.value == NSSR12_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS12_2[2] + "\n");
} else if (bmpstandardref.value == NSSR13_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS13_1[1] + "\n");
} else if (bmpstandardref.value == NSSR13_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS13_1[1] + "\n");
} else if (bmpstandardref.value == NSSR13_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS13_1[1] + "\n");
} else if (bmpstandardref.value == NSSR13_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS13_2[1] + "\n");
} else if (bmpstandardref.value == NSSR13_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS13_2[2] + "\n");
} else if (bmpstandardref.value == NSSR14_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS14_1[1] + "\n");
} else if (bmpstandardref.value == NSSR14_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS14_1[2] + "\n");
} else if (bmpstandardref.value == NSSR14_1[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS14_1[3] + "\n");
} else if (bmpstandardref.value == NSSR14_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS14_2[1] + "\n");
} else if (bmpstandardref.value == NSSR14_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS14_2[2] + "\n");
} else if (bmpstandardref.value == NSSR15_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS15_1[1] + "\n");
} else if (bmpstandardref.value == NSSR15_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS15_1[2] + "\n");
} else if (bmpstandardref.value == NSSR15_1[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS15_1[3] + "\n");
} else if (bmpstandardref.value == NSSR15_1[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS15_1[4] + "\n");
} else if (bmpstandardref.value == NSSR15_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS15_2[1] + "\n");
} else if (bmpstandardref.value == NSSR15_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + NSS15_2[2] + "\n");
}
// Logic for Sediment Control (SC)
if (bmpstandardref.value == SCSR1_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS1_1[1] + "\n");
} else if (bmpstandardref.value == SCSR1_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS1_1[2] + "\n");
} else if (bmpstandardref.value == SCSR1_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS1_2[1] + "\n");
} else if (bmpstandardref.value == SCSR1_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS1_2[2] + "\n");
} else if (bmpstandardref.value == SCSR1_2[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS1_2[3] + "\n");
} else if (bmpstandardref.value == SCSR1_2[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS1_2[4] + "\n");
} else if (bmpstandardref.value == SCSR1_2[5]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS1_2[5] + "\n");
} else if (bmpstandardref.value == SCSR1_3[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS1_3[1] + "\n");
} else if (bmpstandardref.value == SCSR1_3[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS1_3[2] + "\n");
} else if (bmpstandardref.value == SCSR1_3[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS1_3[3] + "\n");
} else if (bmpstandardref.value == SCSR1_3[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS1_3[4] + "\n");
} else if (bmpstandardref.value == SCSR1_3[5]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS1_3[5] + "\n");
} else if (bmpstandardref.value == SCSR1_3[6]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS1_3[6] + "\n");
} else if (bmpstandardref.value == SCSR1_4[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS1_4[1] + "\n");
} else if (bmpstandardref.value == SCSR1_4[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS1_4[2] + "\n");
} else if (bmpstandardref.value == SCSR1_4[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS1_4[3] + "\n");
} else if (bmpstandardref.value == SCSR1_4[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS1_4[4] + "\n");
} else if (bmpstandardref.value == SCSR4_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS4_1[1] + "\n");
} else if (bmpstandardref.value == SCSR4_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS4_1[2] + "\n");
} else if (bmpstandardref.value == SCSR4_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS4_2[1] + "\n");
} else if (bmpstandardref.value == SCSR4_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS4_2[2] + "\n");
} else if (bmpstandardref.value == SCSR4_3[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS4_3[1] + "\n");
} else if (bmpstandardref.value == SCSR4_3[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS4_3[2] + "\n");
} else if (bmpstandardref.value == SCSR4_3[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS4_3[3] + "\n");
} else if (bmpstandardref.value == SCSR4_4[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS4_4[1] + "\n");
} else if (bmpstandardref.value == SCSR4_4[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS4_4[2] + "\n");
} else if (bmpstandardref.value == SCSR5_1A[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS5_1A[1] + "\n");
} else if (bmpstandardref.value == SCSR5_1A[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS5_1A[2] + "\n");
} else if (bmpstandardref.value == SCSR5_1B[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS5_1B[1] + "\n");
} else if (bmpstandardref.value == SCSR5_2A[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS5_2A[1] + "\n");
} else if (bmpstandardref.value == SCSR5_2A[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS5_2A[2] + "\n");
} else if (bmpstandardref.value == SCSR5_2A[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS5_2A[3] + "\n");
} else if (bmpstandardref.value == SCSR5_2B[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS5_2B[1] + "\n");
} else if (bmpstandardref.value == SCSR5_2B[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS5_2B[2] + "\n");
} else if (bmpstandardref.value == SCSR5_2B[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS5_2B[3] + "\n");
} else if (bmpstandardref.value == SCSR5_3[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS5_3[1] + "\n");
} else if (bmpstandardref.value == SCSR5_3[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS5_3[2] + "\n");
} else if (bmpstandardref.value == SCSR5_3[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS5_3[3] + "\n");
} else if (bmpstandardref.value == SCSR5_3[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS5_3[4] + "\n");
} else if (bmpstandardref.value == SCSR5_4[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS5_4[1] + "\n");
} else if (bmpstandardref.value == SCSR5_4[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS5_4[2] + "\n");
} else if (bmpstandardref.value == SCSR5_4[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS5_4[3] + "\n");
} else if (bmpstandardref.value == SCSR5_4[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS5_4[4] + "\n");
} else if (bmpstandardref.value == SCSR6_1A[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS6_1A[1] + "\n");
} else if (bmpstandardref.value == SCSR6_1A[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS6_1A[2] + "\n");
} else if (bmpstandardref.value == SCSR6_2A[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS6_2A[1] + "\n");
} else if (bmpstandardref.value == SCSR6_2A[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS6_2A[2] + "\n");
} else if (bmpstandardref.value == SCSR6_2B[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS6_2B[1] + "\n");
} else if (bmpstandardref.value == SCSR6_2B[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS6_2B[2] + "\n");
} else if (bmpstandardref.value == SCSR6_2B[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS6_2B[3] + "\n");
} else if (bmpstandardref.value == SCSR6_3[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS6_3[1] + "\n");
} else if (bmpstandardref.value == SCSR6_4[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS6_4[1] + "\n");
} else if (bmpstandardref.value == SCSR6_4[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS6_4[2] + "\n");
} else if (bmpstandardref.value == SCSR6_4[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS6_4[3] + "\n");
} else if (bmpstandardref.value == SCSR6_4[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS6_4[4] + "\n");
} else if (bmpstandardref.value == SCSR7_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS7_1[1] + "\n");
} else if (bmpstandardref.value == SCSR7_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS7_1[2] + "\n");
} else if (bmpstandardref.value == SCSR7_1[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS7_1[3] + "\n");
} else if (bmpstandardref.value == SCSR7_1[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS7_1[4] + "\n");
} else if (bmpstandardref.value == SCSR7_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS7_2[1] + "\n");
} else if (bmpstandardref.value == SCSR7_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS7_2[2] + "\n");
} else if (bmpstandardref.value == SCSR7_2[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS7_2[3] + "\n");
} else if (bmpstandardref.value == SCSR7_2[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS7_2[4] + "\n");
} else if (bmpstandardref.value == SCSR7_2[5]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS7_2[5] + "\n");
} else if (bmpstandardref.value == SCSR9_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS9_1[1] + "\n");
} else if (bmpstandardref.value == SCSR9_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS9_2[1] + "\n");
} else if (bmpstandardref.value == SCSR9_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS9_2[2] + "\n");
} else if (bmpstandardref.value == SCSR9_2[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS9_2[3] + "\n");
} else if (bmpstandardref.value == SCSR9_3[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS9_3[1] + "\n");
} else if (bmpstandardref.value == SCSR9_3[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS9_3[2] + "\n");
} else if (bmpstandardref.value == SCSR9_3[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS9_3[3] + "\n");
} else if (bmpstandardref.value == SCSR9_4[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS9_4[1] + "\n");
} else if (bmpstandardref.value == SCSR9_4[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS9_4[2] + "\n");
} else if (bmpstandardref.value == SCSR9_4[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS9_4[3] + "\n");
} else if (bmpstandardref.value == SCSR9_4[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS9_4[4] + "\n");
} else if (bmpstandardref.value == SCSR10_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS10_1[1] + "\n");
} else if (bmpstandardref.value == SCSR10_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS10_1[2] + "\n");
} else if (bmpstandardref.value == SCSR10_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS10_2[1] + "\n");
} else if (bmpstandardref.value == SCSR10_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS10_2[2] + "\n");
} else if (bmpstandardref.value == SCSR10_2[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS10_2[3] + "\n");
} else if (bmpstandardref.value == SCSR10_2[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS10_2[4] + "\n");
} else if (bmpstandardref.value == SCSR10_2[5]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS10_2[5] + "\n");
} else if (bmpstandardref.value == SCSR10_2[6]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS10_2[6] + "\n");
} else if (bmpstandardref.value == SCSR10_2[7]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS10_2[7] + "\n");
} else if (bmpstandardref.value == SCSR10_2[8]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS10_2[8] + "\n");
} else if (bmpstandardref.value == SCSR10_3[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS10_3[1] + "\n");
} else if (bmpstandardref.value == SCSR10_3[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS10_3[2] + "\n");
} else if (bmpstandardref.value == SCSR10_3[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS10_3[3] + "\n");
} else if (bmpstandardref.value == SCSR10_3[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS10_3[4] + "\n");
} else if (bmpstandardref.value == SCSR10_3[5]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS10_3[5] + "\n");
} else if (bmpstandardref.value == SCSR10_3[6]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS10_3[6] + "\n");
} else if (bmpstandardref.value == SCSR10_3[7]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS10_3[7] + "\n");
} else if (bmpstandardref.value == SCSR10_3[8]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS10_3[8] + "\n");
} else if (bmpstandardref.value == SCSR10_3[9]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS10_3[9] + "\n");
} else if (bmpstandardref.value == SCSR10_3[10]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS10_3[10] + "\n");
} else if (bmpstandardref.value == SCSR10_4[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS10_4[1] + "\n");
} else if (bmpstandardref.value == SCSR10_4[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS10_4[2] + "\n");
} else if (bmpstandardref.value == SCSR10_4[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SCS10_4[3] + "\n");
}

// Logic for Soil Stabilization (SS)
if (bmpstandardref.value == SSSR3_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS3_1[1] + "\n");
} else if (bmpstandardref.value == SSSR3_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS3_1[2] + "\n");
} else if (bmpstandardref.value == SSSR3_1[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS3_1[3] + "\n");
} else if (bmpstandardref.value == SSSR3_1[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS3_1[4] + "\n");
} else if (bmpstandardref.value == SSSR3_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS3_2[1] + "\n");
} else if (bmpstandardref.value == SSSR3_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS3_2[2] + "\n");
} else if (bmpstandardref.value == SSSR3_2[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS3_2[3] + "\n");
} else if (bmpstandardref.value == SSSR3_2[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS3_2[4] + "\n");
} else if (bmpstandardref.value == SSSR3_2[5]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS3_2[5] + "\n");
} else if (bmpstandardref.value == SSSR3_2[6]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS3_2[6] + "\n");
} else if (bmpstandardref.value == SSSR3_2[7]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS3_2[7] + "\n");
} else if (bmpstandardref.value == SSSR3_3[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS3_3[1] + "\n");
} else if (bmpstandardref.value == SSSR3_3[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS3_3[2] + "\n");
} else if (bmpstandardref.value == SSSR3_3[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS3_3[3] + "\n");
} else if (bmpstandardref.value == SSSR3_3[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS3_3[4] + "\n");
} else if (bmpstandardref.value == SSSR3_3[5]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS3_3[5] + "\n");
} else if (bmpstandardref.value == SSSR3_3[6]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS3_3[6] + "\n");
} else if (bmpstandardref.value == SSSR3_3[7]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS3_3[7] + "\n");
} else if (bmpstandardref.value == SSSR3_4[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS3_4[1] + "\n");
} else if (bmpstandardref.value == SSSR4_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS4_1[1] + "\n");
} else if (bmpstandardref.value == SSSR4_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS4_1[2] + "\n");
} else if (bmpstandardref.value == SSSR4_1[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS4_1[3] + "\n");
} else if (bmpstandardref.value == SSSR4_1[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS4_1[4] + "\n");
} else if (bmpstandardref.value == SSSR4_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS4_2[1] + "\n");
} else if (bmpstandardref.value == SSSR4_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS4_2[2] + "\n");
} else if (bmpstandardref.value == SSSR4_2[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS4_2[3] + "\n");
} else if (bmpstandardref.value == SSSR4_3[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS4_3[1] + "\n");
} else if (bmpstandardref.value == SSSR4_3[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS4_3[2] + "\n");
} else if (bmpstandardref.value == SSSR4_3[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS4_3[3] + "\n");
} else if (bmpstandardref.value == SSSR4_4[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS4_4[1] + "\n");
} else if (bmpstandardref.value == SSSR5_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS5_1[1] + "\n");
} else if (bmpstandardref.value == SSSR5_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS5_1[2] + "\n");
} else if (bmpstandardref.value == SSSR5_1[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS5_1[3] + "\n");
} else if (bmpstandardref.value == SSSR5_1[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS5_1[4] + "\n");
} else if (bmpstandardref.value == SSSR5_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS5_2[1] + "\n");
} else if (bmpstandardref.value == SSSR5_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS5_2[2] + "\n");
} else if (bmpstandardref.value == SSSR5_3[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS5_3[1] + "\n");
} else if (bmpstandardref.value == SSSR5_4[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS5_4[1] + "\n");
} else if (bmpstandardref.value == SSSR6_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS6_1[1] + "\n");
} else if (bmpstandardref.value == SSSR6_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS6_1[2] + "\n");
} else if (bmpstandardref.value == SSSR6_1[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS6_1[3] + "\n");
} else if (bmpstandardref.value == SSSR6_1[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS6_1[4] + "\n");
} else if (bmpstandardref.value == SSSR6_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS6_2[1] + "\n");
} else if (bmpstandardref.value == SSSR6_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS6_2[2] + "\n");
} else if (bmpstandardref.value == SSSR6_2[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS6_2[3] + "\n");
} else if (bmpstandardref.value == SSSR6_3[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS6_3[1] + "\n");
} else if (bmpstandardref.value == SSSR6_3[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS6_3[2] + "\n");
} else if (bmpstandardref.value == SSSR6_3[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS6_3[3] + "\n");
} else if (bmpstandardref.value == SSSR6_4[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS6_4[1] + "\n");
} else if (bmpstandardref.value == SSSR7_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS7_1[1] + "\n");
} else if (bmpstandardref.value == SSSR7_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS7_1[2] + "\n");
} else if (bmpstandardref.value == SSSR7_1[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS7_1[3] + "\n");
} else if (bmpstandardref.value == SSSR7_1[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS7_1[4] + "\n");
} else if (bmpstandardref.value == SSSR7_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS7_2[1] + "\n");
} else if (bmpstandardref.value == SSSR7_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS7_2[2] + "\n");
} else if (bmpstandardref.value == SSSR7_2[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS7_2[3] + "\n");
} else if (bmpstandardref.value == SSSR7_2[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS7_2[4] + "\n");
} else if (bmpstandardref.value == SSSR7_2[5]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS7_2[5] + "\n");
} else if (bmpstandardref.value == SSSR7_3[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS7_3[1] + "\n");
} else if (bmpstandardref.value == SSSR7_3[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS7_3[2] + "\n");
} else if (bmpstandardref.value == SSSR7_3[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS7_3[3] + "\n");
} else if (bmpstandardref.value == SSSR7_3[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS7_3[4] + "\n");
} else if (bmpstandardref.value == SSSR7_3[5]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS7_3[5] + "\n");
} else if (bmpstandardref.value == SSSR7_3[6]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS7_3[6] + "\n");
} else if (bmpstandardref.value == SSSR7_3[7]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS7_3[7] + "\n");
} else if (bmpstandardref.value == SSSR7_3[8]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS7_3[8] + "\n");
} else if (bmpstandardref.value == SSSR7_3[9]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS7_3[9] + "\n");
} else if (bmpstandardref.value == SSSR7_4[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS7_4[1] + "\n");
} else if (bmpstandardref.value == SSSR7_4[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS7_4[2] + "\n");
} else if (bmpstandardref.value == SSSR8_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS8_1[1] + "\n");
} else if (bmpstandardref.value == SSSR8_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS8_1[2] + "\n");
} else if (bmpstandardref.value == SSSR8_1[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS8_1[3] + "\n");
} else if (bmpstandardref.value == SSSR8_1[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS8_1[4] + "\n");
} else if (bmpstandardref.value == SSSR8_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS8_2[1] + "\n");
} else if (bmpstandardref.value == SSSR8_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS8_2[2] + "\n");
} else if (bmpstandardref.value == SSSR8_3[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS8_3[1] + "\n");
} else if (bmpstandardref.value == SSSR8_3[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS8_3[2] + "\n");
} else if (bmpstandardref.value == SSSR8_3[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS8_3[3] + "\n");
} else if (bmpstandardref.value == SSSR8_3[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS8_3[4] + "\n");
} else if (bmpstandardref.value == SSSR8_3[5]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS8_3[5] + "\n");
} else if (bmpstandardref.value == SSSR8_4[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS8_4[1] + "\n");
} else if (bmpstandardref.value == SSSR9_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS9_1[1] + "\n");
} else if (bmpstandardref.value == SSSR9_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS9_1[2] + "\n");
} else if (bmpstandardref.value == SSSR9_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS9_2[1] + "\n");
} else if (bmpstandardref.value == SSSR9_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS9_2[2] + "\n");
} else if (bmpstandardref.value == SSSR9_2[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS9_2[3] + "\n");
} else if (bmpstandardref.value == SSSR9_3[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS9_3[1] + "\n");
} else if (bmpstandardref.value == SSSR9_3[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS9_3[2] + "\n");
} else if (bmpstandardref.value == SSSR9_3[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS9_3[3] + "\n");
} else if (bmpstandardref.value == SSSR9_3[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS9_3[4] + "\n");
} else if (bmpstandardref.value == SSSR9_3[5]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS9_3[5] + "\n");
} else if (bmpstandardref.value == SSSR9_3[6]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS9_3[6] + "\n");
} else if (bmpstandardref.value == SSSR9_3[7]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS9_3[7] + "\n");
} else if (bmpstandardref.value == SSSR9_3[8]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS9_3[8] + "\n");
} else if (bmpstandardref.value == SSSR9_4[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS9_4[1] + "\n");
} else if (bmpstandardref.value == SSSR9_4[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS9_4[2] + "\n");
} else if (bmpstandardref.value == SSSR10_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS10_1[1] + "\n");
} else if (bmpstandardref.value == SSSR10_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS10_2[1] + "\n");
} else if (bmpstandardref.value == SSSR10_3[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS10_3[1] + "\n");
} else if (bmpstandardref.value == SSSR10_4[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS10_4[1] + "\n");
} else if (bmpstandardref.value == SSSR10_4[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS10_4[2] + "\n");
} else if (bmpstandardref.value == SSSR11_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS11_1[1] + "\n");
} else if (bmpstandardref.value == SSSR11_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS11_2[1] + "\n");
} else if (bmpstandardref.value == SSSR11_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS11_3[1] + "\n");
} else if (bmpstandardref.value == SSSR11_4[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS11_4[1] + "\n");
} else if (bmpstandardref.value == SSSR11_4[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + SSS11_4[2] + "\n");
}

// Logic for Tracking Control (TC)
if (bmpstandardref.value == TCSR1_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + TCS1_1[1] + "\n");
} else if (bmpstandardref.value == TCSR1_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + TCS1_1[2] + "\n");
} else if (bmpstandardref.value == TCSR1_1[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + TCS1_1[3] + "\n");
} else if (bmpstandardref.value == TCSR1_1[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + TCS1_1[4] + "\n");
} else if (bmpstandardref.value == TCSR1_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + TCS1_2[1] + "\n");
} else if (bmpstandardref.value == TCSR1_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + TCS1_2[2] + "\n");
} else if (bmpstandardref.value == TCSR1_2[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + TCS1_2[3] + "\n");
} else if (bmpstandardref.value == TCSR1_3[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + TCS1_3[1] + "\n");
} else if (bmpstandardref.value == TCSR1_3[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + TCS1_3[2] + "\n");
} else if (bmpstandardref.value == TCSR1_3[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + TCS1_3[3] + "\n");
} else if (bmpstandardref.value == TCSR1_4[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + TCS1_4[1] + "\n");
} else if (bmpstandardref.value == TCSR1_4[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + TCS1_4[2] + "\n");
} else if (bmpstandardref.value == TCSR1_4[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + TCS1_4[3] + "\n");
} else if (bmpstandardref.value == TCSR2_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + TCS2_1[1] + "\n");
} else if (bmpstandardref.value == TCSR2_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + TCS2_2[1] + "\n");
} else if (bmpstandardref.value == TCSR2_3[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + TCS2_3[1] + "\n");
} else if (bmpstandardref.value == TCSR2_3[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + TCS2_3[2] + "\n");
} else if (bmpstandardref.value == TCSR2_4[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + TCS2_4[1] + "\n");
} else if (bmpstandardref.value == TCSR2_4[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + TCS2_4[2] + "\n");
}

// Logic for Wind Erosion (WE)
if (bmpstandardref.value == WESR1_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WES1_1[1] + "\n");
} else if (bmpstandardref.value == WESR1_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WES1_1[2] + "\n");
} else if (bmpstandardref.value == WESR1_1[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WES1_1[3] + "\n");
} else if (bmpstandardref.value == WESR1_1[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WES1_1[4] + "\n");
} else if (bmpstandardref.value == WESR1_1[5]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WES1_1[5] + "\n");
} else if (bmpstandardref.value == WESR1_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WES1_2[1] + "\n");
} else if (bmpstandardref.value == WESR1_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WES1_2[2] + "\n");
} else if (bmpstandardref.value == WESR1_2[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WES1_2[3] + "\n");
} else if (bmpstandardref.value == WESR1_2[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WES1_2[4] + "\n");
}

// Logic for Waste Management (WM)
if (bmpstandardref.value == WMSR1_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS1_1[1] + "\n");
} else if (bmpstandardref.value == WMSR1_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS1_1[2] + "\n");
} else if (bmpstandardref.value == WMSR1_1[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS1_1[3] + "\n");
} else if (bmpstandardref.value == WMSR1_1[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS1_1[4] + "\n");
} else if (bmpstandardref.value == WMSR1_1[5]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS1_1[5] + "\n");
} else if (bmpstandardref.value == WMSR1_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS1_2[1] + "\n");
} else if (bmpstandardref.value == WMSR1_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS1_2[2] + "\n");
} else if (bmpstandardref.value == WMSR1_2[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS1_2[3] + "\n");
} else if (bmpstandardref.value == WMSR2_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS2_1[1] + "\n");
} else if (bmpstandardref.value == WMSR2_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS2_1[2] + "\n");
} else if (bmpstandardref.value == WMSR2_1[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS2_1[3] + "\n");
} else if (bmpstandardref.value == WMSR2_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS2_2[1] + "\n");
} else if (bmpstandardref.value == WMSR2_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS2_2[2] + "\n");
} else if (bmpstandardref.value == WMSR2_2[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS2_2[3] + "\n");
} else if (bmpstandardref.value == WMSR3_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS3_1[1] + "\n");
} else if (bmpstandardref.value == WMSR3_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS3_1[2] + "\n");
} else if (bmpstandardref.value == WMSR3_1[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS3_1[3] + "\n");
} else if (bmpstandardref.value == WMSR3_1[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS3_1[4] + "\n");
} else if (bmpstandardref.value == WMSR3_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS3_2[1] + "\n");
} else if (bmpstandardref.value == WMSR3_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS3_2[2] + "\n");
} else if (bmpstandardref.value == WMSR3_3[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS3_3[1] + "\n");
} else if (bmpstandardref.value == WMSR3_4[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS3_4[1] + "\n");
} else if (bmpstandardref.value == WMSR3_4[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS3_4[2] + "\n");
} else if (bmpstandardref.value == WMSR4_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS4_1[1] + "\n");
} else if (bmpstandardref.value == WMSR4_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS4_1[2] + "\n");
} else if (bmpstandardref.value == WMSR4_1[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS4_1[3] + "\n");
} else if (bmpstandardref.value == WMSR4_1[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS4_1[4] + "\n");
} else if (bmpstandardref.value == WMSR4_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS4_2[1] + "\n");
} else if (bmpstandardref.value == WMSR4_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS4_2[2] + "\n");
} else if (bmpstandardref.value == WMSR4_2[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS4_2[3] + "\n");
} else if (bmpstandardref.value == WMSR4_2[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS4_2[4] + "\n");
} else if (bmpstandardref.value == WMSR4_2[5]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS4_2[5] + "\n");
} else if (bmpstandardref.value == WMSR5_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS5_1[1] + "\n");
} else if (bmpstandardref.value == WMSR5_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS5_1[2] + "\n");
} else if (bmpstandardref.value == WMSR5_1[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS5_1[3] + "\n");
} else if (bmpstandardref.value == WMSR5_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS5_2[1] + "\n");
} else if (bmpstandardref.value == WMSR5_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS5_2[2] + "\n");
} else if (bmpstandardref.value == WMSR6_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS6_1[1] + "\n");
} else if (bmpstandardref.value == WMSR6_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS6_1[2] + "\n");
} else if (bmpstandardref.value == WMSR6_1[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS6_1[3] + "\n");
} else if (bmpstandardref.value == WMSR6_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS6_2[1] + "\n");
} else if (bmpstandardref.value == WMSR6_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS6_2[2] + "\n");
} else if (bmpstandardref.value == WMSR6_2[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS6_2[3] + "\n");
} else if (bmpstandardref.value == WMSR6_2[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS6_2[4] + "\n");
} else if (bmpstandardref.value == WMSR6_2[5]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS6_2[5] + "\n");
} else if (bmpstandardref.value == WMSR6_2[6]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS6_2[6] + "\n");
} else if (bmpstandardref.value == WMSR6_2[7]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS6_2[7] + "\n");
} else if (bmpstandardref.value == WMSR6_2[8]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS6_2[8] + "\n");
} else if (bmpstandardref.value == WMSR7_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS7_1[1] + "\n");
} else if (bmpstandardref.value == WMSR7_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS7_1[2] + "\n");
} else if (bmpstandardref.value == WMSR7_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS7_2[1] + "\n");
} else if (bmpstandardref.value == WMSR7_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS7_2[2] + "\n");
} else if (bmpstandardref.value == WMSR7_2[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS7_2[3] + "\n");
} else if (bmpstandardref.value == WMSR7_2[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS7_2[4] + "\n");
} else if (bmpstandardref.value == WMSR8_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS8_1[1] + "\n");
} else if (bmpstandardref.value == WMSR8_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS8_1[2] + "\n");
} else if (bmpstandardref.value == WMSR8_1[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS8_1[3] + "\n");
} else if (bmpstandardref.value == WMSR8_1[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS8_1[4] + "\n");
} else if (bmpstandardref.value == WMSR8_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS8_2[1] + "\n");
} else if (bmpstandardref.value == WMSR8_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS8_2[2] + "\n");
} else if (bmpstandardref.value == WMSR8_2[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS8_2[3] + "\n");
} else if (bmpstandardref.value == WMSR8_3[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS8_3[1] + "\n");
} else if (bmpstandardref.value == WMSR8_3[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS8_3[2] + "\n");
} else if (bmpstandardref.value == WMSR8_3[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS8_3[3] + "\n");
} else if (bmpstandardref.value == WMSR8_3[4]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS8_3[4] + "\n");
} else if (bmpstandardref.value == WMSR8_3[5]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS8_3[5] + "\n");
} else if (bmpstandardref.value == WMSR8_3[6]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS8_3[6] + "\n");
} else if (bmpstandardref.value == WMSR8_3[7]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS8_3[7] + "\n");
} else if (bmpstandardref.value == WMSR8_3[8]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS8_3[8] + "\n");
} else if (bmpstandardref.value == WMSR8_4[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS8_4[1] + "\n");
} else if (bmpstandardref.value == WMSR8_4[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS8_4[2] + "\n");
} else if (bmpstandardref.value == WMSR9_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS9_1[1] + "\n");
} else if (bmpstandardref.value == WMSR9_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS9_1[2] + "\n");
} else if (bmpstandardref.value == WMSR9_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS9_2[1] + "\n");
} else if (bmpstandardref.value == WMSR9_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS9_2[2] + "\n");
} else if (bmpstandardref.value == WMSR10_1[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS10_1[1] + "\n");
} else if (bmpstandardref.value == WMSR10_1[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS10_1[2] + "\n");
} else if (bmpstandardref.value == WMSR10_1[3]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS10_1[3] + "\n");
} else if (bmpstandardref.value == WMSR10_2[1]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS10_1[1] + "\n");
} else if (bmpstandardref.value == WMSR10_2[2]) {
    bmpstandard.value += (bmpstandardref.value + "\n" + WMS10_1[2] + "\n");
}
// End Logic
// I am extremely exhausted from doing everything - Ryan