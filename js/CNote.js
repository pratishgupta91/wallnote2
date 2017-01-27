var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NoteType;
(function (NoteType) {
    NoteType[NoteType["Paragraph"] = 0] = "Paragraph";
    NoteType[NoteType["List"] = 1] = "List";
    NoteType[NoteType["Mixed"] = 2] = "Mixed";
})(NoteType || (NoteType = {}));
var ListItemState;
(function (ListItemState) {
    ListItemState[ListItemState["Checked"] = 0] = "Checked";
    ListItemState[ListItemState["Unchecked"] = 1] = "Unchecked";
})(ListItemState || (ListItemState = {}));
var CNoteSerializable = (function () {
    function CNoteSerializable() {
    }
    CNoteSerializable.prototype.Deserialize = function (json) {
        var jsonObj = JSON.parse(json);
        for (var propName in jsonObj) {
            this[propName] = jsonObj[propName];
        }
    };
    CNoteSerializable.prototype.Serialize = function () {
        return JSON.stringify(this);
    };
    return CNoteSerializable;
}());
var CNote = (function (_super) {
    __extends(CNote, _super);
    function CNote(creationDate, title) {
        var _this = _super.call(this) || this;
        _this.m_creationDate = creationDate;
        _this.m_title = title;
        return _this;
    }
    CNote.prototype.GetCreationDate = function () {
        return this.m_creationDate;
    };
    CNote.prototype.GetTitle = function () {
        return this.m_title;
    };
    return CNote;
}(CNoteSerializable));
var CParagraphNote = (function (_super) {
    __extends(CParagraphNote, _super);
    function CParagraphNote(content, creationDate, title) {
        var _this = _super.call(this, creationDate, title) || this;
        _this.m_content = content;
        return _this;
    }
    CParagraphNote.prototype.GetType = function () {
        return NoteType.Paragraph;
    };
    CParagraphNote.prototype.GetContent = function () {
        return this.m_content;
    };
    CParagraphNote.prototype.GetNoteElement = function () {
        var note = document.createElement("div");
        note.innerText = this.m_content;
        return note;
    };
    return CParagraphNote;
}(CNote));
var CListItem = (function () {
    function CListItem(content, listItemState) {
        this.m_content = content;
        this.m_itemState = listItemState;
    }
    CListItem.prototype.GetContent = function () {
        return this.m_content;
    };
    CListItem.prototype.GetItemState = function () {
        return this.m_itemState;
    };
    CListItem.prototype.GetItemElement = function () {
        var item = document.createElement("div");
        item.innerText = this.m_content;
        return item;
    };
    return CListItem;
}());
var CListNote = (function (_super) {
    __extends(CListNote, _super);
    function CListNote(listItems, creationDate, title) {
        var _this = _super.call(this, creationDate, title) || this;
        _this.__name__ = "ListNote";
        _this.m_items = listItems;
        return _this;
    }
    CListNote.prototype.GetType = function () {
        return NoteType.List;
    };
    CListNote.prototype.GetItems = function () {
        return this.m_items;
    };
    CListNote.prototype.GetNoteElement = function () {
        var note = document.createElement("div");
        for (var _i = 0, _a = this.m_items; _i < _a.length; _i++) {
            var item = _a[_i];
            var itemElement = item.GetItemElement();
            note.appendChild(itemElement);
        }
        return note;
    };
    return CListNote;
}(CNote));
//# sourceMappingURL=CNote.js.map