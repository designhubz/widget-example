export type TProgressCallback = (progress: number) => void;

type callback<T> = (arg: T) => void;

export interface ISignal<T>
{
    Add(callback: callback<T>): void;
    Remove(callback: callback<T>): void;
    Once(callback: callback<T>): void;
}
