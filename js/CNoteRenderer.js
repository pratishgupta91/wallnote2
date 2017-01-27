var CNoteRenderer = (function () {
    function CNoteRenderer() {
    }
    CNoteRenderer.RenderNotes = function (notes, containerElement) {
        for (var _i = 0, notes_1 = notes; _i < notes_1.length; _i++) {
            var note = notes_1[_i];
            containerElement.appendChild(note.GetNoteElement());
        }
    };
    return CNoteRenderer;
}());
var CNoteRendererSimple = (function () {
    function CNoteRendererSimple() {
    }
    CNoteRendererSimple.AppendNote = function (note, containerElement) {
        containerElement.appendChild(note.GetNoteElement());
    };
    CNoteRendererSimple.PrependNote = function (note, containerElement) {
        var noteCount = containerElement.childElementCount;
        if (noteCount == 0)
            CNoteRendererSimple.AppendNote(note, containerElement);
        else
            containerElement.insertBefore(note.GetNoteElement(), containerElement.firstChild);
    };
    return CNoteRendererSimple;
}());
//# sourceMappingURL=CNoteRenderer.js.map