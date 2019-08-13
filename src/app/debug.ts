import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

// Implementación de un operador personalizado para RXJS.

export enum RxJsLogginLevel {
    TRACE,
    DEBUG,
    INFO,
    ERROR
}

let rxjsLoggginLevel = RxJsLogginLevel.INFO;

export function setRxJsLogginLevel(level: RxJsLogginLevel) {
    rxjsLoggginLevel = level;
}

export const debug = (level: number, message: string) =>
    (source: Observable<any>) => source
        .pipe(
            tap(val => {
                if (level >= rxjsLoggginLevel) {
                    console.log(`${message}: ${val}`);
                }
            })
        );