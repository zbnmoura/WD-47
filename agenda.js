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
    };

    const getContactSucess = function () {
        console.log('listagem')
        console.table(list)
    };

    const addContactSucess = function () {
        cleanFields();
        getContact();
    };

    const genericError = function () {
        console.log('falha na conexao');
    };

    const cleanFields = () => {
        ui.fields.forEach(function (field) {
            field.value = '';
        });
    };

    const addContact = (contact) => {
        const headers = new Headers();
        headers.append('Content-type', 'application/json');

        const config = { method: 'POST', body: JSON.stringify(contact) };
        const endpoint = 'http://localhost:8080/schedule';
        const objetasso = Object.assign({ headers: headers }, config);

        fetch(endpoint, objetasso).then(addContactSucess).catch(genericError);

        console.log('config', config)
        console.log('headers', headers)
    };

    const getContact = (contact) => {
        const headers = new Headers();
        headers.append('Content-type', 'application/json');

        const config = { method: 'GET' };
        const endpoint = 'http://localhost:8080/schedule';
        const objetasso = Object.assign({ headers: headers }, config);

        fetch(endpoint, objetasso).then((res) => res.json()).then(getContactSucess).catch(genericError);

        console.log('config', config)
        console.log('headers', headers)
    };

    //botao top
    const init = function () {
        ui.btn.addEventListener('click', validateFields)
    }();

    const removeContact = () => { }
})()


//GUARDA-CHUVA