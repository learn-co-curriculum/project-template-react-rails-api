import { Query, DataManager } from '@syncfusion/ej2-data';
/**
 * data module is used to generate query and data source.
 *
 * @private
 */
export declare class Data {
    dataManager: DataManager;
    private query;
    /**
     * Constructor for data module
     *
     * @param {Object | DataManager} dataSource Accepts the datasource as JSON objects or DataManager
     * @param {Query} query Accepts the query to process the data
     * @private
     */
    constructor(dataSource?: Record<string, any>[] | DataManager, query?: Query);
    /**
     * The function used to initialize dataManager and query
     *
     * @param {Object | DataManager} dataSource Accepts the datasource as JSON objects or DataManager
     * @param {Query} query Accepts the query to process the data
     * @returns {void}
     * @private
     */
    initDataManager(dataSource: Record<string, any>[] | DataManager, query: Query): void;
    /**
     * The function used to generate updated Query from schedule model
     *
     * @param {Date} startDate Accepts the start date
     * @param {Date} endDate Accepts the end date
     * @returns {void}
     * @private
     */
    generateQuery(startDate?: Date, endDate?: Date): Query;
    /**
     * The function used to get dataSource by executing given Query
     *
     * @param  {Query} query - A Query that specifies to generate dataSource
     * @returns {void}
     * @private
     */
    getData(query: Query): Promise<any>;
    /**
     * To destroy the crud module.
     *
     * @returns {void}
     * @private
     */
    destroy(): void;
}
