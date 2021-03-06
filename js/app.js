console.log('Start app');
angular.module('todoApp', []);

angular.module('todoApp').service('todoListService', ()=>{
    let todoListArray = [{title: 'Hello ToDo', isActive: true}, {title: 'Hello ToDo 2', isActive: false} ];

    let listSettings = {
        hideCompleted: false,
        orderIsReversed: felse 
    };


    getTodoItems = () => todoListArray;

    addItem = (title) => {
        todoListArray.push({title: title, isActive: true});
    }

    removeItem = (item) => {
        todoListArray.splice(todoListArray.indexOf(item), 1);
    }

    setSourceSettings = () => {

    }

    return {
        addItem: addItem,
        getTodoItems: getTodoItems,
        removeItem: removeItem,
        
        setSorceSettings: setSourceSettings
    }
});

angular.module('todoApp').controller('todoController', function($scope, todoListService){
    console.log('Hello ToDo!');

    $scope.addItem = () => {
        todoListService.addItem($scope.newTodoTitle);
        $scope.newTodoTitle = null;
    }

    $scope.getTodoItems = () => {
        return todoListService.getTodoItems();
    }

    $scope.removeItem = (todoItem) => {
        todoListService.removeItem(todoItem);
    }

});


// stackoverflow driven development :)
angular.module('todoApp').directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    };
});