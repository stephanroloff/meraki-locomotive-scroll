//Info:
//https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/
//https://css-tricks.com/a-crash-course-in-wordpress-block-filters/

const { createHigherOrderComponent } = wp.compose;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl } = wp.components;
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { allowedBlockNames } from "./inputs";
import saveData from "./save-data";

const withMyPluginControls = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        const { attributes, setAttributes } = props;

        if (allowedBlockNames.length > 0 && (!allowedBlockNames.includes(props.name))) {
            return <BlockEdit { ...props } />;
        }

        saveData();
        
        // // Definir el atributo myDropdownValue si no está definido
        // if (typeof attributes.myDropdownScrollSpeedValue === 'undefined') {
        //     setAttributes({ myDropdownScrollSpeedValue: 'none' });
        // }

        return (
            <>
                <BlockEdit { ...props } />
                <InspectorControls>
                    <PanelBody
                        title={'Scroll Speed'}
                        initialOpen={false}
                    >
                        <p>Ingresa una descripción:</p>
                        <SelectControl
                            label="Scroll Type"
                            value={attributes.myDropdownScrollTypeValue}
                            options={[
                                { label: 'None', value: 'none' },
                                { label: 'Move to Top', value: 'move-to-top' },
                                { label: 'Move to Bottom', value: 'move-to-bottom' },
                                { label: 'Move to Right', value: 'move-to-right' },
                                { label: 'Move to Left', value: 'move-to-left' },
                                { label: 'Rotate to Right', value: 'rotate-to-right' },
                                { label: 'Rotate to Left', value: 'rotate-to-left' },

                            ]}
                            onChange={(value) => setAttributes({ myDropdownScrollTypeValue: value })}
                        />
                        <SelectControl
                            label="Speed"
                            value={attributes.myDropdownScrollSpeedValue}
                            options={[
                                { label: 'None', value: 'none' },
                                { label: '0.1', value: 'parallax-01' },
                                { label: '0.2', value: 'parallax-02' },
                                { label: '0.3', value: 'parallax-03' },
                                { label: '0.4', value: 'parallax-04' },
                                { label: '0.5', value: 'parallax-05' },
                                { label: '0.6', value: 'parallax-06' },
                                { label: '0.7', value: 'parallax-07' },
                                { label: '0.8', value: 'parallax-08' },
                                { label: '0.9', value: 'parallax-09' },
                                { label: '1.0', value: 'parallax-10' },
                            ]}
                            onChange={(value) => setAttributes({ myDropdownScrollSpeedValue: value })}
                        />
                        <NumberControl
                        label="Slowness"
                        value={attributes.myDropdownScrollSlownessValue}
                        onChange={(value) => setAttributes({ myDropdownScrollSlownessValue: value })}
                        step={ 1 }
                        max={ 1000 }
                        min={ 1 }
                        required
                        />
                    </PanelBody>
                </InspectorControls>
            </>
        );
    };
}, 'withMyPluginControls' );

wp.hooks.addFilter(
    'editor.BlockEdit',
    'my-plugin-meraki-locomotive-scroll/with-inspector-controls',
    withMyPluginControls
);
