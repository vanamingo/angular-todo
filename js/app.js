console.log('Start app');
angular.module('todoApp', []);

angular.module('todoApp').service('todoListService', ()=>{
    let todoListArray = [{title: 'Hello ToDo', isActive: true}, {title: 'Hello ToDo 2', isActive: false} ];

    getTodoItems = () => todoListArray;

    addItem = (title) => {
        todoListArray.push({title: title, isActive: true});
    }

    removeItem = (item) => {
        todoListArray.splice(todoListArray.indexOf(item), 1);
    }


    return {
        addItem: addItem,
        getTodoItems: getTodoItems,
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

    $scope.removeItem = (todoItem) => {
        todoListService.removeItem(todoItem);
    }

});