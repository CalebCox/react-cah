import { select, text } from '@keystone-next/fields';
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
        description: text({
            ui: {
                displayMode: 'textarea'
            }
        }),
    }
})