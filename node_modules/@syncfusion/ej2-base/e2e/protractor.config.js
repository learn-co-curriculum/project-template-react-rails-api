var shell = require('shelljs');
var os = require('os');
var camelCase = require('pix-diff/lib/camelCase.js');
var seleniumAddress = 'http://150.107.121.2:4444/wd/hub';
var request = require('request');
var config = require('../../../../config.json');
var RepalceRegex = /"/g;
var isDashBoardReport = config['dashBoardReport'];
var timeCal = {};
var fs = require('fs');
isDashBoardReport = isDashBoardReport === undefined ? true : isDashBoardReport;
if (isDashBoardReport) {
    var currentRepo = shell.exec('git config --get remote.origin.url', {
        silent: true
    })
        .stdout.split('essential-studio/')[1].replace('.git', '').replace('/', '').trim();
    var components = JSON.stringify(config.components);
    components = components.replace(RepalceRegex, '').replace('[', '').replace(']', '').trim();
    var branch = JSON.stringify(config.branchName);
    branch = branch.replace(RepalceRegex, '').trim();
    var toMail = config.toMailAddress;
    var ccMail = config.ccMailAddress;
}



exports.config = {
    allScriptsTimeout: 600000,

    getPageTimeout: 60000,

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 100000
    },
    multiCapabilities: [],

    specs: ['../../../../e2e/tests/**/*.spec.js'],

    onComplete: function () {
        if (isDashBoardReport) {
            var failurecount = 0;
            var resultjson = require('../../../../jasmine-test-results.json');
            var key = Object.keys(resultjson);
            var totalcount = 0;
            for (var i = 0; i < key.length; i++) {
                var Objects = resultjson[key[i]]["specs"];
                totalcount = totalcount + Objects.length;
                for (var j = 0; j < Objects.length; j++) {
                    if (Objects[j].status === "failed") {
                        failurecount++;
                    }
                }
            }
            ccMail.push("ej2core@syncfusion.com");
            var data = {
                RepositoryName: currentRepo,
                ComponentName: components,
                BranchName: branch,
                StartDate: new Date(),
                EndDate: new Date(),
                Type: "Desktop",
                TotalTestCaseCount: totalcount,
                FailureTestCaseCount: failurecount,
                SuccessTestCaseCount: totalcount - failurecount,
                Browser: browser.browserName,
                toMailAddress: toMail,
                ccMailAddress: ccMail

            };
            var status = failurecount.length ? 'Failure' : 'Success';
            var successCount = totalcount - failurecount;
            var notRun = totalcount - (successCount + failurecount);
            if (fs.existsSync('./testreport')) {
                shell.cd('./testreport');
                shell.exec('Syncfusion.UpdateTestResults.exe /Platform:"JavaScript - EJ2" /Control:"' + components +
                    '" /TestingTool:"Selenium" /StartTime:"' + new Date().toLocaleTimeString() + '" /EndTime:"' + new Date().toLocaleTimeString() +
                    '" /Status:"' + status + '" /TotalTestCase:' + totalcount +
                    ' /SuccessCount:' + successCount + ' /FailureCount:' + failurecount + ' /NotRunCount:' + notRun + ' /UpdatedBy:"' + toMail[0] + '"');
                shell.cd('../');
            }
            request({
                url: 'https://ej2services.syncfusion.com/cicentral/api/getE2EReport',
                method: 'POST',
                json: true,
                body: data,
                headers: {
                    'authorization': 'ej2centrailzedstatus',
                    'content-type': 'application/json'
                }
            });
        }

        browser.driver.quit();
        console.log(browser.browserName + ' driver closed!');
    },

    onPrepare: function () {
        const PixDiff = require('pix-diff');
        const fs = require('fs');
        const path = require('path');
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled = false;
        browser.isDesktop = true;
        timeCal['startTime'] = new Date().toLocaleTimeString();
        browser.basePath = require('../../../../protractor.browser.json').basePath;

        browser.driver.manage().window().setSize(1600, 1200);
        var JSONReporter = require('jasmine-json-test-reporter');
        jasmine.getEnv().addReporter(new JSONReporter({
            file: 'jasmine-test-results.json',
            beautify: true,
            indentationLevel: 4 // used if beautify === true
        }));

        //move to out off user screen
        browser.driver.manage().window().setPosition(2500, 0);

        browser.load = function (path) {
            browser.get(browser.basePath + path);
            browser.wait(function () {
                return element(By.css('.e-control')).isDisplayed();
            }, 3000);

            if (browser.css) {
                browser.injectCss(browser.css);
            }
        }

        browser.loadAsync = function (path) {
            return browser.get(browser.basePath + path);
        }

        browser.getCapabilities().then(function (cap) {

            browser.browserName = cap.get('browserName');

            browser.pixResult = PixDiff;

            browser.pixDiff = new PixDiff({
                basePath: './e2e',
                diffPath: './e2e',
                formatImageName: '{tag}'
            });

            //override difference path
            browser.pixDiff.diffPath = path.normalize(camelCase('./e2e/Diff/' + browser.browserName));
            //create folder if not present
            createF(browser.pixDiff.diffPath);

            browser.compareScreen = function (element, fileName, opt) {
                var folderName = fileName;
                var fArr = fileName.split('/');
                if (fArr.length > 1) {
                    fArr.splice(-1, 1);
                    folderName = fArr.join('/')
                    createF(camelCase('e2e/expected/' + browser.pixDiff.browserName + '/' + folderName));
                    createF(camelCase('e2e/actual/' + browser.pixDiff.browserName + '/' + folderName));
                }

                // thresholdType: 'percent',
                // threshold: 0.009,
                var option = {
                    imageAPath: '/expected/' + browser.pixDiff.browserName + '/' + fileName, // Use file-path 
                    imageBPath: '/actual/' + browser.pixDiff.browserName + '/' + fileName,
                    filter: ['grayScale'],
                    debug: true,
                    hideShift: true,
                };
                var doneFn = arguments[arguments.length - 1];
                if (typeof opt === 'object' && Object.keys(opt).length) {
                    Object.assign(option, opt);
                }
                browser.pixDiff.saveRegion(element, '/Actual/' + browser.pixDiff.browserName + '/' + fileName, option).then(() => {
                    var fPathName = path.resolve(__dirname, '../../../../' + camelCase('e2e/expected/' + browser.pixDiff.browserName + '/' + fileName) + '.png');
                    if (!fs.existsSync(fPathName) && fs.existsSync(fPathName.replace("Expected", "Actual"))) {
                        fs.copyFileSync(fPathName.replace("Expected", "Actual"), fPathName);
                        console.log('Expected Image Created : /expected/' + browser.pixDiff.browserName + '/' + fileName);
                    }
                    browser.saveCheckImage(element, fileName, option, doneFn);
                });
            }

            browser.saveCheckImage = function (element, fileName, option, doneFn) {
                browser.pixDiff.checkRegion(element, '/Expected/' + browser.pixDiff.browserName + '/' + fileName, option).then((result) => {
                    //
                    // *  - `RESULT_UNKNOWN`: 0
                    // *  - `RESULT_DIFFERENT`: 1
                    // *  - `RESULT_SIMILAR`: 7
                    // *  - `RESULT_IDENTICAL`: 5
                    console.log(JSON.stringify(result));
                    expect(result.code).toEqual(browser.pixResult.RESULT_IDENTICAL);
                    if (typeof doneFn === 'function') {
                        doneFn();
                    }
                });
            }

            browser.waitForEvent = function (id, moduleName, eventName) {
                return browser.executeAsyncScript(function (id, moduleName, eventName, callback) {
                    var instances = document.getElementById(id).ej2_instances;
                    var instanceObj;
                    for (var i = 0; instances && i < instances.length; i++) {
                        if (instances[i].getModuleName() == moduleName) {
                            instanceObj = instances[i]
                        }
                    }
                    if (instanceObj) {
                        var handler;
                        handler = function (e) {
                            instanceObj.removeEventListener(eventName, handler);
                            callback();
                        };
                        instanceObj.addEventListener(eventName, handler);
                    } else {
                        callback();
                    }
                }, id, moduleName, eventName);
            }

            browser.injectScript = function (path, callback) {
                return browser.executeAsyncScript(function (path) {
                    var head = document.getElementsByTagName('head')[0];
                    var script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.onload = function () {
                        callback();
                    }
                    script.src = path;
                    head.appendChild(script);
                }, browser.basePath + path);

            }

            browser.injectCss = function (content) {
                return browser.wait(browser.executeScript(`
                        var style = document.createElement('style');
                        style.id = 'browsercss';
                        if (style.styleSheet) {style.styleSheet.cssText = '` + content + `';}
                        else{style.appendChild(document.createTextNode('` + content + `'));}
                        document.head.appendChild(style);
                        `));
            }

        });

    },
};

//Browser Configuration 
if (config.browsers && config.browsers.length) {
    for (var i = 0; i < config.browsers.length; i++) {
        var browserName = config.browsers[i];
        exports.config.multiCapabilities.push({
            'browserName': browserName
        });
    }
} else {
    if (os.platform() === 'win32') {
        exports.config.multiCapabilities.push({
            'browserName': 'internet explorer'
        });
        if (Number(os.release().split('.')[0]) >= 10) {
            exports.config.multiCapabilities.push({
                'browserName': 'MicrosoftEdge'
            });
        }
    }
    exports.config.multiCapabilities.push({
        'browserName': 'firefox'
    });
    exports.config.multiCapabilities.push({
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['no-sandbox']
        }
    });
}
exports.config.seleniumAddress = config.seleniumAddress || 'http://localhost:4444/wd/hub/';

function createF(path) {
    shell.mkdir('-p', path);
}
