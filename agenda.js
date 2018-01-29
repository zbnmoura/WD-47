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
            if (field.value.length === 0) {
                field.classList.add('error');
            } else {
                console.log('save');
            }
        });
    }
    const addContact = () => { }
    const getContact = () => { }
    const removeContact = () => { }

    const init = function () {
        console.log('mapping')
        ui.btn.addEventListener('click', validateFields)
    }()
})()