// Font size change
document.getElementById("btn__size").addEventListener("click", () => {
    let fontSizeSpan = document.getElementById("fontSizeValue");
    document.querySelectorAll('#koko li').forEach(item => {
        let newSize = (parseInt(getComputedStyle(item).fontSize) + 4) % 36 || 16;
        item.style.fontSize = fontSizeSpan.textContent = newSize + 'px';
    });
});

// Font family change

const fontFamilies = ["Roboto", "Mansalva", "Grenze", "Turret Road", "Courier New"];
let fontFamilyIndex = 0;

document.getElementById("btn__family").addEventListener("click", () => {
    let changeableText = document.querySelectorAll('#fontti li');
    let fontTypeSpan = document.getElementById("fontTypeValue");

    changeableText.forEach(item => item.style.fontFamily = fontTypeSpan.textContent = fontFamilies[fontFamilyIndex]);
    
    fontFamilyIndex = (fontFamilyIndex + 1) % fontFamilies.length;
});


