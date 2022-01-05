// CHECKLIST QUESTION NO. SCRIPT
var swcaadmincat = this.getField("swcaadmincategory");
var swcaquestionno = this.getField("swcachecklistno");
var swcastandardref = this.getField("swcastandardreference");
var swcastandard = this.getField("swcastandard");
var checklistquestions = {
    "A":[
        [
            " ",
            "A.1 - Is the Signed SWPPP available at the construction site?", 
            "A.2 - Is the SWPPP (and any amendments) prepared and signed by a certified QSD?"
        ]
    ],
    "B":[
        [
            " ",
            "B.1 - Does the WPC manager have a current certification (QSD) in the project files?", 
            "B.2 - Is the contractor conducting the required stormwater training and maintaining adequate records of this training in the project files?"
        ]
    ],
    "C":[
        [
            " ",
            "C.1 - Has the Storm Water Annual Report been developed and submitted (in the project files) for the last reporting year as required?"
        ]
    ],
    "D":[
        [
            " ",
            "D.1 - For projects that use an ATS, has the ATS been designed and is operated by qualified personnel, and do reporting requirements appear to be up to date and documented in the project files?"
        ]
    ],
    "E":[
        [
            " ",
            "E.1 - Are inspections, monitoring, and reporting procedures performed as required documented in the project files?", 
            "E.2 - If a NAL is exceeded, has a construction site and run-on evaluation been prepared and documented in the project files?", 
            "E.3 - Is there a QSP Communication/Management Plan included in the SWPPP or on site?",
            "E.4 - Is there a dewatering/diversion plan included as part of the SWPPP if required?"
        ]
    ]
}
// Active Treatment Systems Category
if (swcaadmincat.value = "Plans and Permits") {
    swcaquestionno.setItems(checklistquestions.A[0]);
}
if (swcaadmincat.value = "Training") {
    swcaquestionno.setItems(checklistquestions.B[0]);
}
if (swcaadmincat.value = "SMARTS") {
    swcaquestionno.setItems(checklistquestions.C[0]);
}
if (swcaadmincat.value = "Active Treatment Systems") {
    swcaquestionno.setItems(checklistquestions.D[0]);
}
if (swcaadmincat.value = "Monitoring and Reporting") {
    swcaquestionno.setItems(checklistquestions.E[0]);
}
if (swcaadmincat.value = " ") {
    swcaquestionno.setItems([" "]);
}

// ADMIN CAT LISTBOX SCRIPT
var swcaadmincat = this.getField("swcaadmincategory");
var swcaquestionno = this.getField("swcachecklistno");
var swcastandardref = this.getField("swcastandardreference");
var swcastandard = this.getField("swcastandard");

if (swcaadmincat.value = "Active Treatment Systems" || "Plans and Permits" || "Training" || "SMARTS" || "Monitoring and Reporting") {
    swcaquestionno.setItems([""]);
}