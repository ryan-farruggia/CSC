var inch = 72;
var aRect = this.getPageBox();
aRect[0] += 4.32 * inch; // from the left
aRect[2] = aRect[0] + 3.4 * inch; // Make it 1 inch wide
aRect[1] -= 2.86 * inch; // from the top
aRect[3] = aRect[1] - 116; // and 24 points high

this.addField("bmpaddobservationimage2", "button", 3, aRect);
var temp = this.getField("bmpaddobservationimage2");
temp.setAction("MouseUp", "event.target.buttonImportIcon()");
temp.fillColor = color.ltGray;

var bRect = this.getPageBox();
bRect[0] += 4.32 * inch; // from the left
bRect[2] = bRect[0] + 1.6667 * inch; // Make it 1 inch wide
bRect[1] -= 2.578 * inch; // from the top
bRect[3] = bRect[1] - 16; // and 24 points high

this.addField("bmpremoveobservationphoto", "button", 3, bRect);
var temp2 = this.getField("bmpremoveobservationphoto");
temp2.fillColor = color.ltGray;
temp2.buttonSetCaption("Remove 2nd Observation Photo");

var cRect = this.getPageBox();
cRect[0] += 6.053 * inch; // from the left
cRect[2] = cRect[0] + 1.6667 * inch; // Make it 1 inch wide
cRect[1] -= 2.578 * inch; // from the top
cRect[3] = cRect[1] - 16; // and 24 points high

this.addField("bmphideobservationimage2", "button", 3, cRect);
var temp3 = this.getField("bmphideobservationimage2");
temp3.fillColor = color.ltGray;
temp3.buttonSetCaption("Hide Image");


/*
var temp = this.getField("bmpaddobservationimage2");
var temp2 = this.getField("bmpremoveobservationphoto");
var temp3 = this.getField("bmphideobservationimage2");
temp.display = display.visible;
temp2.display = display.visible;
temp3.display = display.visible;*/