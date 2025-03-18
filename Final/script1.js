document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumb');
    const mainImage = document.getElementById('mainImage');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const id = this.src.match(/id\/(\d+)\//)[1];
            mainImage.src = `https://picsum.photos/id/${id}/700/400`;
        });
    });
});