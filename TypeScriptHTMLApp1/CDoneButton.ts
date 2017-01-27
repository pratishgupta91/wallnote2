class CDoneButton extends CStaticButton {
    m_noteDoc: CNoteDocument;

    constructor(noteDoc: CNoteDocument) {
        super('done' /* Button ID */);
        this.m_noteDoc = noteDoc;
    }

    OnClick() {
        var newNote = new CParagraphNote("hi", "hi", "hi");
        this.m_noteDoc.AddNote(newNote);
    }
}
