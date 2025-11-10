if (document.querySelector('.lb-grid-item')) {
    // Loop through the photo/text pairs (1 to 4)
    for (let i = 1; i <= 4; i++) {
        const photo = document.querySelector(`.photo0${i}`);
        const photoText = document.querySelector(`#book-text-${i}`);

        // Only add listeners if both elements exist
        if (photo && photoText) {
            photo.addEventListener('mouseenter', () => {
                photoText.style.display = 'block';
            });

            photo.addEventListener('mouseout', () => {
                photoText.style.display = 'none';
            });
        }
    }
}

if (document.querySelector('.lb-grid-item')) {
    // Loop through the photo/text pairs (1 to 4)
    for (let i = 1; i <= 4; i++) {
        const photo = document.querySelector(`.moviePhoto0${i}`);
        const photoText = document.querySelector(`#movie-text-${i}`);

        // Only add listeners if both elements exist
        if (photo && photoText) {
            photo.addEventListener('mouseenter', () => {
                photoText.style.display = 'block';
            });

            photo.addEventListener('mouseout', () => {
                photoText.style.display = 'none';
            });
        }
    }
}

if (document.querySelector('.lb-grid-item')) {
    // Loop through the photo/text pairs (1 to 3)
    for (let i = 1; i <= 3; i++) {
        const photo = document.querySelector(`.tvPhoto0${i}`);
        const photoText = document.querySelector(`#tv-text-${i}`);

        // Only add listeners if both elements exist
        if (photo && photoText) {
            photo.addEventListener('mouseenter', () => {
                photoText.style.display = 'block';
            });

            photo.addEventListener('mouseout', () => {
                photoText.style.display = 'none';
            });
        }
    }
}
