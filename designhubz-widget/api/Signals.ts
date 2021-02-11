type callback<T> = (arg: T) => void;

export interface ISignal<T>
{
    Add(callback: callback<T>): void;
    Remove(callback: callback<T>): void;
    Once(callback: callback<T>): void;
}

export class Signal<T> implements ISignal<T>
{
    public callbacks: callback<T>[];

    constructor()
    {
        this.callbacks = [];
    }

    public Add(callback: callback<T>)
    {
        if(typeof callback !== 'function')
        {
            console.warn('Not a function', callback);
            throw("'callback' should be a function.");
        }
        this.callbacks.push(callback);
    }

    public Remove(callback: callback<T>)
    {
        const index = this.callbacks.indexOf(callback);
        if(index !== -1) this.callbacks.splice(index, 1);
    }

    public Dispatch(arg: T)
    {
        for(let i = 0; i < this.callbacks.length; i++) this.callbacks[i](arg);
    }

    public Once(callback: callback<T>)
    {
        const once = (arg: T) => {
            this.Remove(once);
            callback(arg);
        };
        this.Add(once);
    }
}

// Example
class Keyboard
{
    private readonly _onInput = new Signal<string>();
    public get Input(): ISignal<string> { return this._onInput; }

    public Enter(text: string)
    {
        this._onInput.Dispatch(text);
    }

    public static Example()
    {
        const keyboard = new Keyboard();
        keyboard.Input.Add(key => console.log(`keyboard.Input -> ${key}`));
        keyboard.Enter('x');
    }
}
