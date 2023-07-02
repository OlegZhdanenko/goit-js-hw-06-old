const categoryItems = document.querySelectorAll("#categories > li.item")
    const itemsCount = categoryItems.length;
    console.log(`Number of categories:${itemsCount}`);
categoryItems.forEach(category =>
{const categoryName = category.querySelector("h2").textContent
    console.log(`Category:${categoryName}`); 
    const liCount = category.querySelectorAll("li").length;
    console.log(`Elements:${liCount}`);
    })