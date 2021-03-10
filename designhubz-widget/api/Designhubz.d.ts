import { Dev } from './Dev';
import { IProduct, IEyewearProduct, IMakeupProduct } from './Product';
import { TProps } from './Types';

/** Designhubz widgets API */

export declare const enum Stat {
	AddedToCart = 'AddedToCart',
	Whishlisted = 'Whishlisted',
	SnapshotSaved = 'SnapshotSaved'
}

export declare const enum TrackingStatus {
	CameraNotFound = 'CameraNotFound',
	FaceNotFound = 'FaceNotFound',
	Analyzing = 'Analyzing',
	Tracking = 'Tracking'
}

/** API version */
export declare const version: string;

/** Support/debug helper */
export declare const dev: Dev;

/**
 * Fetch product details (tiny packet) from a workspace
 * @param workspaceKey Key of the product's workspace as defined in the CMS
 * @param productKey Key of the product as defined in the CMS
 * @param props [Optional] Variation properties as integrated in the CMS
 * @returns Product details
 * @throws If not found
 */
export declare function fetchProduct<T extends TProps>(workspaceKey: string, productKey: string, props?: T): Promise<IProduct<T>>;

/**
 * Fetch multiple products' details from a workspace
 * @param workspaceKey Key of the products' workspace as defined in the CMS
 * @param productKeys Array containing the keys of products as defined in the CMS
 * @param props [Optional] Variation properties as integrated in the CMS
 * @returns A map of product details to keys (or undefined if not found)
 */
export declare function fetchProducts<T extends TProps>(workspaceKey: string, productKeys: string[], props?: T): Promise<Record<string, IProduct<T> | undefined>>;

export declare function fetchEyewearProduct<T extends TProps>(productKey: string, props?: T): Promise<IEyewearProduct<T>>;
export declare function fetchMakeupProduct<T extends TProps>(productKey: string, props?: T): Promise<IMakeupProduct<T>>;
