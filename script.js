if("serviceworker" in navigator){
    navigator.serviceworker.register("sw.js").then(()=>{
        console.log("service worker registered");
    });
}