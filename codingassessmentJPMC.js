
function maxRangeSum(arr) {

    //takes string based input in format:
    //"N D1 D2 D3"
    //and converts to an array of integers from the D values
    //[D1, D2, D3]
    var arr = arr.split(' ').slice(1).map(i => parseInt(i));

    //initializes global and current maxium counter variables
    var curMax, max;
    curMax = max = 0;

    //iterates and find the maximum sum in the range of values
    for(let i = 0; i < arr.length; i++){
      curMax = Math.max(0, curMax + arr[i]);
      max = Math.max(max, curMax);
    }
    
    return max;
  }
  

function textDollar(num){

    //prompt was not clear as to whether the function is actually passed an integer, or if
    //it is reading a string from standard input that is the string representation of an integer.
    //if its the latter, please uncomment the next line of code:
    //num = parseInt(num);

    //map constant single digit terms
	const single_digits = [
        "Zero", "One", "Two", "Three", "Four", "Five", "Six",
        "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen",
		"Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
	]

    //map constant double digit terms
	const two_digits = [
		"", "", "Twenty", "Thirty",
		"Forty", "Fifty", "Sixty",
		"Seventy", "Eighty", "Ninety"
	]

    //map terms used for scaling past the hundreds place
	const scale_numbers = [
		"", "Thousand", "Million", "Billion"
	]

    //takes a grouping of three digits and returns the textual representation
	function parseGrouping(digits){

		var parsedText = "";
		var hundreds = Math.floor(digits / 100);
		var tensUnits = digits % 100;
		if(hundreds != 0){
			parsedText += single_digits[hundreds] + "Hundred";
		}
		var tens = Math.floor(tensUnits / 10);
		var units = tensUnits % 10;
		if(tens >= 2){
			parsedText += two_digits[tens];
			if(units != 0){
				parsedText += single_digits[units];
			}
		}
		else
		if(tensUnits != 0){
			parsedText += single_digits[tensUnits];
		}
		return parsedText;
    }
    
    //if number is 0, return Zero
	if(num == 0)
        return single_digits[0];
    
    //create three digit groupings of numbers
	var groupings = [];
	for(let i = 0; i < 4; i++){
		groupings.push((num % 1000));
		num = Math.floor(num/1000);
    }
    
    //parse the three digit groupings to text
	var groupedText = [];
	for(let i = 0; i < 4; i++){
		groupedText.push(parseGrouping(groupings[i]));
	}
    
    //create combined textual representation with scaling factors included.
	var combined = groupedText[0];
	for(let i = 1; i < 4; i++){
		if(groupings[i] != 0){
			var prefix = groupedText[i] + scale_numbers[i];
			combined = prefix + combined;
		}
	}
	return combined + "Dollars";
}