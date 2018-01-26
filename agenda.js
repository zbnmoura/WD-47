(() => {
    console.log('hi')
    //user interface
    const ui = {
        fields: document.querySelectorAll('input'),
        btn: document.querySelector('.pure-button-primary'),
        table: document.querySelector('.pure-table')
    }

    console.log(ui)

    //actions
    const validateFields = (e) => {
        console.log('validate', e)
        debugger
    }
    const addContact = () => { }
    const getContact = () => { }
    const removeContact = () => { }

    //const init = () => {
    const init = function () {
        //mapping events
        console.log('mapping')
        // ui.btn.onclick = validateFields
        // ui.btn.onclick = addContact
        ui.btn.addEventListener('click', validateFields)

    }()
    //init()
})()