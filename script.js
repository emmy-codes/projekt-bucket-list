// array to hold list items
const bucketListItems = [];

// get reference of input field and select option
const inputData = document.querySelector("#activityName");
const selectData = document.querySelector("#activityCategory");

const displayBucketList = (event) => {
    // create actual list but not appended, gives it an id
    const list = document.createElement("ul");
    list.id = "ul-id";
    
    // collecting value from the input/select and clearing form on submit
    event.preventDefault();
    const inputValue = inputData.value;
    const selectValue = selectData.value;
    inputData.value = "";
    selectData.value = "";

    // add items to bucketListItems array
    bucketListItems.push({
        name: inputValue,
        category: selectValue
    });

    // maps array items to LI elements and append them to the list
    bucketListItems.map((bucketListItem, indexPosition) => {
        const newItem = document.createElement("li");
        newItem.innerHTML = `${bucketListItem.name} - ${bucketListItem.category}`
        // adding delete button to LIs
        const deleteButton = document.createElement("button");
        deleteButton.id = "delete-btn"
        deleteButton.textContent = "Delete";
        list.appendChild(newItem);
        list.appendChild(deleteButton);
    });

    // grab reference for bucket lists
    const bucketLists = document.querySelector("#bucketLists");

    // grab possible reference to a possible reference to the list that may exist on the DOM
    const currentList = document.querySelector("#ul-id");

    // check if the list exists, if so, remove it to avoid duplicates
    if (currentList) {
        bucketLists.removeChild(currentList)
    }

    // append the new list (with all and any added items) to the DOM
    bucketLists.appendChild(list);
    const deleteItem = () => {
        // alert("Are you sure you'd like to delete this?");
        // console.log("definitely deleted yep");
        for (i = 0; i < bucketListItems.length; i++) {
            if (bucketListItems[i]) {
                console.log("nailed it")
            }
        }
    };
    // delete item
    const deleteItemButton = document.querySelector("#delete-btn");
    deleteItemButton.addEventListener("click", deleteItem)
};



// event listeners
const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", displayBucketList);

