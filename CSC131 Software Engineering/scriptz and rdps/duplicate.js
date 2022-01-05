function CopyPage(nPageNum, nTimes) {
    // create template from page
    var t = this.createTemplate({ cName: "myTemplate", nPage: nPageNum });
    // hide template
    t.hidden = true;
    // spawn nTimes pages from template
    var t = this.templates;
    var T = t[0];
    // get first templage
    for (var i = 0; i < nTimes; i++) {
        T.spawn({ nPage: this.numPages - 1, bRename: true, bOverlay: false });
    } // remove the template
    this.removeTemplate({ cName: 'myTemplate' });
    return;
}
// end CopyPage function
// code to call CopyPage function
CopyPage(3, 1);