function Clear() {
    document.querySelector('input').value = '';
}

function del() {
    document.querySelector('input').value = document.querySelector('input').value.slice(0, -1);
}

function display(val) {
    document.querySelector('input').value += val;
}

function Calculate() {
    try {
        document.querySelector('input').value = eval(document.querySelector('input').value);
    } catch (error) {
        document.querySelector('input').value = 'Error';
    }
}
