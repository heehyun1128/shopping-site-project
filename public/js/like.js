window.addEventListener("load", function () {

    const likeBtn = document.querySelector('.likeicon')
    const likeDiv = document.querySelector('.like-div')
    const closeBtn=document.querySelector('.close-btn')
    
    closeBtn.addEventListener('click', () => {
        likeDiv.style.display = 'none';
    })

    likeBtn.addEventListener('click', () => {
        if (likeDiv.style.display === 'block') {
        
            likeDiv.style.display = 'none';
        } else {
            likeDiv.style.display = 'block';
        }
    })
})