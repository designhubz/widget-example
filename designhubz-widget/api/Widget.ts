import { Stat, TrackingStatus } from './Designhubz';
import { ISignal } from './Signals';
import { IProduct, IEyewearProduct, IMakeupProduct, I3DProduct } from './Product';
import { ISnapshot } from './Snapshot';

/** Web widget running on your page */
export interface IWidget<T, P extends IProduct<T>>
{
	readonly variation: P;
	takeSnapshotAsync(): Promise<ISnapshot>;
	sendStat(stat: Stat): Promise<void>;
	disposeAsync(): Promise<void>;

	/**
	 * Load variation assets and update widget
	 * @param product use product from variation
	 */
	loadVariation(variation: P): Promise<void>;
}

export interface I3DWidget<T> extends IWidget<T, I3DProduct<T>>
{
	_3D: boolean;
}

export interface IEyewearWidget<T> extends IWidget<T, IEyewearProduct<T>>
{
	_eyewear: boolean;
	readonly onTrackingStatusChange: ISignal<TrackingStatus>;
	readonly fit: boolean;
}

export interface IWidgetTab
{
	readonly domElement: HTMLDivElement;
}

export interface IMultiWidget<T> extends IWidget<T, IProduct<T>>
{
	add(tabConfig?: string): IWidgetTab;
}

export interface IMakeupWidget<T> extends IWidget<T, IMakeupProduct<T>>
{
	_makeup: boolean;
	readonly onTrackingStatusChange: ISignal<TrackingStatus>; // ITryonWidget<T> abstraction ?
}
