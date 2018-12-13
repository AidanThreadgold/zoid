/* @flow */
/* @jsx node */

import { node, dom } from 'jsx-pragmatic/src';

import { type RenderOptionsType } from '../../parent';

export function defaultContainerTemplate<P>({ id, tag, context, CLASS, outlet, document, dimensions : { width, height } } : RenderOptionsType<P>) : HTMLElement {

    return (
        <div id={ id } class={ `${ CLASS.ZOID } ${ CLASS.ZOID }-tag-${ tag } ${ CLASS.ZOID }-context-${ context }` }>
            <style>
                {`
                    #${ id }, #${ id } > .${ CLASS.OUTLET } {
                        width: ${ width };
                        height: ${ height };
                    }

                    #${ id } > .${ CLASS.OUTLET } {
                        display: inline-block;
                        position: relative;
                    }

                    #${ id } > .${ CLASS.OUTLET } > iframe {
                        height: 100%;
                        width: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        transition: opacity .2s ease-in-out;
                    }

                    #${ id } > .${ CLASS.OUTLET } > iframe.${ CLASS.VISIBLE } {
                        opacity: 1;
                    }

                    #${ id } > .${ CLASS.OUTLET } > iframe.${ CLASS.INVISIBLE } {
                        opacity: 0;
                    }
                `}
            </style>

            <node el={ outlet } />
        </div>
    ).render(dom({ doc: document }));
}
