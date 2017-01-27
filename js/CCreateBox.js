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
var CListElement = (function (_super) {
    __extends(CListElement, _super);
    function CListElement() {
        var _this = _super.call(this) || this;
        _this.m_elem = document.createElement('ul');
        return _this;
    }
    return CListElement;
}(CElement));
var CCreateBox = (function () {
    function CCreateBox(container) {
        this.m_container = container;
    }
    CCreateBox.prototype.PreProcess = function () {
        var textElem = new CTextElement();
        this.m_container.appendChild(textElem.GetElement());
    };
    return CCreateBox;
}());
//# sourceMappingURL=CCreateBox.js.map