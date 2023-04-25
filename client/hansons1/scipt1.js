// $(document).ready(function(){

// 	$('#dis').on('change',function() {

// 	  var str='';
// 	  var s1ar=document.getElementById('dis');
// 	  for (i=0;i< s1ar.length;i++) {
// 		if(s1ar[i].selected) {
// 		  str += s1ar[i].value + ',';
// 		}
// 	  }

// 	  var str=str.slice(0,str.length -1);
// 	  var url="dropdown-zones.php";
// 		  url=url+"?dis_id="+str;
// 		  url=url+"&sid="+Math.random();

// 	  $.ajax({
// 		type: "GET",
// 		url: url,
// 		contentType: "application/json; charset-utf-8",
// 		dataType: "json",
// 		success: function(data) {
// 		  $('#zone').empty();
// 		  $('#zone').append("<option value=''>- Select Zone-</option>");
// 		  $.each(data, function(i,item){
// 			var selecting='';
// 			if ($('#dis').val().findIndex(x => x==data[i].id)>=0) {
// 			  selecting = ' selected="selected"';
// 			} else {
// 			  selecting = '';
// 			}
// 			$('#zone').append('<option '+selecting+' value="'+data[i].id+'">'+data[i].name+'</optoin>');
// 		  });
// 		},
// 		complete: function() {}
// 	  });
// 	});
// });
