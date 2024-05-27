function toggleOverlay() {
    var overlay = document.getElementById('overlay');
    if (overlay.style.display === 'none') {
        overlay.style.display = 'block';
    } else {
        overlay.style.display = 'none';
    }
}

document.getElementById('downloadLink').addEventListener('click', function() {
    var text = document.querySelector('.overlay p').innerText;
    var blob = new Blob([text], { type: 'text/plain' });
    var url = URL.createObjectURL(blob);
    
    var a = document.createElement('a');
    a.href = url;
    a.download = 'requisites.txt';
    document.body.appendChild(a);
    a.click();
    
    window.URL.revokeObjectURL(url);
});
