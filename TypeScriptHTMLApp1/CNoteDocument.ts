class CNoteDocument {
    m_notes: Array<CNote>;
    m_noteControl: CNoteControl;

    constructor(notes: Array<CNote>) {
        this.m_notes = notes;
        this.m_noteControl = new CNoteControl(document.getElementById('content'));
        this.PreProcessUI();
    }

    PreProcessUI() {
        this.m_noteControl.Invalidate(this.m_notes);
    }

    // Refresh UI and save the note
    AddNote(note: CNote) {
        this.m_notes.unshift(note);
        this.m_noteControl.InvalidateSimple(note, Operation.Prepend);
    }
}
