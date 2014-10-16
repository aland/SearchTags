Uses jquery + select2 to have basic search function to show results when matched with selected tags.

Object provided `ChangeList(listId, tagArr, dataArr)` where `listId` matches a HTML tag with id = listId 

	changeList[data]) - add li to a ul matching listId, optional data is array of selected tags

Usage:


    //define required data in searchtag-data.js, e.g.
    var tagArr=["red", "green", "blue"];
    var dataArr={"apple":["red","green"],"sky":["red","blue"],"car":["red","green","blue"],"grass":["green","blue"]};


    $(document).ready(function() {
        var List = new ChangeList("resultList", tagArr, dataArr);
        $("#e1").select2({
            tags:tagArr,
            width:500
        }) 
        .on("select2-open", function() { console.log("open"); })
        .on("change", function(e) { List.changeList(e); });

        List.changeList(); //load default results
    });
