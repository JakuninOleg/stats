import { MatchData } from "./MatchData";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { WinsAnalyzer } from "./analyzers/WinsAnalyzer";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outpuTarget: OutputTarget) {}

  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalyzer(team), new HtmlReport());
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outpuTarget.print(output);
  }
}
