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
    var note = new CParagraphNote("Hola", "Hola", "Hola");
    var notes = new Array(note);
    var noteDoc = new CNoteDocument(notes);
    var doneButton = new CDoneButton(noteDoc);
    var createBox = new CCreateBox(document.getElementById('note-content'));
};
//# sourceMappingURL=app.js.map