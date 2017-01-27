var CNoteDocument = (function () {
    function CNoteDocument(notes) {
        this.m_notes = notes;
        this.m_noteControl = new CNoteControl(document.getElementById('content'));
        this.PreProcessUI();
    }
    CNoteDocument.prototype.PreProcessUI = function () {
        this.m_noteControl.Invalidate(this.m_notes);
    };
    CNoteDocument.prototype.AddNote = function (note) {
        this.m_notes.unshift(note);
        this.m_noteControl.InvalidateSimple(note, Operation.Prepend);
    };
    return CNoteDocument;
}());
//# sourceMappingURL=CNoteDocument.js.map