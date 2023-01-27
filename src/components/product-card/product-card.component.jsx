import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { 
    Footer,
    Name,
    Price,
    ProductCardContainer,
} from './product-card.styles';

const ProductCard = ({product}) => {
    const { addItemToCart } = useContext(CartContext)
    const { name, price, imageUrl } = product

    const addProductToCart = () => addItemToCart(product)

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>${price}</Price>
            </Footer>
            <Button 
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                onClick={addProductToCart}
            >
                Add to cart
            </Button>
        </ProductCardContainer>
    );
};

export default ProductCard;