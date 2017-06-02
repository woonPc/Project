angular.module('app.controllers', ['ionic','ngCordova'])
  
.controller('simpleTimeTableCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $cordovaSQLite) {


$("#simpleTimeTable-button2").click( function(){	var strExp = "";
	
			var viewDay = $("#viewDay").val();
			var strSqlGet = "SELECT * FROM tablexxx WHERE ttb_date='"+viewDay+"' ORDER BY ttb_time ASC";
	myDB.transaction(function(transaction){
		transaction.executeSql(strSqlGet,[], function(tx,result){
			var res;
			var len = result.rows.length;
			

	strExp="Time     Activity Name\n";
	
			for (i = 0; i < len; i++){
				res = result.rows.item(i);
				//strExp += "<ion-row>Activity Name: " + res.ttb_act + " Time: " + res.ttb_time + "</ion-row>";
						//strExp += "<ion-row>"+res.ttb_act + " Time: " + res.ttb_time+"</ion-row>" ; 
						strExp += res.ttb_time+ "     " +res.ttb_act + "\n" ; 
						
			}
			//strExp += "	</table>";
			var listName = $("#simpleTimeTable-list-item10").text(strExp);
			//alert(strExp);
			listName.html(listName.html().replace(/\n/g,'<br/>'));
			//alert("You have spend RM " + fltPrice + " for " + strExpName + " on " + strDate + " " + strTime);
	},
	
	function(error){
		alert("Fail! Cannot display... " + error);
	});
	});});
}])
   
.controller('addNewActivityCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $cordovaSQLite) {
	
$.ajax({
		type:'POST',
		url: 'http://10.131.72.153/webServiceJSON/globalWebService.php',
		dataType: 'json',
		data:
		{
			selectFn: 'fnGetDateTime'
		},
		
		success: function(response)
		{
			alert("Connected to server!");
			
			var now = new Date(response.currDate);
			var hour = ("0" + (now.getHours()-2)).slice(-2);
			var min = ("0" + now.getMinutes()).slice(-2);
			var thishour = (hour) + ":" + (min);
			$('#timeInput').val(thishour);
			//$('#actInput').val(thishour);
		},
		
		error: function(response)
		{
			alert("Unable to connect to server.. Please try again later");
		
			var now = new Date();
			var hour = ("0" + (now.getHours()-2)).slice(-2);
			var min = ("0" + now.getMinutes()).slice(-2);
			var thishour = (hour) + ":" + (min);
			$('#timeInput').val(thishour);
		}
	});
	
	
	$("#addNewActivity-button1").click( function(){

		var time = $("#timeInput").val();
		var day = $("#dateInput").val();
		var act = $("#actInput").val();
		//var add = "INSERT INTO tablexxx(ttb_date, ttb_time, ttb_act) VALUES (?,?,?)";
		
			var add = "IF EXIST(SELECT * FROM tablexxx WHERE ttb_date='"+day+"' AND ttb_time='"+time+"') UPDATE tablexxx SET(ttb_act='"+act+"')WHERE ttb_date='"+day+"' AND ttb_time='"+time+"' ELSE INSERT INTO tablexxx(ttb_date, ttb_time, ttb_act) VALUES (?,?,?)";
			alert(add);
		if ((time == "")|| (act == "")){
			alert("Error! All fields must be filled out");
			return false;
		}
		
		myDB.transaction(function(transaction){
		transaction.executeSql(add,[day,time, act], function(tx,result){
			alert("You have saved task " + act + " on " + day + " " + time);
		},
		function(error){
		alert("Fail! Cannot save... " + error);
	});
	});
			
			
	// $.ajax({
		// type:'POST',
		// url: 'http://192.168.1.6/webServiceJSON/globalWebService.php',
		// dataType: 'json',
		// data:
		// {
			// selectFn: 'fnAddExpense',
			// varExpActivity: act,
			// varMobileDate: day,
			// varMobileTime: time
		// },
		
		// success: function(response)
		// {
			// alert("Respond from server: " + response.respond);
		// },
		
		// error: function(response)
		// {
			// alert("Unable to connect to server.. Please try again later");
		// }
	// });
	 
});
}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])


.controller('resetActivityCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $cordovaSQLite) {

$("#resetActivity-button1").click( function(){

		var day = $("#dateReset").val();
		var rst = "DELETE FROM tablexxx WHERE ttb_date ='" + day + "'";
		
		
		
		myDB.transaction(function(transaction){
		transaction.executeSql(rst,[], function(tx,result){
			alert("You have successfully reset task " + day);
		},
		function(error){
		alert("Fail! Cannot reset... " + error);
	});
	});
	});

}])
 
 