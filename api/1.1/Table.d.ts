/**
 * @noSelf
 */
declare class Table
{
	public deepcopy<T extends any>(obj : T) : T;
	public insert<T extends any>(arr : T[], item : T) : void;
}

declare const table : Table;