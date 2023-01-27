import { useContext } from 'react';

import CategoryPreview from '../../components/category-preview/category-preview.component';

import { CategoriesContext } from '../../contexts/categories.context';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title]
                return (
                    <CategoryPreview 
                        key={title} 
                        products={products} 
                        title={title}
                    />
                )})
            }
        </>
    );
};

export default CategoriesPreview;