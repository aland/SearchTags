/* Functions to aid in updating a list based on search tags.
 * Assumes dataArr is populated with Object with Array of structure
 * var dataArray = {"item1":["tag1", "tag2"], "item2":["tag2", "tag3"]};
 */
//console.log(dataArr);
function validateCheck() {
	if(typeof dataArr === 'undefined' || Object.keys(dataArr).length == 0 ) {
		console.error("Required dataArr not defined or empty, cannot continue");
		return false;
	}
	if(typeof tagArr === 'undefined' || Object.keys(tagArr).length == 0 ) {
		console.error("Required tagArr not defined or empty, cannot continue");
		return false;
	}
	return true;
}

/* function for onchange event listener */
function changeList(listId, data) {
	var selected;
	if(data) {
		//console.log(data.arg);
		if(data.added != undefined) {
			console.log("Data added: "+data.added.text);
		}
		else if(data.removed != undefined) {
			console.log("Data removed: "+data.removed.text);
		}
		else {
			console.log("Unexpected data in changeList. "
						+ JSON.stringify({val:data.val, added:data.added, removed:data.removed}));
			return false;
		}
		console.log("Total selected tags: " + data.val);
		updateList(listId, dataArr, data.val);
	}
	else {
		console.log("Nothing selected");
		updateList(listId, dataArr);	
	}
}


/* update a UL tag (listId) with LI based on matching keys in data */
function updateList(listId, data, keys) {
	console.log(keys);
	$("#"+listId).html(""); //clear old list
	var dataList = [];
	$.each(data, function(item, tags) { //go through our list
		console.log("looking for "+item);
		if(typeof keys == 'undefined' || Object.keys(keys).length == 0) {
			$("#"+listId).append($('<li/>').text(item));
		}
		else if(dataList.indexOf(item) == -1) { //don't add an item twice
			$.each(tags, function(j, tag) {
				if(keys.indexOf(tag) != -1) { //compare each of its tags to the current selected
					console.log("found! "+item+" has "+tag);
					dataList.push(item);
					$("#"+listId).append($('<li/>').text(item));
					return false; //break into outer loop
				}
				//console.log(i+" has "+item);
			});
		}
	});
}
