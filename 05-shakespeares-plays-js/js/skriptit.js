function buttonClick() {
    const addLinkClasses = () => {
        try {
            const allLinks = Array.from(document.querySelectorAll('a'));

            allLinks.forEach(link => {
                if (!link.classList.contains('linkit')) {
                    link.classList.add('linkit');
                    addIcons(link);
                } else {
                    link.classList.remove('linkit')
                    const italicElements = document.querySelectorAll('i');
                    italicElements.forEach(function (element) {
                        element.parentNode.removeChild(element);
                    });
                }

            });
        } catch (error) {
            console.error("An error occurred while adding link classes:", error.message);
        }
    };




    const addIcons = (link) => {
        const href = link.href.toLowerCase();

        if (href.includes("pdf")) {
            link.after(createIcon("fa-file-pdf"));
        } else if (href.includes("mailto")) {
            link.before(createIcon("fa-envelope"), createIcon("fa-arrow-up-right-from-square"));
        } else if (href.includes("https")) {
            link.before(createIcon("fa-arrow-up-right-from-square"));
        }
    };

    const createIcon = (iconName) => {

        const newEl = document.createElement("i");
        newEl.classList.add("fa-solid", iconName);
        return newEl;
    };

    const addClassToElement = (sectionId, elementSelector, elementClass) => {
        try {
            if (!sectionId || !elementSelector || !elementClass) {
                throw new Error("Invalid arguments provided.");
            }

            const section = document.getElementById(sectionId);

            if (section) {
                const targetElement = section.querySelector(elementSelector);

                if (targetElement && targetElement.classList) {
                    if (!targetElement.classList.contains(elementClass)) {
                        targetElement.classList.add(elementClass);
                    } else {
                        targetElement.classList.remove(elementClass);
                    }

                } else {
                    console.log("No element found");
                }
            } else {
                console.log("Section not found.");
            }
        } catch (error) {
            console.error("An error occurred while adding class to element:", error.message);
        }
    };


    addLinkClasses();
    addClassToElement('eka', 'ul', 'rinnakkain');
    addClassToElement('toka', 'table', 'toka_table');
    addClassToElement('kolmas', 'table', 'kolmas_table');

}


