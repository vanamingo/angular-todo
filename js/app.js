console.log('Start app');
angular.module('todoApp', []);

angular.module('todoListService', ()=>{
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

angular.module('todoApp').controller('todoController', function($scope, todoListService){
    console.log('Hello ToDo!');

    $scope.addItem = () => {
        todoListService.addItem("Hello");
    }

    $scope.getTodoItems = () => {
        return todoListService.getTodoItems();
    }

});