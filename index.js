angular.module('simpleSortTable', [])
    .directive('simpleSortTable', function() {
        return {
            restrict: 'E',
            scope: {
                records: '=',
                config: '=',
                sortkey: '@'
            },
            transclude: true,
            template: '<table class="sort-table">' +
                '<thead><tr><th ng-repeat="c in config" ng-click="sort(c.key)" ng-class="{insort: c.key === sortkey, desc: desc === true, asc: desc !== true}">{{c.head}}</th></tr></thead>' +
                '<tbody><tr ng-repeat="r in records"><td ng-repeat="c in config">{{r[c.key]}}</td></tr></tbody></table>',
            controller: function($scope) {
                $scope.desc = true;
                $scope.sort = function(key) {
                    if (key === $scope.sortkey) {
                        $scope.desc = !$scope.desc;
                    } else {
                        $scope.desc = true;
                        $scope.sortkey = key;
                    }
                    $scope.records.sort(function(a, b) {
                        if ((a[key] > b[key] && !$scope.desc) || (a[key] < b[key] && $scope.desc)) {
                            return 1;
                        }
                    });
                }
            }
        }
    });