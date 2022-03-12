const createFooter = () => {
    let footer = document.querySelector('.footer');

    footer.innerHTML = `
        <h3>Página web bajo la licencia <a href="https://github.com/ShadowPlayersDev/ShadowPlayersDev/blob/main/LICENSE"><u>MIT License</u></a>.</h3>
    `;
}

createFooter();