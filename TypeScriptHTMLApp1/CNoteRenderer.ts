class CNoteRenderer {
    static RenderNotes(notes: Array<CNote>, containerElement: HTMLElement) {
        for (var note of notes) {
            containerElement.appendChild(note.GetNoteElement());
        }
    }
}

class CNoteRendererSimple {
    static AppendNote(note: CNote, containerElement: HTMLElement) {
        containerElement.appendChild(note.GetNoteElement());
    }

    static PrependNote(note: CNote, containerElement: HTMLElement) {
        var noteCount = containerElement.childElementCount;
        if (noteCount == 0) CNoteRendererSimple.AppendNote(note, containerElement);
        else containerElement.insertBefore(note.GetNoteElement(), containerElement.firstChild);
    }
}
