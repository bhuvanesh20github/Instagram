document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-button');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const likeCountSpan = button.nextElementSibling;
            let likeCount = parseInt(likeCountSpan.textContent.split(' ')[0]);
            const icon = button.querySelector('i');

            if (button.classList.contains('liked')) {
                likeCount--;
                button.classList.remove('liked');
                button.innerHTML = '<i class="fa-regular fa-heart"></i> Like';
            } else {
                likeCount++;
                button.classList.add('liked');
                button.innerHTML = '<i class="fa-solid fa-heart"></i> Liked';
            }

            likeCountSpan.textContent = `${likeCount} ${likeCount === 1 ? 'like' : 'likes'}`;
        });
    });
});


function addComment(postElement, commentText) {
    const commentsList = postElement.querySelector('.comments-list');
    const newComment = document.createElement('li');
    newComment.textContent = commentText;
    commentsList.appendChild(newComment);
}


document.querySelectorAll('.add-comment-button').forEach(button => {
    button.addEventListener('click', function() {
        const postElement = this.closest('.post');
        const commentInput = postElement.querySelector('.comment-input');
        const commentText = commentInput.value.trim();
        
        if (commentText !== '') {
            addComment(postElement, commentText);
            commentInput.value = ''; 
        }
    });
});

document.querySelectorAll('.comment-input').forEach(input => {
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const postElement = this.closest('.post');
            const commentText = this.value.trim();
            
            if (commentText !== '') {
                addComment(postElement, commentText);
                this.value = ''; 
            }
        }
    });
});

function togglePlayPause(audioId) {
    const audio = document.getElementById(audioId);
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
   



