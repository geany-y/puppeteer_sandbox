var casper = require('casper').create();
var url = 'https://www.yahoo.co.jp/';


casper.start(url, function() {
    this.capture('google.png');
    /*
    var js = this.evaluate(function() {
        return document;
    });
    */
    //this.echo(js.all[0].outerHTML);
    //this.echo(casper.getPageContent());
    //this.debugHTML();

});
/*
        casper.on('page.resource.received', function(resource) {
        this.echo(resource.stage);
        //if (resource.stage !== "end") {
            this.echo(casper.getPageContent());
        //}
        });
*/
casper.run();
