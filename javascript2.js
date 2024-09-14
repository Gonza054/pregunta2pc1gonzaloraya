document.addEventListener('DOMContentLoaded', () => {
    const commentsList = document.getElementById('comments-list');
    const commentText = document.getElementById('comment-text');
    const submitComment = document.getElementById('submit-comment');

    // Arreglo para almacenar los comentarios
    let comments = [];

    // Función para renderizar los comentarios en la página
    function renderComments() {
        commentsList.innerHTML = '';
        comments.forEach((comment, index) => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.textContent = comment;
            commentsList.appendChild(commentElement);
        });
    }

    // Función para agregar un comentario
    function addComment() {
        const text = commentText.value.trim();
        if (text) {
            comments.push(text);
            commentText.value = '';
            renderComments();
        }
    }

    // Evento para el botón de publicar comentario
    submitComment.addEventListener('click', addComment);

    // Permitir publicar comentario con la tecla Enter
    commentText.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            addComment();
        }
    });
});