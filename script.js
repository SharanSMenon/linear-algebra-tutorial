var pages = [
    {
        "title":"Introduction",
        "description":"Click here to learn about this book",
        "filename":"introduction.html"
    },
    {
        "title":"Vectors",
        "description":"Learn about the basics of vectors",
        "filename":"vectors.html"
    },
    {
        "title": "Matrices",
        "description": "Learn about the basics of matrices",
        "filename": "matrices.html"
    }, 
    {
        "title": "More on Matrices",
        "description": "Learn about more advanced topics like the determinant, transpose, etc.",
        "filename": "advanced-matrices.html"
    },
    {
        "title": "Gauss-Jordan Elimination",
        "description": "Gauss-Jordan Elimination is a technique to calculate the RREF",
        "filename": "wronskian.html"
    },
    {
        "title":"Cramer's Rule",
        "description":"Cramer's rule to solve systems of equations",
        "filename":"cramers-rule.html"
    },
    {
        "title":"Eigenvalues and Eigenvectors",
        "description":"Learn what Eigenvalues and Eigenvectors are",
        "filename":"eigenthings.html"
    },
    {
        "title": "Linear Algebra in Python",
        "description": "Use numpy/scipy to do linear algebra",
        "filename": "linalg-python.html"
    },
    {
        "title":"Linear Algebra in Matlab",
        "description":"Matlab tutorial for linear algebra.",
        "filename":"linalg-matlab.html"
    },
    {
        "title":"Linear Algebra on a TI-84",
        "description":"It is possible to do some basic linear algebra on a TI-84",
        "filename":"linalg-ti84.html",
    },
    {
        "title": "Wronskian",
        "description": "Learn to Calculate the Wronskian and check for linear independence",
        "filename": "wronskian.html"
    },
]
var search = document.getElementById("search");
search.addEventListener("input", () => {
    clearPageList();
    renderPageList();
})

function createLink(page) {
    var link = document.createElement("a");
    link.href = "html/" + page.filename;
    link.appendChild(createPageListItem(page));
    return link;
}

function createPageListItem(page) {
    console.log(page);
    var item = document.createElement("li");
    var div = document.createElement("div");
    var title = document.createElement("h3")
    title.innerText = page.title;
    var desc = document.createElement("p");
    desc.innerHTML = page.description;
    desc.classList.add("description");
    div.appendChild(title);
    div.appendChild(desc);
    item.appendChild(div);
    return item;
}

function clearPageList() {
    var pageList = document.getElementById("pagelist");
    while (pageList.firstChild) {
        pageList.removeChild(pageList.firstChild);
    }
}
function renderPageList() {
    var filteredPages = pages.filter(function(page) {
        return page.title.toLowerCase().includes(search.value.toLowerCase());
    });
    console.log(filteredPages);
    var pageList = document.getElementById("pagelist");
    filteredPages.forEach(page => {
        pageList.appendChild(createLink(page));
    });
}

renderPageList();