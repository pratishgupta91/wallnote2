class CToggleButton extends CStaticButton {
    m_type: NoteType;
    m_createBox: CCreateBox;

    constructor(id: string, type: NoteType, createBox: CCreateBox) {
        super(id);
        this.m_type = type;
        this.m_createBox = createBox;
    }

    OnClick() {
        this.m_type = (this.m_type == NoteType.Paragraph) ? NoteType.List : NoteType.Paragraph;
        this.m_createBox.ToggleButtonPressed(this.m_type);
    }
}

class CCreateBox {
    m_container: HTMLElement;
    m_toggleButton: CStaticButton;
    m_noteElement: CElement;

    constructor(container: HTMLElement) {
        this.m_container = container;
        this.m_toggleButton = new CToggleButton('toggle-type', NoteType.Paragraph, this);
        this.PreProcess();
    }

    // Add just one textbox
    PreProcess() {
        this.m_noteElement = new CTextElement();
        this.m_container.appendChild(this.m_noteElement.GetElement());
    }

    TransformToParagraphNote() {
        var listElem = this.m_noteElement.GetElement();
        var listItems = listElem.children;
    }

    TransformToListNote() {
        // Get content of paragraph note
        var textElem = this.m_noteElement.GetElement();
        var content = textElem.innerText;
        this.m_container.innerHTML = "";

        // Create list and add item with the content
        var listElem = new CListElement();
        listElem.AddListItemElement();
        this.m_noteElement = listElem;
        this.m_container.appendChild(this.m_noteElement.GetElement());
    }

    ToggleButtonPressed(type: NoteType) {
        if (type == NoteType.List) {
            this.TransformToListNote();
        }
    }
}
