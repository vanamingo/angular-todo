angular.module('todoListServiceO', ()=>{
    let todoListArray = [{title: 'Hello ToDo', isActive: true}, {title: 'Hello ToDo 2', isActive: true} ];

    getItems = () => todoListArray;

    addItem = (title) => {
        todoListArray.push({title: title, isActive: true});
    }

    removeItem = (item) => {
        todoListArray.splice.todoListArray(todoListArray.indexOf(item), 1);
    }


    return {
        addItem: addItem,
        getItems: getItems,
        removeItem: removeItem
    }
});