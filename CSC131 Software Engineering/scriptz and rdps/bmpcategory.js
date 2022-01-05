var bmpcategory = this.getField("bmpcategory");
var bmptype = this.getField("bmptype");

var SSTypes = [
    " ",
    "Application",
    "Installation",
    "Materials",
    "Maintenance"
]
var SCTypes = [
    " ",
    "Application",
    "Installation",
    "Materials",
    "Maintenance"
]
var NSTypes = [
    " ",
    "Application",
    "Implementation"
]
var TCTypes = [
    " ",
    "Application",
    "Installation",
    "Materials",
    "Maintenance"
]
var WETypes = [
    " ",
    "Application",
    "Implementation"
]
var WMTypes = [
    " ",
    "Application",
    "Implementation"
]
if (bmpcategory.value == "Soil Stabilization"){
    bmptype.setItems(SSTypes);
}
if (bmpcategory.value == "Sediment Control"){
    bmptype.setItems(SCTypes);
}
if (bmpcategory.value == "Non-Storm Water"){
    bmptype.setItems(NSTypes);
}
if (bmpcategory.value == "Tracking Control"){
    bmptype.setItems(TCTypes);
}
if (bmpcategory.value == "Wind Erosion Control"){
    bmptype.setItems(WETypes);
}
if (bmpcategory.value == "Waste Management"){
    bmptype.setItems(WMTypes);
}