/*
Required data objects for searchtag to work.
tagArr is simple array which contains the possible 'tags' to be used
dataArr is associative array (aka Object) which contains items and the tags which belong to the item
Arguably this file could be generated from some interface, but baby steps
*/

var tagArr=["red", "green", "blue"];
var dataArr={"apple":["red","green"],
			 "sky":["red","blue"],
			 "car":["red","green","blue"],
			 "grass":["green","blue"]
			};