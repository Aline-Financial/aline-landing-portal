const sonarqubeScanner = require("sonarqube-scanner");
require('dotenv').config()

sonarqubeScanner({ 

    serverUrl: process.env.SONAR_HOST_URL,
    token: process.env.SONAR_TOKEN,
     
    options: {
        "sonar.sources":"src/setupTests.ts",
        "sonar.tests":"src/setupTests.ts",
        "sonar.test.exclusions":"**/tests/*.test.ts(x)?",
        "sonar.test.inclusions":"scr/**/*.ts(x)?",
        "sonar.typescript.lcov.reportPaths":"coverage/lcov.info",
        "sonar.testExecutionReportPaths":"reports/ut_report.xml"
    },

 }, () => { 
    console.log("Scanner Shutdown")
});