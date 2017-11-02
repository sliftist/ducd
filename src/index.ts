export * from './html'
export * from './visitor'

export interface /*Controller*/Args
{
    parent
}

export interface Controller<Targs extends Args, Tui extends HTMLElement>
{
    args: Targs,
    ui: Tui

    // interactions
    // eventhandlers
}

export interface UiArgs
{
    parent
}

export interface Ui<Targs>
{
    args: Targs,
    ui: any

    // interactions
    // eventhandlers
}



















/*
    export abstract class UiNode
    {
        args: {
            UiNode stuff +
                parent: UiNode
                model: {},

            transformation: {},
            plexxCss : {}
        }

        constructor()
        {
        }

        updateModel() {}
        updateViewModel(sel:[string]) {}

        updateAll() {}
    }
*/
