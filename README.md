# ng-single-sort-table
angular single sort table

## app.js

```js
    var app = angular.module('app', ['ngMaterial',  'simpleSortTable']);
```

## html

```
    div
        simple-sort-table(records="records" config="config" sortkey="id")
```

## ctrl.js

```
    $scope.config = [{
        head: 'id',
        key: 'id'
    }, {
        head: '名称',
        key: 'name'
    }]

    $scope.records = [{
        id: '1',
        name: 'name_a'
    }, {
        id: '2',
        name: 'name_b'
    }]
```
