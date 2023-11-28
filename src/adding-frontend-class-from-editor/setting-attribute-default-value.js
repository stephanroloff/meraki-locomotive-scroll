import { allowedBlockNames } from "./inputs";

const setDefaultValue = (settings, blockName) => {

    console.log(allowedBlockNames.length);

    if (!(allowedBlockNames.length > 0 && (!allowedBlockNames.includes(blockName)))) {

        settings.attributes = {
            ...settings.attributes,
            myDropdownValue: {
                type: 'string',
                default: 'none',
            },
        };
        return settings;
        
    }
};

wp.hooks.addFilter('blocks.registerBlockType', 'mi-plugin/establecer-atributo-por-defecto-paragraph', (settings, name) => {
    return setDefaultValue(settings, name);
});
