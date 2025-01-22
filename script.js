// array to hold list items
const bucketListItems = [];

// get reference of input field and select option
const inputData = document.querySelector("#activityName");
const selectData = document.querySelector("#activityCategory");

// initiate list as null
let currentList = null;

// grab reference for bucket lists
const bucketLists = document.querySelector("#bucketLists");

// delete list item
const deleteItem = (indexPosition) => {
    alert("Are you sure you'd like to delete this?");
    bucketListItems.splice(indexPosition, 1);
};

const updatedList = (list) => {
    // check if the list exists, if so, remove it to avoid duplicates
    if (currentList) {
        bucketLists.removeChild(currentList);
    }

    // append the new list (with all and any added items) to the DOM
    bucketLists.appendChild(list);
}

const displayBucketList = (event) => {
    // create actual list but not appended, gives it an id
    const list = document.createElement("ul");
    list.id = "ul-id";

    // grabs the current reference of the list from the DOM
    currentList = document.querySelector("#ul-id");

    // collecting value from the input/select and clearing form on submit
    event.preventDefault();
    const inputValue = inputData.value;
    const selectValue = selectData.value;
    inputData.value = "";
    selectData.value = "";

    // add items to bucketListItems array
    bucketListItems.push({
        name: inputValue,
        category: selectValue,
    });

    // maps array items to LI elements and append them to the list
    bucketListItems.map((bucketListItem, indexPosition) => {
        const newItem = document.createElement("li");
        newItem.innerHTML = `${bucketListItem.name} - ${bucketListItem.category}`;
        // adding delete button to LIs
        const deleteButton = document.createElement("button");
        deleteButton.id = "delete-btn";
        deleteButton.textContent = "Delete";

        newItem.appendChild(deleteButton);

        // appending newItem and deleteButton to the list
        list.appendChild(newItem);
        deleteButton.addEventListener("click", (e) => {
            e.preventDefault();
            // remove the item from the array (bucketListItems)
            deleteItem(indexPosition);

            // remove the item from the list (DOM)
            list.removeChild(newItem);

            // update the list
            updatedList(list);
        });
    });

    updatedList(list);
};

// event listeners
const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", displayBucketList);