Uses jquery + select2 to have basic search function to show results when matched with selected tags.
Function provided:
	validateCheck() - validate that the required data (tagArr, dataArr) has been defined
	changeList(listId, [data]) - add li to a ul matching listId, optional data is array of selected tags

Usage:

//define required data
var tagArr=["red", "green", "blue"];
var dataArr={"apple":["red","green"],"sky":["red","blue"],"car":["red","green","blue"],"grass":["green","blue"]};

$(document).ready(function() {
	if(!validateCheck()) {
		//show error
	}
	$("#e1").select2({tags:tagArr,width:500}).on("change", function(e) { changeList("results", e); });

	changeList("results"); //load default results
});