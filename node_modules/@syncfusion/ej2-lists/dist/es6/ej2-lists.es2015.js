import { Animation, Base, ChildProperty, Complex, Component, Draggable, Event, EventHandler, NotifyPropertyChanges, Property, SanitizeHtmlHelper, Touch, addClass, append, attributes, blazorTemplates, closest, compareElementParent, compile, debounce, detach, extend, formatUnit, getComponent, getUniqueID, getValue, isBlazor, isNullOrUndefined, isVisible, merge, prepend, remove, removeClass, resetBlazorTemplate, rippleEffect, updateBlazorTemplate } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { createCheckBox } from '@syncfusion/ej2-buttons';

/* eslint-disable no-inner-declarations */
let cssClass = {
    li: 'e-list-item',
    ul: 'e-list-parent e-ul',
    group: 'e-list-group-item',
    icon: 'e-list-icon',
    text: 'e-list-text',
    check: 'e-list-check',
    checked: 'e-checked',
    selected: 'e-selected',
    expanded: 'e-expanded',
    textContent: 'e-text-content',
    hasChild: 'e-has-child',
    level: 'e-level',
    url: 'e-list-url',
    collapsible: 'e-icon-collapsible',
    disabled: 'e-disabled',
    image: 'e-list-img',
    iconWrapper: 'e-icon-wrapper',
    anchorWrap: 'e-anchor-wrap',
    navigable: 'e-navigable'
};
/**
 * Base List Generator
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
var ListBase;
(function (ListBase) {
    /**
     *
     * Default mapped fields.
     */
    ListBase.defaultMappedFields = {
        id: 'id',
        text: 'text',
        url: 'url',
        value: 'value',
        isChecked: 'isChecked',
        enabled: 'enabled',
        expanded: 'expanded',
        selected: 'selected',
        iconCss: 'iconCss',
        child: 'child',
        isVisible: 'isVisible',
        hasChildren: 'hasChildren',
        tooltip: 'tooltip',
        htmlAttributes: 'htmlAttributes',
        urlAttributes: 'urlAttributes',
        imageAttributes: 'imageAttributes',
        imageUrl: 'imageUrl',
        groupBy: null
    };
    const defaultAriaAttributes = {
        level: 1,
        listRole: 'presentation',
        itemRole: 'presentation',
        groupItemRole: 'group',
        itemText: 'list-item',
        wrapperRole: 'presentation'
    };
    const defaultListBaseOptions = {
        showCheckBox: false,
        showIcon: false,
        enableHtmlSanitizer: false,
        expandCollapse: false,
        fields: ListBase.defaultMappedFields,
        ariaAttributes: defaultAriaAttributes,
        listClass: '',
        itemClass: '',
        processSubChild: false,
        sortOrder: 'None',
        template: null,
        groupTemplate: null,
        headerTemplate: null,
        expandIconClass: 'e-icon-collapsible',
        moduleName: 'list',
        expandIconPosition: 'Right',
        itemNavigable: false
    };
    /**
     * Function helps to created and return the UL Li element based on your data.
     *
     * @param  {createElementParams} createElement - Specifies an array of JSON data.
     *
     * @param  {{Object}[]} dataSource - Specifies an array of JSON data.
     *
     * @param  {ListBaseOptions} options? - Specifies the list options that need to provide.
     *
     * @param  {boolean} isSingleLevel? - Specifies the list options that need to provide.
     *
     * @param  {any} componentInstance? - Specifies the list options that need to provide.
     *
     * @returns  {createElement} createListFromJson - Specifies the list options that need to provide.
     */
    function createList(createElement, dataSource, 
    // eslint-disable-next-line
    options, isSingleLevel, componentInstance) {
        const curOpt = extend({}, defaultListBaseOptions, options);
        const ariaAttributes = extend({}, defaultAriaAttributes, curOpt.ariaAttributes);
        const type = typeofData(dataSource).typeof;
        if (type === 'string' || type === 'number') {
            return createListFromArray(createElement, dataSource, isSingleLevel, options, componentInstance);
        }
        else {
            return createListFromJson(createElement, dataSource, options, ariaAttributes.level, isSingleLevel, componentInstance);
        }
    }
    ListBase.createList = createList;
    /**
     * Function helps to created an element list based on string array input .
     *
     * @param  {createElementParams} createElement - Specifies an array of JSON data.
     *
     * @param  {{Object}[]} dataSource - Specifies an array of JSON data.
     *
     * @param  {ListBaseOptions} options? - Specifies the list options that need to provide.
     *
     * @param  {boolean} isSingleLevel? - Specifies the list options that need to provide.
     *
     * @param  {any} componentInstance? - Specifies the list options that need to provide.
     *
     * @returns  {createElement} generateUL - returns the list options that need to provide.
     */
    function createListFromArray(createElement, dataSource, 
    // tslint:disable-next-line
    // eslint-disable-next-line
    isSingleLevel, options, componentInstance) {
        const subChild = createListItemFromArray(createElement, dataSource, isSingleLevel, options, componentInstance);
        return generateUL(createElement, subChild, null, options);
    }
    ListBase.createListFromArray = createListFromArray;
    /**
     * Function helps to created an element list based on string array input .
     *
     * @param  {createElementParams} createElement - Specifies an array of JSON data.
     *
     * @param  {{Object}[]} dataSource - Specifies an array of JSON data.
     *
     * @param  {ListBaseOptions} options? - Specifies the list options that need to provide.
     *
     * @param  {boolean} isSingleLevel? - Specifies the list options that need to provide.
     *
     * @param  {any} componentInstance? - Specifies the list options that need to provide.
     *
     * @returns  {HTMLElement[]} subChild - returns the list options that need to provide.
     */
    function createListItemFromArray(createElement, dataSource, 
    // eslint-disable-next-line
    isSingleLevel, options, componentInstance) {
        const subChild = [];
        const curOpt = extend({}, defaultListBaseOptions, options);
        cssClass = getModuleClass(curOpt.moduleName);
        const id = generateId(); // generate id for drop-down-list option.
        for (let i = 0; i < dataSource.length; i++) {
            if (isNullOrUndefined(dataSource[i])) {
                continue;
            }
            let li;
            if (curOpt.itemCreating && typeof curOpt.itemCreating === 'function') {
                const curData = {
                    dataSource: dataSource,
                    curData: dataSource[i],
                    text: dataSource[i],
                    options: curOpt
                };
                curOpt.itemCreating(curData);
            }
            if (isSingleLevel) {
                li = generateSingleLevelLI(createElement, dataSource[i], undefined, null, null, [], null, id, i, options);
            }
            else {
                li = generateLI(createElement, dataSource[i], undefined, null, null, options, componentInstance);
            }
            if (curOpt.itemCreated && typeof curOpt.itemCreated === 'function') {
                const curData = {
                    dataSource: dataSource,
                    curData: dataSource[i],
                    text: dataSource[i],
                    item: li,
                    options: curOpt
                };
                curOpt.itemCreated(curData);
            }
            subChild.push(li);
        }
        return subChild;
    }
    ListBase.createListItemFromArray = createListItemFromArray;
    /**
     * Function helps to created an element list based on array of JSON input .
     *
     * @param  {createElementParams} createElement - Specifies an array of JSON data.
     *
     * @param  {{Object}[]} dataSource - Specifies an array of JSON data.
     *
     * @param  {ListBaseOptions} options? - Specifies the list options that need to provide.
     *
     * @param  {boolean} isSingleLevel? - Specifies the list options that need to provide.
     *
     * @param  {number} level? - Specifies the list options that need to provide.
     *
     * @param  {any} componentInstance? - Specifies the list options that need to provide.
     *
     * @returns  {HTMLElement[]} child - returns the list options that need to provide.
     */
    function createListItemFromJson(createElement, dataSource, 
    // eslint-disable-next-line
    options, level, isSingleLevel, componentInstance) {
        const curOpt = extend({}, defaultListBaseOptions, options);
        cssClass = getModuleClass(curOpt.moduleName);
        const fields = extend({}, ListBase.defaultMappedFields, curOpt.fields);
        const ariaAttributes = extend({}, defaultAriaAttributes, curOpt.ariaAttributes);
        let id;
        let checkboxElement = [];
        if (level) {
            ariaAttributes.level = level;
        }
        const child = [];
        let li;
        let anchorElement;
        if (dataSource && dataSource.length && !isNullOrUndefined(typeofData(dataSource).item) &&
            // eslint-disable-next-line no-prototype-builtins
            !typeofData(dataSource).item.hasOwnProperty(fields.id)) {
            id = generateId(); // generate id for drop-down-list option.
        }
        for (let i = 0; i < dataSource.length; i++) {
            let fieldData = getFieldValues(dataSource[i], fields);
            if (isNullOrUndefined(dataSource[i])) {
                continue;
            }
            if (curOpt.itemCreating && typeof curOpt.itemCreating === 'function') {
                const curData = {
                    dataSource: dataSource,
                    curData: dataSource[i],
                    text: fieldData[fields.text],
                    options: curOpt,
                    fields: fields
                };
                curOpt.itemCreating(curData);
            }
            const curItem = dataSource[i];
            if (curOpt.itemCreating && typeof curOpt.itemCreating === 'function') {
                fieldData = getFieldValues(dataSource[i], fields);
            }
            // eslint-disable-next-line no-prototype-builtins
            if (fieldData.hasOwnProperty(fields.id) && !isNullOrUndefined(fieldData[fields.id])) {
                id = fieldData[fields.id];
            }
            const innerEle = [];
            if (curOpt.showCheckBox) {
                if (curOpt.itemNavigable && (fieldData[fields.url] || fieldData[fields.urlAttributes])) {
                    checkboxElement.push(createElement('input', { className: cssClass.check, attrs: { type: 'checkbox' } }));
                }
                else {
                    innerEle.push(createElement('input', { className: cssClass.check, attrs: { type: 'checkbox' } }));
                }
            }
            if (isSingleLevel === true) {
                // eslint-disable-next-line no-prototype-builtins
                if (curOpt.showIcon && fieldData.hasOwnProperty(fields.iconCss) && !isNullOrUndefined(fieldData[fields.iconCss])) {
                    innerEle.push(createElement('span', { className: cssClass.icon + ' ' + fieldData[fields.iconCss] }));
                }
                li = generateSingleLevelLI(createElement, curItem, fieldData, fields, curOpt.itemClass, innerEle, 
                // eslint-disable-next-line no-prototype-builtins
                (curItem.hasOwnProperty('isHeader') &&
                    curItem.isHeader) ? true : false, id, i, options);
                anchorElement = li.querySelector('.' + cssClass.anchorWrap);
                if (curOpt.itemNavigable && checkboxElement.length) {
                    prepend(checkboxElement, li.firstElementChild);
                }
            }
            else {
                li = generateLI(createElement, curItem, fieldData, fields, curOpt.itemClass, options, componentInstance);
                li.classList.add(cssClass.level + '-' + ariaAttributes.level);
                li.setAttribute('aria-level', ariaAttributes.level.toString());
                anchorElement = li.querySelector('.' + cssClass.anchorWrap);
                // eslint-disable-next-line no-prototype-builtins
                if (fieldData.hasOwnProperty(fields.tooltip)) {
                    li.setAttribute('title', fieldData[fields.tooltip]);
                }
                // eslint-disable-next-line no-prototype-builtins
                if (fieldData.hasOwnProperty(fields.htmlAttributes) && fieldData[fields.htmlAttributes]) {
                    setAttribute(li, fieldData[fields.htmlAttributes]);
                }
                // eslint-disable-next-line no-prototype-builtins
                if (fieldData.hasOwnProperty(fields.enabled) && fieldData[fields.enabled] === false) {
                    li.classList.add(cssClass.disabled);
                }
                // eslint-disable-next-line no-prototype-builtins
                if (fieldData.hasOwnProperty(fields.isVisible) && fieldData[fields.isVisible] === false) {
                    li.style.display = 'none';
                }
                // eslint-disable-next-line no-prototype-builtins
                if (fieldData.hasOwnProperty(fields.imageUrl) && !isNullOrUndefined(fieldData[fields.imageUrl])
                    && !curOpt.template) {
                    const attr = { src: fieldData[fields.imageUrl] };
                    merge(attr, fieldData[fields.imageAttributes]);
                    const imageElemnt = createElement('img', { className: cssClass.image, attrs: attr });
                    if (anchorElement) {
                        anchorElement.insertAdjacentElement('afterbegin', imageElemnt);
                    }
                    else {
                        prepend([imageElemnt], li.firstElementChild);
                    }
                }
                // eslint-disable-next-line no-prototype-builtins
                if (curOpt.showIcon && fieldData.hasOwnProperty(fields.iconCss) &&
                    !isNullOrUndefined(fieldData[fields.iconCss]) && !curOpt.template) {
                    const iconElement = createElement('div', { className: cssClass.icon + ' ' + fieldData[fields.iconCss] });
                    if (anchorElement) {
                        anchorElement.insertAdjacentElement('afterbegin', iconElement);
                    }
                    else {
                        prepend([iconElement], li.firstElementChild);
                    }
                }
                if (innerEle.length) {
                    prepend(innerEle, li.firstElementChild);
                }
                if (curOpt.itemNavigable && checkboxElement.length) {
                    prepend(checkboxElement, li.firstElementChild);
                }
                processSubChild(createElement, fieldData, fields, dataSource, curOpt, li, ariaAttributes.level);
            }
            if (anchorElement) {
                addClass([li], [cssClass.navigable]);
            }
            if (curOpt.itemCreated && typeof curOpt.itemCreated === 'function') {
                const curData = {
                    dataSource: dataSource,
                    curData: dataSource[i],
                    text: fieldData[fields.text],
                    item: li,
                    options: curOpt,
                    fields: fields
                };
                curOpt.itemCreated(curData);
            }
            checkboxElement = [];
            child.push(li);
        }
        return child;
    }
    ListBase.createListItemFromJson = createListItemFromJson;
    /**
     * Function helps to created an element list based on array of JSON input .
     *
     * @param  {createElementParams} createElement - Specifies an array of JSON data.
     *
     * @param  {{Object}[]} dataSource - Specifies an array of JSON data.
     *
     * @param  {ListBaseOptions} options? - Specifies the list options that need to provide.
     *
     * @param  {number} level? - Specifies the list options that need to provide.
     *
     * @param  {boolean} isSingleLevel? - Specifies the list options that need to provide.
     *
     * @param  {any} componentInstance? - Specifies the list options that need to provide.
     *
     * @returns  {createElement} generateUL - Specifies the list options that need to provide.
     */
    function createListFromJson(createElement, dataSource, 
    // eslint-disable-next-line
    options, level, isSingleLevel, componentInstance) {
        const curOpt = extend({}, defaultListBaseOptions, options);
        const li = createListItemFromJson(createElement, dataSource, options, level, isSingleLevel, componentInstance);
        return generateUL(createElement, li, curOpt.listClass, options);
    }
    ListBase.createListFromJson = createListFromJson;
    /**
     * Return the next or previous visible element.
     *
     * @param  {Element[]|NodeList} elementArray - An element array to find next or previous element.
     * @param  {Element} li - An element to find next or previous after this element.
     * @param  {boolean} isPrevious? - Specify when the need get previous element from array.
     */
    function getSiblingLI(elementArray, element, isPrevious) {
        cssClass = getModuleClass(defaultListBaseOptions.moduleName);
        if (!elementArray || !elementArray.length) {
            return void 0;
        }
        let siblingLI;
        let liIndex;
        const liCollections = Array.prototype.slice.call(elementArray);
        if (element) {
            liIndex = indexOf(element, liCollections);
        }
        else {
            liIndex = (isPrevious === true ? liCollections.length : -1);
        }
        siblingLI = liCollections[liIndex + (isPrevious === true ? -1 : 1)];
        while (siblingLI && (!isVisible(siblingLI) || siblingLI.classList.contains(cssClass.disabled))) {
            liIndex = liIndex + (isPrevious === true ? -1 : 1);
            siblingLI = liCollections[liIndex];
        }
        return siblingLI;
    }
    ListBase.getSiblingLI = getSiblingLI;
    /**
     * Return the index of the li element
     *
     * @param  {Element} item - An element to find next or previous after this element.
     * @param  {Element[]} elementArray - An element array to find index of given li.
     */
    function indexOf(item, elementArray) {
        if (!elementArray || !item) {
            return void 0;
        }
        else {
            let liCollections = elementArray;
            liCollections = Array.prototype.slice.call(elementArray);
            return liCollections.indexOf(item);
        }
    }
    ListBase.indexOf = indexOf;
    /**
     * Returns the grouped data from given dataSource.
     *
     * @param  {{Object}[]} dataSource - The JSON data which is necessary to process.
     * @param  {FieldsMapping} fields - Fields that are mapped from the data source.
     * @param  {SortOrder} sortOrder- Specifies final result sort order.
     */
    function groupDataSource(dataSource, fields, sortOrder = 'None') {
        const curFields = extend({}, ListBase.defaultMappedFields, fields);
        let cusQuery = new Query().group(curFields.groupBy);
        // need to remove once sorting issues fixed in DataManager
        cusQuery = addSorting(sortOrder, 'key', cusQuery);
        const ds = getDataSource(dataSource, cusQuery);
        dataSource = [];
        for (let j = 0; j < ds.length; j++) {
            const itemObj = ds[j].items;
            const grpItem = {};
            const hdr = 'isHeader';
            grpItem[curFields.text] = ds[j].key;
            grpItem[hdr] = true;
            let newtext = curFields.text;
            if (newtext === 'id') {
                newtext = 'text';
                grpItem[newtext] = ds[j].key;
            }
            grpItem._id = 'group-list-item-' + (ds[j].key ?
                ds[j].key.toString().trim() : 'undefined');
            grpItem.items = itemObj;
            dataSource.push(grpItem);
            for (let k = 0; k < itemObj.length; k++) {
                dataSource.push(itemObj[k]);
            }
        }
        return dataSource;
    }
    ListBase.groupDataSource = groupDataSource;
    /**
     * Returns a sorted query object.
     *
     * @param  {SortOrder} sortOrder - Specifies that sort order.
     * @param  {string} sortBy - Specifies sortBy fields.
     * @param  {Query} query - Pass if any existing query.
     */
    function addSorting(sortOrder, sortBy, query = new Query()) {
        if (sortOrder === 'Ascending') {
            query.sortBy(sortBy, 'ascending', true);
        }
        else if (sortOrder === 'Descending') {
            query.sortBy(sortBy, 'descending', true);
        }
        else {
            for (let i = 0; i < query.queries.length; i++) {
                if (query.queries[i].fn === 'onSortBy') {
                    query.queries.splice(i, 1);
                }
            }
        }
        return query;
    }
    ListBase.addSorting = addSorting;
    /**
     * Return an array of JSON Data that processed based on queries.
     *
     * @param  {{Object}[]} dataSource - Specifies local JSON data source.
     *
     * @param  {Query} query - Specifies query that need to process.
     */
    function getDataSource(dataSource, query) {
        // eslint-disable-next-line
        return new DataManager(dataSource)
            .executeLocal(query);
    }
    ListBase.getDataSource = getDataSource;
    /**
     * Created JSON data based the UL and LI element
     *
     * @param  {HTMLElement|Element} element - UL element that need to convert as a JSON
     * @param  {ListBaseOptions} options? - Specifies listbase option for fields.
     */
    function createJsonFromElement(element, options) {
        const curOpt = extend({}, defaultListBaseOptions, options);
        const fields = extend({}, ListBase.defaultMappedFields, curOpt.fields);
        const curEle = element.cloneNode(true);
        // eslint-disable-next-line
        const jsonAr = [];
        curEle.classList.add('json-parent');
        const childs = curEle.querySelectorAll('.json-parent>li');
        curEle.classList.remove('json-parent');
        for (let i = 0; i < childs.length; i++) {
            const li = childs[i];
            const anchor = li.querySelector('a');
            const ul = li.querySelector('ul');
            // eslint-disable-next-line
            const json = {};
            const childNodes = anchor ? anchor.childNodes : li.childNodes;
            const keys = Object.keys(childNodes);
            for (let i = 0; i < childNodes.length; i++) {
                if (!(childNodes[Number(keys[i])]).hasChildNodes()) {
                    json[fields.text] = childNodes[Number(keys[i])].textContent;
                }
            }
            let attributes$$1 = getAllAttributes(li);
            if (attributes$$1.id) {
                json[fields.id] = attributes$$1.id;
                delete attributes$$1.id;
            }
            else {
                json[fields.id] = generateId();
            }
            if (Object.keys(attributes$$1).length) {
                json[fields.htmlAttributes] = attributes$$1;
            }
            if (anchor) {
                attributes$$1 = getAllAttributes(anchor);
                if (Object.keys(attributes$$1).length) {
                    json[fields.urlAttributes] = attributes$$1;
                }
            }
            if (ul) {
                json[fields.child] = createJsonFromElement(ul, options);
            }
            jsonAr.push(json);
        }
        return jsonAr;
    }
    ListBase.createJsonFromElement = createJsonFromElement;
    function typeofData(data) {
        let match = { typeof: null, item: null };
        for (let i = 0; i < data.length; i++) {
            if (!isNullOrUndefined(data[i])) {
                return match = { typeof: typeof data[i], item: data[i] };
            }
        }
        return match;
    }
    function setAttribute(element, elementAttributes) {
        const attr = {};
        merge(attr, elementAttributes);
        if (attr.class) {
            addClass([element], attr.class.split(' '));
            delete attr.class;
        }
        attributes(element, attr);
    }
    function getAllAttributes(element) {
        const attributes$$1 = {};
        const attr = element.attributes;
        for (let index = 0; index < attr.length; index++) {
            attributes$$1[attr[index].nodeName] = attr[index].nodeValue;
        }
        return attributes$$1;
    }
    /**
     * Created UL element from content template.
     *
     * @param  {string} template - that need to convert and generate li element.
     * @param  {{Object}[]} dataSource - Specifies local JSON data source.
     * @param  {ListBaseOptions} options? - Specifies listbase option for fields.
     */
    function renderContentTemplate(createElement, template, dataSource, 
    // eslint-disable-next-line
    fields, options, componentInstance) {
        cssClass = getModuleClass(defaultListBaseOptions.moduleName);
        const ulElement = createElement('ul', { className: cssClass.ul, attrs: { role: 'presentation' } });
        const curOpt = extend({}, defaultListBaseOptions, options);
        const curFields = extend({}, ListBase.defaultMappedFields, fields);
        // eslint-disable-next-line
        const compiledString = compile(template);
        const liCollection = [];
        let value;
        const id = generateId(); // generate id for drop-down-list option.
        for (let i = 0; i < dataSource.length; i++) {
            let fieldData = getFieldValues(dataSource[i], curFields);
            const curItem = dataSource[i];
            const isHeader = curItem.isHeader;
            if (typeof dataSource[i] === 'string' || typeof dataSource[i] === 'number') {
                value = curItem;
            }
            else {
                value = fieldData[curFields.value];
            }
            if (curOpt.itemCreating && typeof curOpt.itemCreating === 'function') {
                const curData = {
                    dataSource: dataSource,
                    curData: curItem,
                    text: value,
                    options: curOpt,
                    fields: curFields
                };
                curOpt.itemCreating(curData);
            }
            if (curOpt.itemCreating && typeof curOpt.itemCreating === 'function') {
                fieldData = getFieldValues(dataSource[i], curFields);
                if (typeof dataSource[i] === 'string' || typeof dataSource[i] === 'number') {
                    value = curItem;
                }
                else {
                    value = fieldData[curFields.value];
                }
            }
            const li = createElement('li', {
                id: id + '-' + i,
                className: isHeader ? cssClass.group : cssClass.li, attrs: { role: 'presentation' }
            });
            if (isHeader) {
                if (typeof dataSource[i] === 'string' || typeof dataSource[i] === 'number') {
                    li.innerText = curItem;
                }
                else {
                    li.innerText = fieldData[curFields.text];
                }
            }
            else {
                const currentID = isHeader ? curOpt.groupTemplateID : curOpt.templateID;
                if (isHeader) {
                    append(compiledString(curItem, componentInstance, 'headerTemplate', currentID, !!curOpt.isStringTemplate), li);
                }
                else {
                    append(compiledString(curItem, componentInstance, 'template', currentID, !!curOpt.isStringTemplate), li);
                }
                li.setAttribute('data-value', isNullOrUndefined(value) ? 'null' : value);
                li.setAttribute('role', 'option');
            }
            if (curOpt.itemCreated && typeof curOpt.itemCreated === 'function') {
                const curData = {
                    dataSource: dataSource,
                    curData: curItem,
                    text: value,
                    item: li,
                    options: curOpt,
                    fields: curFields
                };
                curOpt.itemCreated(curData);
            }
            liCollection.push(li);
        }
        append(liCollection, ulElement);
        return ulElement;
    }
    ListBase.renderContentTemplate = renderContentTemplate;
    /**
     * Created header items from group template.
     *
     * @param  {string} template - that need to convert and generate li element.
     *
     * @param  {{Object}[]} dataSource - Specifies local JSON data source.
     *
     * @param  {FieldsMapping} fields - Specifies fields for mapping the dataSource.
     *
     * @param  {Element[]} headerItems? - Specifies listbase header items.
     */
    // tslint:disable-next-line
    function renderGroupTemplate(groupTemplate, groupDataSource, fields, 
    // eslint-disable-next-line
    headerItems, options, componentInstance) {
        // eslint-disable-next-line @typescript-eslint/ban-types
        const compiledString = compile(groupTemplate);
        const curFields = extend({}, ListBase.defaultMappedFields, fields);
        const curOpt = extend({}, defaultListBaseOptions, options);
        const category = curFields.groupBy;
        for (const header of headerItems) {
            const headerData = {};
            headerData[category] = header.textContent;
            header.innerHTML = '';
            append(compiledString(headerData, componentInstance, 'groupTemplate', curOpt.groupTemplateID, !!curOpt.isStringTemplate), header);
        }
        return headerItems;
    }
    ListBase.renderGroupTemplate = renderGroupTemplate;
    function generateId() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    ListBase.generateId = generateId;
    function processSubChild(createElement, fieldData, fields, ds, options, element, level) {
        // Get SubList
        const subDS = fieldData[fields.child] || [];
        let hasChildren = fieldData[fields.hasChildren];
        //Create Sub child
        if (subDS.length) {
            hasChildren = true;
            element.classList.add(cssClass.hasChild);
            if (options.processSubChild) {
                const subLi = createListFromJson(createElement, subDS, options, ++level);
                element.appendChild(subLi);
            }
        }
        // Create expand and collapse node
        if (!!options.expandCollapse && hasChildren && !options.template) {
            element.firstElementChild.classList.add(cssClass.iconWrapper);
            // eslint-disable-next-line @typescript-eslint/ban-types
            const expandElement = options.expandIconPosition === 'Left' ? prepend : append;
            expandElement([createElement('div', { className: 'e-icons ' + options.expandIconClass })], element.querySelector('.' + cssClass.textContent));
        }
    }
    function generateSingleLevelLI(createElement, item, fieldData, fields, className, innerElements, grpLI, id, index, options) {
        const curOpt = extend({}, defaultListBaseOptions, options);
        const ariaAttributes = extend({}, defaultAriaAttributes, curOpt.ariaAttributes);
        let text = item;
        let value = item;
        let dataSource;
        if (typeof item !== 'string' && typeof item !== 'number' && typeof item !== 'boolean') {
            dataSource = item;
            text = (typeof fieldData[fields.text] === 'boolean' || typeof fieldData[fields.text] === 'number') ?
                fieldData[fields.text] : (fieldData[fields.text] || '');
            value = fieldData[fields.value];
        }
        let elementID;
        if (!isNullOrUndefined(dataSource) && !isNullOrUndefined(fieldData[fields.id])
            && fieldData[fields.id] !== '') {
            elementID = id;
        }
        else {
            elementID = id + '-' + index;
        }
        const li = createElement('li', {
            className: (grpLI === true ? cssClass.group : cssClass.li) + ' ' + (isNullOrUndefined(className) ? '' : className),
            id: elementID, attrs: (ariaAttributes.groupItemRole !== '' && ariaAttributes.itemRole !== '' ?
                { role: (grpLI === true ? ariaAttributes.groupItemRole : ariaAttributes.itemRole) } : {})
        });
        // eslint-disable-next-line no-prototype-builtins
        if (dataSource && fieldData.hasOwnProperty(fields.enabled) && fieldData[fields.enabled].toString() === 'false') {
            li.classList.add(cssClass.disabled);
        }
        if (grpLI) {
            li.innerText = text;
        }
        else {
            li.setAttribute('data-value', isNullOrUndefined(value) ? 'null' : value);
            li.setAttribute('role', 'option');
            // eslint-disable-next-line no-prototype-builtins
            if (dataSource && fieldData.hasOwnProperty(fields.htmlAttributes) && fieldData[fields.htmlAttributes]) {
                setAttribute(li, fieldData[fields.htmlAttributes]);
            }
            if (innerElements.length && !curOpt.itemNavigable) {
                append(innerElements, li);
            }
            if (dataSource && (fieldData[fields.url] || (fieldData[fields.urlAttributes] &&
                fieldData[fields.urlAttributes].href))) {
                li.appendChild(anchorTag(createElement, dataSource, fields, text, innerElements, curOpt.itemNavigable));
            }
            else {
                if (innerElements.length && curOpt.itemNavigable) {
                    append(innerElements, li);
                }
                li.appendChild(document.createTextNode(text));
            }
        }
        return li;
    }
    function getModuleClass(moduleName) {
        let moduleClass;
        // eslint-disable-next-line
        return moduleClass = {
            li: `e-${moduleName}-item`,
            ul: `e-${moduleName}-parent e-ul`,
            group: `e-${moduleName}-group-item`,
            icon: `e-${moduleName}-icon`,
            text: `e-${moduleName}-text`,
            check: `e-${moduleName}-check`,
            checked: 'e-checked',
            selected: 'e-selected',
            expanded: 'e-expanded',
            textContent: 'e-text-content',
            hasChild: 'e-has-child',
            level: 'e-level',
            url: `e-${moduleName}-url`,
            collapsible: 'e-icon-collapsible',
            disabled: 'e-disabled',
            image: `e-${moduleName}-img`,
            iconWrapper: 'e-icon-wrapper',
            anchorWrap: 'e-anchor-wrap',
            navigable: 'e-navigable'
        };
    }
    function anchorTag(createElement, dataSource, fields, text, innerElements, isFullNavigation) {
        const fieldData = getFieldValues(dataSource, fields);
        const attr = { href: fieldData[fields.url] };
        // eslint-disable-next-line no-prototype-builtins
        if (fieldData.hasOwnProperty(fields.urlAttributes) && fieldData[fields.urlAttributes]) {
            merge(attr, fieldData[fields.urlAttributes]);
            attr.href = fieldData[fields.url] ? fieldData[fields.url] :
                fieldData[fields.urlAttributes].href;
        }
        let anchorTag;
        if (!isFullNavigation) {
            anchorTag = createElement('a', { className: cssClass.text + ' ' + cssClass.url, innerHTML: text });
        }
        else {
            anchorTag = createElement('a', { className: cssClass.text + ' ' + cssClass.url });
            const anchorWrapper = createElement('div', { className: cssClass.anchorWrap });
            if (innerElements && innerElements.length) {
                append(innerElements, anchorWrapper);
            }
            anchorWrapper.appendChild(document.createTextNode(text));
            append([anchorWrapper], anchorTag);
        }
        setAttribute(anchorTag, attr);
        return anchorTag;
    }
    // tslint:disable-next-line
    /* tslint:disable:align */
    function generateLI(createElement, item, fieldData, 
    // eslint-disable-next-line
    fields, className, options, componentInstance) {
        const curOpt = extend({}, defaultListBaseOptions, options);
        const ariaAttributes = extend({}, defaultAriaAttributes, curOpt.ariaAttributes);
        let text = item;
        let uID;
        let grpLI;
        let dataSource;
        if (typeof item !== 'string' && typeof item !== 'number') {
            dataSource = item;
            text = fieldData[fields.text] || '';
            // tslint:disable-next-line
            uID = (isNullOrUndefined(fieldData['_id'])) ? fieldData[fields.id] : fieldData['_id'];
            // eslint-disable-next-line no-prototype-builtins
            grpLI = (item.hasOwnProperty('isHeader') && item.isHeader)
                ? true : false;
        }
        if (options && options.enableHtmlSanitizer) {
            // eslint-disable-next-line no-self-assign
            text = text;
        }
        const li = createElement('li', {
            className: (grpLI === true ? cssClass.group : cssClass.li) + ' ' + (isNullOrUndefined(className) ? '' : className),
            attrs: (ariaAttributes.groupItemRole !== '' && ariaAttributes.itemRole !== '' ?
                { role: (grpLI === true ? ariaAttributes.groupItemRole : ariaAttributes.itemRole) } : {})
        });
        if (!isNullOrUndefined(uID) === true) {
            li.setAttribute('data-uid', uID);
        }
        else {
            li.setAttribute('data-uid', generateId());
        }
        const blazId = 'BlazId';
        if (options && !!options.removeBlazorID
            && typeof item === 'object'
            // eslint-disable-next-line no-prototype-builtins
            && item.hasOwnProperty(blazId)) {
            delete item[blazId];
        }
        if (grpLI && options && options.groupTemplate) {
            // eslint-disable-next-line @typescript-eslint/ban-types
            const compiledString = compile(options.groupTemplate);
            append(compiledString(item, componentInstance, 'groupTemplate', curOpt.groupTemplateID, !!curOpt.isStringTemplate), li);
        }
        else if (!grpLI && options && options.template) {
            // eslint-disable-next-line @typescript-eslint/ban-types
            const compiledString = compile(options.template);
            append(compiledString(item, componentInstance, 'template', curOpt.templateID, !!curOpt.isStringTemplate), li);
        }
        else {
            const innerDiv = createElement('div', {
                className: cssClass.textContent,
                attrs: (ariaAttributes.wrapperRole !== '' ? { role: ariaAttributes.wrapperRole } : {})
            });
            if (dataSource && (fieldData[fields.url] || (fieldData[fields.urlAttributes] &&
                fieldData[fields.urlAttributes].href))) {
                innerDiv.appendChild(anchorTag(createElement, dataSource, fields, text, null, curOpt.itemNavigable));
            }
            else {
                const element = createElement('span', {
                    className: cssClass.text,
                    attrs: (ariaAttributes.itemText !== '' ? { role: ariaAttributes.itemText } : {})
                });
                if (options && options.enableHtmlSanitizer) {
                    element.innerText = text;
                }
                else {
                    element.innerHTML = text;
                }
                innerDiv.appendChild(element);
            }
            li.appendChild(innerDiv);
        }
        return li;
    }
    /**
     * Returns UL element based on the given LI element.
     *
     * @param  {HTMLElement[]} liElement - Specifies array of LI element.
     *
     * @param  {string} className? - Specifies class name that need to be added in UL element.
     *
     * @param  {ListBaseOptions} options? - Specifies ListBase options.
     */
    function generateUL(createElement, liElement, className, options) {
        const curOpt = extend({}, defaultListBaseOptions, options);
        const ariaAttributes = extend({}, defaultAriaAttributes, curOpt.ariaAttributes);
        cssClass = getModuleClass(curOpt.moduleName);
        const ulElement = createElement('ul', {
            className: cssClass.ul + ' ' + (isNullOrUndefined(className) ? '' : className),
            attrs: (ariaAttributes.listRole !== '' ? { role: ariaAttributes.listRole } : {})
        });
        append(liElement, ulElement);
        return ulElement;
    }
    ListBase.generateUL = generateUL;
    /**
     * Returns LI element with additional DIV tag based on the given LI element.
     *
     * @param  {liElement} liElement - Specifies LI element.
     *
     * @param  {string} className? - Specifies class name that need to be added in created DIV element.
     *
     * @param  {ListBaseOptions} options? - Specifies ListBase options.
     */
    function generateIcon(createElement, liElement, className, options) {
        const curOpt = extend({}, defaultListBaseOptions, options);
        cssClass = getModuleClass(curOpt.moduleName);
        // eslint-disable-next-line @typescript-eslint/ban-types
        const expandElement = curOpt.expandIconPosition === 'Left' ? prepend : append;
        expandElement([createElement('div', {
                className: 'e-icons ' + curOpt.expandIconClass + ' ' +
                    (isNullOrUndefined(className) ? '' : className)
            })], liElement.querySelector('.' + cssClass.textContent));
        return liElement;
    }
    ListBase.generateIcon = generateIcon;
})(ListBase || (ListBase = {}));
/**
 * Used to get dataSource item from complex data using fields.
 *
 * @param {Object} dataSource - Specifies an  JSON or String data.
 *
 * @param {FieldsMapping} fields - Fields that are mapped from the dataSource.
 */
