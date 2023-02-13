function createGallery(imgLinks){
    const gallery = document.createElement('gallery')
    let html = ''
    
    for (const imgLink of imgLinks) {
        html += `
            <figure>
                <img src= ${imgLink}>
            </figure>
        `
    }

    gallery.innerHTML = html

    return gallery
}