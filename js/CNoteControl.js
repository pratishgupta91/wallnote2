var Operation;
(function (Operation) {
    Operation[Operation["Append"] = 0] = "Append";
    Operation[Operation["Prepend"] = 1] = "Prepend";
    Operation[Operation["AddAll"] = 2] = "AddAll";
})(Operation || (Operation = {}));
var CNoteControl = (function () {
    function CNoteControl(containerElem) {
        this.m_containerElement = containerElem;
    }
    CNoteControl.prototype.Invalidate = function (notes) {
        CNoteRenderer.RenderNotes(notes, this.m_containerElement);
    };
    CNoteControl.prototype.InvalidateSimple = function (note, operation) {
        switch (operation) {
            case Operation.Append:
                CNoteRendererSimple.AppendNote(note, this.m_containerElement);
                break;
            case Operation.Prepend:
                CNoteRendererSimple.PrependNote(note, this.m_containerElement);
                break;
        }
    };
    return CNoteControl;
}());
//# sourceMappingURL=CNoteControl.js.map