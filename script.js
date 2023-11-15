let currentPage = 1;

function showPage(pageNumber) {
    document.getElementById(`page${currentPage}`).style.display = "none";
    currentPage = pageNumber;
    document.getElementById(`page${currentPage}`).style.display = "flex";
}

function nextPage() {
    const totalPages = 5;
    if (currentPage < totalPages) {
        showPage(currentPage + 1);
    }
}

function prevPage() {
    if (currentPage > 1) {
        showPage(currentPage - 1);
    }
}
