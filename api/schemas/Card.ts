import { integer, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';


export const Card = list({
    fields: {
        type: select({
            options: [
                { label: 'Black', value: 'BLACK' },
                { label: 'White', value: 'WHITE' },
            ],
            ui: {
                displayMode: 'segmented-control',
            },
        }),
        text: text({
            ui: {
                displayMode: 'textarea'
            }
        }),
        pack: integer(),
        pick: integer()
    }
})