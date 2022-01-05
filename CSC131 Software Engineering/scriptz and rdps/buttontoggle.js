var swcaquestionno = this.getField("swcachecklistno");
var swcastandardref = this.getField("swcastandardreference");
var swcastandard = this.getField("swcastandard");

var A = [
    " ",
    "A.1 - Is the Signed SWPPP available at the varruction site?", 
    "A.2 - Is the SWPPP (and any amendments) prepared and signed by a certified QSD?"
]
var B = [
    " ",
    "B.1 - Does the WPC manager have a current certification (QSD) in the project files?", 
    "B.2 - Is the contractor conducting the required stormwater training and maintaining adequate records of this training in the project files?"
]
var C = [
    " ",
    "C.1 - Has the Storm Water Annual Report been developed and submitted (in the project files) for the last reporting year as required?"
]
var D = [
    " ",
    "D.1 - For projects that use an ATS, has the ATS been designed and is operated by qualified personnel, and do reporting requirements appear to be up to date and documented in the project files?"
]
var E = [
    " ",
    "E.1 - Are inspections, monitoring, and reporting procedures performed as required documented in the project files?", 
    "E.2 - If a NAL is exceeded, has a varruction site and run-on evaluation been prepared and documented in the project files?", 
    "E.3 - Is there a QSP Communication/Management Plan included in the SWPPP or on site?",
    "E.4 - Is there a dewatering/diversion plan included as part of the SWPPP if required?"
]

var QA1 = [
    " ",
    "SPECs, 13-1.03A General", 
    "CGP, Order XIV.C SWPPP Requirements", 
    "LTP, Order IX.D Availability and Public Records Access"
]
var QA2 = [
    " ",
    "SPECs, 13-3.01A Summary", 
    "CGP, Order VII.B.1 SWPPP Certification Requirements",
    "LTP, Order VII.B.1 SWPPP Certification Requirements"
]
var QB1 = [
    " ",
    "SPECs, 13-1.01D(3)(a) General",
    "CGP, Order VII.B.2 SWPPP Certification Requirements",
    "LTP, Order VII.B.3 SWPPP Certification Requirements"
]
var QB2 = [
    " ",
    "SPECs, 13-1.01D(2) Training",
    "CGP, Order VII.A General",
    "LTP, Order VII.B.1 SWPPP Certification Requirements"
]
var QC1 = [
    " ",
    "SPECs,13-3.01B(8) Storm Water Annual Report",
    "CGP, Order XVI Annual Reporting Requirements",
    "LTP, Attachment C.VII Annual Report"
]
var QD1 = [
    " ",
    "SPECs, 13-8.01A Summary",
    "CGP, Attachment F.C ATS Design, Operation, and Submittals",
    "CGP, Attachment F.M Active Treatment System (ATS) Monitoring Requirements",
    "LTP, Attachment E.C ATS Design, Operation, and Submittals",
    "LTP, Attachment E.M Active Treatment System (ATS) Monitoring Requirements"
]
var QE1 = [
    " ",
    "SPECs, 13-3.01B(4) Site Inspection Reports",
    "SPECs, 13-3.01B(5) Visual Monitoring Reports",
    "SPECs, 13-3.01B(6) Sampling and Analysis Day",
    "SPECs, 13-3.01B(7) Rain Event Action Plan",
    "CGP, Attachment C.G.2, D.G.2, E.G.2 Inspection, Maintenance and Repair",
    "CGP, Attachment C.I.3, D.I.3, E.I.3 Visual Monitoring (Inspection) Requirements for Qualifying Rain Events",
    "CGP, Attachment C.I.10, D.I.10, E.I.10 Non Storm Water Discharge Monitoring Requirements",
    "CGP, Attachment D.I.4, E.I.4 Water Quality Sampling and Analysis",
    "CGP, Attachment D.H.1, E.H.1 Rain Event Action Plan",
    "LTP, Attachment C.III.A Visual Inspections",
    "LTP, Attachment C.III.C.1 Storm Water Effluent Discharges",
    "LTP, Attachment C.VIII Rain Event Action Plan (REAP)"
]
var QE2 = [
    " ",
    "SPECs, 13-3.01B(6)(b) Numeric Action Level Exceedance Report",
    "CGP, Attachment D.I.15, E.I.15 NAL Exceedance Report",
    "LTP, Attachment C.V General Reporting Requirements"
]
var QE3 = [
    " ",
    "LTP, Section VII.B.5 QSP Responsibilities"
]
var QE4 = [
    " ",
    "LTP, Section VIII.C varruction Site Dewatering or Diversions"
]

// A.1
if (swcaquestionno.value == A[1]) {
    swcastandardref.setItems(QA1);
}
// A.2
if (swcaquestionno.value == A[2]) {
    swcastandardref.setItems(QA2);
}
// B.1
if (swcaquestionno.value == B[1]) {
    swcastandardref.setItems(QB1);
}
// B.2
if (swcaquestionno.value == B[2]) {
    swcastandardref.setItems(QB2);
}
// C.1
if (swcaquestionno.value == C[1]) {
    swcastandardref.setItems(QC1);
}
// D.1
if (swcaquestionno.value == D[1]) {
    swcastandardref.setItems(QD1);
}
// E.1
if (swcaquestionno.value == E[1]) {
    swcastandardref.setItems(QE1);
}
// E.2
if (swcaquestionno.value == E[2]) {
    swcastandardref.setItems(QE2);
}
// E.3
if (swcaquestionno.value == E[3]) {
    swcastandardref.setItems(QE3);
}
// E.4
if (swcaquestionno.value == E[4]) {
    swcastandardref.setItems(QE4);
}