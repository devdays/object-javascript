require.config({
    // path begins at the current location
    paths: {
        // you could use a CDN version of jQuery or whatever
        // just point to it in paths
        // "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
        "jquery": "../../Scripts/jquery-2.0.3",
        "_": "../../Scripts/lodash",
    }
});


require(
    // use the module.template.js file 
    ['../modules/template'],

    // to call the template module and call the showName method
    function (template) {
        template.showName("Jack");
});

