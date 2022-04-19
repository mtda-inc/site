import { BehaviorSubject, Observable } from 'rxjs';

export interface IBehaviorSubjectHelper<T> {
    state: BehaviorSubject<T>;
    value: T;
    value$: Observable<T>;
    set(value: T): void;
}

export class BehaviorSubjectHelper<T> implements IBehaviorSubjectHelper<T> {
    public state: BehaviorSubject<T>;
    public value: T;
    public value$: Observable<T>;

    constructor(initialValue: T) {
        this.state = new BehaviorSubject<T>(initialValue);
        this.value = initialValue;
        this.value$ = this.state.asObservable();
    }

    public set(value: T): void {
        this.value = value;
        this.state.next(value);
    }
}
