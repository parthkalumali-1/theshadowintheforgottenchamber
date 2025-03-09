document.addEventListener("DOMContentLoaded", function () {
    fetch("chapters.json")
        .then(response => response.json())
        .then(data => {
            const chapterButtonsDiv = document.getElementById("chapter-buttons");
            const chapterTitle = document.getElementById("chapter-title");
            const chapterText = document.getElementById("chapter-text");
            const chapterContentDiv = document.getElementById("chapter-content");

            data.chapters.forEach((chapter, index) => {
                const button = document.createElement("button");
                button.className = "button-64";
                button.innerHTML = `<span class="text">Chapter ${index + 1}</span>`;
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
