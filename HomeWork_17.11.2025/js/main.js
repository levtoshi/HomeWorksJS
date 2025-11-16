class Button {
    constructor(text, border, color, background) {
        this.text = text;
        this.border = border;
        this.color = color;
        this.background = background;
    }

    showInfo() {
        console.log(`Button "${this.text}" clicked. Button color - ${this.background}`);
    }

    render() {
        this.element = document.createElement("button");
        const container = document.querySelector(".container");

        this.element.classList.add("click-btn");

        this.element.textContent = this.text;
        this.element.style.border = this.border;
        this.element.style.color = this.color;
        this.element.style.background = this.background;

        this.element.addEventListener("click", () => this.showInfo());

        container.append(this.element);
    }
}

class RoundedButton extends Button
{
    constructor (text, border, color, background, borderRadius)
    {
        super(text, border, color, background);
        this.borderRadius = borderRadius;
    }

    render()
    {
        super.render();
        this.element.style.borderRadius = `${this.borderRadius}px`;
    }

    dropShadow()
    {
        this.element.style.boxShadow = `0px 5px 5px red`;
    }
}

const buttons = [
    new Button("Click me", "3px solid black", "white", "blue"),
    new Button("Press here", "3px solid orange", "white", "green"),
    new Button("Click here", "3px solid blue", "black", "white")
];

const roundedButtons = [
    new RoundedButton("Rounded_1", "3px solid green", "green", "black", 10),
    new RoundedButton("Rounded_2", "3px solid purple", "white", "blue", 20),
    new RoundedButton("Rounded_3", "3px solid magenta", "white", "orange", 30)
];

for (const button of buttons) {
    button.render();
}

for (const roundedButton of roundedButtons) {
    roundedButton.render();
    roundedButton.dropShadow();
}