$(document).ready(function(){
/* hide "extras" from the start */
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
	$(".pulls").hide();
	$(".dropselse").hide();
	$(".sublist").hide();


/* checkbox conditions */

/* Secure */
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

/* Merge */
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

/* Merge - Letter */
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


/* Merge - Reply */
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

/* Merge - Env_PC */
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

/* Foreign */
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

/* NCOA */
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

/* DeDupe */
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

 /* FC */
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

/* Retail */
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

/* NDCSCF */
	$("#NDCSCFCheck").change(function(){
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
	 };

/* PSLabels */
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

/* ClientStock */
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

/* DropsElse */
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

/* Pulls */
	$("#PullCheck").change(function(){
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
	 };

/* WindowEnv */
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

/* Sublist */
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
				}
			});
			$("#DeDupeCheckResort").change(function(){
				if(!$(this).is(":checked")) {
					localStorage.removeItem('dedupecheckedresort');
				 $(".dedupe").hide();
				}
			});
			var dedupe_checkedresort = localStorage.getItem("dedupecheckedresort");
			 if (dedupe_checkedresort){
				 $(".dedupe").show();
			 }	else {
				 $(".dedupe").hide();
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
			 var strikeClickedResort = JSON.parse(localStorage.strike || "[]")
				$(".strikeItResort").click(function() {
					$(this).toggleClass("strikedresort");
					localStorage.strike = JSON.stringify(
					$(".strikeItResort").map(function(){
						return $(this).hasClass("strikedresort")
					}).get()
					)
				});

				if (strikeClicked.length)
					$(".strikeItResort").each(function(i) {
						$(this).toggleClass("strikedresort", strikeClicked[i])
				});

	/* Import Table Stuff */
	/* $("#addlistbtn").click(function(){
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
}); */

});


function myFunction() {
    return "Are you sure you want to leave?";
}
