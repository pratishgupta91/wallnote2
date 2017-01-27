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
    constructor() {
        super();
        this.m_elem = document.createElement('textarea');
    }
}

class CListItemElement extends CElement {
    constructor() {
        super();
        this.m_elem = document.createElement('li');
    }
}

class CListItemElementWithCheckbox extends CElement {
    constructor() {
        super();
        var listItem = document.createElement('li');
        listItem.type = "checkbox";
        var textElem = new CTextElement();
        listItem.appendChild(textElem.GetElement());
        this.m_elem = listItem;
    }
}

class CListElement extends CElement {
    constructor() {
        super();
        this.m_elem = document.createElement('ul');
    }

    AddListItemElement() {
        var listItemElement = new CListItemElementWithCheckbox();
        this.m_elem.appendChild(listItemElement.GetElement());
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
