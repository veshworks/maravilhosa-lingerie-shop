import { price } from '~/utils'

export const allOffersFormatter = ({ edges }) => edges.map(({ node: offer}) => ({
  ...offer,
  displayPrice: price.format(offer.fullPrice),
}))
