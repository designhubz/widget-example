import * as Designhubz from 'designhubz-widget';

(async () => {
    
    const container = document.getElementById('designhubz-widget-container') as HTMLDivElement;

    interface ICustomProps extends Record<string, string> { sizeCode: string, colorCode: string }
    const CustomProps: ICustomProps = { sizeCode: 'Size Code', colorCode: 'Color Code' };

    const _0RB3025I = ['713132842508', '713132842461', '8053672729580'];
    const product = await Designhubz.fetchEyewearProduct(_0RB3025I[0], CustomProps);
    console.log('product', product);

    const widget = await product.createEyewearWidget(container, demo_progressHandler('widget'));
    console.log('widget', widget);

    console.warn('User interaction is required to start camera:\nPlease click on dark area.');

    demo_takeSnaphot(widget);

    demo_trackingHandler(widget);

    demo_cycleVariations(_0RB3025I, product, widget);

})();

function demo_takeSnaphot<T>(widget: Designhubz.IWidget<T, Designhubz.IProduct<T>>)
{
    console.log('   click outside of widget to take snapshot...');
    document.addEventListener('click', async ev => {
        const snapshot = await widget.takeSnapshotAsync();
        const blob = await snapshot.getBlobAsync('png');
        open(URL.createObjectURL(blob), '_blank');
    });
}

function demo_progressHandler(label: string)
{
    const handler: Designhubz.TProgressCallback = (progress: number) => {
        console.log(`${label}: ${Math.round(progress * 100)}%`);
    };
    return handler;
}

function demo_trackingHandler<T>(widget: Designhubz.IEyewearWidget<T>)
{
    const update = (status: string, text: string) => console.log(`[${status}] ${text}`);
    update('none', 'Initializing Tracking');

    let faceFoundOnce = false;

    widget.onTrackingStatusChange.Add( status => {
        switch(status)
        {
            case Designhubz.TrackingStatus.CameraNotFound:
                update(status, 'Lost access to your camera.');
            break;

            case Designhubz.TrackingStatus.FaceNotFound:
                update(status, faceFoundOnce ? 'Come back...' : 'Use your camera as a mirror!');
            break;

            case Designhubz.TrackingStatus.Analyzing:
                faceFoundOnce = true;
                update(status, 'Analyzing...');
            break;

            case Designhubz.TrackingStatus.Tracking:
                update(status, 'Tracking...');
            break;
        }
    });

    widget.onTrackingStatusChange.Once( status => {
        switch(status)
        {
            case Designhubz.TrackingStatus.CameraNotFound:
                update(status, 'Could not find a camera.');
            break;
        }
    });
}

async function demo_cycleVariations<T>(
    productKeys: string[], 
    product: Designhubz.IGenericProduct, 
    widget: Designhubz.IWidget<T, Designhubz.IProduct<T>>,
    cycleNextDelay = 3000
)
{
    // We'll validate that the productKeys actually exist 
    // by comparing to fetched product's variations array
    const variations: Designhubz.IGenericProduct[] = productKeys.map( key => {
        const variation = product.variations.find( v => v.productKey === key );
        if(variation === undefined) throw new Error(`${key} is not a variation of ${product.productKey}`);
        return variation;
    });

    console.log('demo_cycleVariations', variations);
    let i = 0;
    while(true)
    {
        const variation = variations[++i % variations.length];
        const progressHandler = demo_progressHandler(`variation[${variation.productKey}]`);
        await widget.loadVariation(variation, progressHandler);
        await new Promise( r => setTimeout(r, cycleNextDelay) );
    }
}
