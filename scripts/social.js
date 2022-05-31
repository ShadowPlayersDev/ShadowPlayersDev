const createSocial = () => {
    let social = document.querySelector('.social');

    social.innerHTML = `
        <h1 class="title">Nuestras redes sociales</h1>
        <div class="list">
            <a href="https://github.com/ShadowPlayersDev" class="github" target="_blank">GitHub</a>
            <a href="https://open.spotify.com/user/s1abycxsaceyrqvi43fz07kwi" class="spotify" target="_blank">Spotify</a>
            <a href="https://www.tiktok.com/@shadowplayersdev/" class="tiktok" target="_blank">TikTok</a>
            <a href="https://discord.gg/2k8G2Fer4R" class="discord" target="_blank">Discord</a>
        </div>
    `;
}

createSocial();