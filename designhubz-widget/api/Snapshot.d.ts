
export interface ISnapshot
{
    readonly imageData: ImageData;
    getDataURL(type: 'jpeg' | 'png', quality?: number): string;
    getBlobAsync(type: 'jpeg' | 'png', quality?: number): Promise<Blob>
}
