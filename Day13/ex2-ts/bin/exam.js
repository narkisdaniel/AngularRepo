"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exam = void 0;
var Exam = /** @class */ (function () {
    function Exam() {
        this.questions = [];
    }
    Exam.prototype.addQuestion = function (question) {
        this.questions.push(question);
    };
    Exam.prototype.print = function () {
        for (var _i = 0, _a = this.questions; _i < _a.length; _i++) {
            var question = _a[_i];
            console.log(question.caption);
            for (var _b = 0, _c = question.answers; _b < _c.length; _b++) {
                var answer = _c[_b];
                console.log(answer);
            }
            console.log('------------------------------');
        }
    };
    Exam.prototype.grade = function (answers) {
        var totalCorrect = 0;
        for (var i = 0; i < Math.min(answers.length, this.questions.length); i++) {
            var question = this.questions[i];
            var answer = answers[i];
            if (typeof (question) !== 'undefined') {
                if (answer === question.correctIndex) {
                    totalCorrect++;
                }
            }
        }
        return totalCorrect / this.questions.length * 100;
    };
    return Exam;
}());
exports.Exam = Exam;
//# sourceMappingURL=exam.js.map