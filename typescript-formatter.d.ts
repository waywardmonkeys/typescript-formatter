// Generated by dts-bundle v0.2.0
// Dependencies for this module:
//   typings/typescript/typescript.d.ts

declare module 'typescript-formatter' {
    import ts = require("typescript");
    export interface Options {
        dryRun?: boolean;
        verbose?: boolean;
        replace: boolean;
        tslint: boolean;
        editorconfig: boolean;
        tsfmt: boolean;
    }
    export interface ResultMap {
        [fileName: string]: Result;
    }
    export interface Result {
        fileName: string;
        options: ts.FormatCodeOptions;
        src: string;
        dest: string;
    }
    export function processFiles(files: string[], opts: Options): Promise<ResultMap>;
    export function processStream(fileName: string, input: NodeJS.ReadableStream, opts: Options): Promise<Result>;
    export function processString(fileName: string, content: string, opts: Options): Promise<Result>;
}
