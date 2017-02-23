module.exports = {
    files: {
        javascripts: {
            joinTo: {
                'vendor.js': /^node_modules/,
                'app.js': /^app/
            }
        },
        stylesheets: {
            joinTo: {
                'vendor.css': /^node_modules/,
                'app.css': /^app/
            }
        }
        ,
        templates: {
            joinTo: {
                'templates.js': /^app/
            }
        }
    },
    plugins: {
        babel: {
            "presets": ["es2015", "stage-1"],
            "plugins": [
                "transform-es2015-destructuring",
                "transform-object-rest-spread",
                "transform-decorators-legacy"
            ]
        },
        copycat: {
            "fonts": ["node_modules/bootstrap/fonts", "node_modules/angular-ui-grid/ui-grid.eot",
                "node_modules/angular-ui-grid/ui-grid.svg", "node_modules/angular-ui-grid/ui-grid.ttf", "node_modules/angular-ui-grid/ui-grid.woff"],
            verbose: true, //shows each file that is copied to the destination directory 
            onlyChanged: true
        }
    },

    npm: {
        styles: { bootstrap: ['dist/css/bootstrap.css'] , "angular-ui-grid": ['ui-grid.css']},
        static: ['node_modules/bootstrap/dist/js/bootstrap.min.js'],
        globals: { angular: 'angular', $: 'jquery', jQuery: 'jquery' } // force this element to required in vendor.js
    },
    paths: {
        public: "wwwroot"
    }
    //server: {
    //    //run:false,
    //    port: 6834
    //}
};
