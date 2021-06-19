require('./crypto');
var shell = require('shelljs');
var os = require('os');
var camelCase = require('pix-diff/lib/camelCase.js');
var config = require('../../../../config.json');
var request = require('request');
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



var commonCap = {
    'browserstack.user': global.encrypt_decrypt.decrypt('c517d44b27fd03d45d94ea52b59c6b4b'),
    'browserstack.key': global.encrypt_decrypt.decrypt('2e03c613f7035effb9d2d467109d50cb0ed8418b5394cf084189878ae7fe4710'),
    "browserstack.debug": "false",
}
var defaultCap = [{
    "device": "Samsung Galaxy S8",
    "browserName": "chrome",
    "realMobile": "true",
    "os_version": "7.0"
},
{
    "device": "iPhone SE",
    "browserName": "safari",
    "realMobile": "true",
    "os_version": "11.2"
}
];
var capabilities = config['multiCapabilities'];
capabilities = capabilities ? capabilities : defaultCap;
capabilities.map((val, i) => {
    return Object.assign(val, commonCap);
});
exports.config = {

    seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',

    multiCapabilities: capabilities,

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 1000000
    },

    // Path to change
    specs: ['../../../../e2e/mobile-tests/**/*.spec.js'],

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
                Type: "Mobile",
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
        browser.isDesktop = false;
        timeCal['startTime'] = new Date().toLocaleTimeString();
        //Path to change
        browser.basePath = require('../../../../protractor.browser.json').basePath;
        var JSONReporter = require('jasmine-json-test-reporter');
        jasmine.getEnv().addReporter(new JSONReporter({
            file: 'jasmine-test-results.json',
            beautify: true,
            indentationLevel: 4 // used if beautify === true
        }));
        // Print User Agent
        browser.executeAsyncScript(function (callback) {
            callback(navigator.userAgent);
        }).then(function (uA) {
            console.log(uA);
        });

        browser.getCapabilities().then(function (cap) {
            browser.browserName = cap.get('browserName');

            browser.pixResult = PixDiff;

            browser.pixDiff = new PixDiff({
                basePath: './e2e',
                diffPath: './e2e',
                formatImageName: '{tag}'
            });
            browser.pixDiff.platformName = cap.get('platformName');
            browser.pixDiff.deviceModel = cap.get('deviceModel');
            browser.pixDiff.deviceName = cap.get('deviceName');
            if (cap.get('platformName') === 'Android') {

                browser.pixDiff.devicePath = browser.pixDiff.platformName + '/' + browser.pixDiff.deviceModel;
            } else {
                browser.pixDiff.devicePath = browser.pixDiff.platformName + '/' + browser.pixDiff.deviceName;
            }
            console.log('check Device Path is : ', browser.pixDiff.devicePath);

            //override difference path
            browser.pixDiff.diffPath = path.normalize(camelCase('./e2e/' + browser.pixDiff.devicePath + '/Diff/'));
            //create folder if not present
            createF(browser.pixDiff.diffPath);

            browser.compareScreen = function (element, fileName, opt) {

                var folderName = fileName;
                var fArr = fileName.split('/');
                if (fArr.length > 1) {
                    fArr.splice(-1, 1);
                    folderName = fArr.join('/')
                    createF(camelCase('e2e/mobile/expected/' + browser.pixDiff.devicePath));
                    createF(camelCase('e2e/mobile/actual/' + browser.pixDiff.devicePath));
                }
                // thresholdType: 'percent',
                // threshold: 0.009,
                var option = {
                    imageAPath: '/mobile/expected/' + browser.pixDiff.devicePath + '/' + fileName, // Use file-path 
                    imageBPath: '/mobile/actual/' + browser.pixDiff.devicePath + '/' + fileName,
                    filter: ['grayScale'],
                    debug: true,
                    hideShift: true,
                };
                var doneFn = arguments[arguments.length - 1];
                if (typeof opt === 'object' && Object.keys(opt).length) {
                    Object.assign(option, opt);
                }

                browser.pixDiff.saveRegion(element, '/mobile/Actual/' + browser.pixDiff.devicePath + '/' + fileName, option).then(() => {
                    var fPathName = path.resolve(__dirname, '../../../../' + camelCase('e2e/mobile/Expected/' + browser.pixDiff.devicePath + '/' + fileName) + '.png');
                    if (!fs.existsSync(fPathName) && fs.existsSync(fPathName.replace("Expected", "Actual"))) {
                        fs.copyFileSync(fPathName.replace("Expected", "Actual"), fPathName);
                        console.log('Expected Image Created : /mobile/Expected/' + browser.pixDiff.devicePath + '/' + fileName);
                    }
                    browser.saveCheckImage(element, fileName, option, doneFn);
                });


            }
            browser.saveCheckImage = function (element, fileName, option, doneFn) {
                browser.pixDiff.checkRegion(element, '/mobile/Expected/' + browser.pixDiff.devicePath + '/' + fileName, option).then(function (result) {
                    //
                    // *  - `RESULT_UNKNOWN`: 0
                    // *  - `RESULT_DIFFERENT`: 1
                    // *  - `RESULT_SIMILAR`: 7
                    // *  - `RESULT_IDENTICAL`: 5
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
            browser.load = function (path) {
                browser.get(browser.basePath + path);
                browser.wait(function () {
                    browser.sleep(30000);
                    return element(By.css('.e-control')).isDisplayed();
                }, 30000);
                if (browser.css) {
                    browser.injectCss(browser.css);
                }
            }
            browser.loadAsync = function (path) {
                return browser.get(browser.basePath + path);
            }


        });

    },
};

function createF(path) {
    shell.mkdir('-p', path);
}
