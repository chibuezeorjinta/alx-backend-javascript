var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    ;
    Director.prototype.getTowork = function () {
        return this.getCoffeeBreak();
    };
    ;
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    ;
    Director.prototype.getCoffeeBreak = function () {
        return 'Good Coffee for peak work efficency';
    };
    ;
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    ;
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    ;
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    ;
    return Teacher;
}());
var createEmployee = function (salary) {
    if (typeof salary === 'number' && salary < 500) {
        return (new Teacher());
    }
    else {
        return (new Director());
    }
};
function isDirector(employee) {
    return (employee instanceof Director ? true : false);
}
function executeWork(employee) {
    if (employee instanceof Director) {
        return console.log(employee.workDirectorTasks());
    }
    else {
        return console.log(employee.workTeacherTasks());
    }
}
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return console.log('Teaching Math');
    }
    else {
        return console.log('Teaching History');
    }
}
teachClass('Math');
teachClass('History');
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$200'));
