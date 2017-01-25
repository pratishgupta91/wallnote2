var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    //greeter.start();
    var note = new CParagraphNote("Hola", "Hola", "Hola");
    var listItem = new CListItem("This is a list Item", ListItemState.Unchecked);
    var listItem2 = new CListItem("This is another list Item", ListItemState.Unchecked);
    var list = Array(listItem, listItem2);
    var listNote = new CListNote(list, "hola", "hola");
    var notes = new Array(note, listNote);
    var renderer = new CNoteRenderer(notes, el);
    renderer.RenderNotes();
};
//# sourceMappingURL=app.js.map