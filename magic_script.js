$(document).ready(function(){
/*hide "extras" from the start*/
	$(".foreign").hide();
	$(".secure").hide();
	$(".retail").hide();
	$(".merge").hide();
	$(".NCOA").hide();
	$(".dedupe").hide();
	$(".ndcscf").hide();
	$(".fcspr").hide();
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
	$("#SecureCheck").click(function(){
		if($("#SecureCheck").is(":checked")){
			$(".secure").show();
			$(".notsecure").hide();
		} else {
			$(".secure").hide();
			$(".notsecure").show();
		}

	});

	$("#MergeCheck").click(function(){
		if($("#MergeCheck").is(":checked")){
			$(".merge").show();
			$(".notmerge").hide();
		} else {
			$(".merge").hide();
			$(".notmerge").show();
		}

	});
		$("#LetterCheck").click(function(){
		if($("#LetterCheck").is(":checked")){
			$(".letter").show();
				$("#MergeCheck").prop("checked",true);
				if($("#MergeCheck").is(":checked")){
					$(".merge").show();
					$(".notmerge").hide();
				}
		} else {
			$(".letter").hide();
		}

	});
		$("#ReplyCheck").click(function(){
		if($("#ReplyCheck").is(":checked")){
			$(".reply").show();
			$("#MergeCheck").prop("checked",true);
				if($("#MergeCheck").is(":checked")){
					$(".merge").show();
					$(".notmerge").hide();
				}
		} else {
			$(".reply").hide();
		}

	});
		$("#Env_PCCheck").click(function(){
		if($("#Env_PCCheck").is(":checked")){
			$(".env_pc").show();
			$(".notenv_pc").hide();
			$("#MergeCheck").prop("checked",true);
				if($("#MergeCheck").is(":checked")){
					$(".merge").show();
					$(".notmerge").hide();
				}

		} else {
			$(".env_pc").hide();
			$(".notenv_pc").show();
		}

	});
	$("#ForeignCheck").click(function(){
		if($("#ForeignCheck").is(":checked")){
			$(".foreign").show();
		} else {
			$(".foreign").hide();
		}
	});
	$("#NCOACheck").click(function(){
		if($("#NCOACheck").is(":checked")){
			$(".NCOA").show();
		} else {
			$(".NCOA").hide();
		}
	});
		$("#DeDupeCheck").click(function(){
		if($("#DeDupeCheck").is(":checked")){
			$(".dedupe").show();
		} else {
			$(".dedupe").hide();
		}
	});
		$("#FCSPRCheck").click(function(){
		if($("#FCSPRCheck").is(":checked")){
			$(".fcspr").show();
			$(".notfcspr").hide();
		} else {
			$(".fcspr").hide();
			$(".notfcspr").show();
		}
	});

	$("#RetailCheck").click(function(){
	if($("#RetailCheck").is(":checked")){
		$(".retail").show();
		$(".notretail").hide();
				$("#FCSPRCheck").prop("checked",true);
	} else {
		$(".retail").hide();
		$(".notretail").show();
	}
	});

	$("#NDCSCFCheck").click(function(){
	if($("#NDCSCFCheck").is(":checked")){
		$(".ndcscf").show();
	} else {
		$(".ndcscf").hide();
	}
	});
	
	$("#PSLabelsCheck").click(function(){
	if($("#PSLabelsCheck").is(":checked")){
		$(".pslabels").show();
	} else {
		$(".pslabels").hide();
	}
	});
	
	$("#ClientStockCheck").click(function(){
	if($("#ClientStockCheck").is(":checked")){
		$(".clientstock").show();
		$(".fmstock").hide();
	} else {
		$(".clientstock").hide();
		$(".fmstock").show();
	}
	});

	$("#DropsElseCheck").click(function(){
	if($("#DropsElseCheck").is(":checked")){
		$(".dropselse").show();
		$(".notdropselse").hide();
	} else {
		$(".dropselse").hide();
		$(".notdropselse").show();
	}
	});

	$("#ComingleCheck").click(function(){
	if($("#ComingleCheck").is(":checked")){
		$(".comingle").show();
		$(".notcomingle").hide();
	} else {
		$(".comingle").hide();
		$(".notcomingle").show();
	}
	});

	$("#WindowEnvCheck").click(function(){
	if($("#WindowEnvCheck").is(":checked")){
		$(".windowenv").show();
	} else {
		$(".windowenv").hide();
	}
	});

	$("#SublistCheck").click(function(){
	if($("#SublistCheck").is(":checked")){
		$(".sublist").show();
		$(".notsublist").hide();
	} else {
		$(".sublist").hide();
		$(".notsublist").show();
	}
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