function getFieldValues(dataItem, fields) {
    const fieldData = {};
    if (isNullOrUndefined(dataItem) || typeof (dataItem) === 'string' || typeof (dataItem) === 'number'
        || !isNullOrUndefined(dataItem.isHeader)) {
        return dataItem;
    }
    else {
        for (const field of Object.keys(fields)) {
            const dataField = fields[field];
            const value = !isNullOrUndefined(dataField) &&
                typeof (dataField) === 'string' ? getValue(dataField, dataItem) : undefined;
            if (!isNullOrUndefined(value)) {
                fieldData[dataField] = value;
            }
        }
    }
    return fieldData;
}

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Effect Configuration Effect[] =  [fromViewBackward,fromViewForward,toViewBackward,toviewForward];
const effectsConfig = {
    'None': [],
    'SlideLeft': ['SlideRightOut', 'SlideLeftOut', 'SlideLeftIn', 'SlideRightIn'],
    'SlideDown': ['SlideTopOut', 'SlideBottomOut', 'SlideBottomIn', 'SlideTopIn'],
    'Zoom': ['FadeOut', 'FadeZoomOut', 'FadeZoomIn', 'FadeIn'],
    'Fade': ['FadeOut', 'FadeOut', 'FadeIn', 'FadeIn']
};
const effectsRTLConfig = {
    'None': [],
    'SlideLeft': ['SlideLeftOut', 'SlideRightOut', 'SlideRightIn', 'SlideLeftIn'],
    'SlideDown': ['SlideBottomOut', 'SlideTopOut', 'SlideTopIn', 'SlideBottomIn'],
    'Zoom': ['FadeZoomOut', 'FadeOut', 'FadeIn', 'FadeZoomIn'],
    'Fade': ['FadeOut', 'FadeOut', 'FadeIn', 'FadeIn']
};
// don't use space in classnames.
const classNames = {
    root: 'e-listview',
    hover: 'e-hover',
    selected: 'e-active',
    focused: 'e-focused',
    parentItem: 'e-list-parent',
    listItem: 'e-list-item',
    listIcon: 'e-list-icon',
    textContent: 'e-text-content',
    listItemText: 'e-list-text',
    groupListItem: 'e-list-group-item',
    hasChild: 'e-has-child',
    view: 'e-view',
    header: 'e-list-header',
    headerText: 'e-headertext',
    headerTemplateText: 'e-headertemplate-text',
    text: 'e-text',
    disable: 'e-disabled',
    content: 'e-content',
    icon: 'e-icons',
    backIcon: 'e-icon-back',
    checkboxWrapper: 'e-checkbox-wrapper',
    checkbox: 'e-checkbox',
    checked: 'e-check',
    checklist: 'e-checklist',
    checkboxIcon: 'e-frame',
    checkboxRight: 'e-checkbox-right',
    checkboxLeft: 'e-checkbox-left',
    listviewCheckbox: 'e-listview-checkbox',
    itemCheckList: 'e-checklist',
    virtualElementContainer: 'e-list-virtualcontainer'
};
const LISTVIEW_TEMPLATE_PROPERTY = 'Template';
const LISTVIEW_GROUPTEMPLATE_PROPERTY = 'GroupTemplate';
const LISTVIEW_HEADERTEMPLATE_PROPERTY = 'HeaderTemplate';
const swipeVelocity = 0.5;
/**
 * Represents the field settings of the ListView.
 */
class FieldSettings extends ChildProperty {
}
__decorate([
    Property('id')
], FieldSettings.prototype, "id", void 0);
__decorate([
    Property('text')
], FieldSettings.prototype, "text", void 0);
__decorate([
    Property('isChecked')
], FieldSettings.prototype, "isChecked", void 0);
__decorate([
    Property('isVisible')
], FieldSettings.prototype, "isVisible", void 0);
__decorate([
    Property('enabled')
], FieldSettings.prototype, "enabled", void 0);
__decorate([
    Property('iconCss')
], FieldSettings.prototype, "iconCss", void 0);
__decorate([
    Property('child')
], FieldSettings.prototype, "child", void 0);
__decorate([
    Property('tooltip')
], FieldSettings.prototype, "tooltip", void 0);
__decorate([
    Property('groupBy')
], FieldSettings.prototype, "groupBy", void 0);
__decorate([
    Property('text')
], FieldSettings.prototype, "sortBy", void 0);
__decorate([
    Property('htmlAttributes')
], FieldSettings.prototype, "htmlAttributes", void 0);
__decorate([
    Property('tableName')
], FieldSettings.prototype, "tableName", void 0);
/**
 * Represents the EJ2 ListView control.
 * ```html
 * <div id="listview">
 * <ul>
 * <li>Favorite</li>
 * <li>Documents</li>
 * <li>Downloads</li>
 * </ul>
 * </div>
 * ```
 * ```typescript
 *   var listviewObject = new ListView({});
 *   listviewObject.appendTo("#listview");
 * ```
 */
