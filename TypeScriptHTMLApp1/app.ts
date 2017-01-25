class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    //greeter.start();
    var note = new CParagraphNote("Hola", "Hola", "Hola");
    var listItem = new CListItem("This is a list Item", ListItemState.Unchecked);
    var listItem2 = new CListItem("This is another list Item", ListItemState.Unchecked);
    var list = Array<CListItem>(listItem, listItem2);
    var listNote = new CListNote(list, "hola", "hola");
    var notes = new Array<CNote>(note, listNote);
    var renderer = new CNoteRenderer(notes, el);
    renderer.RenderNotes();
};