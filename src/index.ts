// import * as Designhubz from 'designhubz-widget';

(async () => {
    
    // Defining an interface for custom properties that are integrated in Designhubz's backend is optional
    // But with it: the API will warn for missing props and you'll get intellisense support
    interface ICustomProps extends Record<string, string> { sizeCode: string, missing: string }
    const CustomProps: ICustomProps = { sizeCode: 'Size Code', missing: 'Wrong Code' };

    console.log('1) CustomProps:', CustomProps);

    const Designhubz = await import('designhubz-widget');

    const product = await Designhubz.fetchProduct(
        'eyewear', // Workspace key (project key, provided by CMS)
        '8053672730593', // Variation key
        CustomProps // Optional check & typing for integrated variation properties
    );

    console.log('2) product:', product);
    console.log('   sizeCode:', product.properties.sizeCode);
    console.log('   missing:', product.properties.missing);

    // 'Color Code' was not mapped in CustomProps (it retains the default accessor = csv header)
    console.log('   Color Code:', product.properties['Color Code']);

    if(product.isEyewear())
    {
        const container = document.getElementById('designhubz-widget-container') as HTMLDivElement;
        
        const widget = await product.createEyewearWidget(container);

        console.log('3) widget:', widget);

        console.log('   click outside of widget to take snapshot...');

        document.addEventListener('click', async ev => {

            const snapshot = await widget.takeSnapshotAsync();

            console.log('Snaphot:', snapshot);

            // save or open
            const blob = await snapshot.getBlobAsync('png');
            open(URL.createObjectURL(blob), '_blank');

        });
    }

})();
