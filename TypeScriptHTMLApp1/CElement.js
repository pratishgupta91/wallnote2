var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CElement = (function () {
    function CElement() {
    }
    CElement.prototype.GetElement = function () {
        return this.m_elem;
    };
    CElement.prototype.AppendChild = function (elem) {
        this.m_elem.appendChild(elem);
    };
    return CElement;
}());
var CTextElement = (function (_super) {
    __extends(CTextElement, _super);
    function CTextElement() {
        var _this = _super.call(this) || this;
        _this.m_elem = document.createElement('textarea');
        return _this;
    }
    return CTextElement;
}(CElement));
var CListItemElement = (function (_super) {
    __extends(CListItemElement, _super);
    function CListItemElement() {
        var _this = _super.call(this) || this;
        _this.m_elem = document.createElement('li');
        return _this;
    }
    return CListItemElement;
}(CElement));
var CListItemElementWithCheckbox = (function (_super) {
    __extends(CListItemElementWithCheckbox, _super);
    function CListItemElementWithCheckbox() {
        var _this = _super.call(this) || this;
        var listItem = document.createElement('li');
        listItem.type = "checkbox";
        var textElem = new CTextElement();
        listItem.appendChild(textElem.GetElement());
        _this.m_elem = listItem;
        return _this;
    }
    return CListItemElementWithCheckbox;
}(CElement));
var CListElement = (function (_super) {
    __extends(CListElement, _super);
    function CListElement() {
        var _this = _super.call(this) || this;
        _this.m_elem = document.createElement('ul');
        return _this;
    }
    CListElement.prototype.AddListItemElement = function () {
        var listItemElement = new CListItemElementWithCheckbox();
        this.m_elem.appendChild(listItemElement.GetElement());
    };
    return CListElement;
}(CElement));
var CButton = (function (_super) {
    __extends(CButton, _super);
    function CButton(id) {
        var _this = _super.call(this) || this;
        _this.m_elem = document.createElement('button');
        return _this;
    }
    return CButton;
}(CElement));
var CStaticButton = (function (_super) {
    __extends(CStaticButton, _super);
    function CStaticButton(id) {
        var _this = _super.call(this) || this;
        _this.m_elem = document.getElementById(id);
        _this.m_elem.onclick = function (e) { _this.OnClick(); };
        return _this;
    }
    return CStaticButton;
}(CElement));
//# sourceMappingURL=CElement.js.map