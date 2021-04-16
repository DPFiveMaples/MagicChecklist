$(document).ready(function(){
/*hide "extras" from the start*/
	$(".foreign").hide();
	$(".secure").hide();
	$(".retail").hide();
	$(".merge").hide();
	$(".NCOA").hide();
	$(".dedupe").hide();
	$(".ndcscf").hide();
	$(".fc").hide();
	$(".pslabels").hide();
	$(".clientstock").hide();
	$(".windowenv").hide();
	$(".letter").hide();
	$(".reply").hide();
	$(".env_pc").hide();
	$(".comingle").hide();
	$(".dropselse").hide();
	$(".sublist").hide();


/*checkbox conditions*/

/*Secure*/
	$("#SecureCheck").change(function(){
		if($(this).is(":checked")) {
			localStorage.setItem('securechecked',true);
			$(".secure").show();
		  $(".notsecure").hide();
		}
	});
	$("#SecureCheck").change(function(){
		if(!$(this).is(":checked")) {
			localStorage.removeItem('securechecked');
			$(".secure").hide();
		  $(".notsecure").show();
		}
	});
	var secure_checked = localStorage.getItem("securechecked");
	 if (secure_checked){
		 $(".secure").show();
		 $(".notsecure").hide();
	 }	else {
		 $(".secure").hide();
		 $(".notsecure").show();
	 };

/*Merge*/
		$("#MergeCheck").change(function(){
			if($(this).is(":checked")) {
				localStorage.setItem('mergechecked',true);
				$(".merge").show();
			  $(".notmerge").hide();
			}
		});
		$("#MergeCheck").change(function(){
			if(!$(this).is(":checked")) {
				localStorage.removeItem('mergechecked');
				$(".merge").hide();
			  $(".notmerge").show();
			}
		});
		var merge_checked = localStorage.getItem("mergechecked");
		 if (merge_checked){
			 $(".merge").show();
			 $(".notmerge").hide();
		 }	else {
			 $(".merge").hide();
			 $(".notmerge").show();
		 };

/*Merge - Letter*/
	$("#LetterCheck").change(function(){
		if($(this).is(":checked")) {
			localStorage.setItem('letterchecked',true);
			 $(".letter").show();
			 $("#MergeCheck").prop("checked",true).trigger("change");
				//$("#MergeCheck").prop("checked",true);
				//if($("#MergeCheck").is(":checked")){
					//$(".merge").show();
					//$(".notmerge").hide();
		}
	});
	$("#LetterCheck").change(function(){
		if(!$(this).is(":checked")) {
			localStorage.removeItem('letterchecked');
		 $(".letter").hide();
	 	}
	});
	var letterchecked = localStorage.getItem("letterchecked");
	 if (letterchecked){
		 $(".letter").show();
		}	else {
		 $(".letter").hide();
	 };


/*Merge - Reply*/
	$("#ReplyCheck").change(function(){
		if($(this).is(":checked")) {
			localStorage.setItem('replychecked',true);
			 $(".reply").show();
			 $("#MergeCheck").prop("checked",true).trigger("change");
		 	 //$("#MergeCheck").prop("checked",true);
 				//if($("#MergeCheck").is(":checked")){
 					//$(".merge").show();
 					//$(".notmerge").hide();
		}
	});
	$("#ReplyCheck").change(function(){
		if(!$(this).is(":checked")) {
			localStorage.removeItem('replychecked');
		 $(".reply").hide();
	 	}
	});
	var replychecked = localStorage.getItem("replychecked");
	 if (replychecked){
		 $(".reply").show();
		}	else {
		 $(".reply").hide();
	};

/*Merge - Env_PC*/
	$("#Env_PCCheck").change(function(){
		if($(this).is(":checked")) {
			localStorage.setItem('env_pcchecked',true);
			 $(".env_pc").show();
		 	 $(".notenv_pc").hide();
			 $("#MergeCheck").prop("checked",true).trigger("change");
			 //$("#MergeCheck").prop("checked",true);
 				//if($("#MergeCheck").is(":checked")){
 					//$(".merge").show();
 					//$(".notmerge").hide();
		}
	});
	$("#Env_PCCheck").change(function(){
		if(!$(this).is(":checked")) {
			localStorage.removeItem('env_pcchecked');
		 $(".env_pc").hide();
	 $(".notenv_pc").show();
		}
	});
	var env_pcchecked = localStorage.getItem("env_pcchecked");
	 if (env_pcchecked){
		 $(".env_pc").show();
		 $(".notenv_pc").hide();
	 }	else {
		 $(".env_pc").hide();
		 $(".notenv_pc").show();
	 };

/*Foreign*/
	$("#ForeignCheck").change(function(){
		if($(this).is(":checked")) {
			localStorage.setItem('foreignchecked',true);
			$(".foreign").show();
		}
	});
	$("#ForeignCheck").change(function(){
		if(!$(this).is(":checked")) {
			localStorage.removeItem('foreignchecked');
			$(".foreign").hide();
		}
	});
	var foreign_checked = localStorage.getItem("foreignchecked");
	 if (foreign_checked){
		 $(".foreign").show();
	 }	else {
		 $(".foreign").hide();
	 };

/*NCOA*/
	 $("#NCOACheck").change(function(){
		 if($(this).is(":checked")) {
			 localStorage.setItem('ncoachecked',true);
				$(".NCOA").show();
		 }
	 });
	 $("#NCOACheck").change(function(){
		 if(!$(this).is(":checked")) {
			 localStorage.removeItem('ncoachecked');
			$(".NCOA").hide();
		 }
	 });
	 var ncoa_checked = localStorage.getItem("ncoachecked");
	 	if (ncoa_checked){
 			$(".NCOA").show();
 		}	else {
 			$(".NCOA").hide();
 		};

/*DeDupe*/
	$("#DeDupeCheck").change(function(){
		if($(this).is(":checked")) {
			localStorage.setItem('dedupechecked',true);
			 $(".dedupe").show();
		}
	});
	$("#DeDupeCheck").change(function(){
		if(!$(this).is(":checked")) {
			localStorage.removeItem('dedupechecked');
		 $(".dedupe").hide();
		}
	});
	var dedupe_checked = localStorage.getItem("dedupechecked");
	 if (dedupe_checked){
		 $(".dedupe").show();
	 }	else {
		 $(".dedupe").hide();
	 };

 /*FC*/
 $("#FCCheck").change(function(){
 	if($(this).is(":checked")) {
 		localStorage.setItem('fcchecked',true);
 		 $(".fc").show();
		 $(".notfc").hide();
 	}
 });
 $("#FCCheck").change(function(){
 	if(!$(this).is(":checked")) {
 		localStorage.removeItem('fcchecked');
	 $(".fc").hide();
	 $(".notfc").show();
 	}
 });
 var fc_checked = localStorage.getItem("fcchecked");
  if (fc_checked){
 	 $(".fc").show();
	 $(".notfc").hide();
  }	else {
 	 $(".fc").hide();
	 $(".notfc").show();
  };

/*Retail*/
	$("#RetailCheck").change(function(){
  	if($(this).is(":checked")) {
  		localStorage.setItem('retailchecked',true);
  		 $(".retail").show();
 		 $(".notretail").hide();
		 	//$("#FCCheck").prop("checked",true");
  	}
  });
  $("#RetailCheck").change(function(){
  	if(!$(this).is(":checked")) {
  		localStorage.removeItem('retailchecked');
  	 $(".retail").hide();
 	 $(".notretail").show();
  	}
  });
  var retail_checked = localStorage.getItem("retailchecked");
   if (retail_checked){
  	 $(".retail").show();
		 $(".notretail").hide();
   }	else {
  	 $(".retail").hide();
		 $(".notretail").show();
   };

/*NDCSCF*/
	$("#NDCSCFCheck").change(function(){
		if($(this).is(":checked")) {
			localStorage.setItem('ndcscfchecked',true);
			 $(".ndcscf").show();
		}
	});
	$("#NDCSCFCheck").change(function(){
		if(!$(this).is(":checked")) {
			localStorage.removeItem('ndcscfchecked');
		 $(".ndcscf").hide();
		}
	});
	var ndcscf_checked = localStorage.getItem("ndcscfchecked");
	 if (ndcscf_checked){
		 $(".ndcscf").show();
	 }	else {
		 $(".ndcscf").hide();
	 };

/*PSLabels*/
	$("#PSLabelsCheck").change(function(){
		if($(this).is(":checked")) {
			localStorage.setItem('pslableschecked',true);
			 $(".pslabels").show();
		}
	});
	$("#PSLabelsCheck").change(function(){
		if(!$(this).is(":checked")) {
			localStorage.removeItem('pslabelschecked');
		 $(".pslabels").hide();
		}
	});
	var pslabels_checked = localStorage.getItem("pslabelschecked");
	 if (pslabels_checked){
		 $(".pslabels").show();
	 }	else {
		 $(".pslabels").hide();
	 };

/*ClientStock*/
	$("#ClientStockCheck").change(function(){
		if($(this).is(":checked")) {
			localStorage.setItem('clientstockchecked',true);
			 $(".clientstock").show();
		 	 $(".fmstock").hide();
		}
	});
	$("#ClientStockCheck").change(function(){
		if(!$(this).is(":checked")) {
			localStorage.removeItem('clientstockchecked');
		 $(".clientstock").hide();
	   $(".fmstock").show();
		}
	});
	var clientstock_checked = localStorage.getItem("clientstockchecked");
	 if (clientstock_checked){
		 $(".clientstock").show();
		 $(".fmstock").hide();
	 }	else {
		 $(".clientstock").hide();
		 $(".fmstock").show();
	 };

/*DropsElse*/
	$("#DropsElseCheck").click(function(){
	if($("#DropsElseCheck").is(":checked")){
		$(".dropselse").show();
		$(".notdropselse").hide();
	} else {
		$(".dropselse").hide();
		$(".notdropselse").show();
	}
	});

	$("#DropsElseCheck").change(function(){
		if($(this).is(":checked")) {
			localStorage.setItem('dropselsechecked',true);
			 $(".dropselse").show();
		 $(".notdropselse").hide();
		}
	});
	$("#DropsElseCheck").change(function(){
		if(!$(this).is(":checked")) {
			localStorage.removeItem('dropselsechecked');
		 $(".dropselse").hide();
	 $(".notdropselse").show();
		}
	});
	var dropselse_checked = localStorage.getItem("dropselsechecked");
	 if (dropselse_checked){
		 $(".dropselse").show();
		 $(".notdropselse").hide();
	 }	else {
		 $(".dropselse").hide();
		 $(".notdropselse").show();
	 };

/*Comingle*/
	$("#ComingleCheck").change(function(){
		if($(this).is(":checked")) {
			localStorage.setItem('cominglechecked',true);
			 $(".comingle").show();
		 $(".notcomingle").hide();
		}
	});
	$("#ComingleCheck").change(function(){
		if(!$(this).is(":checked")) {
			localStorage.removeItem('cominglechecked');
		 $(".comingle").hide();
	 $(".notcomingle").show();
		}
	});
	var comingle_checked = localStorage.getItem("cominglechecked");
	 if (comingle_checked){
		 $(".comingle").show();
		 $(".notcomingle").hide();
	 }	else {
		 $(".comingle").hide();
		 $(".notcomingle").show();
	 };

/*WindowEnv*/
	$("#WindowEnvCheck").click(function(){
	if($("#WindowEnvCheck").is(":checked")){
		$(".windowenv").show();
	} else {
		$(".windowenv").hide();
	}
	});

	$("#WindowEnvCheck").change(function(){
		if($(this).is(":checked")) {
			localStorage.setItem('windowenvchecked',true);
			 $(".windowenv").show();
		 }
	});
	$("#WindowEnvCheck").change(function(){
		if(!$(this).is(":checked")) {
			localStorage.removeItem('windowenvchecked');
		 $(".windowenv").hide();
		}
	});
	var windowenv_checked = localStorage.getItem("windowenvchecked");
	 if (windowenv_checked){
		 $(".windowenv").show();
	 }	else {
		 $(".windowenv").hide();
 	};

/*Sublist*/
	$("#SublistCheck").change(function(){
		if($(this).is(":checked")) {
			localStorage.setItem('sublistchecked',true);
			 $(".sublist").show();
		 $(".notsublist").hide();
		}
	});
	$("#SublistCheck").change(function(){
		if(!$(this).is(":checked")) {
			localStorage.removeItem('sublistchecked');
		 $(".sublist").hide();
	 $(".notsublist").show();
		}
	});
	var sublist_checked = localStorage.getItem("sublistchecked");
	 if (sublist_checked){
		 $(".sublist").show();
		 $(".notsublist").hide();
	 }	else {
		 $(".sublist").hide();
		 $(".notsublist").show();
	 };

	 /*Strikethrough*/
	 /*From https://forum.jquery.com/topic/save-a-toogle-state-to-local-storage */
	 var strikeClicked = JSON.parse(localStorage.strike || "[]")
		$(".strikeIt").click(function() {
			$(this).toggleClass("striked");
			localStorage.strike = JSON.stringify(
			$(".strikeIt").map(function(){
				return $(this).hasClass("striked")
			}).get()
			)
		});

		if (strikeClicked.length)
			$(".strikeIt").each(function(i) {
				$(this).toggleClass("striked", strikeClicked[i])
		});

	/* Import Table Stuff */
	$("#addlistbtn").click(function(){
		$("#importtable .fieldlabel").each(function(){
		$(this).append('<td><input type="checkbox"/></td>');
		});
		$("#importtable .listlabel").each(function(){
		$(this).append('<td><textarea rows="2" cols="10" class="listname"></textarea></td>');
		});
		$("#tritable .trilabel").each(function(){
		$(this).append('<td><textarea rows="1" cols="4" class="smallfont"></textarea></td>');
		});
   });
   	$("#addfieldbtn").click(function(){
		$("#importtable").each(function(){
		$(this).append('<tr class="fieldlabel"><th class="nopadding"><textarea rows="1" cols="13"></textarea></th></tr>');

	});
   });

});


function myFunction() {
    return "Are you sure you want to leave?";
}
