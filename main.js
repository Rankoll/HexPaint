function paint() {
    let color = document.getElementById('painter').value;
    if (color.length==6) {
        document.body.style.backgroundColor = "#" + color;
    }
}