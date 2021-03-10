/**
 * @param progress Normalized [0, 1] progress value
 */
export type TProgressCallback = (progress: number) => void;

export type TProps = {
    [x: string]: string | undefined
};

type callback<T> = (arg: T) => void;

export interface ISignal<T>
{
    Add(callback: callback<T>): void;
    Remove(callback: callback<T>): void;
    Once(callback: callback<T>): void;
}
