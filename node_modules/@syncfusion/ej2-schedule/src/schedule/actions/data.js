/* eslint-disable @typescript-eslint/no-explicit-any */
import { Query, DataManager } from '@syncfusion/ej2-data';
/**
 * data module is used to generate query and data source.
 *
 * @private
 */
var Data = /** @class */ (function () {
    /**
     * Constructor for data module
     *
     * @param {Object | DataManager} dataSource Accepts the datasource as JSON objects or DataManager
     * @param {Query} query Accepts the query to process the data
     * @private
     */
    function Data(dataSource, query) {
        this.initDataManager(dataSource, query);
    }
    /**
     * The function used to initialize dataManager and query
     *
     * @param {Object | DataManager} dataSource Accepts the datasource as JSON objects or DataManager
     * @param {Query} query Accepts the query to process the data
     * @returns {void}
     * @private
     */
    Data.prototype.initDataManager = function (dataSource, query) {
        this.dataManager = dataSource instanceof DataManager ? dataSource : new DataManager(dataSource);
        this.query = query instanceof Query ? query : new Query();
    };
    /**
     * The function used to generate updated Query from schedule model
     *
     * @param {Date} startDate Accepts the start date
     * @param {Date} endDate Accepts the end date
     * @returns {void}
     * @private
     */
    Data.prototype.generateQuery = function (startDate, endDate) {
        var query = this.query.clone();
        if (startDate) {
            query.addParams('StartDate', startDate.toISOString());
        }
        if (endDate) {
            query.addParams('EndDate', endDate.toISOString());
        }
        return query;
    };
    /**
     * The function used to get dataSource by executing given Query
     *
     * @param  {Query} query - A Query that specifies to generate dataSource
     * @returns {void}
     * @private
     */
    Data.prototype.getData = function (query) {
        return this.dataManager.executeQuery(query);
    };
    /**
     * To destroy the crud module.
     *
     * @returns {void}
     * @private
     */
    Data.prototype.destroy = function () {
        this.dataManager = null;
        this.query = null;
    };
    return Data;
}());
export { Data };
