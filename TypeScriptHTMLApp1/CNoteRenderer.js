var CNoteRenderer = (function () {
    function CNoteRenderer(notes, containerElement) {
        this.m_containerElement = containerElement;
        this.m_notes = notes;
    }
    CNoteRenderer.prototype.RenderNotes = function () {
        for (var _i = 0, _a = this.m_notes; _i < _a.length; _i++) {
            var note = _a[_i];
            this.m_containerElement.appendChild(note.GetNoteElement());
        }
    };
    return CNoteRenderer;
}());
//# sourceMappingURL=CNoteRenderer.js.map