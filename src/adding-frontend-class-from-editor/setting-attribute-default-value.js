import { allowedBlockNames } from "./inputs";

const setDefaultValue = (settings, blockName) => {

    if (!(allowedBlockNames.length > 0 && (!allowedBlockNames.includes(blockName)))) {
        
        settings.attributes = {
            ...settings.attributes,
            myDropdownScrollTypeValue: {
                type: 'string',
                default: 'none',
            },
            myDropdownScrollSpeedValue: {
                type: 'string',
                default: 'none',
            },
            myDropdownScrollSlownessValue: {
                type: 'string',
                default: 'none',
            },
            classObject: {
                type: 'object',
                default: {},
            },
            //---------------------------
            //animationsPluginIntegration
            //---------------------------
            myDropdownAnimationValue: {
                type: 'string',
                default: 'none',
            },
            myDropdownTriggerValue:{
                type: 'string',
                default: 'none',
            },
            myDropdownTimingFunctionValue:{
                type: 'string',
                default: 'none',
            },
            myDropdownFillModeValue:{
                type: 'string',
                default: 'none',
            },
            myAnimationDelayValue:{
                type: 'string',
                default: '0',
            },
            myAnimationDurationValue: {
                type: 'string',
                default: '0',
            },
            //---------------------------
        };
        return settings;
        
    }
};

wp.hooks.addFilter('blocks.registerBlockType', 'my-plugin/meraki-locomotive-scroll', (settings, name) => {
    return setDefaultValue(settings, name);
});

