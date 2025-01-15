// array to hold list items

let bucketListItems = [];

const displayBucketList = () => {
    // let targetList = document.querySelector("bucketLists");
    // let ul = document.createElement("ul")
    // let newListItem = document.createElement("li");
    // ul.appendChild(newListItem).innerHTML = "Practice time";
    // console.log(ul.childNodes)

    const targetList = document.querySelector("#bucketLists");
    targetList.innerHTML += `<ul><li>Test test</li></ul>`
};

displayBucketList();