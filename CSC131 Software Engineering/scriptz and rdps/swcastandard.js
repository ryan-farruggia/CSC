// Get fields from form:
var swcastandardref = this.getField("swcastandardreference");
var swcastandard = this.getField("swcastandard");

// Standards:
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
// Standard arrays:
var SA1 = [
    " ",
    "Retain a printed copy of the authorized WPCP or SWPPP at the job site.",
    "Risk level 1, 2, and 3 dischargers shall make the SWPPP available at the construction site during working hours while construction is occurring and shall be made available upon request by a State or Municipal inspector.",
    "The SWPPP and any amendments shall be kept on site during construction activity and made available upon request of a representative of the Regional Water Board or any local storm water management agency which receives the storm water discharge."
]
var SA2 = [
    " ",
    "You may assign a QSD other than the WPC manager to develop the SWPPP",
    "Risk level 1, 2, and 3 dischargers shall ensure that SWPPPs are written, amended and certified by a Qualified SWPPP Developer (QSD).",
    "The discharger shall ensure that SWPPPs are written, amended and certified by a Qualified SWPPP Developer (QSD)."
]
var SB1 = [
    " ",
    "The WPC manager must be a QSP if the project requires a WPCP. The WPC manager must be a QSD if the project requires a SWPPP.",
    "The Discharger shall ensure that all BMPs required by this General Permit are implemented by a Qualified SWPPP Practitioner (QSP). A QSP is a person responsible for non-stormwater and storm water visual observations, sampling and analysis.",
    "The Discharger shall ensure that all BMPs required by this General Permit are implemented by a Qualified SWPPP Practitioner (QSP)."
]
var SB2 = [
    " ",
    "2. Conduct weekly training meetings covering: 2.1 Deficiencies and corrective actions for water pollution control practices, 2.2 water pollution control practices required for work activities during the week, 2.3 Spill prevention and control, 2.4 Material delivery, storage, usage, and disposal, 2.5 Waste management, 2.6 Non-stormwater management procedures",
    "Risk level 1, 2, and 3 dischargers shall provide documentation of all training for persons responsible for implementing the requirements of this General Permit in the Annual Reports. Training should be both formal and informal, occur on an ongoing basis...",
    "Additionally, project SWPPP requirements shall be communicated to all contractor and subcontractor personnel conducting activities that could affect storm water runoff quality. Training may be both formal and informal, as appropriate, and shall at a minimum be provided during pre-construction meetings and regular tailgate meetings conducted during the course of the project."
]
var SC1 = [
    " ",
    "Submit the storm water annual report before July 15th if construction occurs from July 1st through June 30th or within 15 days after the Contract acceptance if construction ends before June 30th.",
    "A. Risk level 1, 2, and 3 dischargers shall prepare and electronically submit an Annual Report no later than September 1 of each year.",
    "On or before November 30 of each year, the discharger shall prepare and electronically submit through the SMARTS an Annual Report for the period of October 16 of the previous year through October 15 of the current year."
]
var SD1 = [
    " ",
    "Design, installation, operation, and monitoring of an ATS and monitoring of the treated effluent must comply with Attachment F of NPDES General Permit for Stormwater Discharges Associated with Construction and Land Disturbance Activities (Order No. 2009-0009-DWQ, NPDES no. CAS000002).",
    "1. The ATS shall be designed and approved by a Certified Professional in Erosion and Sediment Control (CPESC), a Certified Professional in Storm Water Quality (CPSWQ); a California registered civil engineer; or any other California registered engineer, 4. The discharger shall install and operate an ATS by assigning a lead person (or project manager) who has either a minimum of five years construction storm water experience or who is a licensed contractor specifically holding a California Class A Contractors license.",
    "1. Visual Monitoring, 2. Operational and Compliance Monitoring, 3. Toxicity Monitoring	4. Reporting and Recordkeeping, 5. Non-compliance Reporting",
    "1. The ATS shall be designed and approved by a Certified Professional in Erosion and Sediment Control (CPESC), a Certified Professional in Storm Water Quality (CPSWQ); a California registered civil engineer; or any other California registered engineer, 4. The discharger shall install and operate an ATS by assigning a lead person (or project manager) who has either a minimum of five years construction storm water experience or who is a licensed contractor specifically holding a California Class A Contractors license.",
    "1. Visual Monitoring, 2. Operational and Compliance Monitoring, 3. Toxicity Monitoring	4. Reporting and Recordkeeping, 5. Non-compliance Reporting"
]
var SE1 = [
    " ",
    "The WPC manager must submit the following informational submittals within 24 hours of completing a weekly inspection:\n1. Completed Stormwater Site Inspection Report form.",
    "Submit visual monitoring reports for:\n1. Each storm event.\n2. Nonstormwater discharges during each of the following periods.\n2.1. January through March\n2.2. April through June\n2.3. July through September\n2.4. October through December",
    "Submit a printed and electronic copy of water quality analysis results, and quality assurance and quality control reports within 48 hours of field sampling, and within 30 days of laboratory analysis.",
    "For a risk level 2 or a risk level 3, submit a REAP whenever the National Weather Service is predicting a storm event with at least 50 percent probability of precipitation within 72 hours. The WPC manager must submit the REAP at least 48 hours before a forecasted storm event.",
    "Risk level 1, 2, and 3 dischargers shall perform weekly inspections and observations, and at least once each 24-hour period during extended storm events.",
    "a. Risk level 1, 2, and 3 dischargers shall visually observe (inspect) storm water discharges at all discharge locations within two business days (48 hours) after each qualifying rain event.\ne. Within 2 business days (48 hours) prior to each qualifying rain event, Risk level 1, 2, and 3 dischargers shall visually observe (inspect)",
    "a. Visual Monitoring Requirements:\ni. Risk level 1, 2, and 3 dischargers shall visually observe (inspect) each drainage area for the presence of (or indications of prior) unauthorized and authorized non-storm water discharges and their sources.\nii. Risk level 1, 2, and 3 dischargers shall conduct one visual observation (inspection) quarterly in each of the following periods:\n2.1. January through March, 2.2. April through June, 2.3. July through September, 2.4. October through December",
    "b. At minimum, risk level 2 and 3 dischargers shall collect 3 samples per day of the qualifying event",
    "Risk level 2 and 3 dischargers shall ensure a QSP develop a Rain Event Action Plan (REAP) 48 hours prior to any likely precipitation event. A likely precipitation event is any weather pattern that is forecast to have a 50% or greater probability of producing precipitation in the project area.",
    "1. During the active construction season (defined as May 1 through October 15 for purposes of this General Permit), an inspection of the construction site shall be made at the end of each work day. Dischargers working (under an approved variance) during the period from October 16 through April 30 of the following year shall also conduct inspections on a daily basis. During the Winter or inactive period (defined as October 16 through April 30 for purposes of this permit), Dischargers must conduct inspections at least once per month during daylight hours.\n2. During both active and inactive periods, a construction site inspection shall also be performed within 24 hours prior to an anticipated precipitation event (chance of precipitation is forecasted at 30 percent or greater), daily during extended storm events, and within 24 hours after actual storm events. This requirement does not apply during snow events.\n4.m. Any evidence of non-storm water discharges from the project site. The inspection report shall note whether any such discharges areauthorized, or are illicit and not authorized. If authorized, the condition of the applicable BMPs must be indicated.",
    "a. During the active construction season (defined as May 1 through October 15 for purposes of this General Permit), Dischargers shall collect one grab sample from each discharge point where storm water is discharged off the project boundaries and/or to surface waters. A minimum of three samples must be collected for each day that storm water is discharged offsite.\nb. During the period from October 16 through April 30 of the following year, Dischargers must collect a representative sample from each designated discharge sampling point during a minimum of two storm events that produce a discharge off the project boundaries. Sampling is only required for one day during each storm event. A minimum of three samples for each day sampling is conducted is required.",
    "E. From the dates of May 1 through October 15 of each year, and during periods in which construction activity is conducted under a variance to the land disturbance prohibition of this General Permit, the discharger shall ensure a QSP develops a REAP no later than the calendar day 24 hours prior to any anticipated precipitation event. An anticipated precipitation event is any weather pattern that is forecast to have a 30 percent or greater chance of producing precipitation as rainfall in the project area. During periods when thunderstorm activity is anticipated, the discharger shall monitor weather conditions during the course of the day, and prepare and implement a REAP if the chance of thunderstorms becomes 30 percent or greater, or when visual observations indicate imminent precipitation."
]
var SE2 = [
    " ",
    "Whenever a NAL is exceeded, notify the Engineer and submit a NAL exceedance report within 48 hours after the conclusion of a storm event.",
    "a. Risk level 2 and 3 dischargers shall electronically submit all storm event sampling results to the State Water Board no later than 10 days after the conclusion of the storm event. The Regional Boards have the authority to require the submittal of an NAL Exceedance Report.",
    "A. All data and reports must be submitted through the SMARTS and be certified by the LRP or an approved signatory.\nB. All turbidity and pH analytical results collected from field instruments must be reported within five days after storm event conclusion. All other results determined by an analytical laboratory must be submitted within five days of receipt of the results from the laboratory."
]
var SE3 = [
    " ",
    "The SWPPP must include a written plan describing how the QSP will oversee and manage all SWPPP activities and the discharger must maintain written records documenting the QSP’s plan implementation and effectiveness.  The QSP must directly manage these activities by being present at the site and/or through a communication plan that allows the QSP to actively and effectively manage trained personnel conducting the SWPPP activities.  The QSP Management Plan must show how the QSP plans to inspect and report all of the required visual inspections and monitoring requirements, prepare and implement REAPs, prepare and submit water quality exceedance reports, ensure that all employees have current water pollution control training, and correct construction activities damaging water pollution control practices or causing water pollution."
]
var SE4 = [
    " ",
    "The SWPPP must include a written plan describing how the QSP will oversee and manage all SWPPP activities and the discharger must maintain written records documenting the QSP’s plan implementation and effectiveness.  The QSP must directly manage these activities by being present at the site and/or through a communication plan that allows the QSP to actively and effectively manage trained personnel conducting the SWPPP activities.  The QSP Management Plan must show how the QSP plans to inspect and report all of the required visual inspections and monitoring requirements, prepare and implement REAPs, prepare and submit water quality exceedance reports, ensure that all employees have current water pollution control training, and correct construction activities damaging water pollution control practices or causing water pollution."
]

