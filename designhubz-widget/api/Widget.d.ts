import { Stat, TrackingStatus } from './Designhubz';
import { IProduct, IEyewearProduct, IMakeupProduct, I3DProduct } from './Product';
import { ISnapshot } from './Snapshot';
import { ISignal, TProgressCallback } from './Types';

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
	loadVariation(variation: P, progressHandler?: TProgressCallback): Promise<void>;
}

export interface I3DWidget<T> extends IWidget<T, I3DProduct<T>>
{
	_3D: boolean;
}

export interface ITryonwidget<T, P extends IProduct<T>> extends IWidget<T, P>
{
	readonly onTrackingStatusChange: ISignal<TrackingStatus>;
}

export interface IEyewearWidget<T> extends ITryonwidget<T, IEyewearProduct<T>>
{
	_eyewear: boolean;
	readonly fit: boolean;
}

export interface IMakeupWidget<T> extends ITryonwidget<T, IMakeupProduct<T>>
{
	_makeup: boolean;
}

export interface IWidgetTab
{
	readonly domElement: HTMLDivElement;
}

export interface IMultiWidget<T> extends IWidget<T, IProduct<T>>
{
	add(tabConfig?: string): IWidgetTab;
}
