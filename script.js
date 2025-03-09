document.addEventListener("DOMContentLoaded", function () {
    fetch("chapters.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const chapterButtonsDiv = document.getElementById("chapter-buttons");
            const chapterTitle = document.getElementById("chapter-title");
            const chapterText = document.getElementById("chapter-text");
            const chapterContentDiv = document.getElementById("chapter-content");

            data.chapters.forEach((chapter, index) => {
                const button = document.createElement("button");
                button.className = "button-64";
                button.innerHTML = `<span class="text">${chapter.title}</span>`;
                button.onclick = function () {
                    chapterTitle.innerText = chapter.title;
                    chapterText.innerText = chapter.content;
                    chapterContentDiv.style.display = "block";
                };
                chapterButtonsDiv.appendChild(button);
            });
        })
        .catch(error => console.error("Error loading chapters:", error));
});
