function checkVersion() {
	var appVersion = app.version;
	var appVersionSemantics = appVersion.split(".");
	var appVersionMajor = parseInt(appVersionSemantics[0]);
	var appVersionMinor = parseInt(appVersionSemantics[1]);
	var appVersionPatch = parseInt(appVersionSemantics[2]);
	if (appVersionMajor<12) {
		alert("This version of After Effects not currently supported");
	} else if (appVersionMajor==12) {
		var appVersionYear="CC";
	} else if (appVersionMajor==13 && appVersionMinor<5) {
		var appVersionYear="CC 2014" ( appVersionMinor == 1 ? + ".1" : appVersionMinor == 2 ? + ".2" : "" );
	} else if (appVersionMajor==13 && appVersionMinor>=5) {
		var appVersionYear="CC 2015" ( appVersionMinor == 6 ? + ".1" : appVersionMinor == 7 ? + ".2" : appVersionMinor == 8 ? + ".3" : "" );
	} else if (appVersionMajor==14) {
		var appVersionYear="CC 2017";
	}
	return appVersionYear;
};

var appVersionYear=checkVersion();

function findPreset(presetFileName) {
  if (  $.os.indexOf("Windows") != -1 ) {
		var presetPath = "..Programs\Adobe\Adobe After Effects " + appVersionYear + "\Support Files\Presets\" + presetName;
    var presetFile = File(presetPath);
	} else {
		var presetPath = "../Applications/Adobe After Effects " + appVersionYear + "/Presets/" + presetName;
    var presetFile = File(presetPath);
	}
};

var myPresetFile = findPreset("myPreset.ffx");
