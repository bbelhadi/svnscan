var 
    conf = require('./conf'),
    scansvn = require('./assets/scan'),
    formatData = require('./assets/formatData'),
    repo = conf.svn.repo
;

scansvn(repo, function(err, report){
    console.log(formatData(report));
});