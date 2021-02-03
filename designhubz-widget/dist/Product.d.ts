import { IScoredRecommendation } from './Recommendation';
import { I3DWidget, IEyewearWidget, IMakeupWidget, IMultiWidget } from './Widget';

/** XR product */
export interface IProduct<T>
{
	/** Workspace key as defined in the CMS */
	readonly workspaceKey: string;

	/** Product key as defined in the CMS */
	readonly productKey: string;

	/** Product thumbnail's url (3D render) */
	readonly thumbnailURL: string;

	/** Product specific properties */
	readonly properties: T;

	/** Product details to variations keys map */
	readonly variations: this[];

	/**
	 * Get recommendations related to product
	 * @param num Number of recommendations to get
	 * @param external Other recommendations to merge [Optional]
	 */
	fetchRecommendations(num: number, external?: Array<IScoredRecommendation>): Promise<Array<IScoredRecommendation>>;

	is3D(): this is I3DProduct<T>;
	isEyewear(): this is IEyewearProduct<T>;
	isMakeup(): this is IMakeupProduct<T>;
}

export interface I3DProduct<T> extends IProduct<T>
{
	_3D: boolean;

	/**
	 * @param domElement Container div for the widget
	 * @returns 3D widget
	 * @throws {InvalidArgumentError} Throws if domElement is not a valid HTMLElement
	 */
	create3DWidget(domElement: HTMLDivElement): Promise<I3DWidget<T>>;
}

export interface IEyewearProduct<T> extends I3DProduct<T>
{
	_eyewear: boolean;

	/**
	 * @param domElement Container div for the widget
	 * @returns Eyewear widget
	 * @throws {InvalidArgumentError} Throws if domElement is not a valid HTMLElement
	 */
	createEyewearWidget(domElement: HTMLDivElement): Promise<IEyewearWidget<T>>;

	/**
	 * @param domElement Container div for the widget
	 * @returns A widget with specialized widget tabs
	 * @throws {InvalidArgumentError} Throws if domElement is not a valid HTMLElement
	 */
	createMultiWidget(domElement: HTMLDivElement): Promise<IMultiWidget<T>>;
}

export interface IMakeupProduct<T> extends IProduct<T>
{
	_makeup: boolean;

	/**
	 * @param domElement Container div for the widget
	 * @returns Makeup widget
	 * @throws {InvalidArgumentError} Throws if domElement is not a valid HTMLElement
	 */
	createMakeupWidget(domElement: HTMLDivElement): Promise<IMakeupWidget<T>>;
}
