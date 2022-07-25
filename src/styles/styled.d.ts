import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string

        colors: {
            primary: string
            secundary: string
            tertiary: string
            backgroundMedicines: string
            backgroundMedicinesHover: string

            background: string
            textTitle: string
            text: string
        }

    }
}