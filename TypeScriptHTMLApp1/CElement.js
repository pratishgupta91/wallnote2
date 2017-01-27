var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ListItemState;
(function (ListItemState) {
    ListItemState[ListItemState["Checked"] = 0] = "Checked";
    ListItemState[ListItemState["Unchecked"] = 1] = "Unchecked";
})(ListItemState || (ListItemState = {}));
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
    function CTextElement(content) {
        var _this = _super.call(this) || this;
        _this.m_elem = document.createElement('textarea');
        _this.m_elem.innerText = content;
        return _this;
    }
    CTextElement.prototype.GetContent = function () {
        return this.m_elem.innerText;
    };
    CTextElement.prototype.GetTextContent = function () {
        return this.m_elem.innerHTML;
    };
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
var CCheckBox = (function (_super) {
    __extends(CCheckBox, _super);
    function CCheckBox(itemState) {
        var _this = _super.call(this) || this;
        var inputElem = document.createElement('input');
        inputElem.type = "checkbox";
        inputElem.checked = (itemState.valueOf() == ListItemState.Checked) ? true : false;
        _this.m_elem = inputElem;
        return _this;
    }
    CCheckBox.prototype.GetState = function () {
        var checkBox = this.m_elem;
        return checkBox.checked ? ListItemState.Checked : ListItemState.Unchecked;
    };
    return CCheckBox;
}(CElement));
var CListItemElementWithCheckbox = (function (_super) {
    __extends(CListItemElementWithCheckbox, _super);
    function CListItemElementWithCheckbox(content, state) {
        var _this = _super.call(this) || this;
        var listItem = document.createElement('li');
        _this.m_checkBox = new CCheckBox(state);
        listItem.appendChild(_this.m_checkBox.GetElement());
        _this.m_textElem = new CTextElement(content);
        listItem.appendChild(_this.m_textElem.GetElement());
        _this.m_elem = listItem;
        return _this;
    }
    CListItemElementWithCheckbox.prototype.GetTextElement = function () {
        return this.m_textElem;
    };
    CListItemElementWithCheckbox.prototype.GetCheckBox = function () {
        return this.m_checkBox;
    };
    return CListItemElementWithCheckbox;
}(CElement));
var CListElement = (function (_super) {
    __extends(CListElement, _super);
    function CListElement() {
        var _this = _super.call(this) || this;
        _this.m_elem = document.createElement('ul');
        _this.m_listItems = new Array();
        return _this;
    }
    CListElement.prototype.AddListItemElement = function (content, state) {
        var listItemElement = new CListItemElementWithCheckbox(content, state);
        this.m_elem.appendChild(listItemElement.GetElement());
        this.m_listItems.push(listItemElement);
    };
    CListElement.prototype.GetListItemAt = function (index) {
        return this.m_listItems[index];
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