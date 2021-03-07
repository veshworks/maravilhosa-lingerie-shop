import { price } from '~/utils'

export const allOffersFormater = ({ edges }) => edges.map(({ node: offer}) => ({
  ...offer,
  displayPrice: price.format(offer.fullPrice),
}))
