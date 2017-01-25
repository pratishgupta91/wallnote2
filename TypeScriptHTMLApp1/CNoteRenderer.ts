class CNoteRenderer {
    m_containerElement: HTMLElement;
    m_notes: Array<CNote>;

    constructor(notes: Array<CNote>, containerElement: HTMLElement) {
        this.m_containerElement = containerElement;
        this.m_notes = notes;
    }

    RenderNotes() {
        for (var note of this.m_notes) {
            this.m_containerElement.appendChild(note.GetNoteElement());
        }
    }
}
