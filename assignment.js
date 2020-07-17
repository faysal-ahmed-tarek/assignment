
                   ///1. Feet To Mile Assignment start here///

function feetToMile(feet){
    var mile = feet / 5280 ;
    return mile ;
}
var conversion = feetToMile(520);
console.log(conversion);

                    /// Feet To Mile Assignment end here///


                    ///2. wood calculator assignment start here  ///


function woodCalculator(chair,table,bed){
    var chair = chair * 1;
    var table = table * 3;
    var bed = bed * 5 ;
var furniture = chair + table + bed ;
return furniture ;

}
console.log(woodCalculator(2,3,1));

                    /// wood calculator assignment end here  ///


                            ///3. building assignment strt here   ///

                    function brickCalculator(floor) {
                        if (floor <= 10) {
                            var Eit = (floor * 15 * 1000);
                            return Eit;
                        }
                    
                        else if (floor > 10 && floor < 20) {
                            var Eit = (10 * 15 * 1000) + (floor - 10) * 12 * 1000;
                        return Eit;
                    }
                    
                        else if (floor => 20) {
                        var Eit = (10 * 15 * 1000) + (10 * 12 * 1000) + (floor - 20) * 10 * 1000;
                    return Eit;
                        }
                    }
                    
                    var result = brickCalculator(30)
                    console.log(result);

                            /// building assignment assignment end here   ///




                            /// 4.tiny Friend assignment strt here   ///
function tinyFriend(name1,name2,name3,name4,name5){
     var marks = [name1,name2,name3,name4,name5];

    var max = marks[0];

for(var i=0;i<marks.length; i++){
    var element = marks[i];
     if(element.length < max.length){
         max = element;
             } }
return max ;

} console.log(tinyFriend("faysal","faruk","ali","tarek","fahim ahmed"));

                            /// tiny Friend assignment strt here   ///




