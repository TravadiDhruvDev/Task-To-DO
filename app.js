var app = angular.module("todoApp", []);

app.controller("todoController", function ($scope) {
  $scope.tasks = [];
  $scope.addTask = function () {
    if ($scope.newTask) {
      $scope.tasks.push({
        name: $scope.newTask,
        completed: false,
      });
      $scope.newTask = "";
    }
  };
  $scope.onKeyPress = function (event) {
    if (event.which === 13) {
      $scope.addTask();
    }
  };
  $scope.deleteTask = function (task) {
    var index = $scope.tasks.indexOf(task);
    $scope.tasks.splice(index, 1);
  };
  $scope.deleteCheckedTasks = function () {
    $scope.tasks = $scope.tasks.filter(function (task) {
      return !task.completed;
    });
  };
  $scope.deleteAllTasks = function () {
    $scope.tasks = [];
  };
});
