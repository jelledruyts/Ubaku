var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app;
(function (app) {
    var models;
    (function (models) {
        "use strict";
        var Exercise = (function (_super) {
            __extends(Exercise, _super);
            function Exercise() {
                _super.call(this);
                this.challenges = [];
            }
            return Exercise;
        }(models.ModelBase));
        models.Exercise = Exercise;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
