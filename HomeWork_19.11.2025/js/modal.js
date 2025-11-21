export class Modal {
    constructor() {
        this.modal = document.getElementById('modal');
        this.btnClose = document.getElementById('btnClose');
        this.form = document.getElementById('registerForm');
        this.modalTitle = document.getElementById('modalTitle');
        this.onSubmit = null;

        this.initEventListeners();
        this.initValidation();
    }

    initEventListeners() {
        this.btnClose.addEventListener('click', () => this.close());
        this.modal.addEventListener('mousedown', (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        });
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    initValidation() {
        const fields = this.form.querySelectorAll("input");

        fields.forEach(field => {
            field.addEventListener("input", () => this.validateField(field));
            field.addEventListener("blur", () => this.validateField(field));
        });
    }

    validateField(field) {
        const passwordField = document.getElementById("password");

        field.setCustomValidity("");

        const value = field.value.trim();

        if (field.id === "nickname") {
            if (/^\d/.test(value)) {
                field.setCustomValidity("Nickname cannot include digits!");
            }
        }

        if (field.id === "email") {
            if (/^\d/.test(value)) {
                field.setCustomValidity("Email cannot include digits!");
            }
        }

        if (field.id === "passwordAgain") {
            if (value !== passwordField.value) {
                field.setCustomValidity("Passwords must be the same!");
            }
        }

        const errorSpan = field.parentElement.querySelector(".error-message");
        if (!field.checkValidity()) {
            errorSpan.textContent = this.getErrorMessage(field);
        } else {
            errorSpan.textContent = "";
        }

        return field.checkValidity();
    }


    getErrorMessage(field) {
        const validity = field.validity;

        if (validity.valueMissing) return "This field is required!"

        if (validity.typeMismatch) {
            if (field.type == "email") return "Enter valid email";
            if (field.type == "password") return "Enter valid password";
        }

        if (validity.tooShort) return `Minimal length: ${field.minLength} chars`;
        if (validity.tooLong) return `Maximum length: ${field.maxLength} chars`;

        if (validity.customError) return field.validationMessage;

        return "Value is not right!"
    }

    open() {
        this.modal.classList.add('active');
        this.modalTitle.textContent = 'Register';
    }

    close() {
        this.modal.classList.remove('active');
        this.form.reset();
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!this.form.checkValidity()) {
            const fields = this.form.querySelectorAll("input");
            fields.forEach(field => this.validateField(field));
            return;
        }

        const form = document.getElementById('registerForm');
        const formData = Object.fromEntries(new FormData(form));

        if (this.onSubmit) {
            this.onSubmit(formData);
        }

        this.close();
    }
}