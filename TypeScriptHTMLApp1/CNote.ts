enum NoteType {
    Paragraph,
    List,
    Mixed
}

class CNoteSerializable {
    Deserialize(json: string) {
        var jsonObj = JSON.parse(json);
        for (var propName in jsonObj) {
            this[propName] = jsonObj[propName]
        }
    }

    Serialize() {
        return JSON.stringify(this);
    }

    constructor() { }
}

abstract class CNote extends CNoteSerializable {
    m_creationDate: string;
    m_title: string;

    abstract GetType(): NoteType;
    abstract GetNoteElement(): HTMLElement;

    constructor(creationDate: string, title: string) {
        super();
        this.m_creationDate = creationDate;
        this.m_title = title;
    }

    GetCreationDate() {
        return this.m_creationDate;
    }

    GetTitle() {
        return this.m_title;
    }
}

class CParagraphNote extends CNote {
    m_content: string;

    constructor(content: string, creationDate: string, title: string) {
        super(creationDate, title);
        this.m_content = content;
    }

    GetType() {
        return NoteType.Paragraph;
    }

    GetContent() {
        return this.m_content;
    }

    GetNoteElement() {
        var note = document.createElement("div");
        note.innerText = this.m_content;
        return note;
    }
}

class CListItem {
    m_content: string;
    m_itemState: ListItemState;

    constructor(content: string, listItemState: ListItemState) {
        this.m_content = content;
        this.m_itemState = listItemState;
    }

    GetContent() {
        return this.m_content;
    }

    GetItemState() {
        return this.m_itemState;
    }

    GetItemElement() {
        var item = document.createElement("div");
        item.innerText = this.m_content;
        return item;
    }
}

class CListNote extends CNote {
    private __name__ = "ListNote";
    m_items: Array<CListItem>;

    constructor(listItems: Array<CListItem>, creationDate: string, title: string) {
        super(creationDate, title);
        this.m_items = listItems;
    }

    GetType() {
        return NoteType.List;
    }

    GetItems() {
        return this.m_items;
    }

    GetNoteElement() {
        var note = document.createElement("div");
        for (var item of this.m_items) {
            var itemElement = item.GetItemElement();
            note.appendChild(itemElement);
        }

        return note;
    }
}
