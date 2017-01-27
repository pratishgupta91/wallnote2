enum ListItemState {
    Checked,
    Unchecked
}

class CElement {
    m_elem: HTMLElement;
    constructor() {
    }

    GetElement() {
        return this.m_elem;
    }

    AppendChild(elem: HTMLElement) {
        this.m_elem.appendChild(elem);
    }
}

class CTextElement extends CElement {
    constructor(content: string) {
        super();
        this.m_elem = document.createElement('textarea');
        this.m_elem.innerText = content;
    }

    GetContent() {
        return this.m_elem.innerText;
    }

    GetTextContent() {
        return this.m_elem.innerHTML;
    }
}

class CListItemElement extends CElement {
    constructor() {
        super();
        this.m_elem = document.createElement('li');
    }
}

class CCheckBox extends CElement {
    constructor(itemState: ListItemState) {
        super();
        var inputElem = document.createElement('input');
        inputElem.type = "checkbox";
        inputElem.checked = (itemState.valueOf() == ListItemState.Checked) ? true : false;
        this.m_elem = inputElem;
    }

    GetState() {
        var checkBox = <HTMLInputElement>this.m_elem;
        return checkBox.checked ? ListItemState.Checked : ListItemState.Unchecked;
    }
}

class CListItemElementWithCheckbox extends CElement {
    m_checkBox: CCheckBox;
    m_textElem: CTextElement;

    constructor(content: string, state: ListItemState) {
        super();
        var listItem = document.createElement('li');
        this.m_checkBox = new CCheckBox(state);
        listItem.appendChild(this.m_checkBox.GetElement());
        this.m_textElem = new CTextElement(content);
        listItem.appendChild(this.m_textElem.GetElement());
        this.m_elem = listItem;
    }

    GetTextElement() {
        return this.m_textElem;
    }

    GetCheckBox() {
        return this.m_checkBox;
    }
}

class CListElement extends CElement {
    m_listItems: Array<CListItemElementWithCheckbox>;

    constructor() {
        super();
        this.m_elem = document.createElement('ul');
        this.m_listItems = new Array<CListItemElementWithCheckbox>();
    }

    AddListItemElement(content: string, state: ListItemState) {
        var listItemElement = new CListItemElementWithCheckbox(content, state);
        this.m_elem.appendChild(listItemElement.GetElement());
        this.m_listItems.push(listItemElement);
    }

    GetListItemAt(index: number) {
        return this.m_listItems[index];
    }
}

abstract class CButton extends CElement {
    abstract OnClick(): void;

    constructor(id: string) {
        super();
        this.m_elem = document.createElement('button');
    }
}

abstract class CStaticButton extends CElement {
    abstract OnClick(): void;

    constructor(id: string) {
        super();
        this.m_elem = <HTMLButtonElement>document.getElementById(id);
        this.m_elem.onclick = (e: Event) => { this.OnClick(); };
    }
}
