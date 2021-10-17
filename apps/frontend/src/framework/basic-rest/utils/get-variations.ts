import groupBy from 'lodash/groupBy';

export function getVariations(variations: Record<string, unknown> | undefined) {
  if (!variations) return {};
  return groupBy(variations, 'attribute.slug');
}
