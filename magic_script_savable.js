$(document).ready(function(){

/* hide "extras" from the start */
	/*$(".foreign").hide();
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
	$(".pulls").hide();
	$(".dropselse").hide();
	$(".sublist").hide();*/


/* checkbox conditions */
//With help from https://stackoverflow.com/questions/17400152/jquery-on-load-event-on-a-single-element

/* Secure */
$(document).ready(function(){
	checkSecureVal();
	$("#SecureCheck").on('change', checkSecureVal);
});

var checkSecureVal = function () {
	if($("#SecureCheck").is(":checked")){
		$(".secure").show();
		$(".notsecure").hide();
	} else {
		$(".secure").hide();
		$(".notsecure").show();
	}
};

/*$("#SecureCheck").change(function(){
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
	});*/

/* Merge */

$(document).ready(function(){
	checkMergeVal();
	$("#MergeCheck").on('change', checkMergeVal);
});

var checkMergeVal = function () {
	if($("#MergeCheck").is(":checked")){
		$(".merge").show();
		$(".notmerge").hide();
	} else {
		$(".merge").hide();
		$(".notmerge").show();
	}
};

/*		$("#MergeCheck").change(function(){
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
		 };*/

/* Merge - Letter */

$(document).ready(function(){
	checkLetterVal();
	$("#LetterCheck").on('change', checkLetterVal);
});

var checkLetterVal = function () {
	if($("#LetterCheck").is(":checked")){
		$(".letter").show();
		$("#MergeCheck").prop("checked",true).trigger("change");
	} else {
		$(".letter").hide();
	}
};

	/*$("#LetterCheck").change(function(){
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
	 };*/


/* Merge - Reply */

$(document).ready(function(){
	checkReplyVal();
	$("#ReplyCheck").on('change', checkReplyVal);
});

var checkReplyVal = function () {
	if($("#ReplyCheck").is(":checked")){
		$(".reply").show();
		$("#MergeCheck").prop("checked",true).trigger("change");
	} else {
		$(".reply").hide();
	}
};

	/*$("#ReplyCheck").change(function(){
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
	};*/

/* Merge - Env_PC */
$(document).ready(function(){
	checkEnv_PCVal();
	$("#Env_PCCheck").on('change', checkEnv_PCVal);
});

var checkEnv_PCVal = function () {
	if($("#Env_PCCheck").is(":checked")){
		$(".env_pc").show();
		$(".notenv_pc").hide();
		$("#MergeCheck").prop("checked",true).trigger("change");
	} else {
		$(".env_pc").hide();
		$(".notenv_pc").show();
	}
};

	/*$("#Env_PCCheck").change(function(){
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
	 };*/

/* Foreign */

$(document).ready(function(){
	checkForeignVal();
	$("#ForeignCheck").on('change', checkForeignVal);
});

var checkForeignVal = function () {
	if($("#ForeignCheck").is(":checked")){
		$(".foreign").show();
	} else {
		$(".foreign").hide();
	}
};

	/*$("#ForeignCheck").change(function(){
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
	 };*/

/* NCOA */

$(document).ready(function(){
	checkNCOAVal();
	$("#NCOACheck").on('change', checkNCOAVal);
});

var checkNCOAVal = function () {
	if($("#NCOACheck").is(":checked")){
		$(".NCOA").show();
	} else {
		$(".NCOA").hide();
	}
};

	 /*$("#NCOACheck").change(function(){
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
 		};*/

/* DeDupe */

$(document).ready(function(){
	checkDeDupeVal();
	$("#DeDupeCheck").on('change', checkDeDupeVal);
});

var checkDeDupeVal = function () {
	if($("#DeDupeCheck").is(":checked")){
		$(".dedupe").show();
		$(".notdedupe").hide();
	} else {
		$(".dedupe").hide();
		$(".notdedupe").show();
	}
};

	/*$("#DeDupeCheck").change(function(){
		if($(this).is(":checked")) {
			localStorage.setItem('dedupechecked',true);
			 $(".dedupe").show();
			 $(".notdedupe").hide();
		}
	});
	$("#DeDupeCheck").change(function(){
		if(!$(this).is(":checked")) {
			localStorage.removeItem('dedupechecked');
		 $(".dedupe").hide();
		 $(".notdedupe").show();
		}
	});
	var dedupe_checked = localStorage.getItem("dedupechecked");
	 if (dedupe_checked){
		 $(".dedupe").show();
		 $(".notdedupe").hide();
	 }	else {
		 $(".dedupe").hide();
		 $(".notdedupe").show();
	 };*/

 /* FC */
 $(document).ready(function(){
 	checkFCVal();
 	$("#FCCheck").on('change', checkFCVal);
 });

 var checkFCVal = function () {
 	if($("#FCCheck").is(":checked")){
 		$(".fc").show();
 		$(".notfc").hide();
 	} else {
 		$(".fc").hide();
 		$(".notfc").show();
 	}
 };

 /*$("#FCCheck").change(function(){
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
 };*/

/* Retail */
$(document).ready(function(){
	checkRetailVal();
	$("#RetailCheck").on('change', checkRetailVal);
});

var checkRetailVal = function () {
	if($("#RetailCheck").is(":checked")){
		$(".retail").show();
		$(".notretail").hide();
	} else {
		$(".retail").hide();
		$(".notretail").show();
	}
};

	/*$("#RetailCheck").change(function(){
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
   };*/

/* NDCSCF */
$(document).ready(function(){
	checkNDCSCFVal();
	$("#NDCSCFCheck").on('change', checkNDCSCFVal);
});

var checkNDCSCFVal = function () {
	if($("#NDCSCFCheck").is(":checked")){
		$(".ndcscf").show();
		$(".notndcscf").hide();
	} else {
		$(".ndcscf").hide();
		$(".notndcscf").show();
	}
};

	/*$("#NDCSCFCheck").change(function(){
		if($(this).is(":checked")) {
			localStorage.setItem('ndcscfchecked',true);
			 $(".ndcscf").show();
		$(".notndcscf").hide();
		}
	});
	$("#NDCSCFCheck").change(function(){
		if(!$(this).is(":checked")) {
			localStorage.removeItem('ndcscfchecked');
		 $(".ndcscf").hide();
	$(".notndcscf").show();
		}
	});
	var ndcscf_checked = localStorage.getItem("ndcscfchecked");
	 if (ndcscf_checked){
		 $(".ndcscf").show();
		 $(".notndcscf").hide();
	 }	else {
		 $(".ndcscf").hide();
		 $(".notndcscf").show();
	 };*/

/* PSLabels */
$(document).ready(function(){
	checkPSLabelsVal();
	$("#PSLabelsCheck").on('change', checkPSLabelsVal);
});

var checkPSLabelsVal = function () {
	if($("#PSLabelsCheck").is(":checked")){
		$(".pslabels").show();
	} else {
		$(".pslabels").hide();
	}
};

	/*$("#PSLabelsCheck").change(function(){
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
	 };*/

/* ClientStock */

$(document).ready(function(){
	checkClientStockVal();
	$("#ClientStockCheck").on('change', checkClientStockVal);
});

var checkClientStockVal = function () {
	if($("#ClientStockCheck").is(":checked")){
		$(".clientstock").show();
		$(".fmstock").hide();
	} else {
		$(".clientstock").hide();
		$(".fmstock").show();
	}
};

	/*$("#ClientStockCheck").change(function(){
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
	 };*/

/* DropsElse */
$(document).ready(function(){
	checkDropsElseVal();
	$("#DropsElseCheck").on('change', checkDropsElseVal);
});

var checkDropsElseVal = function () {
	if($("#DropsElseCheck").is(":checked")){
		$(".dropselse").show();
		$(".notdropselse").hide();
	} else {
		$(".dropselse").hide();
		$(".notdropselse").show();
	}
};

	/*$("#DropsElseCheck").click(function(){
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
	 };*/

/* Pulls */

$(document).ready(function(){
	checkPullVal();
	$("#PullCheck").on('change', checkPullVal);
});

var checkPullVal = function () {
	if($("#PullCheck").is(":checked")){
		$(".pull").show();
		$(".notpull").hide();
	} else {
		$(".pull").hide();
		$(".notpull").show();
	}
};

	/*$("#PullCheck").change(function(){
		if($(this).is(":checked")) {
			localStorage.setItem('pullchecked',true);
			 $(".pull").show();
		 $(".notpull").hide();
		}
	});
	$("#PullCheck").change(function(){
		if(!$(this).is(":checked")) {
			localStorage.removeItem('pullchecked');
		 $(".pull").hide();
	 $(".notpull").show();
		}
	});
	var pull_checked = localStorage.getItem("pullchecked");
	 if (pull_checked){
		 $(".pull").show();
		 $(".notpull").hide();
	 }	else {
		 $(".pull").hide();
		 $(".notpull").show();
	 };*/

/* WindowEnv */

$(document).ready(function(){
	checkWindowEnvVal();
	$("#WindowEnvCheck").on('change', checkWindowEnvVal);
});

var checkWindowEnvVal = function () {
	if($("#WindowEnvCheck").is(":checked")){
		$(".windowenv").show();
		$(".notwindowenv").hide();
	} else {
		$(".windowenv").hide();
		$(".notwindowenv").show();
	}
};

	/*$("#WindowEnvCheck").click(function(){
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
 	};*/

/* Sublist */

$(document).ready(function(){
	checkSublistVal();
	$("#SublistCheck").on('change', checkSublistVal);
});

var checkSublistVal = function () {
	if($("#SublistCheck").is(":checked")){
		$(".sublist").show();
		$(".notsublist").hide();
	} else {
		$(".sublist").hide();
		$(".notsublist").show();
	}
};

	/*$("#SublistCheck").change(function(){
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
	 };*/

	 /* Strikethrough */
	 /* From https://forum.jquery.com/topic/save-a-toogle-state-to-local-storage */
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

	});


function myFunction() {
    return "Are you sure you want to leave?";
}
