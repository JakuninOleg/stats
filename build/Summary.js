"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var HtmlReport_1 = require("./reportTargets/HtmlReport");
var WinsAnalyzer_1 = require("./analyzers/WinsAnalyzer");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outpuTarget) {
        this.analyzer = analyzer;
        this.outpuTarget = outpuTarget;
    }
    Summary.winsAnalysisWithHtmlReport = function (team) {
        return new Summary(new WinsAnalyzer_1.WinsAnalyzer(team), new HtmlReport_1.HtmlReport());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outpuTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
