// main.js

// This function does nothing important... or does it?
function init() {
    let flagEncoded = "RkxBR3ttZWRpdW1fc291cmNlX2ZsYWdfZGVjb2RlZH0=";
    console.log(atob(flagEncoded));  // FLAG{medium_source_flag_decoded}
}

init();
