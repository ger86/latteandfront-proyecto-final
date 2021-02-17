export default function prepareCategories(oldCategories, newCategories) {
  let indexForNewCategories = oldCategories.length;
  const oldCategoriesIndexById = oldCategories.reduce(
    (acc, oldCategory, index) => ({
      ...acc,
      [oldCategory.id]: index,
    }),
    {},
  );
  return newCategories.reduce((acc, category) => {
    const indexForOldCategory = oldCategoriesIndexById[category.id];
    if (indexForOldCategory !== undefined) {
      return {
        ...acc,
        [indexForOldCategory]: category,
      };
    } else {
      return {
        ...acc,
        [indexForNewCategories++]: category
      };
    }
  }, {});
}
