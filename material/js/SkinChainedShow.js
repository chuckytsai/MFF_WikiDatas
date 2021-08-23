function SkinSkillShow(data, dataID) {
    if (data[dataID]['Chained1'].length == 0) {
        localStorage.setItem("Chained1Show", 'none');
    }
    else {
        localStorage.setItem("Chained1Show", 'block');
    }
    if (data[dataID]['Chained2'].length == 0) {
        localStorage.setItem("Chained2Show", 'none');
    }
    else {
        localStorage.setItem("Chained2Show", 'block');
    }
    if (data[dataID]['Chained3'].length == 0) {
        localStorage.setItem("Chained3Show", 'none');
    }
    else {
        localStorage.setItem("Chained3Show", 'block');
    }
    if (data[dataID]['Chained4'].length == 0) {
        localStorage.setItem("Chained4Show", 'none');
    }
    else {
        localStorage.setItem("Chained4Show", 'block');
    }
    if (data[dataID]['Chained5'].length == 0) {
        localStorage.setItem("Chained5Show", 'none');
    }
    else {
        localStorage.setItem("Chained5Show", 'block');
    }
    if (data[dataID]['Chained6'].length == 0) {
        localStorage.setItem("Chained6Show", 'none');
    }
    else {
        localStorage.setItem("Chained6Show", 'block');
    }
    if (data[dataID]['Chained7'].length == 0) {
        localStorage.setItem("Chained7Show", 'none');
    }
    else {
        localStorage.setItem("Chained7Show", 'block');
    }
    if (data[dataID]['Chained8'].length == 0) {
        localStorage.setItem("Chained8Show", 'none');
    }
    else {
        localStorage.setItem("Chained8Show", 'block');
    }
    if (data[dataID]['Chained9'].length == 0) {
        localStorage.setItem("Chained9Show", 'none');
    }
    else {
        localStorage.setItem("Chained9Show", 'block');
    }
    if (data[dataID]['Skill6Effects'].length == 0) {
        localStorage.setItem("T3Show", 'none');
    }
    else {
        localStorage.setItem("T3Show", 'block');
    }
    if (data[dataID]['SkinSkillEffects'].length == 0) {
        localStorage.setItem("SkinSkillShow", 'none');
    }
    else {
        localStorage.setItem("SkinSkillShow", 'block');
    }
}