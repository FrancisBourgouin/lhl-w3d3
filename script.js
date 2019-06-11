document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById('IAMFORM').addEventListener('submit', (event) => {
        event.preventDefault()
        for (let formField of event.target.getElementsByTagName('input')) {
            console.log(formField.value)
            formField.value = ""
        }
    })
});

