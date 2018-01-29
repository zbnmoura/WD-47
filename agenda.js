(() => {
    //user interface
    const ui = {
        fields: document.querySelectorAll('input'),
        btn: document.querySelector('.pure-button-primary'),
        table: document.querySelector('.pure-table')
    }
    //actions
    const validateFields = (e) => {
        e.preventDefault();
        let errors = 0;
        let data = {};
        ui.fields.forEach(function (field) {
            if (field.value.trim().length === 0) {
                field.classList.add('error');
                errors++;
            } else {
                field.classList.remove('error');
                data[field.id] = field.value.trim();
            }
        });
        if (errors === 0) {
            addContact(data);
        } else {
            document.querySelector('.error').focus();
        }
        console.log(errors, data)
    }

    //botao top
    const init = function () {
        ui.btn.addEventListener('click', validateFields)
    }()

    const addContact = (contact) => {
        const headers = new Headers();
        headers.append('Content-type', 'application/json');

        const config = { method: 'POST', body: JSON.stringify(contact) };
        const endpoint = 'http://localhost:8080/schedule';

        fetch();

        console.log(config)
        console.log(headers)
    }
    const getContact = () => { }
    const removeContact = () => { }
})()