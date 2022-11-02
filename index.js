var stl_viewer=new StlViewer(document.getElementById("stl_cont"), { models: [ {
    id:0, 
    filename:"https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl",
    opacity: 0.5
} ] });
stl_viewer.set_opacity(0, 0.5)

window.onmessage = (e) => {
    console.log(e)
    if (e.data.type == 'setUrl') {
        stl_viewer.remove_model(0)
        stl_viewer.add_model({id:0, filename:e.data.data, opacity: 0.5})
    
    }
} 