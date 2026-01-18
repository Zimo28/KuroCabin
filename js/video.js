// Video Player Functionality
document.querySelectorAll('.video-thumb').forEach(item => {
    item.addEventListener('click', () => {
        const videoSrc = item.getAttribute('data-video');

        // Buat overlay jika belum ada
        let overlay = document.querySelector('.video-overlay');
        if(!overlay){
            overlay = document.createElement('div');
            overlay.classList.add('video-overlay');
            overlay.innerHTML = `
                <span class="close-btn">&times;</span>
                <video controls autoplay></video>
            `;
            document.body.appendChild(overlay);
        }

        const video = overlay.querySelector('video');
        video.src = videoSrc;
        video.play();

        overlay.classList.add('active');

        // Close button
        overlay.querySelector('.close-btn').onclick = () => {
            video.pause();
            overlay.classList.remove('active');
        }

        // Close on click outside video
        overlay.onclick = (e) => {
            if(e.target === overlay){
                video.pause();
                overlay.classList.remove('active');
            }
        }
    });
});
