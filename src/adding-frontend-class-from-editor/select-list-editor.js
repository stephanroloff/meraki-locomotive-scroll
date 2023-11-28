//Info:
//https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/
//https://css-tricks.com/a-crash-course-in-wordpress-block-filters/

const { createHigherOrderComponent } = wp.compose;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl } = wp.components;
import { allowedBlockNames } from "./inputs";
import saveData from "./save-data";

const withMyPluginControls = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        const { attributes, setAttributes } = props;

        if (allowedBlockNames.length > 0 && (!allowedBlockNames.includes(props.name))) {
            return <BlockEdit { ...props } />;
        }

        saveData();
        
        // Definir el atributo myDropdownValue si no está definido
        if (typeof attributes.myDropdownValue === 'undefined') {
            setAttributes({ myDropdownValue: 'none' });
        }

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
                            label="Elige una opción"
                            value={attributes.myDropdownValue}
                            options={[
                                { label: 'None', value: 'none' },
                                { label: 'Opción 1', value: 'opcion-1' },
                                { label: 'Opción 2', value: 'opcion-2' },
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
                            onChange={(value) => setAttributes({ myDropdownValue: value })}
                        />
                    </PanelBody>
                </InspectorControls>
            </>
        );
    };
}, 'withMyPluginControls' );

wp.hooks.addFilter(
    'editor.BlockEdit',
    'my-plugin/with-inspector-controls',
    withMyPluginControls
);
