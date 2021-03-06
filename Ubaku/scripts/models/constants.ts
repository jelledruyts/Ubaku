﻿module app.models {
    "use strict";

    export class Constants {
        public static App =
        {
            AngularAppName: "app"
        };
        public static ControllerNames = {
            Root: "rootCtrl",
            Arithmetic: "arithmeticCtrl"
        };
        public static StringPlaceholders = {
            Answer: "{answer}"
        };
        public static ScorePercentageThresholds = {
            Error: 0.5,
            Warning: 0.7
        }
    }
}