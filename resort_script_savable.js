$(document).ready(function(){

/* checkbox conditions */

		/* Resort - Secure */

		$(document).ready(function(){
			checkSecureResortVal();
			$("#SecureCheckResort").on('change', checkSecureResortVal);
		});

		var checkSecureResortVal = function () {
			if($("#SecureCheckResort").is(":checked")){
				$(".secure").show();
				$(".notsecure").hide();
			} else {
				$(".secure").hide();
				$(".notsecure").show();
			}
		};


		/* Resort - Merge */

		$(document).ready(function(){
			checkMergeResortVal();
			$("#MergeCheckResort").on('change', checkMergeResortVal);
		});

		var checkMergeResortVal = function () {
			if($("#MergeCheckResort").is(":checked")){
				$(".merge").show();
				$(".notmerge").hide();
			} else {
				$(".merge").hide();
				$(".notmerge").show();
			}
		};


		/* Resort -  Merge - Letter */

		$(document).ready(function(){
			checkLetterResortVal();
			$("#LetterCheckResort").on('change', checkLetterResortVal);
		});

		var checkLetterResortVal = function () {
			if($("#LetterCheckresort").is(":checked")){
				$(".letter").show();
				$("#MergeCheckResort").prop("checked",true).trigger("change");
			} else {
				$(".letter").hide();
			}
		};


		/* Resort - Merge - Reply */

		$(document).ready(function(){
			checkReplyResortVal();
			$("#ReplyCheckResort").on('change', checkReplyResortVal);
		});

		var checkReplyResortVal = function () {
			if($("#ReplyCheckResort").is(":checked")){
				$(".reply").show();
				$("#MergeCheckResort").prop("checked",true).trigger("change");
			} else {
				$(".reply").hide();
			}
		};


		/* Resort - Merge - Env_PC */

		$(document).ready(function(){
			checkEnv_PCResortVal();
			$("#Env_PCCheckResort").on('change', checkEnv_PCResortVal);
		});

		var checkEnv_PCResortVal = function () {
			if($("#Env_PCCheckResort").is(":checked")){
				$(".env_pc").show();
				$(".notenv_pc").hide();
				$("#MergeCheckResort").prop("checked",true).trigger("change");
			} else {
				$(".env_pc").hide();
				$(".notenv_pc").show();
			}
		};


		/* Resort - Foreign */

		$(document).ready(function(){
			checkForeignResortVal();
			$("#ForeignCheckResort").on('change', checkForeignResortVal);
		});

		var checkForeignResortVal = function () {
			if($("#ForeignCheckResort").is(":checked")){
				$(".foreign").show();
			} else {
				$(".foreign").hide();
			}
		};


		/* Resort - NCOA */

		$(document).ready(function(){
			checkNCOAResortVal();
			$("#NCOACheckResort").on('change', checkNCOAResortVal);
		});

		var checkNCOAResortVal = function () {
			if($("#NCOACheckResort").is(":checked")){
				$(".NCOA").show();
			} else {
				$(".NCOA").hide();
			}
		};


		/* Resort - DeDupe */

		$(document).ready(function(){
			checkDeDupeResortVal();
			$("#DeDupeCheckResort").on('change', checkDeDupeResortVal);
		});

		var checkDeDupeResortVal = function () {
			if($("#DeDupeCheckResort").is(":checked")){
				$(".dedupe").show();
				$(".notdedupe").hide();
			} else {
				$(".dedupe").hide();
				$(".notdedupe").show();
			}
		};


		 /* Resort - FC */

		 $(document).ready(function(){
		 	checkFCResortVal();
		 	$("#FCCheckResort").on('change', checkFCResortVal);
		 });

		 var checkFCResortVal = function () {
		 	if($("#FCCheckResort").is(":checked")){
		 		$(".fc").show();
		 		$(".notfc").hide();
		 	} else {
		 		$(".fc").hide();
		 		$(".notfc").show();
		 	}
		 };


		/* Resort - Retail */

		$(document).ready(function(){
			checkRetailResortVal();
			$("#RetailCheckResort").on('change', checkRetailResortVal);
		});

		var checkRetailResortVal = function () {
			if($("#RetailCheckResort").is(":checked")){
				$(".retail").show();
				$(".notretail").hide();
			} else {
				$(".retail").hide();
				$(".notretail").show();
			}
		};


		/* Resort - NDCSCF */

		$(document).ready(function(){
			checkNDCSCFResortVal();
			$("#NDCSCFCheckResort").on('change', checkNDCSCFResortVal);
		});

		var checkNDCSCFResortVal = function () {
			if($("#NDCSCFCheckResort").is(":checked")){
				$(".ndcscf").show();
				$(".notndcscf").hide();
			} else {
				$(".ndcscf").hide();
				$(".notndcscf").show();
			}
		};


		/* Resort - PSLabels */

		$(document).ready(function(){
			checkPSLabelsResortVal();
			$("#PSLabelsCheckResort").on('change', checkPSLabelsResortVal);
		});

		var checkPSLabelsResortVal = function () {
			if($("#PSLabelsCheckResort").is(":checked")){
				$(".pslabels").show();
			} else {
				$(".pslabels").hide();
			}
		};


		/* Resort - ClientStock */

		$(document).ready(function(){
			checkClientStockResortVal();
			$("#ClientStockCheckResort").on('change', checkClientStockResortVal);
		});

		var checkClientStockResortVal = function () {
			if($("#ClientStockCheckResort").is(":checked")){
				$(".clientstock").show();
				$(".fmstock").hide();
			} else {
				$(".clientstock").hide();
				$(".fmstock").show();
			}
		};


		/* Resort - DropsElse */
		$(document).ready(function(){
			checkDropsElseResortVal();
			$("#DropsElseCheckResort").on('change', checkDropsElseResortVal);
		});

		var checkDropsElseResortVal = function () {
			if($("#DropsElseCheckResort").is(":checked")){
				$(".dropselse").show();
				$(".notdropselse").hide();
			} else {
				$(".dropselse").hide();
				$(".notdropselse").show();
			}
		};


		/* Resort - WindowEnv */

		$(document).ready(function(){
			checkWindowEnvResortVal();
			$("#WindowEnvCheckResort").on('change', checkWindowEnvResortVal);
		});

		var checkWindowEnvResortVal = function () {
			if($("#WindowEnvCheckResort").is(":checked")){
				$(".windowenv").show();
			} else {
				$(".windowenv").hide();
			}
		};

		/* Resort - Sublist */

		$(document).ready(function(){
			checkSublistResortVal();
			$("#SublistCheckResort").on('change', checkSublistResortVal);
		});

		var checkSublistResortVal = function () {
			if($("#SublistCheckResort").is(":checked")){
				$(".sublist").show();
				$(".notsublist").hide();
			} else {
				$(".sublist").hide();
				$(".notsublist").show();
			}
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
