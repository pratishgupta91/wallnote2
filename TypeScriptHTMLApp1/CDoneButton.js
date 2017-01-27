var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CDoneButton = (function (_super) {
    __extends(CDoneButton, _super);
    function CDoneButton(noteDoc) {
        var _this = _super.call(this, 'done') || this;
        _this.m_noteDoc = noteDoc;
        return _this;
    }
    CDoneButton.prototype.OnClick = function () {
        var newNote = new CParagraphNote("hi", "hi", "hi");
        this.m_noteDoc.AddNote(newNote);
    };
    return CDoneButton;
}(CStaticButton));
//# sourceMappingURL=CDoneButton.js.map