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

		/* Resort - Secure */
			$("#SecureCheckResort").change(function(){
				if($(this).is(":checked")) {
					localStorage.setItem('securecheckedresort',true);
					$(".secure").show();
				  $(".notsecure").hide();
				}
			});
			$("#SecureCheckResort").change(function(){
				if(!$(this).is(":checked")) {
					localStorage.removeItem('securecheckedresort');
					$(".secure").hide();
				  $(".notsecure").show();
				}
			});
			var secure_checkedresort = localStorage.getItem("securecheckedresort");
			 if (secure_checkedresort){
				 $(".secure").show();
				 $(".notsecure").hide();
			 }	else {
				 $(".secure").hide();
				 $(".notsecure").show();
			 };

		/* Resort - Merge */
				$("#MergeCheckResort").change(function(){
					if($(this).is(":checked")) {
						localStorage.setItem('mergecheckedresort',true);
						$(".merge").show();
					  $(".notmerge").hide();
					}
				});
				$("#MergeCheckResort").change(function(){
					if(!$(this).is(":checked")) {
						localStorage.removeItem('mergecheckedresort');
						$(".merge").hide();
					  $(".notmerge").show();
					}
				});
				var merge_checkedresort = localStorage.getItem("mergecheckedresort");
				 if (merge_checkedresort){
					 $(".merge").show();
					 $(".notmerge").hide();
				 }	else {
					 $(".merge").hide();
					 $(".notmerge").show();
				 };

		/* Resort -  Merge - Letter */
			$("#LetterCheckResort").change(function(){
				if($(this).is(":checked")) {
					localStorage.setItem('lettercheckedresort',true);
					 $(".letter").show();
					 $("#MergeCheck").prop("checked",true).trigger("change");
						//$("#MergeCheck").prop("checked",true);
						//if($("#MergeCheck").is(":checked")){
							//$(".merge").show();
							//$(".notmerge").hide();
				}
			});
			$("#LetterCheckResort").change(function(){
				if(!$(this).is(":checked")) {
					localStorage.removeItem('lettercheckedresort');
				 $(".letter").hide();
			 	}
			});
			var lettercheckedresort = localStorage.getItem("lettercheckedresort");
			 if (lettercheckedresort){
				 $(".letter").show();
				}	else {
				 $(".letter").hide();
			 };


		/* Resort - Merge - Reply */
			$("#ReplyCheckResort").change(function(){
				if($(this).is(":checked")) {
					localStorage.setItem('replycheckedresort',true);
					 $(".reply").show();
					 $("#MergeCheckResort").prop("checked",true).trigger("change");
				 	 //$("#MergeCheck").prop("checked",true);
		 				//if($("#MergeCheck").is(":checked")){
		 					//$(".merge").show();
		 					//$(".notmerge").hide();
				}
			});
			$("#ReplyCheckResort").change(function(){
				if(!$(this).is(":checked")) {
					localStorage.removeItem('replycheckedresort');
				 $(".reply").hide();
			 	}
			});
			var replycheckedresort = localStorage.getItem("replycheckedresort");
			 if (replycheckedresort){
				 $(".reply").show();
				}	else {
				 $(".reply").hide();
			};

		/* Resort - Merge - Env_PC */
			$("#Env_PCCheckResort").change(function(){
				if($(this).is(":checked")) {
					localStorage.setItem('env_pccheckedresort',true);
					 $(".env_pc").show();
				 	 $(".notenv_pc").hide();
					 $("#MergeCheckResort").prop("checked",true).trigger("change");
					 //$("#MergeCheck").prop("checked",true);
		 				//if($("#MergeCheck").is(":checked")){
		 					//$(".merge").show();
		 					//$(".notmerge").hide();
				}
			});
			$("#Env_PCCheckResort").change(function(){
				if(!$(this).is(":checked")) {
					localStorage.removeItem('env_pccheckedresort');
				 $(".env_pc").hide();
			 $(".notenv_pc").show();
				}
			});
			var env_pccheckedresort = localStorage.getItem("env_pccheckedresort");
			 if (env_pccheckedresort){
				 $(".env_pc").show();
				 $(".notenv_pc").hide();
			 }	else {
				 $(".env_pc").hide();
				 $(".notenv_pc").show();
			 };

		/* Foreign */
			$("#ForeignCheckResort").change(function(){
				if($(this).is(":checked")) {
					localStorage.setItem('foreigncheckedresort',true);
					$(".foreign").show();
				}
			});
			$("#ForeignCheckResort").change(function(){
				if(!$(this).is(":checked")) {
					localStorage.removeItem('foreigncheckedresort');
					$(".foreign").hide();
				}
			});
			var foreign_checkedresort = localStorage.getItem("foreigncheckedresort");
			 if (foreign_checkedresort){
				 $(".foreign").show();
			 }	else {
				 $(".foreign").hide();
			 };

		/* Resort - NCOA */
			 $("#NCOACheckResort").change(function(){
				 if($(this).is(":checked")) {
					 localStorage.setItem('ncoacheckedresort',true);
						$(".NCOA").show();
				 }
			 });
			 $("#NCOACheckResort").change(function(){
				 if(!$(this).is(":checked")) {
					 localStorage.removeItem('ncoacheckedresort');
					$(".NCOA").hide();
				 }
			 });
			 var ncoa_checkedresort = localStorage.getItem("ncoacheckedresort");
			 	if (ncoa_checkedresort){
		 			$(".NCOA").show();
		 		}	else {
		 			$(".NCOA").hide();
		 		};

		/* Resort - DeDupe */
			$("#DeDupeCheckResort").change(function(){
				if($(this).is(":checked")) {
					localStorage.setItem('dedupecheckedresort',true);
					 $(".dedupe").show();
					 $(".notdedupe").hide();
				}
			});
			$("#DeDupeCheckResort").change(function(){
				if(!$(this).is(":checked")) {
					localStorage.removeItem('dedupecheckedresort');
				 $(".dedupe").hide();
				 $(".notdedupe").show();
				}
			});
			var dedupe_checkedresort = localStorage.getItem("dedupecheckedresort");
			 if (dedupe_checkedresort){
				 $(".dedupe").show();
				 $(".notdedupe").hide();
			 }	else {
				 $(".dedupe").hide();
				 $(".notdedupe").show();
			 };

		 /* Resort - FC */
		 $("#FCCheckResort").change(function(){
		 	if($(this).is(":checked")) {
		 		localStorage.setItem('fccheckedresort',true);
		 		 $(".fc").show();
				 $(".notfc").hide();
		 	}
		 });
		 $("#FCCheckResort").change(function(){
		 	if(!$(this).is(":checked")) {
		 		localStorage.removeItem('fccheckedresort');
			 $(".fc").hide();
			 $(".notfc").show();
		 	}
		 });
		 var fc_checkedresort = localStorage.getItem("fccheckedresort");
		  if (fc_checkedresort){
		 	 $(".fc").show();
			 $(".notfc").hide();
		  }	else {
		 	 $(".fc").hide();
			 $(".notfc").show();
		  };

		/* Retail */
			$("#RetailCheckResort").change(function(){
		  	if($(this).is(":checked")) {
		  		localStorage.setItem('retailcheckedresort',true);
		  		 $(".retail").show();
		 		 $(".notretail").hide();
				 	//$("#FCCheck").prop("checked",true");
		  	}
		  });
		  $("#RetailCheckResort").change(function(){
		  	if(!$(this).is(":checked")) {
		  		localStorage.removeItem('retailcheckedresort');
		  	 $(".retail").hide();
		 	 $(".notretail").show();
		  	}
		  });
		  var retail_checkedresort = localStorage.getItem("retailcheckedresort");
		   if (retail_checkedresort){
		  	 $(".retail").show();
				 $(".notretail").hide();
		   }	else {
		  	 $(".retail").hide();
				 $(".notretail").show();
		   };

		/* Resort - NDCSCF */
			$("#NDCSCFCheckResort").change(function(){
				if($(this).is(":checked")) {
					localStorage.setItem('ndcscfcheckedresort',true);
					 $(".ndcscf").show();
				$(".notndcscf").hide();
				}
			});
			$("#NDCSCFCheckResort").change(function(){
				if(!$(this).is(":checked")) {
					localStorage.removeItem('ndcscfcheckedresort');
				 $(".ndcscf").hide();
			$(".notndcscf").show();
				}
			});
			var ndcscf_checkedresort = localStorage.getItem("ndcscfcheckedresort");
			 if (ndcscf_checkedresort){
				 $(".ndcscf").show();
				 $(".notndcscf").hide();
			 }	else {
				 $(".ndcscf").hide();
				 $(".notndcscf").show();
			 };

		/* PSLabels */
			$("#PSLabelsCheckResort").change(function(){
				if($(this).is(":checked")) {
					localStorage.setItem('pslablescheckedresort',true);
					 $(".pslabels").show();
				}
			});
			$("#PSLabelsCheckResort").change(function(){
				if(!$(this).is(":checked")) {
					localStorage.removeItem('pslabelscheckedresort');
				 $(".pslabels").hide();
				}
			});
			var pslabels_checkedresort = localStorage.getItem("pslabelscheckedresort");
			 if (pslabels_checkedresort){
				 $(".pslabels").show();
			 }	else {
				 $(".pslabels").hide();
			 };

		/* Resort - ClientStock */
			$("#ClientStockCheckResort").change(function(){
				if($(this).is(":checked")) {
					localStorage.setItem('clientstockcheckedresort',true);
					 $(".clientstock").show();
				 	 $(".fmstock").hide();
				}
			});
			$("#ClientStockCheckResort").change(function(){
				if(!$(this).is(":checked")) {
					localStorage.removeItem('clientstockcheckedresort');
				 $(".clientstock").hide();
			   $(".fmstock").show();
				}
			});
			var clientstock_checkedresort = localStorage.getItem("clientstockcheckedresort");
			 if (clientstock_checkedresort){
				 $(".clientstock").show();
				 $(".fmstock").hide();
			 }	else {
				 $(".clientstock").hide();
				 $(".fmstock").show();
			 };

		/* Resort - WindowEnv */
			$("#WindowEnvCheckResort").click(function(){
			if($("#WindowEnvCheckResort").is(":checked")){
				$(".windowenv").show();
			} else {
				$(".windowenv").hide();
			}
			});

			$("#WindowEnvCheckResort").change(function(){
				if($(this).is(":checked")) {
					localStorage.setItem('windowenvcheckedresort',true);
					 $(".windowenv").show();
				 }
			});
			$("#WindowEnvCheckResort").change(function(){
				if(!$(this).is(":checked")) {
					localStorage.removeItem('windowenvcheckedresort');
				 $(".windowenv").hide();
				}
			});
			var windowenv_checkedresort = localStorage.getItem("windowenvcheckedresort");
			 if (windowenv_checkedresort){
				 $(".windowenv").show();
			 }	else {
				 $(".windowenv").hide();
		 	};


			 /* Resort - Strikethrough */
			 /* From https://forum.jquery.com/topic/save-a-toogle-state-to-local-storage */
			 var strikeClickedResort = JSON.parse(localStorage.strikeResort || "[]")
				$(".strikeItResort").click(function() {
					$(this).toggleClass("striked");
					localStorage.strikeResort = JSON.stringify(
					$(".strikeItResort").map(function(){
						return $(this).hasClass("striked")
					}).get()
					)
				});

				if (strikeClickedResort.length)
					$(".strikeItResort").each(function(i) {
						$(this).toggleClass("striked", strikeClickedResort[i])
				});


});


function myFunction() {
    return "Are you sure you want to leave?";
}
