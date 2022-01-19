import { useDispatch, useSelector } from 'react-redux';

import MenuList from './style/MenuList';
import MenuItem from './style/MenuItem';

import {
  selectCategory,
  loadRestaurants,
} from '../redux/actions';

import { get } from '../Utils/utils';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  return (
    <MenuList>
      {categories.map((category) => (
        <MenuItem
          key={category.id}
          active={selectedCategory && category.id === selectedCategory.id}
        >
          <button
            type="button"
            onClick={() => handleClick(category.id)}
          >
            {category.name}
            {/* {selectedCategory ? (
              <>
                {category.id === selectedCategory.id ? '(V)' : null}
              </>
            ) : null} */}
          </button>
        </MenuItem>
      ))}
    </MenuList>
  );
}
