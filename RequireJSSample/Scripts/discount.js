define('discount',
    function () {
        // properties
        var pct = 0,
        // methods
        calculateDiscount = function (level) {
            switch (level) {
                case 'partner':
                    pct = 10;
                    break;
                case 'employee':
                    pct = 27;
                    break;
                default:
                    pct = 0;
            }
            return pct;
        }
        return {
            calculateDiscount: calculateDiscount
        };
    });