// A.1-1
if (swcastandardref.value == QA1[1]) {
    swcastandard.value == SA1[1];
}
// A.1-2
if (swcastandardref.value == QA1[2]) {
    swcastandard.value == SA1[2];
}
// A.1-3
if (swcastandardref.value == QA1[3]) {
    swcastandard.value == SA1[3];
}
// A.2-1
if (swcastandardref.value == QA2[1]) {
    swcastandard.value == SA2[1];
}
// A.2-2
if (swcastandardref.value == QA2[2]) {
    swcastandard.value == SA2[2];
}
// A.2-3
if (swcastandardref.value == QA2[3]) {
    swcastandard.value == SA2[3];
}
// B.1-1
if (swcastandardref.value == QB1[1]) {
    swcastandard.value == SB1[1];
}
// B.1-2
if (swcastandardref.value == QB1[2]) {
    swcastandard.value == SB1[2];
}
// B.1-3
if (swcastandardref.value == QB1[3]) {
    swcastandard.value == SB1[3];
}
// B.2-1
if (swcastandardref.value == QB2[1]) {
    swcastandard.value == SB2[1];
}
// B.2-2
if (swcastandardref.value == QB2[2]) {
    swcastandard.value == SB2[2];
}
// B.2-3
if (swcastandardref.value == QB2[3]) {
    swcastandard.value == SB2[3];
}
// C.1-1
if (swcastandardref.value == QC1[1]) {
    swcastandard.value == SC1[1];
}
// C.1-2
if (swcastandardref.value == QC1[2]) {
    swcastandard.value == SC1[2];
}
// C.1-3
if (swcastandardref.value == QC1[3]) {
    swcastandard.value == SC1[3];
}
// D.1-1
if (swcastandardref.value == QD1[1]) {
    swcastandard.value == SD1[1];
}
// D.1-2
if (swcastandardref.value == QD1[2]) {
    swcastandard.value == SD1[2];
}
// D.1-3
if (swcastandardref.value == QD1[3]) {
    swcastandard.value == SD1[3];
}
// D.1-4
if (swcastandardref.value == QD1[4]) {
    swcastandard.value == SD1[4];
}
// D.1-5
if (swcastandardref.value == QD1[5]) {
    swcastandard.value == SD1[5];
}
// E.1-1
if (swcastandardref.value == QE1[1]) {
    swcastandard.value == SE1[1];
}
// E.1-2
if (swcastandardref.value == QE1[2]) {
    swcastandard.value == SE1[2];
}
// E.1-3
if (swcastandardref.value == QE1[3]) {
    swcastandard.value == SE1[3];
}
// E.1-4
if (swcastandardref.value == QE1[4]) {
    swcastandard.value == SE1[4];
}
// E.1-5
if (swcastandardref.value == QE1[5]) {
    swcastandard.value == SE1[5];
}
// E.1-6
if (swcastandardref.value == QE1[6]) {
    swcastandard.value == SE1[6];
}
// E.1-7
if (swcastandardref.value == QE1[7]) {
    swcastandard.value == SE1[7];
}
// E.1-8
if (swcastandardref.value == QE1[8]) {
    swcastandard.value == SE1[8];
}
// E.1-9
if (swcastandardref.value == QE1[9]) {
    swcastandard.value == SE1[9];
}
// E.1-10
if (swcastandardref.value == QE1[10]) {
    swcastandard.value == SE1[10];
}
// E.1-11
if (swcastandardref.value == QE1[11]) {
    swcastandard.value == SE1[11];
}
// E.1-12
if (swcastandardref.value == QE1[12]) {
    swcastandard.value == SE1[12];
}
// E.2-1
if (swcastandardref.value == QE2[1]) {
    swcastandard.value == SE2[1];
}
// E.2-2
if (swcastandardref.value == QE2[2]) {
    swcastandard.value == SE2[2];
}
// E.2-3
if (swcastandardref.value == QE2[3]) {
    swcastandard.value == SE2[3];
}
// E.3-1
if (swcastandardref.value == QE3[1]) {
    swcastandard.value == SE3[1];
}
// E.4-1
if (swcastandardref.value == QE4[1]) {
    swcastandard.value == SE4[1];
}