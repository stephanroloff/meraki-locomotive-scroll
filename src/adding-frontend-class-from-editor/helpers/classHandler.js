export function classHandler(selectedBlock) {
    
    let editorClass = selectedBlock.attributes.className;
    let ScrollClass = selectedBlock.attributes.myDropdownScrollSpeedValue;
    let newEditorClassArray = [];
    let replaced = false;
    
    if(editorClass){
        let editorClassArray = editorClass.split(" ");

        newEditorClassArray = editorClassArray.map(element => {
            if (element.includes("parallax-")) {
                console.log('Sí lo incluye SCROll', element);
                replaced = true;
                return ScrollClass;
            }
            return element;
        });

        if(!replaced){
            newEditorClassArray.push(ScrollClass);
        }

        let newString = newEditorClassArray.join(" ");
        
        // console.log('Clase Editor, ', newEditorClassArray);
        // console.log('Scroll Class', ScrollClass);
        // console.log('String Class', newString);

        return newString;
    }else{
        newEditorClassArray.push(ScrollClass);
        let newString = newEditorClassArray.join(" ");
        return newString;
    }
}