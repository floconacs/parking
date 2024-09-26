// Initialisation des éditeurs de code avec CodeMirror
window.addEventListener("load", function() {
    const editor1 = CodeMirror.fromTextArea(document.getElementById('code-editor-1'), {
        lineNumbers: true,
        mode: "text/x-csrc",
        theme: "dracula"
    });

    const editor2 = CodeMirror.fromTextArea(document.getElementById('code-editor-2'), {
        lineNumbers: true,
        mode: "text/x-csrc",
        theme: "dracula"
    });

    const editor3 = CodeMirror.fromTextArea(document.getElementById('code-editor-3'), {
        lineNumbers: true,
        mode: "text/x-csrc",
        theme: "dracula"
    });
});

window.addEventListener("load", function() {
    if (document.getElementById('video-container')) {
        const loader = document.getElementById('loader');
        const videoContainer = document.getElementById('video-container');

        setTimeout(() => {
            loader.style.display = 'none';
            videoContainer.style.display = 'block';
            videoContainer.style.opacity = '1';
        }, 2000);
    }
});

