import { price } from '~/utils'

export const offerFormatter = (offer) => ({
  ...offer,
  displayFullPrice: price.format(offer.fullPrice),
  displayPrice: price.format(offer.price),
})

export const allOffersFormatter = ({ edges }) => edges.map(({ node }) => offerFormatter(node))
