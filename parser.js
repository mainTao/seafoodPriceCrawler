var cheerio = require('cheerio');

var parse = function(body){
    var $ = cheerio.load(body);
    var str = '';
    var $rows = $('.pricebox .price');
    $rows.splice(0, 1); // skip header row

    $rows.each(function(){
        var $cells = $(this).children();
        $cells.each(function(index){
            str += $(this).text().trim();
            if((index + 1) % 7 === 0){
                str += '\n';
            }
            else{
                str += '|';
            }
        });
    });

    if(str.length > 1000){ // success
        return str;
    }
    else{ // error
        return -1;
    }
};

exports.parse = parse;