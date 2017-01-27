enum Operation {
    Append,
    Prepend,
    AddAll
}

class CNoteControl {
    m_containerElement: HTMLElement;

    constructor(containerElem: HTMLElement) {
        this.m_containerElement = containerElem;
    }

    Invalidate(notes: Array<CNote>) {
        CNoteRenderer.RenderNotes(notes, this.m_containerElement);
    }

    InvalidateSimple(note: CNote, operation: Operation) {
        switch (operation) {
            case Operation.Append:
                CNoteRendererSimple.AppendNote(note, this.m_containerElement);
                break;
            case Operation.Prepend:
                CNoteRendererSimple.PrependNote(note, this.m_containerElement);
                break;
        }
    }
}
