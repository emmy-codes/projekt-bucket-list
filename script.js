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
    console.log(inputValue, selectValue);

    // add items to bucketListItems array
    bucketListItems.push({
        name: inputValue,
        category: selectValue
    });

    // maps array items to LI elements and append them to the list
    bucketListItems.map((bucketListItem) => {
        const newItem = document.createElement("li");
        newItem.innerHTML = `${bucketListItem.name} - ${bucketListItem.category}`
        list.appendChild(newItem);
    })

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
    
};

// event listener 
const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", displayBucketList);