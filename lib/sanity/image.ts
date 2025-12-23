import { createImageUrlBuilder } from '@sanity/image-url'
import { client } from './client'

const builder = createImageUrlBuilder(client)

// Using 'any' for source as the internal type is not exported in newer versions
export function urlFor(source: Parameters<typeof builder.image>[0]) {
    return builder.image(source)
}
