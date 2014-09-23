/* try some object stuff */

//List = new changeList("results", tagArr, dataArr);
//List.update(e);

	
function ChangeList(listId, tags, data) {
	console.log("ChangeList constructor"+JSON.stringify({list:listId, tags:tags, data:data}));
	this.listId = listId;
	this.tags = tags;
	this.data = data;
	if(!this.validateCheck()){
		throw "Invalid data";
	}
	console.log("ChangeList "+this.listId);
	//return this.validateCheck ? 0 : {error:true}; // return any primitive = object ok. return error object otherwise
}   //seems the above is bad idea. but i like it somehow

ChangeList.prototype.validateCheck = function() {
	if(typeof this.listId === 'undefined' ) {
		console.error("Required list not defined or empty, cannot continue");
		return false;
	}
	if(typeof this.data === 'undefined' || Object.keys(this.data).length == 0 ) {
		console.error("Required data not defined or empty, cannot continue");
		return false;
	}
	if(typeof this.tags === 'undefined' || Object.keys(this.tags).length == 0 ) {
		console.error("Required tags not defined or empty, cannot continue");
		return false;
	}
	console.log("validateCheck "+this.listId);
	return true;
}

ChangeList.prototype.changeList = function(data) {
	var selected;
	if(data) {
		console.log("Looking for changes in "+this.listId);
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
		this.updateList(data.val);
	}
	else {
		console.log("Nothing selected");
		this.updateList();	
	}
	console.log("changeList "+this.listId);
	return this;
}

ChangeList.prototype.updateList = function(search) {
	console.log(search);
	console.log("updateList "+this.listId);
	$("#"+this.listId).html(""); //clear old list
	var dataList = [];
	var found = [];
	for(var item in this.data){
		if(typeof search == 'undefined' || Object.keys(search).length == 0) {
			console.log("Adding "+item+" to "+this.listId);
			$("#"+this.listId).append($('<li/>').text(item));
		}
		else if(dataList.indexOf(item) == -1) { //don't add an item twice
			found[item] = 0;
			for(var tag in this.data[item]){
				if(search.indexOf(this.data[item][tag]) != -1) { //compare each of its tags to the current selected
					console.log("found! "+item+" has "+this.data[item][tag]);
					found[item]++;
				}
			}
			console.log("Search "+item+" tags: "+Object.keys(this.data[item]).length+" of "+found[item]);
			if(Object.keys(search).length == found[item]) {
				console.log("Adding "+item+" to "+this.listId);
				$("#"+this.listId).append($('<li/>').text(item));
			}
		}
	}
}