let ListView = class ListView extends Component {
    /**
     * Constructor for creating the widget
     *
     * @param options
     *
     * @param element
     */
    constructor(options, element) {
        super(options, element);
        this.itemReRender = false;
        this.previousSelectedItems = [];
        this.hiddenItems = [];
        this.enabledItems = [];
        this.disabledItems = [];
    }
    /**
     * @param newProp
     *
     * @param oldProp
     *
     * @private
     */
    onPropertyChanged(newProp, oldProp) {
        for (const prop of Object.keys(newProp)) {
            switch (prop) {
                case 'htmlAttributes':
                    this.setHTMLAttribute();
                    break;
                case 'cssClass':
                    this.setCSSClass(oldProp.cssClass);
                    break;
                case 'enable':
                    this.setEnable();
                    break;
                case 'width':
                case 'height':
                    this.setSize();
                    break;
                case 'enableRtl':
                    this.setEnableRTL();
                    break;
                case 'fields':
                    // eslint-disable-next-line
                    this.listBaseOption.fields = this.fields.properties;
                    if (this.enableVirtualization) {
                        if (!(this.isServerRendered && isBlazor())) {
                            this.virtualizationModule.reRenderUiVirtualization();
                        }
                    }
                    else {
                        if (isBlazor() && this.isServerRendered && !this.enableVirtualization) {
                            this.itemReRender = true;
                        }
                        this.reRender();
                    }
                    break;
                case 'headerTitle':
                    if (!this.curDSLevel.length) {
                        this.header(this.headerTitle, false, 'header');
                    }
                    break;
                case 'query':
                    if (this.enableVirtualization) {
                        if (!(isBlazor() && this.isServerRendered)) {
                            this.virtualizationModule.reRenderUiVirtualization();
                        }
                    }
                    else {
                        if (isBlazor() && this.isServerRendered && !this.enableVirtualization) {
                            this.itemReRender = true;
                        }
                        this.reRender();
                    }
                    break;
                case 'showHeader':
                    this.header(this.headerTitle, false, 'header');
                    break;
                case 'enableVirtualization':
                    if (!isNullOrUndefined(this.contentContainer)) {
                        detach(this.contentContainer);
                    }
                    this.refresh();
                    break;
                case 'showCheckBox':
                case 'checkBoxPosition':
                    if (!isBlazor() || !this.isServerRendered) {
                        if (this.enableVirtualization) {
                            this.virtualizationModule.reRenderUiVirtualization();
                        }
                        else {
                            this.setCheckbox();
                        }
                    }
                    break;
                case 'dataSource':
                    if (this.enableVirtualization) {
                        if (!(this.isServerRendered && isBlazor())) {
                            this.virtualizationModule.reRenderUiVirtualization();
                        }
                    }
                    else {
                        if (isBlazor() && this.isServerRendered && !this.enableVirtualization) {
                            this.itemReRender = true;
                        }
                        this.reRender();
                    }
                    break;
                case 'sortOrder':
                case 'template':
                    if (!this.enableVirtualization) {
                        if (!(this.isServerRendered && isBlazor())) {
                            this.refresh();
                        }
                    }
                    break;
                case 'showIcon':
                    if (isBlazor() && this.isServerRendered) {
                        // eslint-disable-next-line
                        this.interopAdaptor.invokeMethodAsync('ItemSorting');
                    }
                    else {
                        if (this.enableVirtualization) {
                            this.virtualizationModule.reRenderUiVirtualization();
                        }
                        else {
                            this.listBaseOption.showIcon = this.showIcon;
                            this.curViewDS = this.getSubDS();
                            this.resetCurrentList();
                        }
                    }
                    break;
                default:
                    break;
            }
        }
    }
    // Model Changes
    setHTMLAttribute() {
        if (Object.keys(this.htmlAttributes).length) {
            attributes(this.element, this.htmlAttributes);
        }
    }
    setCSSClass(oldCSSClass) {
        if (this.cssClass) {
            addClass([this.element], this.cssClass.split(' ').filter((css) => css));
        }
        if (oldCSSClass) {
            removeClass([this.element], oldCSSClass.split(' ').filter((css) => css));
        }
    }
    setSize() {
        this.element.style.height = formatUnit(this.height);
        this.element.style.width = formatUnit(this.width);
        this.isWindow = this.element.clientHeight ? false : true;
    }
    setEnable() {
        this.enableElement(this.element, this.enable);
    }
    setEnableRTL() {
        if (this.enableRtl) {
            this.element.classList.add('e-rtl');
        }
        else {
            this.element.classList.remove('e-rtl');
        }
    }
    enableElement(element, isEnabled) {
        if (isEnabled) {
            element.classList.remove(classNames.disable);
        }
        else {
            element.classList.add(classNames.disable);
        }
    }
    // Support Component Functions
    header(text, showBack, prop) {
        if (isBlazor() && this.isServerRendered) {
            const args = { HeaderText: text, BackButton: showBack };
            // eslint-disable-next-line
            this.interopAdaptor.invokeMethodAsync('HeaderTitle', args);
        }
        else {
            if (this.headerEle === undefined && this.showHeader) {
                if (this.enableHtmlSanitizer) {
                    this.setProperties({ headerTitle: SanitizeHtmlHelper.sanitize(this.headerTitle) }, true);
                }
                this.headerEle = this.createElement('div', { className: classNames.header });
                const innerHeaderEle = this.createElement('span', { className: classNames.headerText, innerHTML: this.headerTitle });
                const textEle = this.createElement('div', { className: classNames.text, innerHTML: innerHeaderEle.outerHTML });
                const hedBackButton = this.createElement('div', {
                    className: classNames.icon + ' ' + classNames.backIcon + ' e-but-back',
                    attrs: { style: 'display:none;' }
                });
                this.headerEle.appendChild(hedBackButton);
                this.headerEle.appendChild(textEle);
                if (this.headerTemplate) {
                    // eslint-disable-next-line
                    const compiledString = compile(this.headerTemplate);
                    const headerTemplateEle = this.createElement('div', { className: classNames.headerTemplateText });
                    // eslint-disable-next-line
                    const compiledElement = compiledString({}, this, prop, this.LISTVIEW_HEADERTEMPLATE_ID, null, null, this.headerEle);
                    if (compiledElement) {
                        append(compiledElement, headerTemplateEle);
                    }
                    append([headerTemplateEle], this.headerEle);
                    this.updateBlazorTemplates(false, true, true);
                    // eslint-disable-next-line
                    if (this.isReact) {
                        this.renderReactTemplates();
                    }
                }
                if (this.headerTemplate && this.headerTitle) {
                    textEle.classList.add('header');
                }
                this.element.classList.add('e-has-header');
                prepend([this.headerEle], this.element);
            }
            else if (this.headerEle) {
                if (this.showHeader) {
                    this.headerEle.style.display = '';
                    const textEle = this.headerEle.querySelector('.' + classNames.headerText);
                    const hedBackButton = this.headerEle.querySelector('.' + classNames.backIcon);
                    if (this.enableHtmlSanitizer) {
                        text = SanitizeHtmlHelper.sanitize(text);
                    }
                    textEle.innerHTML = text;
                    if (this.headerTemplate && showBack) {
                        textEle.parentElement.classList.remove('header');
                        this.headerEle.querySelector('.' + classNames.headerTemplateText).classList.add('nested-header');
                    }
                    if (this.headerTemplate && !showBack) {
                        textEle.parentElement.classList.add('header');
                        this.headerEle.querySelector('.' + classNames.headerTemplateText).classList.remove('nested-header');
                        this.headerEle.querySelector('.' + classNames.headerTemplateText).classList.add('header');
                    }
                    if (showBack === true) {
                        hedBackButton.style.display = '';
                    }
                    else {
                        hedBackButton.style.display = 'none';
                    }
                }
                else {
                    this.headerEle.style.display = 'none';
                }
            }
        }
    }
    // Animation Related Functions
    switchView(fromView, toView, reverse) {
        if (fromView && toView) {
            const fPos = fromView.style.position;
            const overflow = (this.element.style.overflow !== 'hidden') ? this.element.style.overflow : '';
            fromView.style.position = 'absolute';
            fromView.classList.add('e-view');
            let anim;
            let duration = this.animation.duration;
            if (this.animation.effect) {
                anim = (this.enableRtl ? effectsRTLConfig[this.animation.effect] : effectsConfig[this.animation.effect]);
            }
            else {
                const slideLeft = 'SlideLeft';
                anim = effectsConfig[slideLeft];
                reverse = this.enableRtl;
                duration = 0;
            }
            this.element.style.overflow = 'hidden';
            this.aniObj.animate(fromView, {
                name: (reverse === true ? anim[0] : anim[1]),
                duration: duration,
                timingFunction: this.animation.easing,
                // eslint-disable-next-line
                end: (model) => {
                    fromView.style.display = 'none';
                    this.element.style.overflow = overflow;
                    fromView.style.position = fPos;
                    fromView.classList.remove('e-view');
                }
            });
            toView.style.display = '';
            this.aniObj.animate(toView, {
                name: (reverse === true ? anim[2] : anim[3]),
                duration: duration,
                timingFunction: this.animation.easing,
                end: () => {
                    this.trigger('actionComplete');
                }
            });
            this.curUL = toView;
        }
    }
    preRender() {
        if (this.template) {
            try {
                if (document.querySelectorAll(this.template).length) {
                    this.template = document.querySelector(this.template).innerHTML.trim();
                }
            }
            catch (e) {
                compile(this.template);
                // eslint-disable-next-line
                if (this.isReact) {
                    this.renderReactTemplates();
                }
            }
        }
        this.listBaseOption = {
            template: this.template,
            headerTemplate: this.headerTemplate,
            groupTemplate: this.groupTemplate, expandCollapse: true, listClass: '',
            ariaAttributes: {
                itemRole: 'option', listRole: 'presentation', itemText: '',
                groupItemRole: 'group', wrapperRole: 'presentation'
            },
            // eslint-disable-next-line
            fields: (this.fields.properties),
            sortOrder: this.sortOrder,
            showIcon: this.showIcon,
            itemCreated: this.renderCheckbox.bind(this),
            templateID: `${this.element.id}${LISTVIEW_TEMPLATE_PROPERTY}`,
            groupTemplateID: `${this.element.id}${LISTVIEW_GROUPTEMPLATE_PROPERTY}`,
            enableHtmlSanitizer: this.enableHtmlSanitizer,
            removeBlazorID: true
        };
        this.initialization();
    }
    updateLiElementHeight() {
        const liContainer = this.element.querySelector('.' + classNames.virtualElementContainer);
        if (liContainer.children[0]) {
            this.liElementHeight = liContainer.children[0].getBoundingClientRect().height;
            // eslint-disable-next-line
            this.interopAdaptor.invokeMethodAsync('LiElementHeight', this.liElementHeight);
        }
    }
    initialization() {
        if (isBlazor() && this.isServerRendered && this.enableVirtualization) {
            const ulContainer = this.element.querySelector('.' + classNames.virtualElementContainer);
            if (ulContainer !== null) {
                if (this.height === '') {
                    // eslint-disable-next-line
                    this.interopAdaptor.invokeMethodAsync('SetComponentHeight', window.innerHeight);
                    this.isWindow = true;
                    ulContainer.scrollIntoView();
                }
                if (this.height.toString().indexOf('%') !== -1) {
                    // eslint-disable-next-line
                    this.interopAdaptor.invokeMethodAsync('SetContainerHeight', this.element.getBoundingClientRect().height.toString());
                }
                if (ulContainer.children[0]) {
                    this.liElementHeight = ulContainer.children[0].getBoundingClientRect().height;
                    // eslint-disable-next-line
                    this.interopAdaptor.invokeMethodAsync('LiElementHeight', this.liElementHeight);
                }
            }
        }
        this.curDSLevel = [];
        this.animateOptions = {};
        this.curViewDS = [];
        this.currentLiElements = [];
        this.isNestedList = false;
        this.selectedData = [];
        this.selectedId = [];
        this.LISTVIEW_TEMPLATE_ID = `${this.element.id}${LISTVIEW_TEMPLATE_PROPERTY}`;
        this.LISTVIEW_GROUPTEMPLATE_ID = `${this.element.id}${LISTVIEW_GROUPTEMPLATE_PROPERTY}`;
        this.LISTVIEW_HEADERTEMPLATE_ID = `${this.element.id}${LISTVIEW_HEADERTEMPLATE_PROPERTY}`;
        this.aniObj = new Animation(this.animateOptions);
        this.removeElement(this.curUL);
        this.removeElement(this.ulElement);
        this.removeElement(this.headerEle);
        this.removeElement(this.contentContainer);
        // eslint-disable-next-line
        if (this.isReact) {
            this.clearTemplate();
        }
        this.curUL = this.ulElement = this.liCollection = this.headerEle = this.contentContainer = undefined;
    }
    renderCheckbox(args) {
        if (args.item.classList.contains(classNames.hasChild)) {
            this.isNestedList = true;
        }
        if (this.showCheckBox && this.isValidLI(args.item)) {
            let checkboxElement;
            let fieldData;
            // eslint-disable-next-line prefer-const
            checkboxElement = createCheckBox(this.createElement, false, {
                checked: false, enableRtl: this.enableRtl,
                cssClass: classNames.listviewCheckbox
            });
            checkboxElement.setAttribute('role', 'checkbox');
            const frameElement = checkboxElement.querySelector('.' + classNames.checkboxIcon);
            args.item.classList.add(classNames.itemCheckList);
            args.item.firstElementChild.classList.add(classNames.checkbox);
            if (typeof this.dataSource[0] !== 'string' && typeof this.dataSource[0] !== 'number') {
                fieldData = getFieldValues(args.curData, this.listBaseOption.fields);
                if (fieldData[this.listBaseOption.fields.isChecked]) {
                    this.checkInternally(args, checkboxElement);
                }
            }
            else if (((typeof this.dataSource[0] === 'string' ||
                typeof this.dataSource[0] === 'number') && this.selectedData.indexOf(args.text) !== -1)) {
                this.checkInternally(args, checkboxElement);
            }
            checkboxElement.setAttribute('aria-checked', frameElement.classList.contains(classNames.checked) ? 'true' : 'false');
            if (this.checkBoxPosition === 'Left') {
                checkboxElement.classList.add(classNames.checkboxLeft);
                args.item.firstElementChild.classList.add(classNames.checkboxLeft);
                args.item.firstElementChild.insertBefore(checkboxElement, args.item.firstElementChild.childNodes[0]);
            }
            else {
                checkboxElement.classList.add(classNames.checkboxRight);
                args.item.firstElementChild.classList.add(classNames.checkboxRight);
                args.item.firstElementChild.appendChild(checkboxElement);
            }
            this.currentLiElements.push(args.item);
            if (this.checkBoxPosition === 'Left') {
                this.virtualCheckBox = args.item.firstElementChild.children[0];
            }
            else {
                this.virtualCheckBox = args.item.firstElementChild.lastElementChild;
            }
        }
    }
    checkInternally(args, checkboxElement) {
        args.item.classList.add(classNames.selected);
        args.item.setAttribute('aria-selected', 'true');
        checkboxElement.querySelector('.' + classNames.checkboxIcon).classList.add(classNames.checked);
        checkboxElement.setAttribute('aria-checked', 'true');
    }
    /**
     * Checks the specific list item by passing the unchecked fields as an argument to this method.
     *
     * @param  {Fields | HTMLElement | Element} item - It accepts Fields or HTML list element as an argument.
     */
    checkItem(item) {
        this.toggleCheckBase(item, true);
    }
    toggleCheckBase(item, checked) {
        if (this.showCheckBox) {
            let liElement = item;
            if (item instanceof Object && item.constructor !== HTMLLIElement) {
                liElement = this.getLiFromObjOrElement(item);
            }
            if (!isNullOrUndefined(liElement)) {
                const checkboxIcon = liElement.querySelector('.' + classNames.checkboxIcon);
                if (checked === true) {
                    liElement.classList.add(classNames.selected);
                }
                else {
                    liElement.classList.remove(classNames.selected);
                }
                liElement.setAttribute('aria-selected', checked ? 'true' : 'false');
                if (checked === true) {
                    checkboxIcon.classList.add(classNames.checked);
                }
                else {
                    checkboxIcon.classList.remove(classNames.checked);
                }
                checkboxIcon.parentElement.setAttribute('aria-checked', checked ? 'true' : 'false');
            }
            this.setSelectedItemData(liElement);
        }
    }
    /**
     * Uncheck the specific list item by passing the checked fields as an argument to this method.
     *
     * @param  {Fields | HTMLElement | Element} item - It accepts Fields or HTML list element as an argument.
     */
    uncheckItem(item) {
        this.toggleCheckBase(item, false);
    }
    /**
     * Checks all the unchecked items in the ListView.
     */
    checkAllItems() {
        this.toggleAllCheckBase(true);
    }
    /**
     * Uncheck all the checked items in ListView.
     */
    uncheckAllItems() {
        this.toggleAllCheckBase(false);
    }
    toggleAllCheckBase(checked) {
        if (this.showCheckBox) {
            for (let i = 0; i < this.liCollection.length; i++) {
                const checkIcon = this.liCollection[i].querySelector('.' + classNames.checkboxIcon);
                if (checkIcon) {
                    if (checked) {
                        if (!checkIcon.classList.contains(classNames.checked)) {
                            this.checkItem(this.liCollection[i]);
                        }
                    }
                    else {
                        if (checkIcon.classList.contains(classNames.checked)) {
                            this.uncheckItem(this.liCollection[i]);
                        }
                    }
                }
            }
            if (this.enableVirtualization) {
                this.virtualizationModule.checkedItem(checked);
            }
        }
    }
    setCheckbox() {
        if (this.showCheckBox) {
            const liCollection = Array.prototype.slice.call(this.element.querySelectorAll('.' + classNames.listItem));
            const args = {
                item: undefined, curData: undefined, dataSource: undefined, fields: undefined,
                options: undefined, text: ''
            };
            for (let i = 0; i < liCollection.length; i++) {
                const element = liCollection[i];
                args.item = element;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                args.curData = this.getItemData(element);
                if (element.querySelector('.' + classNames.checkboxWrapper)) {
                    this.removeElement(element.querySelector('.' + classNames.checkboxWrapper));
                }
                this.renderCheckbox(args);
                if (args.item.classList.contains(classNames.selected)) {
                    this.checkInternally(args, args.item.querySelector('.' + classNames.checkboxWrapper));
                }
            }
        }
        else {
            const liCollection = Array.prototype.slice.call(this.element.querySelectorAll('.' + classNames.itemCheckList));
            for (let i = 0; i < liCollection.length; i++) {
                const element = liCollection[i];
                element.classList.remove(classNames.selected);
                element.firstElementChild.classList.remove(classNames.checkbox);
                this.removeElement(element.querySelector('.' + classNames.checkboxWrapper));
            }
            if (this.selectedItems) {
                this.selectedItems.item.classList.add(classNames.selected);
            }
        }
    }
    /**
     * Refresh the height of the list item only on enabling the virtualization property.
     */
    refreshItemHeight() {
        if (this.virtualizationModule) {
            this.virtualizationModule.refreshItemHeight();
        }
    }
    clickHandler(e) {
        const target = e.target;
        const classList = target.classList;
        let closestElement;
        if (classList.contains(classNames.backIcon) || classList.contains(classNames.headerText)) {
            if (this.showCheckBox && this.curDSLevel[this.curDSLevel.length - 1]) {
                this.uncheckAllItems();
            }
            this.back();
        }
        else {
            let li = closest(target.parentNode, '.' + classNames.listItem);
            if (li === null) {
                li = target;
            }
            this.removeFocus();
            if (this.enable && this.showCheckBox && this.isValidLI(li)) {
                if (e.target.classList.contains(classNames.checkboxIcon)) {
                    li.classList.add(classNames.focused);
                    if (isNullOrUndefined(li.querySelector('.' + classNames.checked))) {
                        const args = {
                            curData: undefined, dataSource: undefined, fields: undefined, options: undefined,
                            text: undefined, item: li
                        };
                        this.checkInternally(args, args.item.querySelector('.' + classNames.checkboxWrapper));
                    }
                    else {
                        this.uncheckItem(li);
                        li.classList.add(classNames.focused);
                    }
                    if (this.enableVirtualization) {
                        this.virtualizationModule.setCheckboxLI(li, e);
                    }
                    if (e) {
                        const eventArgs = this.selectEventData(li, e);
                        const checkIcon = li.querySelector('.' + classNames.checkboxIcon);
                        merge(eventArgs, { isChecked: checkIcon.classList.contains(classNames.checked) });
                        this.trigger('select', eventArgs);
                    }
                }
                else if (li.classList.contains(classNames.hasChild)) {
                    this.removeHover();
                    this.removeSelect();
                    this.removeSelect(li);
                    this.setSelectLI(li, e);
                    li.classList.remove(classNames.selected);
                }
                else {
                    this.setCheckboxLI(li, e);
                }
            }
            else {
                this.setSelectLI(li, e);
            }
            closestElement = closest(e.target, 'li');
            if (!isNullOrUndefined(closestElement)) {
                if (closestElement.classList.contains('e-has-child') &&
                    !e.target.parentElement.classList.contains('e-listview-checkbox')) {
                    closestElement.classList.add(classNames.disable);
                }
            }
        }
        if (isBlazor() && this.isServerRendered && this.enableVirtualization) {
            const ulElementContainer = this.element.querySelector('.' + classNames.virtualElementContainer);
            if (ulElementContainer.querySelector('.e-active')) {
                // eslint-disable-next-line
                const selectedElements = ulElementContainer.querySelectorAll('.e-active');
                if (this.showCheckBox) {
                    for (let i = 0; i < selectedElements.length; i++) {
                        // eslint-disable-next-line
                        if (!this.previousSelectedItems.includes(selectedElements[i].getAttribute('data-uid'))) {
                            this.previousSelectedItems.push(selectedElements[i].getAttribute('data-uid'));
                        }
                    }
                }
                else {
                    this.previousSelectedItems[0] = (ulElementContainer.querySelector('.e-active').getAttribute('data-uid'));
                }
            }
            if (ulElementContainer.querySelector('.e-focused')) {
                // eslint-disable-next-line
                const focusElement = ulElementContainer.querySelector('.e-focused');
                if (!focusElement.classList.contains('e-active')) {
                    const focusElementId = focusElement.getAttribute('data-uid');
                    // eslint-disable-next-line
                    if (this.previousSelectedItems.includes(focusElementId)) {
                        const selectedElement1 = this.previousSelectedItems.slice(0, this.previousSelectedItems.indexOf(focusElementId));
                        const selectedElement2 = this.previousSelectedItems.
                            slice(this.previousSelectedItems.indexOf(focusElementId) + 1, this.previousSelectedItems.length);
                        this.previousSelectedItems = selectedElement1.concat(selectedElement2);
                    }
                }
            }
        }
    }
    removeElement(element) {
        return element && element.parentNode && element.parentNode.removeChild(element);
    }
    hoverHandler(e) {
        const curLi = closest(e.target.parentNode, '.' + classNames.listItem);
        this.setHoverLI(curLi);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    leaveHandler(e) {
        this.removeHover();
    }
    homeKeyHandler(e, end) {
        if (Object.keys(this.dataSource).length && this.curUL) {
            if (this.selectedItems) {
                (this.selectedItems.item).setAttribute('aria-selected', 'false');
            }
            const li = this.curUL.querySelectorAll('.' + classNames.listItem);
            const focusedElement = this.curUL.querySelector('.' + classNames.focused) ||
                this.curUL.querySelector('.' + classNames.selected);
            if (focusedElement) {
                focusedElement.classList.remove(classNames.focused);
                if (!this.showCheckBox) {
                    focusedElement.classList.remove(classNames.selected);
                }
            }
            const index = !end ? 0 : li.length - 1;
            if (li[index].classList.contains(classNames.hasChild) || this.showCheckBox) {
                li[index].classList.add(classNames.focused);
            }
            else {
                this.setSelectLI(li[index], e);
            }
            if (li[index]) {
                this.element.setAttribute('aria-activedescendant', li[index].id.toString());
            }
            else {
                this.element.removeAttribute('aria-activedescendant');
            }
        }
    }
    onArrowKeyDown(e, prev) {
        let siblingLI;
        let li;
        const hasChild = !isNullOrUndefined(this.curUL.querySelector('.' + classNames.hasChild)) ? true : false;
        if (hasChild || this.showCheckBox) {
            li = this.curUL.querySelector('.' + classNames.focused) || this.curUL.querySelector('.' + classNames.selected);
            siblingLI = ListBase.getSiblingLI(this.curUL.querySelectorAll('.' + classNames.listItem), li, prev);
            if (!isNullOrUndefined(siblingLI)) {
                if (li) {
                    li.classList.remove(classNames.focused);
                    if (!this.showCheckBox) {
                        li.classList.remove(classNames.selected);
                    }
                }
                if (siblingLI.classList.contains(classNames.hasChild) || this.showCheckBox) {
                    siblingLI.classList.add(classNames.focused);
                }
                else {
                    this.setSelectLI(siblingLI, e);
                }
            }
        }
        else {
            li = this.curUL.querySelector('.' + classNames.selected);
            siblingLI = ListBase.getSiblingLI(this.curUL.querySelectorAll('.' + classNames.listItem), li, prev);
            this.setSelectLI(siblingLI, e);
        }
        if (siblingLI) {
            this.element.setAttribute('aria-activedescendant', siblingLI.id.toString());
        }
        else {
            this.element.removeAttribute('aria-activedescendant');
        }
        return siblingLI;
    }
    arrowKeyHandler(e, prev) {
        e.preventDefault();
        if (Object.keys(this.dataSource).length && this.curUL) {
            const siblingLI = this.onArrowKeyDown(e, prev);
            const elementTop = this.element.getBoundingClientRect().top;
            const elementHeight = this.element.getBoundingClientRect().height;
            const firstItemBounds = this.curUL.querySelector('.' + classNames.listItem).getBoundingClientRect();
            let heightDiff;
            let groupItemBounds;
            if (this.fields.groupBy) {
                groupItemBounds = this.curUL.querySelector('.' + classNames.groupListItem).getBoundingClientRect();
            }
            if (siblingLI) {
                const siblingTop = siblingLI.getBoundingClientRect().top;
                const siblingHeight = siblingLI.getBoundingClientRect().height;
                if (!prev) {
                    const height = this.isWindow ? window.innerHeight : elementHeight;
                    heightDiff = this.isWindow ? (siblingTop + siblingHeight) :
                        ((siblingTop - elementTop) + siblingHeight);
                    if (heightDiff > height) {
                        if (this.isWindow === true) {
                            window.scroll(0, pageYOffset + (heightDiff - height));
                        }
                        else {
                            this.element.scrollTop = this.element.scrollTop + (heightDiff - height);
                        }
                    }
                }
                else {
                    heightDiff = this.isWindow ? siblingTop : (siblingTop - elementTop);
                    if (heightDiff < 0) {
                        if (this.isWindow === true) {
                            window.scroll(0, pageYOffset + heightDiff);
                        }
                        else {
                            this.element.scrollTop = this.element.scrollTop + heightDiff;
                        }
                    }
                }
            }
            else if (this.enableVirtualization && prev && this.virtualizationModule.uiFirstIndex) {
                this.onUIScrolled = () => {
                    this.onArrowKeyDown(e, prev);
                    this.onUIScrolled = undefined;
                };
                heightDiff = this.virtualizationModule.listItemHeight;
                if (this.isWindow === true) {
                    window.scroll(0, pageYOffset - heightDiff);
                }
                else {
                    this.element.scrollTop = this.element.scrollTop - heightDiff;
                }
            }
            else if (prev) {
                if (this.showHeader && this.headerEle) {
                    const topHeight = groupItemBounds ? groupItemBounds.top : firstItemBounds.top;
                    const headerBounds = this.headerEle.getBoundingClientRect();
                    heightDiff = headerBounds.top < 0 ? (headerBounds.height - topHeight) : 0;
                    if (this.isWindow === true) {
                        window.scroll(0, pageYOffset - heightDiff);
                    }
                    else {
                        this.element.scrollTop = 0;
                    }
                }
                else if (this.fields.groupBy) {
                    heightDiff = this.isWindow ? (groupItemBounds.top < 0 ? groupItemBounds.top : 0) :
                        (elementTop - firstItemBounds.top) + groupItemBounds.height;
                    if (this.isWindow === true) {
                        window.scroll(0, pageYOffset + heightDiff);
                    }
                    else {
                        this.element.scrollTop = this.element.scrollTop - heightDiff;
                    }
                }
            }
        }
    }
    enterKeyHandler(e) {
        if (Object.keys(this.dataSource).length && this.curUL) {
            const hasChild = !isNullOrUndefined(this.curUL.querySelector('.' + classNames.hasChild)) ? true : false;
            const li = this.curUL.querySelector('.' + classNames.focused);
            if (hasChild && li) {
                li.classList.remove(classNames.focused);
                if (this.showCheckBox) {
                    this.removeSelect();
                    this.removeSelect(li);
                    this.removeHover();
                }
                this.setSelectLI(li, e);
            }
        }
    }
    spaceKeyHandler() {
        if (this.enable && this.showCheckBox && Object.keys(this.dataSource).length && this.curUL) {
            const li = this.curUL.querySelector('.' + classNames.focused);
            if (!isNullOrUndefined(li) && isNullOrUndefined(li.querySelector('.' + classNames.checked))) {
                const args = {
                    curData: undefined, dataSource: undefined, fields: undefined, options: undefined,
                    text: undefined, item: li
                };
                this.checkInternally(args, args.item.querySelector('.' + classNames.checkboxWrapper));
            }
            else {
                this.uncheckItem(li);
            }
        }
    }
    keyActionHandler(e) {
        switch (e.keyCode) {
            case 36:
                this.homeKeyHandler(e);
                break;
            case 35:
                this.homeKeyHandler(e, true);
                break;
            case 40:
                this.arrowKeyHandler(e);
                break;
            case 38:
                this.arrowKeyHandler(e, true);
                break;
            case 13:
                this.enterKeyHandler(e);
                break;
            case 8:
                if (this.showCheckBox && this.curDSLevel[this.curDSLevel.length - 1]) {
                    this.uncheckAllItems();
                }
                this.back();
                break;
            case 32:
                this.spaceKeyHandler();
                break;
        }
    }
    swipeActionHandler(e) {
        if (e.swipeDirection === 'Right' && e.velocity > swipeVelocity && e.originalEvent.type === 'touchend') {
            if (this.showCheckBox && this.curDSLevel[this.curDSLevel.length - 1]) {
                this.uncheckAllItems();
            }
            this.back();
        }
    }
    focusout() {
        if (Object.keys(this.dataSource).length && this.curUL) {
            const focusedElement = this.curUL.querySelector('.' + classNames.focused);
            const activeElement = this.curUL.querySelector('[aria-selected = true]');
            if (focusedElement) {
                focusedElement.classList.remove(classNames.focused);
                if (activeElement && !this.showCheckBox) {
                    activeElement.classList.add(classNames.selected);
                }
            }
        }
    }
    wireEvents() {
        EventHandler.add(this.element, 'keydown', this.keyActionHandler, this);
        EventHandler.add(this.element, 'click', this.clickHandler, this);
        EventHandler.add(this.element, 'mouseover', this.hoverHandler, this);
        EventHandler.add(this.element, 'mouseout', this.leaveHandler, this);
        EventHandler.add(this.element, 'focusout', this.focusout, this);
        this.touchModule = new Touch(this.element, { swipe: this.swipeActionHandler.bind(this) });
    }
    unWireEvents() {
        EventHandler.remove(this.element, 'click', this.clickHandler);
        EventHandler.remove(this.element, 'mouseover', this.hoverHandler);
        EventHandler.remove(this.element, 'mouseout', this.leaveHandler);
        EventHandler.remove(this.element, 'mouseover', this.hoverHandler);
        EventHandler.remove(this.element, 'mouseout', this.leaveHandler);
        this.touchModule.destroy();
    }
    removeFocus() {
        const focusedLI = this.element.querySelectorAll('.' + classNames.focused);
        for (const ele of focusedLI) {
            ele.classList.remove(classNames.focused);
        }
    }
    removeHover() {
        const hoverLI = this.element.querySelector('.' + classNames.hover);
        if (hoverLI) {
            hoverLI.classList.remove(classNames.hover);
        }
    }
    removeSelect(li) {
        if (isNullOrUndefined(li)) {
            const selectedLI = this.element.querySelectorAll('.' + classNames.selected);
            for (const ele of selectedLI) {
                if (this.showCheckBox && ele.querySelector('.' + classNames.checked)) {
                    continue;
                }
                else {
                    ele.setAttribute('aria-selected', 'false');
                    ele.classList.remove(classNames.selected);
                }
            }
        }
        else {
            li.classList.remove(classNames.selected);
            li.setAttribute('aria-selected', 'false');
        }
    }
    isValidLI(li) {
        return (li && li.classList.contains(classNames.listItem)
            && !li.classList.contains(classNames.groupListItem)
            && !li.classList.contains(classNames.disable));
    }
    setCheckboxLI(li, e) {
        if (this.isValidLI(li) && this.enable && this.showCheckBox) {
            if (this.curUL.querySelector('.' + classNames.focused)) {
                this.curUL.querySelector('.' + classNames.focused).classList.remove(classNames.focused);
            }
            li.classList.add(classNames.focused);
            const checkboxElement = li.querySelector('.' + classNames.checkboxWrapper);
            const checkIcon = checkboxElement.querySelector('.' + classNames.checkboxIcon + '.' + classNames.icon);
            this.removeHover();
            if (!checkIcon.classList.contains(classNames.checked)) {
                checkIcon.classList.add(classNames.checked);
                li.classList.add(classNames.selected);
                li.setAttribute('aria-selected', 'true');
            }
            else {
                checkIcon.classList.remove(classNames.checked);
                li.classList.remove(classNames.selected);
                li.setAttribute('aria-selected', 'false');
            }
            checkboxElement.setAttribute('aria-checked', checkIcon.classList.contains(classNames.checked) ?
                'true' : 'false');
            const eventArgs = this.selectEventData(li, e);
            merge(eventArgs, { isChecked: checkIcon.classList.contains(classNames.checked) });
            if (this.enableVirtualization) {
                this.virtualizationModule.setCheckboxLI(li, e);
            }
            this.trigger('select', eventArgs);
            this.setSelectedItemData(li);
            this.renderSubList(li);
        }
    }
    selectEventData(li, e) {
        const data = this.getItemData(li);
        const fieldData = getFieldValues(data, this.listBaseOption.fields);
        let selectedItem;
        if (!isNullOrUndefined(data)
            && typeof this.dataSource[0] === 'string' || typeof this.dataSource[0] === 'number') {
            selectedItem = { item: li, text: li && li.innerText.trim(), data: this.dataSource };
        }
        else {
            selectedItem =
                // eslint-disable-next-line
                { item: li, text: fieldData && fieldData[this.listBaseOption.fields.text],
                    // eslint-disable-next-line
                    data: data };
        }
        const eventArgs = {};
        merge(eventArgs, selectedItem);
        if (e) {
            merge(eventArgs, { isInteracted: true, event: e, index: this.curUL && Array.prototype.indexOf.call(this.curUL.children, li) });
        }
        return eventArgs;
    }
    setSelectedItemData(li) {
        const data = this.getItemData(li);
        // eslint-disable-next-line
        const fieldData = getFieldValues(data, this.listBaseOption.fields);
        if (!isNullOrUndefined(data) && ((typeof this.dataSource[0] === 'string') ||
            (typeof this.dataSource[0] === 'number'))) {
            this.selectedItems = {
                item: li,
                text: li && li.innerText.trim(),
                data: this.dataSource
            };
        }
        else {
            this.selectedItems = {
                item: li,
                // eslint-disable-next-line
                text: fieldData && fieldData[this.listBaseOption.fields.text],
                // eslint-disable-next-line
                data: data
            };
        }
    }
    setSelectLI(li, e) {
        if (this.isValidLI(li) && !li.classList.contains(classNames.selected) && this.enable) {
            if (!this.showCheckBox) {
                this.removeSelect();
            }
            li.classList.add(classNames.selected);
            li.setAttribute('aria-selected', 'true');
            this.removeHover();
            this.setSelectedItemData(li);
            if (this.enableVirtualization) {
                this.virtualizationModule.setSelectLI(li, e);
            }
            const eventArgs = this.selectEventData(li, e);
            this.trigger('select', eventArgs);
            this.selectedLI = li;
            this.renderSubList(li);
        }
    }
    setHoverLI(li) {
        if (this.isValidLI(li) && !li.classList.contains(classNames.hover) && this.enable) {
            const lastLi = this.element.querySelectorAll('.' + classNames.hover);
            if (lastLi && lastLi.length) {
                removeClass(lastLi, classNames.hover);
            }
            if (!li.classList.contains(classNames.selected) || this.showCheckBox) {
                li.classList.add(classNames.hover);
            }
        }
    }
    //Data Source Related Functions
    getSubDS() {
        const levelKeys = this.curDSLevel;
        if (levelKeys.length) {
            let ds = this.localData;
            for (const key of levelKeys) {
                const field = {};
                // eslint-disable-next-line
                field[this.fields.id] = key;
                this.curDSJSON = this.findItemFromDS(ds, field);
                const fieldData = getFieldValues(this.curDSJSON, this.listBaseOption.fields);
                ds = this.curDSJSON ? fieldData[this.fields.child] : ds;
            }
            return ds;
        }
        return this.localData;
    }
    getItemData(li) {
        const dataSource = this.dataSource instanceof DataManager ?
            this.localData : this.dataSource;
        const fields = this.getElementUID(li);
        let curDS;
        if (isNullOrUndefined(this.element.querySelector('.' + classNames.hasChild)) && this.fields.groupBy) {
            curDS = this.curViewDS;
        }
        else {
            curDS = dataSource;
        }
        return this.findItemFromDS(curDS, fields);
    }
    findItemFromDS(dataSource, fields, parent) {
        let resultJSON;
        if (dataSource && dataSource.length && fields) {
            dataSource.some((data) => {
                const fieldData = 
                // eslint-disable-next-line
                getFieldValues(data, this.listBaseOption.fields);
                //(!(fid) || id === fid) && (!(ftext) || text === ftext) && (!!fid || !!ftext)
                if ((fields[this.fields.id] || fields[this.fields.text]) &&
                    (!fields[this.fields.id] || (!isNullOrUndefined(fieldData[this.fields.id]) &&
                        fieldData[this.fields.id].toString()) === fields[this.fields.id].toString()) &&
                    (!fields[this.fields.text] || fieldData[this.fields.text] === fields[this.fields.text])) {
                    resultJSON = (parent ? dataSource : data);
                }
                else if (typeof data !== 'object' && dataSource.indexOf(data) !== -1) {
                    resultJSON = (parent ? dataSource : data);
                }
                else if (!isNullOrUndefined(fields[this.fields.id]) && isNullOrUndefined(fieldData[this.fields.id])) {
                    const li = this.element.querySelector('[data-uid="'
                        + fields[this.fields.id] + '"]');
                    // eslint-disable-next-line
                    if (li && li.innerText.trim() === fieldData[this.fields.text]) {
                        resultJSON = data;
                    }
                    // eslint-disable-next-line
                }
                else if (fieldData.hasOwnProperty(this.fields.child) && fieldData[this.fields.child].length) {
                    resultJSON = this.findItemFromDS(fieldData[this.fields.child], fields, parent);
                }
                return !!resultJSON;
            });
        }
        else {
            resultJSON = dataSource;
        }
        return resultJSON;
    }
    getQuery() {
        const columns = [];
        const query = (this.query ? this.query : new Query());
        if (!this.query) {
            // eslint-disable-next-line
            for (const column of Object.keys(this.fields.properties)) {
                if (column !== 'tableName' && !!(this.fields[column]) &&
                    this.fields[column] !==
                        ListBase.defaultMappedFields[column]
                    && columns.indexOf(this.fields[column]) === -1) {
                    columns.push(this.fields[column]);
                }
            }
            query.select(columns);
            // eslint-disable-next-line
            if (this.fields.properties.hasOwnProperty('tableName')) {
                query.from(this.fields.tableName);
            }
        }
        return query;
    }
    setViewDataSource(dataSource = this.localData) {
        if (dataSource && this.fields.groupBy) {
            if (this.sortOrder !== 'None') {
                this.curViewDS = ListBase.groupDataSource(ListBase.getDataSource(dataSource, ListBase.addSorting(this.sortOrder, this.fields.sortBy)), this.listBaseOption.fields, this.sortOrder);
            }
            else {
                this.curViewDS = ListBase.groupDataSource(dataSource, this.listBaseOption.fields, this.sortOrder);
            }
        }
        else if (dataSource && this.sortOrder !== 'None') {
            this.curViewDS = ListBase.getDataSource(dataSource, ListBase.addSorting(this.sortOrder, this.fields.sortBy));
        }
        else {
            this.curViewDS = dataSource;
        }
    }
    isInAnimation() {
        return this.curUL.classList.contains('.e-animate');
    }
    setLocalData() {
        this.trigger('actionBegin');
        // eslint-disable-next-line
        const listViewComponent = this;
        if (this.dataSource instanceof DataManager) {
            this.dataSource.executeQuery(this.getQuery()).then((e) => {
                if (this.isDestroyed) {
                    return;
                }
                this.localData = e.result;
                if (!this.isServerRendered || (!isBlazor())) {
                    listViewComponent.removeElement(listViewComponent.contentContainer);
                    // eslint-disable-next-line
                    if (this.isReact) {
                        this.clearTemplate();
                    }
                }
                this.renderList();
                this.trigger('actionComplete', e);
            }).catch((e) => {
                if (this.isDestroyed) {
                    return;
                }
                this.trigger('actionFailure', e);
            });
        }
        else if (!this.dataSource || !this.dataSource.length) {
            const ul = this.element.querySelector('ul');
            if (ul) {
                remove(ul);
                this.setProperties({ dataSource: ListBase.createJsonFromElement(ul) }, true);
                this.localData = this.dataSource;
                this.renderList();
                this.trigger('actionComplete', { data: this.localData });
            }
        }
        else {
            this.localData = this.dataSource;
            this.renderList();
            this.trigger('actionComplete', { data: this.localData });
        }
    }
    reRender() {
        if (!isBlazor() || !this.isServerRendered || this.enableVirtualization) {
            this.resetBlazorTemplates();
            this.removeElement(this.headerEle);
            this.removeElement(this.ulElement);
            this.removeElement(this.contentContainer);
            // eslint-disable-next-line
            if (this.isReact) {
                this.clearTemplate();
            }
            if (Object.keys(window).indexOf('ejsInterop') === -1) {
                this.element.innerHTML = '';
            }
            this.headerEle = this.ulElement = this.liCollection = undefined;
            this.header();
        }
        this.setLocalData();
    }
    resetCurrentList() {
        this.resetBlazorTemplates();
        this.setViewDataSource(this.curViewDS);
        this.contentContainer.innerHTML = '';
        this.createList();
        this.renderIntoDom(this.curUL);
    }
    setAttributes(liElements) {
        for (let i = 0; i < liElements.length; i++) {
            const element = liElements[i];
            if (element.classList.contains('e-list-item')) {
                element.setAttribute('id', this.element.id + '_' + element.getAttribute('data-uid'));
                element.setAttribute('aria-selected', 'false');
                element.setAttribute('tabindex', '-1');
            }
        }
    }
    createList() {
        this.currentLiElements = [];
        this.isNestedList = false;
        this.ulElement = this.curUL = ListBase.createList(this.createElement, this.curViewDS, this.listBaseOption, null, this);
        this.liCollection = this.curUL.querySelectorAll('.' + classNames.listItem);
        this.setAttributes(this.liCollection);
        this.updateBlazorTemplates(true);
    }
    resetBlazorTemplates() {
        // eslint-disable-next-line
        const templateCollection = blazorTemplates;
        if (this.template) {
            templateCollection[this.LISTVIEW_TEMPLATE_ID] = [];
            resetBlazorTemplate(this.LISTVIEW_TEMPLATE_ID, LISTVIEW_TEMPLATE_PROPERTY);
        }
        if (this.groupTemplate) {
            templateCollection[this.LISTVIEW_GROUPTEMPLATE_ID] = [];
            resetBlazorTemplate(this.LISTVIEW_GROUPTEMPLATE_ID, LISTVIEW_GROUPTEMPLATE_PROPERTY);
        }
        if (this.headerTemplate) {
            resetBlazorTemplate(this.LISTVIEW_HEADERTEMPLATE_ID, LISTVIEW_HEADERTEMPLATE_PROPERTY);
        }
    }
    updateBlazorTemplates(template = false, headerTemplate = false, resetExistingElements = false) {
        if (this.template && template && !this.enableVirtualization) {
            updateBlazorTemplate(this.LISTVIEW_TEMPLATE_ID, LISTVIEW_TEMPLATE_PROPERTY, this, resetExistingElements);
        }
        if (this.groupTemplate && template && !this.enableVirtualization) {
            updateBlazorTemplate(this.LISTVIEW_GROUPTEMPLATE_ID, LISTVIEW_GROUPTEMPLATE_PROPERTY, this, resetExistingElements);
        }
        if (this.headerTemplate && headerTemplate) {
            updateBlazorTemplate(this.LISTVIEW_HEADERTEMPLATE_ID, LISTVIEW_HEADERTEMPLATE_PROPERTY, this, resetExistingElements);
        }
    }
    exceptionEvent(e) {
        this.trigger('actionFailure', e);
    }
    UpdateCurrentUL() {
        this.ulElement = this.curUL = this.element.querySelector('.' + classNames.parentItem);
        if (this.curUL) {
            // eslint-disable-next-line
            this.liCollection = this.curUL.querySelectorAll('.' + classNames.listItem);
        }
    }
    removeActiveClass() {
        // eslint-disable-next-line
        const listViewComponent = this;
        setTimeout(() => {
            const ulContainer = listViewComponent.element.querySelector('.' + classNames.virtualElementContainer);
            for (let i = 0; i < ulContainer.childElementCount; i++) {
                const selectedElement = ulContainer.children[i];
                let elementIndex;
                let hiddenElementIndex;
                if (listViewComponent.showCheckBox) {
                    if (listViewComponent.previousSelectedItems.length > 0) {
                        for (let j = 0; j < listViewComponent.previousSelectedItems.length; j++) {
                            if (selectedElement.getAttribute('data-uid') === listViewComponent.previousSelectedItems[j]) {
                                selectedElement.classList.add('e-active');
                                selectedElement.setAttribute('aria-selected', 'true');
                                if (selectedElement.querySelector('.e-frame.e-icons')) {
                                    selectedElement.querySelector('.e-frame.e-icons').classList.add('e-check');
                                }
                                elementIndex = i;
                            }
                            else {
                                if (elementIndex !== i) {
                                    selectedElement.classList.remove('e-active');
                                    selectedElement.removeAttribute('aria-selected');
                                    if (selectedElement.querySelector('.e-check')) {
                                        selectedElement.querySelector('.e-check').classList.remove('e-check');
                                    }
                                }
                            }
                        }
                    }
                    else {
                        selectedElement.classList.remove('e-active');
                        selectedElement.removeAttribute('aria-selected');
                        if (selectedElement.querySelector('.e-check')) {
                            selectedElement.querySelector('.e-check').classList.remove('e-check');
                        }
                    }
                }
                else {
                    if (selectedElement.getAttribute('data-uid') === listViewComponent.previousSelectedItems[0]) {
                        selectedElement.classList.add('e-active');
                        selectedElement.setAttribute('aria-selected', 'true');
                    }
                    else {
                        selectedElement.classList.remove('e-active');
                        selectedElement.removeAttribute('aria-selected');
                    }
                }
                if (listViewComponent.hiddenItems.length > 0) {
                    for (let k = 0; k < listViewComponent.hiddenItems.length; k++) {
                        if (selectedElement.getAttribute('data-uid') === listViewComponent.previousSelectedItems[k]) {
                            selectedElement.style.display = 'none';
                            hiddenElementIndex = i;
                        }
                        else {
                            if (hiddenElementIndex !== i) {
                                selectedElement.style.display = null;
                            }
                        }
                    }
                }
                if (listViewComponent.enabledItems.length > 0) {
                    for (let x = 0; x < listViewComponent.enabledItems.length; x++) {
                        if (selectedElement.getAttribute('data-uid') === listViewComponent.enabledItems[x]) {
                            if (selectedElement.classList.contains('e-disabled')) {
                                selectedElement.classList.remove('e-disabled');
                            }
                        }
                    }
                }
                if (listViewComponent.disabledItems.length > 0) {
                    for (let y = 0; y < listViewComponent.disabledItems.length; y++) {
                        if (selectedElement.getAttribute('data-uid') === listViewComponent.disabledItems[y]) {
                            if (!selectedElement.classList.contains('e-disabled')) {
                                selectedElement.classList.add('e-disabled');
                            }
                        }
                    }
                }
            }
        }, 200);
    }
    renderingNestedList() {
        const ul = closest(this.liElement.parentNode, '.' + classNames.parentItem);
        const ctrlId = this.element.id;
        const ulElement = document.getElementById(ctrlId);
        const currentListItem = ulElement.getElementsByTagName('UL')[ulElement.getElementsByTagName('UL').length - 1];
        this.switchView(ul, currentListItem);
        this.liElement = null;
    }
    renderSubList(li) {
        this.liElement = li;
        const uID = li.getAttribute('data-uid');
        if (li.classList.contains(classNames.hasChild) && uID) {
            const ul = closest(li.parentNode, '.' + classNames.parentItem);
            let ele = this.element.querySelector('[pid=\'' + uID + '\']');
            this.curDSLevel.push(uID);
            this.setViewDataSource(this.getSubDS());
            if (!ele) {
                const data = this.curViewDS;
                if (isBlazor() && this.isServerRendered) {
                    // eslint-disable-next-line
                    this.interopAdaptor.invokeMethodAsync('ListChildDataSource', data);
                }
                else {
                    ele = ListBase.createListFromJson(this.createElement, data, this.listBaseOption, this.curDSLevel.length, null, this);
                    // eslint-disable-next-line
                    if (this.isReact) {
                        this.renderReactTemplates();
                    }
                    const lists = ele.querySelectorAll('.' + classNames.listItem);
                    this.setAttributes(lists);
                    ele.setAttribute('pID', uID);
                    ele.style.display = 'none';
                    this.renderIntoDom(ele);
                    this.updateBlazorTemplates(true);
                }
            }
            if (!isBlazor() || !this.isServerRendered || this.enableVirtualization) {
                this.switchView(ul, ele);
            }
            this.liCollection = this.curUL.querySelectorAll('.' + classNames.listItem);
            if (this.selectedItems) {
                const fieldData = getFieldValues(this.selectedItems.data, this.listBaseOption.fields);
                // eslint-disable-next-line
                this.header((fieldData[this.listBaseOption.fields.text]), true, 'header');
            }
            this.selectedLI = undefined;
        }
    }
    renderIntoDom(ele) {
        this.contentContainer.appendChild(ele);
    }
    renderList(data) {
        this.setViewDataSource(data);
        if (!isBlazor() || !this.isServerRendered || this.enableVirtualization) {
            if (this.enableVirtualization) {
                if (Object.keys(this.dataSource).length) {
                    if (!(isBlazor() && this.isServerRendered)) {
                        if ((this.template || this.groupTemplate) && !this.virtualizationModule.isNgTemplate()) {
                            this.listBaseOption.template = null;
                            this.listBaseOption.groupTemplate = null;
                            this.listBaseOption.itemCreated = this.virtualizationModule.createUIItem.bind(this.virtualizationModule);
                        }
                    }
                }
                this.virtualizationModule.uiVirtualization();
            }
            else {
                this.createList();
                this.contentContainer = this.createElement('div', { className: classNames.content });
                this.element.appendChild(this.contentContainer);
                this.renderIntoDom(this.ulElement);
                // eslint-disable-next-line
                if (this.isReact) {
                    this.renderReactTemplates();
                }
            }
        }
    }
    getElementUID(obj) {
        let fields = {};
        if (obj instanceof Element) {
            // eslint-disable-next-line
            fields[this.fields.id] = obj.getAttribute('data-uid');
        }
        else {
            fields = obj;
        }
        return fields;
    }
    /**
     * Initializes the ListView component rendering.
     */
    render() {
        if (!isBlazor() || !this.isServerRendered) {
            this.element.classList.add(classNames.root);
            attributes(this.element, { role: 'list', tabindex: '0' });
            this.setCSSClass();
            this.setEnableRTL();
            this.setEnable();
            this.setSize();
            this.wireEvents();
            this.header();
            this.setLocalData();
            this.setHTMLAttribute();
            // eslint-disable-next-line
            if (this.isReact) {
                this.renderReactTemplates();
            }
        }
        else {
            this.initBlazor(true);
        }
        this.rippleFn = rippleEffect(this.element, {
            selector: '.' + classNames.listItem
        });
        this.renderComplete();
    }
    initBlazor(firstRender) {
        if (firstRender === null) {
            firstRender = false;
        }
        this.setLocalData();
        this.setViewDataSource(this.localData);
        this.contentContainer = this.element.querySelector('.' + classNames.content);
        if (firstRender) {
            this.wireEvents();
        }
    }
    /**
     * It is used to destroy the ListView component.
     */
    destroy() {
        this.resetBlazorTemplates();
        // eslint-disable-next-line
        if (this.isReact) {
            this.clearTemplate();
        }
        this.unWireEvents();
        const classAr = [classNames.root, classNames.disable, 'e-rtl',
            'e-has-header', 'e-lib'].concat(this.cssClass.split(' ').filter((css) => css));
        removeClass([this.element], classAr);
        this.element.removeAttribute('role');
        this.element.removeAttribute('tabindex');
        this.curUL = this.ulElement = this.liCollection = this.headerEle = undefined;
        if (!(isBlazor() && this.isServerRendered)) {
            this.element.innerHTML = '';
            super.destroy();
        }
        else {
            this.element.style.display = 'none';
        }
    }
    /**
     * Switches back from the navigated sub list item.
     */
    back() {
        const pID = this.curDSLevel[this.curDSLevel.length - 1];
        if (pID === undefined || this.isInAnimation()) {
            return;
        }
        this.curDSLevel.pop();
        this.setViewDataSource(this.getSubDS());
        let toUL = this.element.querySelector('[data-uid=\'' + pID + '\']');
        const fromUL = this.curUL;
        if (!toUL) {
            this.createList();
            this.renderIntoDom(this.ulElement);
            toUL = this.curUL;
        }
        else {
            if (isBlazor() && this.isServerRendered && this.enableVirtualization) {
                toUL = toUL.parentElement.parentElement.parentElement;
            }
            else {
                toUL = toUL.parentElement;
            }
        }
        const fieldData = getFieldValues(this.curDSJSON, this.listBaseOption.fields);
        // eslint-disable-next-line
        const text = fieldData[this.fields.text];
        this.switchView(fromUL, toUL, true);
        this.removeFocus();
        const li = this.element.querySelector('[data-uid=\'' + pID + '\']');
        li.classList.remove(classNames.disable);
        li.classList.add(classNames.focused);
        if (this.showCheckBox && li.querySelector('.' + classNames.checkboxIcon).classList.contains(classNames.checked)) {
            li.setAttribute('aria-selected', 'true');
        }
        else {
            li.classList.remove(classNames.selected);
            li.setAttribute('aria-selected', 'false');
        }
        this.liCollection = this.curUL.querySelectorAll('.' + classNames.listItem);
        if (this.enableHtmlSanitizer) {
            this.setProperties({ headerTitle: SanitizeHtmlHelper.sanitize(this.headerTitle) }, true);
        }
        this.header((this.curDSLevel.length ? text : this.headerTitle), (this.curDSLevel.length ? true : false), 'header');
    }
    /**
     * Selects the list item from the ListView by passing the elements or field object.
     *
     * @param  {Fields | HTMLElement | Element} item - We can pass element Object or Fields as Object with ID and Text fields.
     */
    selectItem(item) {
        if (this.enableVirtualization) {
            this.virtualizationModule.selectItem(item);
        }
        else if (this.showCheckBox) {
            this.setCheckboxLI(this.getLiFromObjOrElement(item));
        }
        else {
            if (isNullOrUndefined(item) === true) {
                this.removeSelect();
            }
            else {
                this.setSelectLI(this.getLiFromObjOrElement(item));
            }
        }
    }
    getLiFromObjOrElement(obj) {
        let li;
        const dataSource = this.dataSource instanceof DataManager ?
            this.localData : this.dataSource;
        if (!isNullOrUndefined(obj)) {
            if (typeof dataSource[0] === 'string' || typeof dataSource[0] === 'number') {
                if (obj instanceof Element) {
                    const uid = obj.getAttribute('data-uid').toString();
                    for (let i = 0; i < this.liCollection.length; i++) {
                        if (this.liCollection[i].getAttribute('data-uid').toString() === uid) {
                            li = this.liCollection[i];
                            break;
                        }
                    }
                }
                else {
                    Array.prototype.some.call(this.curUL.querySelectorAll('.' + classNames.listItem), (item) => {
                        if (item.innerText.trim() === obj.toString()) {
                            li = item;
                            return true;
                        }
                        else {
                            return false;
                        }
                    });
                }
            }
            else {
                const resultJSON = this.getItemData(obj);
                const fieldData = getFieldValues(resultJSON, this.listBaseOption.fields);
                if (resultJSON) {
                    li = this.element.querySelector('[data-uid="'
                        + fieldData[this.fields.id] + '"]');
                    if (!this.enableVirtualization && isNullOrUndefined(li)) {
                        const curLi = this.element.querySelectorAll('.' + classNames.listItem);
                        for (let i = 0; i < curLi.length; i++) {
                            // eslint-disable-next-line
                            if (curLi[i].innerText.trim() === fieldData[this.fields.text]) {
                                li = curLi[i];
                            }
                        }
                    }
                }
            }
        }
        return li;
    }
    /**
     * Selects multiple list items from the ListView.
     *
     * @param  {Fields[] | HTMLElement[] | Element[]} item - We can pass array of
     *  elements or array of fields Object with ID and Text fields.
     */
    selectMultipleItems(item) {
        if (!isNullOrUndefined(item)) {
            for (let i = 0; i < item.length; i++) {
                if (!isNullOrUndefined(item[i])) {
                    this.selectItem(item[i]);
                }
            }
        }
    }
    getParentId() {
        const parentId = [];
        if (this.isNestedList) {
            for (let i = this.curDSLevel.length - 1; i >= 0; i--) {
                parentId.push(this.curDSLevel[i]);
            }
        }
        return parentId;
    }
    /**
     * Gets the details of the currently selected item from the list items.
     *
     * @blazorType ListSelectedItem<TValue>
     */
    getSelectedItems() {
        // eslint-disable-next-line
        let finalValue;
        let isCompleted = false;
        this.selectedId = [];
        const dataSource = this.dataSource instanceof DataManager ?
            this.localData : this.dataSource;
        if (this.enableVirtualization && !isCompleted) {
            finalValue = this.virtualizationModule.getSelectedItems();
            isCompleted = true;
        }
        else if (this.showCheckBox && !isCompleted) {
            // eslint-disable-next-line
            const liCollection = this.curUL.getElementsByClassName(classNames.selected);
            const liTextCollection = [];
            const liDataCollection = [];
            this.selectedId = [];
            const dataParent = [];
            for (let i = 0; i < liCollection.length; i++) {
                if (typeof dataSource[0] === 'string' || typeof dataSource[0] === 'number') {
                    liTextCollection.push(liCollection[i].innerText.trim());
                }
                else {
                    const tempData = this.getItemData(liCollection[i]);
                    const fieldData = getFieldValues(tempData, this.listBaseOption.fields);
                    if (this.isNestedList) {
                        dataParent.push({ data: tempData, parentId: this.getParentId() });
                    }
                    else {
                        liDataCollection.push(tempData);
                    }
                    if (fieldData) {
                        // eslint-disable-next-line
                        liTextCollection.push(fieldData[this.listBaseOption.fields.text]);
                        // eslint-disable-next-line
                        this.selectedId.push(fieldData[this.listBaseOption.fields.id]);
                    }
                    else {
                        liTextCollection.push(undefined);
                        this.selectedId.push(undefined);
                    }
                }
            }
            if ((typeof dataSource[0] === 'string'
                || typeof dataSource[0] === 'number')
                && !isCompleted) {
                finalValue = { item: liCollection, data: dataSource, text: liTextCollection };
                isCompleted = true;
            }
            if (this.isNestedList && !isCompleted) {
                finalValue = { item: liCollection, data: dataParent, text: liTextCollection };
                isCompleted = true;
            }
            else if (!isCompleted) {
                finalValue = { item: liCollection, data: liDataCollection, text: liTextCollection };
                isCompleted = true;
            }
        }
        else if (!isCompleted) {
            const liElement = this.element.getElementsByClassName(classNames.selected)[0];
            const fieldData = getFieldValues(this.getItemData(liElement), this.listBaseOption.fields);
            if ((typeof dataSource[0] === 'string'
                || typeof dataSource[0] === 'number')
                && !isCompleted) {
                finalValue = (!isNullOrUndefined(liElement)) ? {
                    item: liElement, data: dataSource,
                    text: liElement.innerText.trim()
                } : undefined;
                isCompleted = true;
            }
            else if (!isCompleted) {
                if (isNullOrUndefined(fieldData) || isNullOrUndefined(liElement)) {
                    finalValue = undefined;
                    isCompleted = true;
                }
                else {
                    // eslint-disable-next-line
                    this.selectedId.push(fieldData[this.listBaseOption.fields.id]);
                    finalValue = {
                        text: fieldData[this.listBaseOption.fields.text], item: liElement,
                        data: this.getItemData(liElement)
                    };
                    isCompleted = true;
                }
            }
        }
        if (isBlazor()) {
            // eslint-disable-next-line
            return this.blazorGetSelectedItems(finalValue);
        }
        else {
            return finalValue;
        }
    }
    // eslint-disable-next-line
    blazorGetSelectedItems(finalGetSelectedItem) {
        const blazorSelectedItem = {
            data: [],
            index: [],
            parentId: [],
            text: []
        };
        if (!isNullOrUndefined(finalGetSelectedItem)) {
            if (!isNullOrUndefined(finalGetSelectedItem.data)) {
                if (this.showCheckBox && this.isNestedList) {
                    for (let i = 0; i < finalGetSelectedItem.data.length; i++) {
                        blazorSelectedItem.data.push(finalGetSelectedItem.data[i].data);
                    }
                    if (!isNullOrUndefined(finalGetSelectedItem.data[0])
                        && !isNullOrUndefined(finalGetSelectedItem.data[0].parentId)) {
                        blazorSelectedItem.parentId = finalGetSelectedItem.data[0].parentId;
                    }
                }
                else {
                    blazorSelectedItem.data = this.convertItemsToArray(finalGetSelectedItem.data);
                }
            }
            if (!isNullOrUndefined(finalGetSelectedItem.text)) {
                blazorSelectedItem.text = this.convertItemsToArray(finalGetSelectedItem.text);
            }
            if (!isNullOrUndefined(finalGetSelectedItem.index)) {
                blazorSelectedItem.index = this.convertItemsToArray(finalGetSelectedItem.index);
            }
        }
        return blazorSelectedItem;
    }
    // eslint-disable-next-line
    convertItemsToArray(items) {
        return Array.isArray(items) ? [...items] : [items];
    }
    /**
     * Finds out an item details from the current list.
     *
     * @param  {Fields | HTMLElement | Element} item - We can pass element Object or Fields as Object with ID and Text fields.
     * @blazorType TValue
     */
    findItem(item) {
        return this.getItemData(item);
    }
    /**
     * Enables the disabled list items by passing the Id and text fields.
     *
     * @param  {Fields | HTMLElement | Element} item - We can pass element Object or Fields as Object with ID and Text fields.
     */
    enableItem(item) {
        this.setItemState(item, true);
        if (this.enableVirtualization) {
            this.virtualizationModule.enableItem(item);
        }
    }
    /**
     * Disables the list items by passing the Id and text fields.
     *
     * @param  {Fields | HTMLElement | Element} item - We can pass element Object or Fields as Object with ID and Text fields.
     */
    disableItem(item) {
        this.setItemState(item, false);
        if (this.enableVirtualization) {
            this.virtualizationModule.disableItem(item);
        }
    }
    //A function that used to set state of the list item like enable, disable.
    setItemState(item, isEnable) {
        const resultJSON = this.getItemData(item);
        const fieldData = getFieldValues(resultJSON, this.listBaseOption.fields);
        if (resultJSON) {
            const li = this.element.querySelector('[data-uid="' + fieldData[this.fields.id] + '"]');
            if (isEnable) {
                if (li) {
                    li.classList.remove(classNames.disable);
                }
                delete resultJSON[this.fields.enabled];
            }
            else if (!isEnable) {
                if (li) {
                    li.classList.add(classNames.disable);
                }
                // eslint-disable-next-line
                resultJSON[this.fields.enabled] = false;
            }
        }
    }
    /**
     * Shows the hide list item from the ListView.
     *
     * @param  {Fields | HTMLElement | Element} item - We can pass element Object or Fields as Object with ID and Text fields.
     */
    showItem(item) {
        this.showHideItem(item, false, '');
        if (this.enableVirtualization) {
            this.virtualizationModule.showItem(item);
        }
    }
    /**
     * Hides an list item from the ListView.
     *
     * @param  {Fields | HTMLElement | Element} item - We can pass element Object or Fields as Object with ID and Text fields.
     */
    hideItem(item) {
        this.showHideItem(item, true, 'none');
        if (this.enableVirtualization) {
            this.virtualizationModule.hideItem(item);
        }
    }
    showHideItem(obj, isHide, display) {
        const resultJSON = this.getItemData(obj);
        const fieldData = getFieldValues(resultJSON, this.listBaseOption.fields);
        if (resultJSON) {
            const li = this.element.querySelector('[data-uid="' + fieldData[this.fields.id] + '"]');
            if (li) {
                li.style.display = display;
            }
            if (isHide) {
                // eslint-disable-next-line
                resultJSON[this.fields.isVisible] = false;
            }
            else {
                delete resultJSON[this.fields.isVisible];
            }
        }
    }
    /**
     * Adds the new list item(s) to the current ListView.
     * To add a new list item(s) in the ListView, we need to pass the `data` as an array of items that need
     * to be added and `fields` as the target item to which we need to add the given item(s) as its children.
     * For example fields: { text: 'Name', tooltip: 'Name', id:'id'}
     *
     * @param  {{Object}[]} data - JSON Array Data that need to add.
     *
     * @param  {Fields} fields - Target item to add the given data as its children (can be null).
     *
     * @blazorType data|object,fields|object
     */
    addItem(data, fields = undefined) {
        const dataSource = this.dataSource instanceof DataManager
            ? this.localData : this.dataSource;
        this.addItemInternally(data, fields, dataSource);
    }
    addItemInternally(data, fields, dataSource) {
        if (data instanceof Array) {
            if (this.enableVirtualization) {
                this.virtualizationModule.addItem(data, fields, dataSource);
            }
            else {
                const ds = this.findItemFromDS(dataSource, fields);
                let child;
                if (ds) {
                    const fieldData = getFieldValues(ds, this.listBaseOption.fields);
                    child = fieldData[this.fields.child];
                    if (!child) {
                        child = [];
                    }
                    child = child.concat(data);
                }
                // check for whether target is nested level or top level in list
                if (ds instanceof Array) {
                    for (let i = 0; i < data.length; i++) {
                        dataSource.push(data[i]);
                        this.setViewDataSource(dataSource);
                        // since it is top level target, get the content container's first child
                        // as it is always the top level UL
                        const targetUL = this.contentContainer
                            ? this.contentContainer.children[0]
                            : null;
                        // check for whether the list was previously empty or not, if it is
                        // proceed to call initial render
                        if (this.contentContainer && targetUL) {
                            this.addItemIntoDom(data[i], targetUL, this.curViewDS);
                        }
                        else {
                            this.reRender();
                        }
                    }
                    if (this.curUL) {
                        this.updateBlazorTemplates(true);
                    }
                    this.liCollection = this.curUL.querySelectorAll('.' + classNames.listItem);
                }
                else {
                    // proceed as target item is in nested level, only if it is a valid target ds
                    if (ds) {
                        ds[this.fields.child] = child;
                        this.addItemInNestedList(ds, data);
                    }
                }
            }
        }
    }
    addItemInNestedList(targetItemData, itemQueue) {
        // eslint-disable-next-line
        const targetItemId = targetItemData[this.fields.id];
        const targetChildDS = targetItemData[this.fields.child];
        const isAlreadyRenderedUL = this.element.querySelector('[pid=\'' + targetItemId + '\']');
        const targetLi = this.element.querySelector('[data-uid=\'' + targetItemId + '\']');
        const targetUL = isAlreadyRenderedUL
            ? isAlreadyRenderedUL
            : targetLi
                ? closest(targetLi, 'ul')
                : null;
        const targetDS = isAlreadyRenderedUL ? targetChildDS : [targetItemData];
        const isTargetEmptyChild = targetLi ? !targetLi.classList.contains(classNames.hasChild) : false;
        let isRefreshTemplateNeeded = false;
        // if li element is already rendered, that element needs to be refreshed so that
        // it becomes child viewable due to new child items are added now
        if (isTargetEmptyChild) {
            const targetRefreshedElement = ListBase.createListItemFromJson(this.createElement, targetDS, this.listBaseOption, null, null, this);
            this.setAttributes(targetRefreshedElement);
            targetUL.insertBefore(targetRefreshedElement[0], targetLi);
            detach(targetLi);
            isRefreshTemplateNeeded = true;
        }
        // if it is already rendered element, we need to create and append new elements
        if (isAlreadyRenderedUL && itemQueue) {
            for (let i = 0; i < itemQueue.length; i++) {
                targetDS.push(itemQueue[i]);
                this.addItemIntoDom(itemQueue[i], targetUL, targetDS);
            }
            isRefreshTemplateNeeded = true;
        }
        if (isRefreshTemplateNeeded) {
            this.updateBlazorTemplates(true);
        }
    }
    addItemIntoDom(currentItem, targetUL, curViewDS) {
        const index = curViewDS.indexOf(currentItem);
        this.addListItem(currentItem, index, targetUL, curViewDS);
        const curItemDS = curViewDS[index - 1];
        if (curItemDS && curItemDS.isHeader && curItemDS.items.length === 1) {
            this.addListItem(curItemDS, (index - 1), targetUL, curViewDS);
        }
    }
    addListItem(dataSource, index, ulElement, curViewDS) {
        const target = this.getLiFromObjOrElement(curViewDS[index + 1]) ||
            this.getLiFromObjOrElement(curViewDS[index + 2]) || null;
        const li = ListBase.createListItemFromJson(this.createElement, [dataSource], this.listBaseOption, null, null, this);
        this.setAttributes(li);
        // eslint-disable-next-line
        if (this.template && this.isReact) {
            this.renderReactTemplates();
        }
        ulElement.insertBefore(li[0], target);
    }
    /**
     * Removes the list item from the data source based on a passed
     *  element like fields: { text: 'Name', tooltip: 'Name', id:'id'}
     *
     * @param  {Fields | HTMLElement | Element} item - We can pass element Object or Fields as Object with ID and Text fields.
     */
    removeItem(item) {
        const listDataSource = this.dataSource instanceof DataManager
            ? this.localData : this.dataSource;
        if (this.enableVirtualization) {
            this.virtualizationModule.removeItem(item);
        }
        else {
            this.removeItemFromList(item, listDataSource);
            this.updateBlazorTemplates(true);
        }
    }
    removeItemFromList(obj, listDataSource) {
        const curViewDS = this.curViewDS;
        const fields = obj instanceof Element ? this.getElementUID(obj) : obj;
        let dataSource;
        // eslint-disable-next-line prefer-const
        dataSource = this.findItemFromDS(listDataSource, fields, true);
        if (dataSource) {
            let data;
            // eslint-disable-next-line prefer-const
            data = this.findItemFromDS(dataSource, fields);
            const index = curViewDS.indexOf(data);
            const li = this.getLiFromObjOrElement(obj);
            let groupLi;
            this.validateNestedView(li);
            if (this.fields.groupBy && this.curViewDS[index - 1] &&
                curViewDS[index - 1].isHeader &&
                curViewDS[index - 1].items.length === 1) {
                if (li && li.previousElementSibling.classList.contains(classNames.groupListItem) &&
                    (isNullOrUndefined(li.nextElementSibling) || (li.nextElementSibling &&
                        li.nextElementSibling.classList.contains(classNames.groupListItem)))) {
                    groupLi = li.previousElementSibling;
                }
            }
            if (li) {
                detach(li);
            }
            if (groupLi) {
                detach(groupLi);
            }
            // eslint-disable-next-line
            const foundData = (dataSource.length - 1) <= 0
                ? this.findParent(this.localData, this.fields.id, 
                // eslint-disable-next-line
                (value) => value === data[this.fields.id], null) : null;
            const dsIndex = dataSource.indexOf(data);
            dataSource.splice(dsIndex, 1);
            this.setViewDataSource(listDataSource);
            if (foundData
                && foundData.parent
                && Array.isArray(foundData.parent[this.fields.child])
                && foundData.parent[this.fields.child].length <= 0) {
                const parentLi = this.getLiFromObjOrElement(foundData.parent);
                if (parentLi) {
                    const li = ListBase.createListItemFromJson(this.createElement, [foundData.parent], this.listBaseOption, null, null, this);
                    this.setAttributes(li);
                    parentLi.parentElement.insertBefore(li[0], parentLi);
                    parentLi.parentElement.removeChild(parentLi);
                }
            }
            if (dataSource.length <= 0) {
                this.back();
            }
            this.liCollection = Array.prototype.slice.call(this.element.querySelectorAll('.' + classNames.listItem));
        }
    }
    // validate before removing an element whether the current view is inside target element's child view
    validateNestedView(li) {
        const liID = li ? li.getAttribute('data-uid').toString().toLowerCase() : null;
        if (liID && this.curDSLevel && this.curDSLevel.length > 0) {
            while (this.curDSLevel.some((id) => id.toString().toLowerCase() === liID)) {
                this.back();
            }
        }
    }
    /**
     * Removes multiple items from the ListView by passing the array of elements or array of field objects.
     *
     * @param  {Fields[] | HTMLElement[] | Element[]} item - We can pass array of elements or array of field Object with ID and Text fields.
     */
    removeMultipleItems(item) {
        if (item.length) {
            for (let i = 0; i < item.length; i++) {
                this.removeItem(item[i]);
            }
            this.updateBlazorTemplates(true);
        }
    }
    // eslint-disable-next-line
    findParent(dataSource, id, callback, parent) {
        // eslint-disable-next-line no-prototype-builtins
        if (dataSource.hasOwnProperty(id) && callback(dataSource[id]) === true) {
            return extend({}, dataSource);
        }
        for (let i = 0; i < Object.keys(dataSource).length; i++) {
            if (dataSource[Object.keys(dataSource)[i]]
                && typeof dataSource[Object.keys(dataSource)[i]] === 'object') {
                // eslint-disable-next-line
                const result = this.findParent(dataSource[Object.keys(dataSource)[i]], id, callback, dataSource);
                if (result != null) {
                    if (!result.parent) {
                        result.parent = parent;
                    }
                    return result;
                }
            }
        }
        return null;
    }
    // Module Required function
    getModuleName() {
        return 'listview';
    }
    requiredModules() {
        const modules = [];
        if (this.enableVirtualization) {
            modules.push({ args: [this], member: 'virtualization' });
        }
        return modules;
    }
    /**
     * Get the properties to be maintained in the persisted state.
     */
    getPersistData() {
        return this.addOnPersist(['cssClass', 'enableRtl', 'htmlAttributes',
            'enable', 'fields', 'animation', 'headerTitle',
            'sortOrder', 'showIcon', 'height', 'width', 'showCheckBox', 'checkBoxPosition']);
    }
};
__decorate([
    Property('')
], ListView.prototype, "cssClass", void 0);
__decorate([
    Property(false)
], ListView.prototype, "enableVirtualization", void 0);
__decorate([
    Property({})
], ListView.prototype, "htmlAttributes", void 0);
__decorate([
    Property(true)
], ListView.prototype, "enable", void 0);
__decorate([
    Property([])
], ListView.prototype, "dataSource", void 0);
__decorate([
    Property()
], ListView.prototype, "query", void 0);
__decorate([
    Complex(ListBase.defaultMappedFields, FieldSettings)
], ListView.prototype, "fields", void 0);
__decorate([
    Property({ effect: 'SlideLeft', duration: 400, easing: 'ease' })
], ListView.prototype, "animation", void 0);
__decorate([
    Property('None')
], ListView.prototype, "sortOrder", void 0);
__decorate([
    Property(false)
], ListView.prototype, "showIcon", void 0);
__decorate([
    Property(false)
], ListView.prototype, "showCheckBox", void 0);
__decorate([
    Property('Left')
], ListView.prototype, "checkBoxPosition", void 0);
__decorate([
    Property('')
], ListView.prototype, "headerTitle", void 0);
__decorate([
    Property(false)
], ListView.prototype, "showHeader", void 0);
__decorate([
    Property(false)
], ListView.prototype, "enableHtmlSanitizer", void 0);
__decorate([
    Property('')
], ListView.prototype, "height", void 0);
__decorate([
    Property('')
], ListView.prototype, "width", void 0);
__decorate([
    Property(null)
], ListView.prototype, "template", void 0);
__decorate([
    Property(null)
], ListView.prototype, "headerTemplate", void 0);
__decorate([
    Property(null)
], ListView.prototype, "groupTemplate", void 0);
__decorate([
    Event()
], ListView.prototype, "select", void 0);
__decorate([
    Event()
], ListView.prototype, "actionBegin", void 0);
__decorate([
    Event()
], ListView.prototype, "actionComplete", void 0);
__decorate([
    Event()
], ListView.prototype, "actionFailure", void 0);
ListView = __decorate([
    NotifyPropertyChanges
], ListView);

const listElementCount = 1.5;
const windowElementCount = 3;
class Virtualization {
    constructor(instance) {
        this.elementDifference = 0;
        this.listViewInstance = instance;
    }
    /**
     * For internal use only.
     *
     * @private
     */
    isNgTemplate() {
        return !isNullOrUndefined(this.listViewInstance.templateRef) && typeof this.listViewInstance.templateRef !== 'string';
    }
    /**
     * For internal use only.
     *
     * @private
     */
    uiVirtualization() {
        this.wireScrollEvent(false);
        const curViewDS = this.listViewInstance.curViewDS;
        const firstDs = curViewDS.slice(0, 1);
        if (!(isBlazor() || this.listViewInstance.isServerRendered)) {
            this.listViewInstance.ulElement = this.listViewInstance.curUL = ListBase.createList(
            // eslint-disable-next-line
            this.listViewInstance.createElement, firstDs, this.listViewInstance.listBaseOption, null, this);
            this.listViewInstance.contentContainer = this.listViewInstance.createElement('div', { className: classNames.content });
            this.listViewInstance.element.appendChild(this.listViewInstance.contentContainer);
            this.listViewInstance.contentContainer.appendChild(this.listViewInstance.ulElement);
        }
        this.listItemHeight = this.listViewInstance.ulElement.firstElementChild.getBoundingClientRect().height;
        this.expectedDomItemCount = this.ValidateItemCount(10000);
        this.domItemCount = this.ValidateItemCount(Object.keys(this.listViewInstance.curViewDS).length);
        this.uiFirstIndex = 0;
        this.uiLastIndex = this.domItemCount - 1;
        const otherDs = curViewDS.slice(1, this.domItemCount);
        if (!(isBlazor() || this.listViewInstance.isServerRendered)) {
            const listItems = ListBase.createListItemFromJson(
            // eslint-disable-next-line
            this.listViewInstance.createElement, otherDs, this.listViewInstance.listBaseOption, null, null, this);
            append(listItems, this.listViewInstance.ulElement);
            this.listViewInstance.liCollection = this.listViewInstance.curUL.querySelectorAll('li');
            this.topElement = this.listViewInstance.createElement('div');
            this.listViewInstance.ulElement.insertBefore(this.topElement, this.listViewInstance.ulElement.firstElementChild);
            this.bottomElement = this.listViewInstance.createElement('div');
            this.listViewInstance.ulElement.insertBefore(this.bottomElement, null);
            this.totalHeight = (Object.keys(curViewDS).length * this.listItemHeight) - (this.domItemCount * this.listItemHeight);
            this.topElement.style.height = 0 + 'px';
            this.bottomElement.style.height = this.totalHeight + 'px';
            this.topElementHeight = 0;
            this.bottomElementHeight = this.totalHeight;
        }
        else {
            this.listViewInstance.contentContainer = this.listViewInstance.element.querySelector('.e-content');
            this.listViewInstance.liCollection = this.listViewInstance.curUL.querySelectorAll('li');
        }
        this.listDiff = 0;
        this.uiIndicesInitialization();
    }
    wireScrollEvent(destroy) {
        if (!destroy) {
            if (!(isBlazor() && this.listViewInstance.isServerRendered)) {
                if (this.listViewInstance.isWindow) {
                    this.onVirtualScroll = this.onVirtualUiScroll.bind(this);
                    window.addEventListener('scroll', this.onVirtualScroll);
                }
                else {
                    EventHandler.add(this.listViewInstance.element, 'scroll', this.onVirtualUiScroll, this);
                }
            }
            else {
                if (this.listViewInstance.isWindow) {
                    // eslint-disable-next-line
                    this.onVirtualScroll = debounce(this.onVirtualUiScroll.bind(this), 350);
                    this.updateUl = this.updateUlContainer.bind(this);
                    window.addEventListener('scroll', this.onVirtualScroll);
                    window.addEventListener('scroll', this.updateUl);
                }
                else {
                    EventHandler.add(this.listViewInstance.element, 'scroll', debounce(this.onVirtualUiScroll, 350), this);
                    EventHandler.add(this.listViewInstance.element, 'scroll', this.updateUlContainer, this);
                }
            }
        }
        else {
            if (this.listViewInstance.isWindow === true) {
                window.removeEventListener('scroll', this.onVirtualScroll);
                window.removeEventListener('scroll', this.updateUl);
            }
            else {
                EventHandler.remove(this.listViewInstance.element, 'scroll', this.onVirtualUiScroll);
                EventHandler.remove(this.listViewInstance.element, 'scroll', this.updateUlContainer);
            }
        }
    }
    updateUlContainer(e) {
        let listDiff;
        const virtualElementContainer = this.listViewInstance.ulElement.querySelector('.' + classNames.virtualElementContainer);
        if (isNullOrUndefined(this.listViewInstance.liElementHeight)) {
            this.listViewInstance.updateLiElementHeight();
        }
        if (this.listViewInstance.isWindow) {
            // eslint-disable-next-line
            listDiff = Math.round(e.target.documentElement.scrollTop / this.listViewInstance.liElementHeight) - 2;
        }
        else {
            // eslint-disable-next-line
            listDiff = Math.round(e.target.scrollTop / this.listViewInstance.liElementHeight) - 2;
        }
        if (((listDiff - 1) * this.listViewInstance.liElementHeight) < 0) {
            virtualElementContainer.style.top = '0px';
        }
        else {
            virtualElementContainer.style.top = (listDiff) * this.listViewInstance.liElementHeight + 'px';
        }
    }
    ValidateItemCount(dataSourceLength) {
        const height = parseFloat(formatUnit(this.listViewInstance.height));
        let itemCount;
        if (this.listViewInstance.isWindow) {
            itemCount = Math.round((window.innerHeight / this.listItemHeight) * windowElementCount);
        }
        else {
            if (typeof this.listViewInstance.height === 'string' && this.listViewInstance.height.indexOf('%') !== -1) {
                // eslint-disable-next-line max-len
                itemCount = Math.round((this.listViewInstance.element.getBoundingClientRect().height / this.listItemHeight) * listElementCount);
            }
            else {
                itemCount = Math.round((height / this.listItemHeight) * listElementCount);
            }
        }
        if (itemCount > dataSourceLength) {
            itemCount = dataSourceLength;
        }
        return itemCount;
    }
    uiIndicesInitialization() {
        this.uiIndices = { 'activeIndices': [], 'disabledItemIndices': [], 'hiddenItemIndices': [] };
        const data = this.listViewInstance.curViewDS;
        for (let i = 0; i < data.length; i++) {
            if (this.listViewInstance.showCheckBox && data[i][this.listViewInstance.fields.isChecked]) {
                this.uiIndices.activeIndices.push(i);
            }
            // eslint-disable-next-line
            if (!isNullOrUndefined(data[i][this.listViewInstance.fields.enabled]) &&
                !data[i][this.listViewInstance.fields.enabled]) {
                // eslint-disable-next-line
                (this.uiIndices.disabledItemIndices.push(i));
            }
        }
        if (this.isNgTemplate()) {
            const items = this.listViewInstance.element.querySelectorAll('.' + classNames.listItem);
            for (let index = 0; index < items.length; index++) {
                items[index].context = this.listViewInstance.viewContainerRef.get(index).context;
            }
        }
    }
    refreshItemHeight() {
        if (this.listViewInstance.curViewDS.length) {
            const curViewDS = this.listViewInstance.curViewDS;
            if (isBlazor() && this.listViewInstance.isServerRendered) {
                this.listViewInstance.ulElement.children[0].style.height =
                    (this.listViewInstance.liElementHeight * (Object.keys(curViewDS).length)) + 'px';
            }
            else {
                this.listItemHeight = this.topElement.nextSibling.getBoundingClientRect().height;
                this.totalHeight = (Object.keys(curViewDS).length * this.listItemHeight) - (this.domItemCount * this.listItemHeight);
                this.bottomElementHeight = this.totalHeight;
                this.bottomElement.style.height = this.totalHeight + 'px';
            }
        }
    }
    getscrollerHeight(startingHeight) {
        return this.listViewInstance.isWindow ? (((pageYOffset - startingHeight) <= 0) ? 0 :
            (pageYOffset - startingHeight)) : ((this.listViewInstance.element.scrollTop - startingHeight) <= 0) ? 0 :
            (this.listViewInstance.element.scrollTop - startingHeight);
    }
    onVirtualUiScroll(e) {
        let startingHeight;
        if (this.listViewInstance.isWindow) {
            startingHeight = this.listViewInstance.ulElement.getBoundingClientRect().top -
                document.documentElement.getBoundingClientRect().top;
        }
        else {
            startingHeight = this.listViewInstance.headerEle ? this.listViewInstance.headerEle.getBoundingClientRect().height : 0;
        }
        this.scrollPosition = isNullOrUndefined(this.scrollPosition) ? 0 : this.scrollPosition;
        const scroll = this.getscrollerHeight(startingHeight);
        this.topElementHeight = this.listItemHeight * Math.floor(scroll / this.listItemHeight);
        this.bottomElementHeight = this.totalHeight - this.topElementHeight;
        [this.topElementHeight, this.bottomElementHeight] = scroll <= this.totalHeight ?
            [this.topElementHeight, this.bottomElementHeight] : [this.totalHeight, 0];
        if (isBlazor() && this.listViewInstance.isServerRendered) {
            let listDiff;
            if (isNullOrUndefined(this.listViewInstance.liElementHeight)) {
                this.listViewInstance.updateLiElementHeight();
            }
            if (this.listViewInstance.isWindow) {
                listDiff = Math.round(document.documentElement.scrollTop / this.listViewInstance.liElementHeight);
            }
            else {
                // eslint-disable-next-line
                listDiff = Math.round(e.target.scrollTop / this.listViewInstance.liElementHeight);
            }
            if ((listDiff - 2) - this.elementDifference >= 3 || (listDiff - 2) - this.elementDifference <= -1) {
                const args = { listDiff: listDiff - 2, selectedItems: this.listViewInstance.previousSelectedItems };
                this.listViewInstance.interopAdaptor.invokeMethodAsync('VirtalScrolling', args);
                if (this.listViewInstance.ulElement.querySelector('.e-focused')) {
                    this.listViewInstance.ulElement.querySelector('.e-focused').classList.remove('e-focused');
                }
                this.elementDifference = listDiff - 2;
            }
        }
        else {
            if (this.topElementHeight !== parseFloat(this.topElement.style.height)) {
                this.topElement.style.height = this.topElementHeight + 'px';
                this.bottomElement.style.height = this.bottomElementHeight + 'px';
                if (scroll > this.scrollPosition) {
                    const listDiff = Math.round(((this.topElementHeight / this.listItemHeight) - this.listDiff));
                    if (listDiff > (this.expectedDomItemCount + 5)) {
                        this.onLongScroll(listDiff, true);
                    }
                    else {
                        this.onNormalScroll(listDiff, true);
                    }
                }
                else {
                    const listDiff = Math.round((this.listDiff - (this.topElementHeight / this.listItemHeight)));
                    if (listDiff > (this.expectedDomItemCount + 5)) {
                        this.onLongScroll(listDiff, false);
                    }
                    else {
                        this.onNormalScroll(listDiff, false);
                    }
                }
            }
            this.listDiff = Math.round(this.topElementHeight / this.listItemHeight);
            if (typeof this.listViewInstance.onUIScrolled === 'function') {
                this.listViewInstance.onUIScrolled();
            }
        }
        this.scrollPosition = scroll;
    }
    onLongScroll(listDiff, isScrollingDown) {
        let index = isScrollingDown ? (this.uiFirstIndex + listDiff) : (this.uiFirstIndex - listDiff);
        const elements = this.listViewInstance.ulElement.querySelectorAll('li');
        for (let i = 0; i < elements.length; i++) {
            this.updateUI(elements[i], index);
            index++;
        }
        this.uiLastIndex = isScrollingDown ? (this.uiLastIndex + listDiff) : (this.uiLastIndex - listDiff);
        this.uiFirstIndex = isScrollingDown ? (this.uiFirstIndex + listDiff) : (this.uiFirstIndex - listDiff);
    }
    onNormalScroll(listDiff, isScrollingDown) {
        if (isScrollingDown) {
            for (let i = 0; i < listDiff; i++) {
                const index = ++this.uiLastIndex;
                this.updateUI(this.topElement.nextElementSibling, index, this.bottomElement);
                this.uiFirstIndex++;
            }
        }
        else {
            for (let i = 0; i < listDiff; i++) {
                const index = --this.uiFirstIndex;
                const target = this.topElement.nextSibling;
                this.updateUI(this.bottomElement.previousElementSibling, index, target);
                this.uiLastIndex--;
            }
        }
    }
    updateUiContent(element, index) {
        const curViewDs = this.listViewInstance.curViewDS;
        if (typeof this.listViewInstance.dataSource[0] === 'string' ||
            typeof this.listViewInstance.dataSource[0] === 'number') {
            element.dataset.uid = ListBase.generateId();
            element.getElementsByClassName(classNames.listItemText)[0].innerHTML =
                this.listViewInstance.curViewDS[index].toString();
        }
        else {
            // eslint-disable-next-line
            element.dataset.uid = (curViewDs[index][this.listViewInstance.fields.id]) ?
                // eslint-disable-next-line
                (curViewDs[index][this.listViewInstance.fields.id]) : ListBase.generateId();
            element.getElementsByClassName(classNames.listItemText)[0].innerHTML =
                // eslint-disable-next-line
                (curViewDs[index][this.listViewInstance.fields.text]);
        }
        if (this.listViewInstance.showIcon) {
            if (element.querySelector('.' + classNames.listIcon)) {
                detach(element.querySelector('.' + classNames.listIcon));
            }
            if (this.listViewInstance.curViewDS[index][this.listViewInstance.fields.iconCss]) {
                const textContent = element.querySelector('.' + classNames.textContent);
                const target = this.listViewInstance.createElement('div', {
                    className: classNames.listIcon + ' ' +
                        this.listViewInstance.curViewDS[index][this.listViewInstance.fields.iconCss]
                });
                textContent.insertBefore(target, element.querySelector('.' + classNames.listItemText));
            }
        }
        if (this.listViewInstance.showCheckBox && this.listViewInstance.fields.groupBy) {
            if (!this.checkListWrapper) {
                this.checkListWrapper = this.listViewInstance.curUL.querySelector('.' + classNames.checkboxWrapper).cloneNode(true);
            }
            const textContent = element.querySelector('.' + classNames.textContent);
            if (this.listViewInstance.curViewDS[index].isHeader) {
                if (element.querySelector('.' + classNames.checkboxWrapper)) {
                    element.classList.remove(classNames.checklist);
                    textContent.classList.remove(classNames.checkbox);
                    detach(element.querySelector('.' + classNames.checkboxWrapper));
                }
            }
            else {
                if (!element.querySelector('.' + classNames.checkboxWrapper)) {
                    element.classList.add(classNames.checklist);
                    textContent.classList.add(classNames.checkbox);
                    textContent.insertBefore(this.checkListWrapper.cloneNode(true), element.querySelector('.' + classNames.listItemText));
                }
            }
        }
    }
    changeElementAttributes(element, index) {
        element.classList.remove(classNames.disable);
        if (this.uiIndices.disabledItemIndices.length && this.uiIndices.disabledItemIndices.indexOf(index) !== -1) {
            element.classList.add(classNames.disable);
        }
        element.style.display = '';
        if (this.uiIndices.hiddenItemIndices.length && this.uiIndices.hiddenItemIndices.indexOf(index) !== -1) {
            element.style.display = 'none';
        }
        if (this.listViewInstance.showCheckBox) {
            const checklistElement = element.querySelector('.' + classNames.checkboxWrapper);
            element.classList.remove(classNames.selected);
            element.classList.remove(classNames.focused);
            if (checklistElement) {
                checklistElement.removeAttribute('aria-checked');
                checklistElement.firstElementChild.classList.remove(classNames.checked);
            }
            if (this.uiIndices.activeIndices.length && this.uiIndices.activeIndices.indexOf(index) !== -1 &&
                !this.listViewInstance.curUL.querySelector(classNames.selected)) {
                element.classList.add(classNames.selected);
                checklistElement.firstElementChild.classList.add(classNames.checked);
                checklistElement.setAttribute('aria-checked', 'true');
                if (this.activeIndex === index) {
                    element.classList.add(classNames.focused);
                }
            }
        }
        else {
            element.classList.remove(classNames.selected);
            element.removeAttribute('aria-selected');
            if (!isNullOrUndefined(this.activeIndex) && this.activeIndex === index &&
                !this.listViewInstance.curUL.querySelector(classNames.selected)) {
                element.classList.add(classNames.selected);
                element.setAttribute('aria-selected', 'true');
            }
        }
        if (this.listViewInstance.fields.groupBy) {
            if (this.listViewInstance.curViewDS[index].isHeader) {
                if (element.classList.contains(classNames.listItem)) {
                    element.classList.remove(classNames.listItem);
                    element.setAttribute('role', 'group');
                    element.classList.add(classNames.groupListItem);
                }
            }
            else {
                if (element.classList.contains(classNames.groupListItem)) {
                    element.classList.remove(classNames.groupListItem);
                    element.setAttribute('role', 'listitem');
                    element.classList.add(classNames.listItem);
                }
            }
        }
    }
    findDSAndIndexFromId(ds, fields) {
        const resultJSON = {};
        fields = this.listViewInstance.getElementUID(fields);
        if (!isNullOrUndefined(fields)) {
            ds.some((data, index) => {
                if ((fields[this.listViewInstance.fields.id] &&
                    // eslint-disable-next-line
                    fields[this.listViewInstance.fields.id]
                        // eslint-disable-next-line
                        === (data[this.listViewInstance.fields.id] && data[this.listViewInstance.fields.id]) || fields === data)) {
                    resultJSON.index = index;
                    resultJSON.data = data;
                    return true;
                }
                else {
                    return false;
                }
            });
        }
        return resultJSON;
    }
    getSelectedItems() {
        if (!isNullOrUndefined(this.activeIndex) || (this.listViewInstance.showCheckBox && this.uiIndices.activeIndices.length)) {
            const dataCollection = [];
            const textCollection = [];
            if (typeof this.listViewInstance.dataSource[0] === 'string' ||
                typeof this.listViewInstance.dataSource[0] === 'number') {
                const curViewDS = this.listViewInstance.curViewDS;
                if (this.listViewInstance.showCheckBox) {
                    const indices = this.uiIndices.activeIndices;
                    for (let i = 0; i < indices.length; i++) {
                        dataCollection.push(curViewDS[indices[i]]);
                    }
                    return {
                        text: dataCollection,
                        // eslint-disable-next-line
                        data: dataCollection,
                        index: this.uiIndices.activeIndices.map((index) => this.listViewInstance.dataSource.indexOf(curViewDS[index]))
                    };
                }
                else {
                    return {
                        text: curViewDS[this.activeIndex],
                        data: curViewDS[this.activeIndex],
                        index: this.listViewInstance.dataSource.indexOf(curViewDS[this.activeIndex])
                    };
                }
            }
            else {
                if (isBlazor() && this.listViewInstance.isServerRendered) {
                    let scrollDiff = Math.round(this.listViewInstance.element.scrollTop /
                        this.listViewInstance.liElementHeight) - 2;
                    if (scrollDiff < 0) {
                        scrollDiff = 0;
                    }
                    this.activeIndex += scrollDiff;
                }
                const curViewDS = this.listViewInstance.curViewDS;
                const text = this.listViewInstance.fields.text;
                if (this.listViewInstance.showCheckBox) {
                    const indexArray = this.uiIndices.activeIndices;
                    for (let i = 0; i < indexArray.length; i++) {
                        textCollection.push(curViewDS[indexArray[i]][text]);
                        dataCollection.push(curViewDS[indexArray[i]]);
                    }
                    const dataSource = this.listViewInstance.dataSource instanceof DataManager
                        ? curViewDS : this.listViewInstance.dataSource;
                    return {
                        text: textCollection,
                        // eslint-disable-next-line
                        data: dataCollection,
                        index: this.uiIndices.activeIndices.map((index) => dataSource.indexOf(curViewDS[index]))
                    };
                }
                else {
                    const dataSource = this.listViewInstance.dataSource instanceof DataManager
                        ? curViewDS : this.listViewInstance.dataSource;
                    return {
                        text: curViewDS[this.activeIndex][this.listViewInstance.fields.text],
                        // eslint-disable-next-line
                        data: curViewDS[this.activeIndex],
                        index: dataSource.indexOf(curViewDS[this.activeIndex])
                    };
                }
            }
        }
        else {
            return undefined;
        }
    }
    selectItem(obj) {
        const resutJSON = this.findDSAndIndexFromId(this.listViewInstance.curViewDS, obj);
        if (Object.keys(resutJSON).length) {
            const isSelected = this.activeIndex === resutJSON.index;
            let isChecked;
            this.activeIndex = resutJSON.index;
            if (this.listViewInstance.showCheckBox) {
                if (this.uiIndices.activeIndices.indexOf(resutJSON.index) === -1) {
                    isChecked = true;
                    this.uiIndices.activeIndices.push(resutJSON.index);
                }
                else {
                    isChecked = false;
                    this.uiIndices.activeIndices.splice(this.uiIndices.activeIndices.indexOf(resutJSON.index), 1);
                }
                if (this.listViewInstance.curUL.querySelector('.' + classNames.focused)) {
                    this.listViewInstance.curUL.querySelector('.' + classNames.focused).classList.remove(classNames.focused);
                }
            }
            if (this.listViewInstance.getLiFromObjOrElement(obj)) {
                if (this.listViewInstance.showCheckBox) {
                    this.listViewInstance.setCheckboxLI(this.listViewInstance.getLiFromObjOrElement(obj));
                }
                else {
                    this.listViewInstance.setSelectLI(this.listViewInstance.getLiFromObjOrElement(obj));
                }
            }
            else {
                let eventArgs;
                if (typeof this.listViewInstance.dataSource[0] === 'string' ||
                    typeof this.listViewInstance.dataSource[0] === 'number') {
                    eventArgs = {
                        text: this.listViewInstance.curViewDS[this.activeIndex],
                        data: this.listViewInstance.curViewDS[this.activeIndex],
                        index: this.activeIndex
                    };
                }
                else {
                    const curViewDS = this.listViewInstance.curViewDS;
                    eventArgs = {
                        text: curViewDS[this.activeIndex][this.listViewInstance.fields.text],
                        data: curViewDS[this.activeIndex],
                        index: this.activeIndex
                    };
                }
                if (this.listViewInstance.showCheckBox) {
                    eventArgs.isChecked = isChecked;
                    this.listViewInstance.trigger('select', eventArgs);
                }
                else if (!isSelected) {
                    this.listViewInstance.removeSelect();
                    this.listViewInstance.trigger('select', eventArgs);
                }
            }
        }
        else if (isNullOrUndefined(obj) && !this.listViewInstance.showCheckBox) {
            this.listViewInstance.removeSelect();
            this.activeIndex = undefined;
        }
        if (isBlazor() && this.listViewInstance.isServerRendered) {
            // eslint-disable-next-line
            const elementId = resutJSON.data[this.listViewInstance.fields.id];
            if (this.listViewInstance.showCheckBox) {
                if (!this.listViewInstance.previousSelectedItems.includes(elementId)) {
                    this.listViewInstance.previousSelectedItems.push(elementId);
                }
                else {
                    const indexPosition = this.listViewInstance.previousSelectedItems.indexOf(elementId);
                    if (indexPosition > -1) {
                        this.listViewInstance.previousSelectedItems.splice(indexPosition, 1);
                    }
                }
            }
            else {
                this.listViewInstance.previousSelectedItems[0] = elementId;
            }
            this.listViewInstance.removeActiveClass();
        }
    }
    enableItem(obj) {
        const resutJSON = this.findDSAndIndexFromId(this.listViewInstance.curViewDS, obj);
        if (isBlazor() && this.listViewInstance.isServerRendered) {
            // eslint-disable-next-line
            const itemId = resutJSON.data[this.listViewInstance.fields.id];
            if (!this.listViewInstance.enabledItems.includes(itemId)) {
                this.listViewInstance.enabledItems.push(itemId);
                this.listViewInstance.removeActiveClass();
            }
            if (this.listViewInstance.disabledItems.includes(itemId)) {
                const indexPosition = this.listViewInstance.disabledItems.indexOf(itemId);
                if (indexPosition > -1) {
                    this.listViewInstance.disabledItems.splice(indexPosition, 1);
                }
            }
        }
        else {
            if (Object.keys(resutJSON).length) {
                this.uiIndices.disabledItemIndices.splice(this.uiIndices.disabledItemIndices.indexOf(resutJSON.index), 1);
            }
        }
    }
    disableItem(obj) {
        const resutJSON = this.findDSAndIndexFromId(this.listViewInstance.curViewDS, obj);
        if (isBlazor() && this.listViewInstance.isServerRendered) {
            // eslint-disable-next-line
            const liElementId = resutJSON.data[this.listViewInstance.fields.id];
            if (!this.listViewInstance.disabledItems.includes(liElementId)) {
                this.listViewInstance.disabledItems.push(liElementId);
                this.listViewInstance.removeActiveClass();
            }
            if (this.listViewInstance.enabledItems.includes(liElementId)) {
                const indexPosition = this.listViewInstance.enabledItems.indexOf(liElementId);
                if (indexPosition > -1) {
                    this.listViewInstance.enabledItems.splice(indexPosition, 1);
                }
            }
        }
        else {
            if (Object.keys(resutJSON).length && this.uiIndices.disabledItemIndices.indexOf(resutJSON.index) === -1) {
                this.uiIndices.disabledItemIndices.push(resutJSON.index);
            }
        }
    }
    showItem(obj) {
        const resutJSON = this.findDSAndIndexFromId(this.listViewInstance.curViewDS, obj);
        if (isBlazor() && this.listViewInstance.isServerRendered) {
            // eslint-disable-next-line
            const hiddenElementId = resutJSON.data[this.listViewInstance.fields.id];
            if (this.listViewInstance.hiddenItems.includes(hiddenElementId)) {
                const indexPosition = this.listViewInstance.hiddenItems.indexOf(hiddenElementId);
                if (indexPosition > -1) {
                    this.listViewInstance.previousSelectedItems.splice(indexPosition, 1);
                    this.listViewInstance.removeActiveClass();
                }
            }
        }
        else {
            if (Object.keys(resutJSON).length) {
                this.uiIndices.hiddenItemIndices.splice(this.uiIndices.hiddenItemIndices.indexOf(resutJSON.index), 1);
            }
        }
    }
    hideItem(obj) {
        const resutJSON = this.findDSAndIndexFromId(this.listViewInstance.curViewDS, obj);
        if (isBlazor() && this.listViewInstance.isServerRendered) {
            // eslint-disable-next-line
            let elementId = resutJSON.data[this.listViewInstance.fields.id];
            if (!this.listViewInstance.hiddenItems.includes(elementId)) {
                this.listViewInstance.hiddenItems.push(elementId);
                this.listViewInstance.removeActiveClass();
            }
        }
        else {
            if (Object.keys(resutJSON).length && this.uiIndices.hiddenItemIndices.indexOf(resutJSON.index) === -1) {
                this.uiIndices.hiddenItemIndices.push(resutJSON.index);
            }
        }
    }
    removeItem(obj) {
        let dataSource;
        const curViewDS = this.listViewInstance.curViewDS;
        const resutJSON = this.findDSAndIndexFromId(curViewDS, obj);
        if (isBlazor() && this.listViewInstance.isServerRendered) {
            if (resutJSON.index !== undefined) {
                this.listViewInstance.interopAdaptor.invokeMethodAsync('RemoveItemPosition', resutJSON.index);
            }
        }
        if (Object.keys(resutJSON).length) {
            dataSource = resutJSON.data;
            if (curViewDS[resutJSON.index - 1] &&
                curViewDS[resutJSON.index - 1].isHeader &&
                (curViewDS[resutJSON.index - 1])
                    .items.length === 1) {
                this.removeUiItem(resutJSON.index - 1);
                this.removeUiItem(resutJSON.index - 1);
            }
            else {
                if (!(isBlazor() && this.listViewInstance.isServerRendered)) {
                    this.removeUiItem(resutJSON.index);
                }
            }
        }
        const listDataSource = this.listViewInstance.dataSource instanceof DataManager
            ? this.listViewInstance.localData : this.listViewInstance.dataSource;
        const index = listDataSource.indexOf(dataSource);
        if (index !== -1) {
            listDataSource.splice(index, 1);
            this.listViewInstance.setViewDataSource(listDataSource);
        }
        // recollect all the list item into collection
        this.listViewInstance.liCollection =
            this.listViewInstance.curUL.querySelectorAll('li');
    }
    // eslint-disable-next-line
    setCheckboxLI(li, e) {
        if (isBlazor() && this.listViewInstance.isServerRendered) {
            this.uiFirstIndex = Math.round(this.listViewInstance.element.scrollTop / 36) - 4;
            if (this.uiFirstIndex < 0) {
                this.uiFirstIndex = 0;
            }
        }
        const index = Array.prototype.indexOf.call(this.listViewInstance.curUL.querySelectorAll('li'), li) + this.uiFirstIndex;
        this.activeIndex = Array.prototype.indexOf.call(this.listViewInstance.curUL.querySelectorAll('li'), li) + this.uiFirstIndex;
        if (li.classList.contains(classNames.selected)) {
            if (this.uiIndices.activeIndices.indexOf(index) === -1) {
                this.uiIndices.activeIndices.push(index);
            }
        }
        else {
            this.uiIndices.activeIndices.splice(this.uiIndices.activeIndices.indexOf(index), 1);
        }
    }
    // eslint-disable-next-line
    setSelectLI(li, e) {
        this.activeIndex = Array.prototype.indexOf.call(this.listViewInstance.curUL.querySelectorAll('li'), li) + this.uiFirstIndex;
    }
    checkedItem(checked) {
        if (checked) {
            this.uiIndices.activeIndices = [];
            this.activeIndex = undefined;
            const data = this.listViewInstance.curViewDS;
            for (let index = 0; index < data.length; index++) {
                if (!data[index].isHeader) {
                    this.uiIndices.activeIndices.push(index);
                }
            }
        }
        else {
            this.activeIndex = undefined;
            this.uiIndices.activeIndices = [];
        }
    }
    addUiItem(index) {
        // virtually new add list item based on the scollbar position
        // if the scroll bar is at the top, just pretend the new item has been added since no UI
        // change is required for the item that has been added at last but when scroll bar is at the bottom
        // just detach top and inject into bottom to mimic new item is added
        const curViewDs = this.listViewInstance.curViewDS;
        this.changeUiIndices(index, true);
        if (this.activeIndex && this.activeIndex >= index) {
            this.activeIndex++;
        }
        if (this.listViewInstance.showCheckBox &&
            curViewDs[index][this.listViewInstance.fields.isChecked]) {
            this.uiIndices.activeIndices.push(index);
        }
        if (!parseFloat(this.bottomElement.style.height) && !parseFloat(this.topElement.style.height)) {
            this.bottomElement.style.height = parseFloat(this.bottomElement.style.height) + this.listItemHeight + 'px';
        }
        if (parseFloat(this.bottomElement.style.height)) {
            const liItem = this.listViewInstance.curUL.lastElementChild.previousSibling;
            const target = this.listViewInstance.getLiFromObjOrElement(curViewDs[index + 1]) ||
                this.listViewInstance.getLiFromObjOrElement(curViewDs[index + 2]);
            if (target) {
                this.bottomElement.style.height = parseFloat(this.bottomElement.style.height) + this.listItemHeight + 'px';
                this.updateUI(liItem, index, target);
            }
        }
        else {
            const liItem = this.listViewInstance.curUL.firstElementChild.nextSibling;
            let target;
            if ((Object.keys(this.listViewInstance.curViewDS).length - 1) === index) {
                target = this.listViewInstance.curUL.lastElementChild;
            }
            else {
                target = this.listViewInstance.getLiFromObjOrElement(curViewDs[index + 1]) ||
                    this.listViewInstance.getLiFromObjOrElement(curViewDs[index + 2]);
            }
            this.topElement.style.height = parseFloat(this.topElement.style.height) + this.listItemHeight + 'px';
            this.uiFirstIndex++;
            this.uiLastIndex++;
            if (target) {
                this.updateUI(liItem, index, target);
                if (this.listViewInstance.isWindow === true) {
                    window.scrollTo(0, (pageYOffset + this.listItemHeight));
                }
                else {
                    this.listViewInstance.element.scrollTop += this.listItemHeight;
                }
            }
        }
        this.totalHeight += this.listItemHeight;
        this.listDiff = Math.round(parseFloat(this.topElement.style.height) / this.listItemHeight);
    }
    removeUiItem(index) {
        this.totalHeight -= this.listItemHeight;
        const curViewDS = this.listViewInstance.curViewDS[index];
        const liItem = this.listViewInstance.getLiFromObjOrElement(curViewDS);
        this.listViewInstance.curViewDS.splice(index, 1);
        if (this.activeIndex && this.activeIndex >= index) {
            this.activeIndex--;
        }
        if (liItem) {
            if (this.domItemCount > Object.keys(this.listViewInstance.curViewDS).length) {
                detach(liItem);
                this.domItemCount--;
                this.uiLastIndex--;
                this.totalHeight = 0;
            }
            else {
                if (liItem.classList.contains(classNames.disable)) {
                    liItem.classList.remove(classNames.disable);
                    this.uiIndices.disabledItemIndices.splice(this.uiIndices.disabledItemIndices.indexOf(index), 1);
                }
                if (liItem.style.display === 'none') {
                    liItem.style.display = '';
                    this.uiIndices.hiddenItemIndices.splice(this.uiIndices.hiddenItemIndices.indexOf(index), 1);
                }
                if (this.listViewInstance.showCheckBox && liItem.classList.contains(classNames.selected)) {
                    this.listViewInstance.removeSelect();
                    this.uiIndices.activeIndices.splice(this.uiIndices.activeIndices.indexOf(index), 1);
                    const checklistElement = liItem.querySelector('.' + classNames.checkboxWrapper);
                    checklistElement.removeAttribute('aria-checked');
                    checklistElement.firstElementChild.classList.remove(classNames.checked);
                    if (liItem.classList.contains(classNames.focused)) {
                        liItem.classList.remove(classNames.focused);
                        this.activeIndex = undefined;
                    }
                }
                else if (liItem.classList.contains(classNames.selected)) {
                    this.listViewInstance.removeSelect();
                    this.activeIndex = undefined;
                }
                if (!parseFloat(this.bottomElement.style.height) && !parseFloat(this.topElement.style.height)) {
                    this.updateUI(liItem, this.uiLastIndex, this.bottomElement);
                }
                else if (parseFloat(this.bottomElement.style.height)) {
                    this.bottomElement.style.height = parseFloat(this.bottomElement.style.height) - this.listItemHeight + 'px';
                    this.updateUI(liItem, this.uiLastIndex, this.bottomElement);
                }
                else {
                    this.topElement.style.height = parseFloat(this.topElement.style.height) - this.listItemHeight + 'px';
                    this.updateUI(liItem, (this.uiFirstIndex - 1), this.topElement.nextSibling);
                    this.uiLastIndex--;
                    this.uiFirstIndex--;
                }
            }
        }
        this.changeUiIndices(index, false);
        this.listDiff = Math.round(parseFloat(this.topElement.style.height) / this.listItemHeight);
    }
    changeUiIndices(index, increment) {
        const keys = Object.keys(this.uiIndices);
        for (let ind = 0; ind < keys.length; ind++) {
            this.uiIndices[keys[ind]] = this.uiIndices[keys[ind]].map((i) => {
                if (i >= index) {
                    return increment ? ++i : --i;
                }
                else {
                    return i;
                }
            });
        }
    }
    addItem(data, fields, dataSource) {
        for (let i = 0; i < data.length; i++) {
            const currentItem = data[i];
            // push the given data to main data array
            dataSource.push(currentItem);
            // recalculate all the group data or other datasource related things
            this.listViewInstance.setViewDataSource(dataSource);
            // render list items for first time due to no datasource present earlier
            if (!this.domItemCount) {
                // fresh rendering for first time
                if ((this.listViewInstance.template || this.listViewInstance.groupTemplate) && !this.isNgTemplate()) {
                    this.listViewInstance.listBaseOption.template = null;
                    this.listViewInstance.listBaseOption.groupTemplate = null;
                    this.listViewInstance.listBaseOption.itemCreated = this.createUIItem.bind(this);
                }
                this.uiVirtualization();
                // when expected expected DOM count doesn't meet the condition we need to create and inject new item into DOM
            }
            else if (this.domItemCount < this.expectedDomItemCount) {
                const ds = this.listViewInstance.findItemFromDS(dataSource, fields);
                if (ds instanceof Array) {
                    if (this.listViewInstance.ulElement) {
                        let index = this.listViewInstance.curViewDS.indexOf(currentItem);
                        // inject new list item into DOM
                        this.createAndInjectNewItem(currentItem, index);
                        // check for group header item
                        const curViewDS = this.listViewInstance.curViewDS[index - 1];
                        if (curViewDS && curViewDS.isHeader && curViewDS.items.length === 1) {
                            // target group item index in datasource
                            --index;
                            // inject new group header into DOM for previously created list item
                            this.createAndInjectNewItem(curViewDS, index);
                        }
                    }
                    // recollect all the list item into collection
                    this.listViewInstance.liCollection =
                        this.listViewInstance.curUL.querySelectorAll('li');
                }
            }
            else {
                const index = this.listViewInstance.curViewDS.indexOf(currentItem);
                // virtually new add list item based on the scollbar position
                this.addUiItem(index);
                // check for group header item needs to be added
                const curViewDS = this.listViewInstance.curViewDS[index - 1];
                if (curViewDS && curViewDS.isHeader && curViewDS.items.length === 1) {
                    this.addUiItem(index - 1);
                }
            }
        }
    }
    createAndInjectNewItem(itemData, index) {
        // generate li item for given datasource
        let target;
        const li = ListBase.createListItemFromJson(this.listViewInstance.createElement, 
        // eslint-disable-next-line
        [itemData], this.listViewInstance.listBaseOption, null, null, this);
        // check for target element whether to insert before last item or group item
        if ((Object.keys(this.listViewInstance.curViewDS).length - 1) === index) {
            target = this.listViewInstance.curUL.lastElementChild;
        }
        else {
            // target group header's first child item to append its header
            target = this.listViewInstance.getLiFromObjOrElement(this.listViewInstance.curViewDS[index + 1]) ||
                this.listViewInstance.getLiFromObjOrElement(this.listViewInstance.curViewDS[index + 2]);
        }
        // insert before the target element
        this.listViewInstance.ulElement.insertBefore(li[0], target);
        // increment internal DOM count, last index count for new element
        this.domItemCount++;
        if (this.bottomElementHeight <= 0) {
            this.uiLastIndex++;
        }
        // recalculate the current item height, to avoid jumpy scroller
        this.refreshItemHeight();
    }
    createUIItem(args) {
        const virtualTemplate = this.listViewInstance.template;
        const template = this.listViewInstance.createElement('div');
        const commonTemplate = '<div class="e-text-content" role="presentation"> ' +
            '<span class="e-list-text"> ${' + this.listViewInstance.fields.text + '} </span></div>';
        if (this.listViewInstance.showCheckBox) {
            // eslint-disable-next-line
            this.listViewInstance.renderCheckbox(args);
            if ((!isNullOrUndefined(this.listViewInstance.virtualCheckBox)) &&
                (!isNullOrUndefined(this.listViewInstance.virtualCheckBox.outerHTML))) {
                const div = document.createElement('div');
                div.innerHTML = this.listViewInstance.template || commonTemplate;
                div.children[0].classList.add('e-checkbox');
                if (this.listViewInstance.checkBoxPosition === 'Left') {
                    div.children[0].classList.add('e-checkbox-left');
                }
                else {
                    div.children[0].classList.add('e-checkbox-right');
                }
                if (this.listViewInstance.checkBoxPosition === 'Left') {
                    div.children[0].insertBefore(this.listViewInstance.virtualCheckBox, div.childNodes[0].children[0]);
                }
                else {
                    div.children[0].appendChild(this.listViewInstance.virtualCheckBox);
                }
                this.listViewInstance.template = div.innerHTML;
            }
            template.innerHTML = this.listViewInstance.template;
            this.listViewInstance.template = virtualTemplate;
        }
        else {
            template.innerHTML = this.listViewInstance.template || commonTemplate;
        }
        // eslint-disable-next-line
        const templateElements = template.getElementsByTagName('*');
        const groupTemplate = this.listViewInstance.createElement('div');
        if (this.listViewInstance.fields.groupBy) {
            groupTemplate.innerHTML = this.listViewInstance.groupTemplate || commonTemplate;
        }
        // eslint-disable-next-line
        let groupTemplateElements = groupTemplate.getElementsByTagName('*');
        if (args.curData.isHeader) {
            this.headerData = args.curData;
        }
        this.templateData = args.curData.isHeader ? args.curData.items[0] :
            args.curData;
        args.item.innerHTML = '';
        args.item.context = { data: args.curData, nodes: { flatTemplateNodes: [], groupTemplateNodes: [] } };
        for (let i = 0; i < templateElements.length; i++) {
            this.compileTemplate(templateElements[i], args.item, false);
        }
        for (let i = 0; i < groupTemplateElements.length; i++) {
            this.compileTemplate(groupTemplateElements[i], args.item, true);
        }
        args.item.context.template = args.curData.isHeader ? template.firstElementChild :
            groupTemplate.firstElementChild;
        args.item.context.type = args.curData.isHeader ? 'flatList' : 'groupList';
        const element = args.curData.isHeader ? groupTemplate : template;
        args.item.insertBefore(element.firstElementChild, null);
    }
    compileTemplate(element, item, isHeader) {
        this.textProperty(element, item, isHeader);
        this.classProperty(element, item, isHeader);
        this.attributeProperty(element, item, isHeader);
    }
    onChange(newData, listElement) {
        listElement.context.data = newData;
        // eslint-disable-next-line max-len
        const groupTemplateNodes = listElement.context.nodes.groupTemplateNodes;
        // eslint-disable-next-line max-len
        const flatTemplateNodes = listElement.context.nodes.flatTemplateNodes;
        // eslint-disable-next-line
        if (!isNullOrUndefined(newData.isHeader) && newData.isHeader && listElement.context.type === 'groupList') {
            // eslint-disable-next-line
            const element = listElement.firstElementChild;
            detach(listElement.firstElementChild);
            listElement.insertBefore(listElement.context.template, null);
            listElement.context.template = element;
            listElement.context.type = 'flatList';
            for (let i = 0; i < groupTemplateNodes.length; i++) {
                // eslint-disable-next-line
                groupTemplateNodes[i].onChange(newData);
            }
        }
        else if (!newData.isHeader && listElement.context.type === 'flatList') {
            const element = listElement.firstElementChild;
            detach(listElement.firstElementChild);
            listElement.insertBefore(listElement.context.template, null);
            listElement.context.template = element;
            listElement.context.type = 'groupList';
            for (let i = 0; i < flatTemplateNodes.length; i++) {
                // eslint-disable-next-line
                flatTemplateNodes[i].onChange(newData);
            }
        }
        else if (!newData.isHeader) {
            for (let i = 0; i < flatTemplateNodes.length; i++) {
                // eslint-disable-next-line
                flatTemplateNodes[i].onChange(newData);
            }
        }
        else {
            for (let i = 0; i < groupTemplateNodes.length; i++) {
                // eslint-disable-next-line
                groupTemplateNodes[i].onChange(newData);
            }
        }
    }
    // eslint-disable-next-line
    updateContextData(listElement, node, isHeader) {
        if (isHeader) {
            listElement.context.nodes.groupTemplateNodes.push(node);
        }
        else {
            listElement.context.nodes.flatTemplateNodes.push(node);
        }
    }
    classProperty(element, listElement, isHeader) {
        const regex = new RegExp('\\${([^}]*)}', 'g');
        const resultantOutput = [];
        let regexMatch;
        while (regexMatch !== null) {
            const match = regex.exec(element.className);
            resultantOutput.push(match);
            regexMatch = match;
            if (regexMatch === null) {
                resultantOutput.pop();
            }
        }
        if (resultantOutput && resultantOutput.length) {
            for (let i = 0; i < resultantOutput.length; i++) {
                const classNameMatch = resultantOutput[i];
                // eslint-disable-next-line
                let classFunction;
                if (classNameMatch[1].indexOf('?') !== -1 && classNameMatch[1].indexOf(':') !== -1) {
                    // tslint:disable-next-line:no-function-constructor-with-string-args
                    classFunction = new Function('data', 'return ' + classNameMatch[1].replace(/\$/g, 'data.'));
                }
                else {
                    // tslint:disable-next-line:no-function-constructor-with-string-args
                    classFunction = new Function('data', 'return ' + 'data.' + classNameMatch[1]);
                }
                // eslint-disable-next-line
                const subNode = {};
                if (isHeader) {
                    subNode.bindedvalue = classFunction(this.headerData);
                }
                else {
                    subNode.bindedvalue = classFunction(this.templateData);
                }
                subNode.onChange = (value) => {
                    if (subNode.bindedvalue) {
                        removeClass([element], subNode.bindedvalue.split(' ').filter((css) => css));
                    }
                    const newCss = classFunction(value);
                    if (newCss) {
                        addClass([element], (newCss).split(' ').filter((css) => css));
                    }
                    subNode.bindedvalue = newCss;
                };
                const className = classNameMatch[0].split(' ');
                for (let i = 0; i < className.length; i++) {
                    element.classList.remove(className[i]);
                }
                if (subNode.bindedvalue) {
                    addClass([element], subNode.bindedvalue.split(' ').filter((css) => css));
                }
                this.updateContextData(listElement, subNode, isHeader);
            }
        }
    }
    attributeProperty(element, listElement, isHeader) {
        const attributeNames = [];
        for (let i = 0; i < element.attributes.length; i++) {
            attributeNames.push(element.attributes[i].nodeName);
        }
        if (attributeNames.indexOf('class') !== -1) {
            attributeNames.splice(attributeNames.indexOf('class'), 1);
        }
        for (let i = 0; i < attributeNames.length; i++) {
            const attributeName = attributeNames[i];
            const attrNameMatch = new RegExp('\\${([^}]*)}', 'g').exec(attributeName) || [];
            const attrValueMatch = new RegExp('\\${([^}]*)}', 'g').exec(element.getAttribute(attributeName))
                || [];
            // eslint-disable-next-line
            let attributeNameFunction;
            // eslint-disable-next-line
            let attributeValueFunction;
            if (attrNameMatch.length || attrValueMatch.length) {
                if (attrNameMatch[1]) {
                    // tslint:disable-next-line:no-function-constructor-with-string-args
                    attributeNameFunction = new Function('data', 'return ' + 'data.' + attrNameMatch[1]);
                }
                if (attrValueMatch[1]) {
                    if (attrValueMatch[1].indexOf('?') !== -1 && attrValueMatch[1].indexOf(':') !== -1) {
                        // tslint:disable-next-line:no-function-constructor-with-string-args
                        attributeValueFunction = new Function('data', 'return ' + attrValueMatch[1].replace(/\$/g, 'data.'));
                    }
                    else {
                        // tslint:disable-next-line:no-function-constructor-with-string-args
                        attributeValueFunction = new Function('data', 'return ' + 'data.' + attrValueMatch[1]);
                    }
                }
                // eslint-disable-next-line @typescript-eslint/ban-types
                const subNode = {};
                if (isHeader) {
                    subNode.bindedvalue = [attrNameMatch[1] === undefined ? undefined : attributeNameFunction(this.headerData),
                        attrValueMatch[1] === undefined ? undefined : attributeValueFunction(this.headerData)];
                }
                else {
                    subNode.bindedvalue = [attrNameMatch[1] === undefined ? undefined : attributeNameFunction(this.templateData),
                        attrValueMatch[1] === undefined ? undefined : attributeValueFunction(this.templateData)];
                }
                subNode.attrName = subNode.bindedvalue[0] === undefined ?
                    attributeName : subNode.bindedvalue[0];
                subNode.onChange = (value) => {
                    const bindedvalue = subNode.bindedvalue[1] === undefined ?
                        element.getAttribute(subNode.attrName) : attributeValueFunction(value);
                    element.removeAttribute(subNode.attrName);
                    subNode.attrName = subNode.bindedvalue[0] === undefined ? subNode.attrName : attributeNameFunction(value);
                    element.setAttribute(subNode.attrName, bindedvalue);
                    subNode.bindedvalue = [subNode.bindedvalue[0] === undefined ? undefined : attributeNameFunction(value),
                        subNode.bindedvalue[1] === undefined ? undefined : attributeValueFunction(value)];
                };
                const attributeValue = subNode.bindedvalue[1] === undefined ? element.getAttribute(attributeName) :
                    subNode.bindedvalue[1];
                element.removeAttribute(attributeName);
                element.setAttribute(subNode.attrName, attributeValue);
                this.updateContextData(listElement, subNode, isHeader);
            }
        }
    }
    textProperty(element, listElement, isHeader) {
        const regex = new RegExp('\\${([^}]*)}', 'g');
        const resultantOutput = [];
        let regexMatch;
        while (regexMatch !== null) {
            const match = regex.exec(element.innerText);
            resultantOutput.push(match);
            regexMatch = match;
            if (regexMatch === null) {
                resultantOutput.pop();
            }
        }
        const isChildHasTextContent = Array.prototype.some.call(element.children, (element) => {
            if (new RegExp('\\${([^}]*)}', 'g').exec(element.innerText)) {
                return true;
            }
            else {
                return false;
            }
        });
        if (resultantOutput && resultantOutput.length && !isChildHasTextContent) {
            for (let i = 0; i < resultantOutput.length; i++) {
                const textPropertyMatch = resultantOutput[i];
                // eslint-disable-next-line
                const subNode = {};
                // eslint-disable-next-line
                let textFunction;
                if (textPropertyMatch[1].indexOf('?') !== -1 && textPropertyMatch[1].indexOf(':') !== -1) {
                    // tslint:disable-next-line:no-function-constructor-with-string-args
                    textFunction = new Function('data', 'return ' + textPropertyMatch[1].replace(/\$/g, 'data.'));
                }
                else {
                    // tslint:disable-next-line:no-function-constructor-with-string-args
                    textFunction = new Function('data', 'return ' + 'data.' + textPropertyMatch[1]);
                }
                if (isHeader) {
                    subNode.bindedvalue = textFunction(this.headerData);
                }
                else {
                    subNode.bindedvalue = textFunction(this.templateData);
                }
                subNode.onChange = (value) => {
                    element.innerText = element.innerText.replace(subNode.bindedvalue, textFunction(value));
                    subNode.bindedvalue = textFunction(value);
                };
                element.innerText = element.innerText.replace(textPropertyMatch[0], subNode.bindedvalue);
                this.updateContextData(listElement, subNode, isHeader);
            }
        }
    }
    reRenderUiVirtualization() {
        this.wireScrollEvent(true);
        if (this.listViewInstance.contentContainer) {
            detach(this.listViewInstance.contentContainer);
        }
        this.listViewInstance.preRender();
        // resetting the dom count to 0, to avoid edge case of dataSource suddenly becoming zero
        // and then manually adding item using addItem API
        this.domItemCount = 0;
        this.listViewInstance.header();
        this.listViewInstance.setLocalData();
    }
    updateUI(element, index, targetElement) {
        // eslint-disable-next-line @typescript-eslint/ban-types
        const onChange = this.isNgTemplate() ? this.onNgChange : this.onChange;
        if (this.listViewInstance.template || this.listViewInstance.groupTemplate) {
            const curViewDS = this.listViewInstance.curViewDS[index];
            // eslint-disable-next-line
            element.dataset.uid = (curViewDS[this.listViewInstance.fields.id]) ?
                // eslint-disable-next-line
                (curViewDS[this.listViewInstance.fields.id]) : ListBase.generateId();
            onChange(curViewDS, element, this);
        }
        else {
            this.updateUiContent(element, index);
        }
        this.changeElementAttributes(element, index);
        if (targetElement) {
            this.listViewInstance.ulElement.insertBefore(element, targetElement);
        }
    }
    onNgChange(newData, listElement, virtualThis) {
        // compile given target element with template for new data
        // eslint-disable-next-line
        const templateCompiler = compile(virtualThis.listViewInstance.template);
        const resultElement = templateCompiler(newData);
        while (listElement.lastChild) {
            listElement.removeChild(listElement.lastChild);
        }
        listElement.appendChild(resultElement[0]);
    }
    getModuleName() {
        return 'virtualization';
    }
    destroy() {
        this.wireScrollEvent(true);
    }
}

/**
 * Listview Component
 */

/**
 * Listview Component
 */

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Sortable_1;
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Sortable Module provides support to enable sortable functionality in Dom Elements.
 * ```html
 * <div id="sortable">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 *   <div>Item 4</div>
 *   <div>Item 5</div>
 * </div>
 * ```
 * ```typescript
 *   let ele: HTMLElement = document.getElementById('sortable');
 *   let sortObj: Sortable = new Sortable(ele, {});
 * ```
 */
let Sortable = Sortable_1 = class Sortable extends Base {
    /* es-lint enable  */
    constructor(element, options) {
        super(options, element);
        // eslint-disable-next-line
        this.getHelper = (e) => {
            // eslint-disable-next-line prefer-const
            let target = this.getSortableElement(e.sender.target);
            if (!this.isValidTarget(target, this)) {
                return false;
            }
            let element;
            if (this.helper) {
                element = this.helper({ sender: target, element: e.element });
            }
            else {
                element = target.cloneNode(true);
                element.style.width = `${target.offsetWidth}px`;
                element.style.height = `${target.offsetHeight}px`;
            }
            addClass([element], ['e-sortableclone']);
            removeClass([element], ['e-listboxtool-container']);
            document.body.appendChild(element);
            return element;
        };
        // eslint-disable-next-line
        this.onDrag = (e) => {
            this.trigger('drag', { event: e.event, element: this.element, target: e.target });
            let newInst = this.getSortableInstance(e.target);
            let target = this.getSortableElement(e.target, newInst);
            if ((this.isValidTarget(target, newInst) || e.target.className.indexOf('e-list-group-item') > -1) && (this.curTarget !== target ||
                !isNullOrUndefined(newInst.placeHolder)) && (newInst.placeHolderElement ? newInst.placeHolderElement !== e.target :
                true)) {
                if (e.target.className.indexOf('e-list-group-item') > -1) {
                    target = e.target;
                }
                this.curTarget = target;
                if (this.target === target) {
                    return;
                }
                let oldIdx = this.getIndex(newInst.placeHolderElement, newInst);
                const placeHolder = this.getPlaceHolder(target, newInst);
                let newIdx;
                if (placeHolder) {
                    oldIdx = isNullOrUndefined(oldIdx) ? this.getIndex(this.target) : oldIdx;
                    newIdx = this.getIndex(target, newInst, e.event);
                    const isPlaceHolderPresent = this.isPlaceHolderPresent(newInst);
                    if (isPlaceHolderPresent && oldIdx === newIdx) {
                        return;
                    }
                    if (isPlaceHolderPresent) {
                        remove(newInst.placeHolderElement);
                    }
                    newInst.placeHolderElement = placeHolder;
                    if (e.target.className.indexOf('e-list-group-item') > -1) {
                        newInst.element.insertBefore(newInst.placeHolderElement, newInst.element.children[newIdx]);
                    }
                    else if (newInst.element !== this.element && newIdx === newInst.element.childElementCount) {
                        newInst.element.appendChild(newInst.placeHolderElement);
                    }
                    else {
                        newInst.element.insertBefore(newInst.placeHolderElement, newInst.element.children[newIdx]);
                    }
                    this.refreshDisabled(oldIdx, newIdx, newInst);
                }
                else {
                    oldIdx = isNullOrUndefined(oldIdx) ? this.getIndex(this.target) :
                        this.getIndex(target, newInst) < oldIdx || !oldIdx ? oldIdx : oldIdx - 1;
                    newIdx = this.getIndex(target, newInst);
                    const idx = newInst.element !== this.element ? newIdx : oldIdx < newIdx ? newIdx + 1 : newIdx;
                    this.updateItemClass(newInst);
                    newInst.element.insertBefore(this.target, newInst.element.children[idx]);
                    this.refreshDisabled(oldIdx, newIdx, newInst);
                    this.curTarget = this.target;
                    this.trigger('drop', {
                        droppedElement: this.target, element: newInst.element, previousIndex: oldIdx, currentIndex: newIdx,
                        target: e.target, helper: document.getElementsByClassName('e-sortableclone')[0], event: e.event, scope: this.scope
                    });
                }
            }
            newInst = this.getSortableInstance(this.curTarget);
            if (isNullOrUndefined(target) && e.target !== newInst.placeHolderElement) {
                if (this.isPlaceHolderPresent(newInst)) {
                    this.removePlaceHolder(newInst);
                }
            }
            else {
                const placeHolders = [].slice.call(document.getElementsByClassName('e-sortable-placeholder'));
                let inst;
                placeHolders.forEach((placeHolder) => {
                    inst = this.getSortableInstance(placeHolder);
                    if (inst.element && inst !== newInst) {
                        this.removePlaceHolder(inst);
                    }
                });
            }
        };
        // eslint-disable-next-line
        this.onDragStart = (e) => {
            this.target = this.getSortableElement(e.target);
            let cancelDrag = false;
            this.target.classList.add('e-grabbed');
            this.curTarget = this.target;
            e.helper = document.getElementsByClassName('e-sortableclone')[0];
            const args = { cancel: false, element: this.element, target: this.target };
            this.trigger('beforeDragStart', args, (observedArgs) => {
                if (observedArgs.cancel) {
                    cancelDrag = observedArgs.cancel;
                    this.onDragStop(e);
                }
            });
            if (cancelDrag) {
                return;
            }
            if (isBlazor) {
                this.trigger('dragStart', {
                    event: e.event, element: this.element, target: this.target,
                    bindEvents: e.bindEvents, dragElement: e.dragElement
                });
            }
            else {
                this.trigger('dragStart', { event: e.event, element: this.element, target: this.target });
            }
        };
        // eslint-disable-next-line
        this.onDragStop = (e) => {
            let dropInst = this.getSortableInstance(this.curTarget);
            let prevIdx;
            let curIdx;
            let handled;
            prevIdx = this.getIndex(this.target);
            const isPlaceHolderPresent = this.isPlaceHolderPresent(dropInst);
            if (isPlaceHolderPresent) {
                const curIdx = this.getIndex(dropInst.placeHolderElement, dropInst);
                let prevIndx = this === dropInst && (prevIdx - curIdx) > 0 ? prevIdx - 1 : prevIdx;
                const args = {
                    previousIndex: prevIndx, currentIndex: this.curTarget === this.target ? prevIndx : curIdx, target: e.target, droppedElement: this.target,
                    helper: e.helper, cancel: false, handled: false
                };
                this.trigger('beforeDrop', args, (observedArgs) => {
                    if (!observedArgs.cancel) {
                        handled = observedArgs.handled;
                        this.updateItemClass(dropInst);
                        if (observedArgs.handled) {
                            const ele = this.target.cloneNode(true);
                            this.target.classList.remove('e-grabbed');
                            this.target = ele;
                        }
                        dropInst.element.insertBefore(this.target, dropInst.placeHolderElement);
                        const curIdx = this.getIndex(this.target, dropInst);
                        prevIdx = this === dropInst && (prevIdx - curIdx) > 1 ? prevIdx - 1 : prevIdx;
                        this.trigger('drop', {
                            event: e.event, element: dropInst.element, previousIndex: prevIdx, currentIndex: curIdx,
                            target: e.target, helper: e.helper, droppedElement: this.target, scopeName: this.scope, handled: handled
                        });
                    }
                    remove(dropInst.placeHolderElement);
                });
            }
            dropInst = this.getSortableInstance(e.target);
            // eslint-disable-next-line prefer-const
            curIdx = dropInst.element.childElementCount;
            prevIdx = this.getIndex(this.target);
            if (dropInst.element === e.target || (!isPlaceHolderPresent && this.curTarget === this.target)) {
                const beforeDropArgs = {
                    previousIndex: prevIdx, currentIndex: this.curTarget === this.target ? prevIdx : curIdx,
                    target: e.target, droppedElement: this.target, helper: e.helper, cancel: false
                };
                this.trigger('beforeDrop', beforeDropArgs, (observedArgs) => {
                    if (dropInst.element === e.target && !observedArgs.cancel) {
                        this.updateItemClass(dropInst);
                        dropInst.element.appendChild(this.target);
                        this.trigger('drop', {
                            event: e.event, element: dropInst.element, previousIndex: prevIdx, currentIndex: curIdx,
                            target: e.target, helper: e.helper, droppedElement: this.target, scopeName: this.scope
                        });
                    }
                });
            }
            this.target.classList.remove('e-grabbed');
            this.target = null;
            this.curTarget = null;
            remove(e.helper);
            getComponent(this.element, Draggable).intDestroy(e.event);
        };
        this.bind();
    }
    bind() {
        if (!this.element.id) {
            this.element.id = getUniqueID('sortable');
        }
        if (!this.itemClass) {
            this.itemClass = 'e-sort-item';
            this.dataBind();
        }
        this.initializeDraggable();
    }
    initializeDraggable() {
        new Draggable(this.element, {
            helper: this.getHelper,
            dragStart: this.onDragStart,
            drag: this.onDrag,
            dragStop: this.onDragStop,
            dragTarget: `.${this.itemClass}`,
            enableTapHold: true,
            tapHoldThreshold: 200,
            queryPositionInfo: this.queryPositionInfo,
            distance: 5
        });
    }
    getPlaceHolder(target, instance) {
        if (instance.placeHolder) {
            const placeHolderElement = instance.placeHolder({ element: instance.element, grabbedElement: this.target, target: target });
            placeHolderElement.classList.add('e-sortable-placeholder');
            return placeHolderElement;
        }
        return null;
    }
    isValidTarget(target, instance) {
        return target && compareElementParent(target, instance.element) && target.classList.contains(instance.itemClass) &&
            !target.classList.contains('e-disabled');
    }
    removePlaceHolder(instance) {
        remove(instance.placeHolderElement);
        instance.placeHolderElement = null;
    }
    updateItemClass(instance) {
        if (this !== instance) {
            this.target.classList.remove(this.itemClass);
            this.target.classList.add(instance.itemClass);
        }
    }
    getSortableInstance(element) {
        element = closest(element, `.e-${this.getModuleName()}`);
        if (element) {
            const inst = getComponent(element, Sortable_1);
            return inst.scope && this.scope && inst.scope === this.scope ? inst : this;
        }
        else {
            return this;
        }
    }
    refreshDisabled(oldIdx, newIdx, instance) {
        if (instance === this) {
            let element;
            const increased = oldIdx < newIdx;
            let disabledIdx;
            let start = increased ? oldIdx : newIdx;
            const end = increased ? newIdx : oldIdx;
            while (start <= end) {
                element = this.element.children[start];
                if (element.classList.contains('e-disabled')) {
                    disabledIdx = this.getIndex(element);
                    this.element.insertBefore(element, this.element.children[increased ? disabledIdx + 2 : disabledIdx - 1]);
                    start = increased ? disabledIdx + 2 : disabledIdx + 1;
                }
                else {
                    start++;
                }
            }
        }
    }
    getIndex(target, instance = this, e) {
        let idx;
        let placeHolderPresent;
        [].slice.call(instance.element.children).forEach((element, index) => {
            if (element.classList.contains('e-sortable-placeholder')) {
                placeHolderPresent = true;
            }
            if (element === target) {
                idx = index;
                if (!isNullOrUndefined(e)) {
                    if (placeHolderPresent) {
                        idx -= 1;
                    }
                    const offset = target.getBoundingClientRect();
                    const clientY = offset.bottom - ((offset.bottom - offset.top) / 2);
                    idx = e.clientY <= clientY ? idx : idx + 1;
                }
                return;
            }
        });
        return idx;
    }
    getSortableElement(element, instance = this) {
        return closest(element, `.${instance.itemClass}`);
    }
    queryPositionInfo(value) {
        value.left = pageXOffset ? `${parseFloat(value.left) - pageXOffset}px` : value.left;
        value.top = pageYOffset ? `${parseFloat(value.top) - pageYOffset}px` : value.top;
        return value;
    }
    isPlaceHolderPresent(instance) {
        return instance.placeHolderElement && !!closest(instance.placeHolderElement, `#${instance.element.id}`);
    }
    /**
     * It is used to sort array of elements from source element to destination element.
     *
     * @param destination - Defines the destination element to which the sortable elements needs to be appended.
     *
     * If it is null, then the Sortable library element will be considered as destination.
     * @param targetIndexes - Specifies the sortable elements indexes which needs to be sorted.
     * @param insertBefore - Specifies the index before which the sortable elements needs to be appended.
     * If it is null, elements will be appended as last child.
     * @function moveTo
     * @returns {void}
     */
    moveTo(destination, targetIndexes, insertBefore) {
        moveTo(this.element, destination, targetIndexes, insertBefore);
    }
    /**
     * It is used to destroy the Sortable library.
     */
    destroy() {
        if (this.itemClass === 'e-sort-item') {
            this.itemClass = null;
            this.dataBind();
        }
        getComponent(this.element, Draggable).destroy();
        super.destroy();
    }
    getModuleName() {
        return 'sortable';
    }
    onPropertyChanged(newProp, oldProp) {
        for (const prop of Object.keys(newProp)) {
            switch (prop) {
                case 'itemClass':
                    [].slice.call(this.element.children).forEach((element) => {
                        if (element.classList.contains(oldProp.itemClass)) {
                            element.classList.remove(oldProp.itemClass);
                        }
                        if (newProp.itemClass) {
                            element.classList.add(newProp.itemClass);
                        }
                    });
                    break;
            }
        }
    }
};
__decorate$1([
    Property(false)
], Sortable.prototype, "enableAnimation", void 0);
__decorate$1([
    Property(null)
], Sortable.prototype, "itemClass", void 0);
__decorate$1([
    Property(null)
], Sortable.prototype, "scope", void 0);
__decorate$1([
    Property()
], Sortable.prototype, "helper", void 0);
__decorate$1([
    Property()
], Sortable.prototype, "placeHolder", void 0);
__decorate$1([
    Event()
], Sortable.prototype, "drag", void 0);
__decorate$1([
    Event()
], Sortable.prototype, "beforeDragStart", void 0);
__decorate$1([
    Event()
], Sortable.prototype, "dragStart", void 0);
__decorate$1([
    Event()
], Sortable.prototype, "beforeDrop", void 0);
__decorate$1([
    Event()
], Sortable.prototype, "drop", void 0);
Sortable = Sortable_1 = __decorate$1([
    NotifyPropertyChanges
], Sortable);
/**
 * It is used to sort array of elements from source element to destination element.
 *
 * @private
 */
function moveTo(from, to, targetIndexes, insertBefore) {
    let targetElements = [];
    if (!to) {
        to = from;
    }
    if (targetIndexes && targetIndexes.length) {
        targetIndexes.forEach((index) => {
            targetElements.push(from.children[index]);
        });
    }
    else {
        targetElements = [].slice.call(from.children);
    }
    if (isNullOrUndefined(insertBefore)) {
        targetElements.forEach((target) => {
            to.appendChild(target);
        });
    }
    else {
        const insertElement = to.children[insertBefore];
        targetElements.forEach((target) => {
            to.insertBefore(target, insertElement);
        });
    }
}

/**
 * Sortable Module
 */

/**
 * List Components
 */

export { classNames, FieldSettings, ListView, Virtualization, cssClass, ListBase, getFieldValues, Sortable, moveTo };
//# sourceMappingURL=ej2-lists.es2015.js.map
