var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CToggleButton = (function (_super) {
    __extends(CToggleButton, _super);
    function CToggleButton(id, type, createBox) {
        var _this = _super.call(this, id) || this;
        _this.m_type = type;
        _this.m_createBox = createBox;
        return _this;
    }
    CToggleButton.prototype.OnClick = function () {
        this.m_type = (this.m_type == NoteType.Paragraph) ? NoteType.List : NoteType.Paragraph;
        this.m_createBox.ToggleButtonPressed(this.m_type);
    };
    return CToggleButton;
}(CStaticButton));
var CCreateBox = (function () {
    function CCreateBox(container) {
        this.m_container = container;
        this.m_toggleButton = new CToggleButton('toggle-type', NoteType.Paragraph, this);
        this.PreProcess();
    }
    CCreateBox.prototype.PreProcess = function () {
        this.m_noteElement = new CTextElement("");
        this.m_container.appendChild(this.m_noteElement.GetElement());
    };
    CCreateBox.prototype.TransformToParagraphNote = function () {
        var listElem = this.m_noteElement.GetElement();
        var listItems = listElem.children;
    };
    CCreateBox.prototype.TransformToListNote = function () {
        var textElem = this.m_noteElement.GetElement();
        var content = textElem.innerText;
        this.m_container.innerHTML = "";
        var listElem = new CListElement();
        listElem.AddListItemElement(content, ListItemState.Checked);
        this.m_noteElement = listElem;
        this.m_container.appendChild(this.m_noteElement.GetElement());
    };
    CCreateBox.prototype.ToggleButtonPressed = function (type) {
        if (type == NoteType.List) {
            this.TransformToListNote();
        }
    };
    return CCreateBox;
}());
//# sourceMappingURL=CCreateBox.js.map